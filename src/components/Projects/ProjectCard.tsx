import { useState, type ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projects, type Project } from './Projects';
import { ProjectModal } from './ProjectModal';
import { ProjectTechnologies } from './ProjectTechnologies';
import { ProjectImage } from './ProjectImage';
import { ProjectLinks } from './ProjectLinks';
import { ProjectDescription } from './ProjectDescription';

const cardContainerClasses =
  'group bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';

const externalLinkClasses =
  'text-sky-600 hover:text-sky-700 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded';

interface SectionItem {
  title: ReactNode;
  content: ReactNode;
}

const analyticalJudgmentItems: SectionItem[] = [
  {
    title: <>ATM Network Reliability Case</>,
    content: (
      <>
        Diagnosed month-long intermittent failures affecting 107 ATMs (~1M clients) by
        uncovering hidden <strong>SQL lock contention</strong> issues and enhancing
        database-level observability when standard logs were insufficient.
      </>
    ),
  },
  {
    title: <>Financial Pipeline Optimization</>,
    content: (
      <>
        Redesigned liquidity analytics by strategically <strong>decoupling data
        ingestion from processing</strong>, achieving a <strong>12x acceleration</strong>{' '}
        in financial availability calculations while ensuring data integrity.
      </>
    ),
  },
  // {
  //   title: <>Security Hardening</>,
  //   content: (
  //     <>
  //       Audited and reconfigured NGINX reverse proxies to disable weak ciphers
  //       (TLS 1.0/1.1) and implement <strong>OWASP security headers</strong>, meeting
  //       critical compliance gates for high-value strategic partnerships.
  //     </>
  //   ),
  // },
];

const technicalDnaItems: SectionItem[] = [
  {
    title: <>Cloud &amp; Infrastructure</>,
    content: (
      <>
        AWS Specialist (S3, EC2, CloudFront, EKS), Docker, Kubernetes, CI/CD, Nginx.
      </>
    ),
  },
  {
    title: <>Core Languages &amp; Frameworks</>,
    content: (
      <>
        Java (Spring Boot), Python (Pandas/NumPy, Scikit-learn), TypeScript, React,
        Node.js.
      </>
    ),
  },
  {
    title: <>Modern Data Platforms</>,
    content: (
      <>
        Expert in SQL (IBM Db2, MySQL) and NoSQL (MongoDB, Redis); proficient in
        high-growth platforms like <strong>Azure Databricks</strong> and{' '}
        <strong>Google BigQuery</strong>.
      </>
    ),
  },
];

const leadershipItems: SectionItem[] = [
  {
    title: <>Operational Efficiency</>,
    content: (
      <>
        Delivered a secure KPI reporting platform for 100+ branches, automating manual
        workflows and <strong>eliminating 40+ hours per week</strong> of reporting
        effort.
      </>
    ),
  },
  {
    title: <>Team Leadership</>,
    content: (
      <>
        Led cross-functional teams of 4+ engineers (Security, Data, and SWE) during
        large-scale enterprise deployments.
      </>
    ),
  },
  {
    title: <>Resource Optimization</>,
    content: (
      <>
        Reduced peak-time database CPU usage by <strong>~30%</strong> by eliminating
        N+1 query patterns and optimizing transaction boundaries in production.
      </>
    ),
  },
];

const educationItems: SectionItem[] = [
  {
    title: <>M.S. in Computer Science (MIU, Bellevue/Remote)</>,
    content: (
      <>
        Specializing in <strong>Enterprise Architecture</strong> and{' '}
        <strong>Distributed Systems Design</strong>, focusing on building scalable,
        AI-ready infrastructures that prioritize consistency and fault tolerance.
      </>
    ),
  },
];

export function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectSnapshotCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [modalImage, setModalImage] = useState<string | null>(null);
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="mb-16">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          Back to Executive Overview
        </Link>
      </div>

      <div className="mb-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Architectural Deep-Dive
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">{project.title}</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">
          {project.summary}
        </p>
      </div>

      <ProjectCard project={project} featured onImageClick={setModalImage} />

      {modalImage && <ProjectModal modalImage={modalImage} closeModal={() => setModalImage(null)} />}
    </section>
  );
}

export function AboutPage() {
  return (
    <section className="mb-16">
      <div className="mb-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">About</h1>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-700">
          Senior software engineer focused on scalable backend platforms, cloud-native
          systems, AI-ready architecture, and business-critical reliability.
        </p>
      </div>

      <ContentSection
        title="Analytical Judgment & Systemic Troubleshooting"
        items={analyticalJudgmentItems}
      />
      <ContentSection title="Technical DNA" items={technicalDnaItems} />
      <ContentSection title="Leadership & Business Impact" items={leadershipItems} />
      <ContentSection title="Education & Research" items={educationItems} />
    </section>
  );
}

interface ContentSectionProps {
  title: string;
  items: SectionItem[];
}

const ContentSection = ({ title, items }: ContentSectionProps) => {
  return (
    <div className="mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 shadow-sm"
          >
            <span className="text-base font-semibold leading-7 text-slate-900">
              {item.title}
            </span>
            {': '}
            <span className="text-base leading-7">{item.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ProjectProps {
  project: Project;
  featured?: boolean;
  onImageClick: (image: string) => void;
}

const snapshotButtonClasses =
  'inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500';

const ProjectSnapshotCard = ({ project }: { project: Project }) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      <div className={cardContainerClasses}>
        <div className="p-6">
          <div className="relative mb-4">
            <h3 className="min-h-14 flex items-center justify-center px-10 text-center text-xl font-semibold leading-snug text-slate-900">
              {project.title}
            </h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${externalLinkClasses} absolute right-0 top-1/2 -translate-y-1/2`}
              aria-label={`Open live demo for ${project.title}`}
            >
              <ExternalLink size={28} />
            </a>
          </div>

          <ProjectTechnologies technologies={project.technologies} />

          <ProjectImage
            images={project.images}
            title={project.title}
            onImageClick={setModalImage}
          />

          <p className="mb-4 text-base leading-7 text-slate-700">
            {project.summary}
          </p>

          <div className="mt-5 flex justify-center">
            <Link to={`/projects/${project.id}`} className={snapshotButtonClasses}>
              View Architectural Deep-Dive
            </Link>
          </div>
        </div>
      </div>
      {modalImage && <ProjectModal modalImage={modalImage} closeModal={() => setModalImage(null)} />}
    </>
  );
};

const ProjectCard = ({ project, featured = false, onImageClick }: ProjectProps) => {
  return (
    <div className={cardContainerClasses}>
      <div className="p-6">
        <div className="relative mb-4">
          <h3 className="min-h-14 flex items-center justify-center px-10 text-center text-xl font-semibold leading-snug text-slate-900">
            {project.title}
          </h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${externalLinkClasses} absolute right-0 top-1/2 -translate-y-1/2`}
            aria-label={`Open live demo for ${project.title}`}
          >
            <ExternalLink size={28} />
          </a>
        </div>

        <ProjectTechnologies technologies={project.technologies} featured={featured} />

        <ProjectImage
          images={project.images}
          title={project.title}
          featured={featured}
          onImageClick={onImageClick}
        />

        <ProjectDescription
          projectId={project.id}
          blocks={project.descriptionBlocks}
          featured={featured}
        />

        <ProjectLinks
          url={project.url}
          frontendUrl={project.frontendUrl}
          backendUrl={project.backendUrl}
        />
      </div>
    </div>
  );
};

