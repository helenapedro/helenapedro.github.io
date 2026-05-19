import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const imageRoot = join(process.cwd(), "public", "project-images", "resume-feedback-platform");
const outputPath = join(
  process.cwd(),
  "src",
  "components",
  "Projects",
  "resumeFeedbackImages.generated.ts",
);

const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

const images = readdirSync(imageRoot, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) => imageExtensions.has(name.slice(name.lastIndexOf(".")).toLowerCase()))
  .sort((first, second) => {
    const firstIsArchitecture = /architecture/i.test(first);
    const secondIsArchitecture = /architecture/i.test(second);

    if (firstIsArchitecture !== secondIsArchitecture) {
      return firstIsArchitecture ? -1 : 1;
    }

    return first.localeCompare(second, undefined, { numeric: true, sensitivity: "base" });
  })
  .map((name) => `/project-images/resume-feedback-platform/${name}`);

const contents = `export const resumeFeedbackImages = ${JSON.stringify(images, null, 2)};\n`;

writeFileSync(outputPath, contents);
