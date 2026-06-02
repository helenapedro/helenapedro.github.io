import { useState, type ReactNode } from 'react';
import {
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Briefcase,
  ExternalLink,
  GraduationCap,
  type LucideIcon,
  Newspaper,
  Sparkles,
} from 'lucide-react';
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

const CREDLY_URL = 'https://www.credly.com/users/helena-pedro';
const REVISTA_CARREIRA_FEATURE_URL =
  'https://revistacarreira.ao/2026/05/28/aplicacao-de-ia-elimina-problema-das-varias-versoes-do-mesmo-cv-solucao-que-acompanha-a-evolucao-do-percurso-profissional-ja-funcional-e-com-validacao-da-openai-e-de-uma-engenheira-angolana/';
const ANGORUSSIA_FEATURE_URL =
  'https://angorussia.com/engenheira-angolana-cria-plataforma-com-ia-para-melhorar-curriculos-e-ganha-destaque-internacional/';
const ONGOMA_FEATURE_URL =
  'https://ongoma.info/artigo/openai-reconhece-estudante-angolana-nos-estados-unidos-por-criar-plataforma-de-ia-que-ajuda-profissionais-a-melhorar-curriculos';
const REVISTA_CARREIRA_FEATURE_IMAGE =
  '/project-images/features/revista-carreira-feature.jfif';
const ANGORUSSIA_TAG_IMAGE = '/project-images/features/angorussia_tag.png';
const ONGOMA_FEATURE_IMAGE = '/project-images/features/ongoma-news-feature.png';
const HANDSHAKE_FEATURE_IMAGE =
  '/project-images/resume-feedback-platform/handshake_featured.png';
const HANDSHAKE_SHOWCASE_URL =
  'https://app.joinhandshake.com/ai-showcase?project_id=3056375';
const HELENA_EXPLORA_URL = 'https://helenaexplora.hmpedro.com/';

const pressItems = [
  {
    outlet: 'Revista Carreira',
    title: 'AI application eliminates the problem of multiple versions of the same CV',
    description:
      'Coverage of the Resume Feedback Platform as a working AI product that tracks professional progress and carries OpenAI validation.',
    href: REVISTA_CARREIRA_FEATURE_URL,
    image: REVISTA_CARREIRA_FEATURE_IMAGE,
    imageClassName: 'object-contain bg-slate-100',
    imagePosition: 'center',
  },
  {
    outlet: 'AngoRussia',
    title:
      'Angolan engineer creates AI platform to improve resumes and gains international recognition',
    description:
      'Feature story highlighting the platform, its version-aware review workflow, and its recognition through the OpenAI Developers x Handshake challenge.',
    href: ANGORUSSIA_FEATURE_URL,
    image: ANGORUSSIA_TAG_IMAGE,
  },
  {
    outlet: 'ONgoma News',
    title:
      'OpenAI recognizes Angolan student in the United States for AI resume platform',
    description:
      'Press coverage focused on the international recognition behind the AI platform and its value for professionals improving their resumes.',
    href: ONGOMA_FEATURE_URL,
    image: ONGOMA_FEATURE_IMAGE,
    imagePosition: 'center 35%',
  },
];

interface SectionItem {
  title: ReactNode;
  content: ReactNode;
}

const pivotPurposeItems: SectionItem[] = [
  {
    title: <>From petroleum engineering to AI systems</>,
    content: (
      <>
        My path started in petroleum engineering and moved into software after I
        saw how much operational progress depends on reliable systems, clear data,
        and the ability to translate complex problems into usable products.
      </>
    ),
  },
  {
    title: <>Making talent visible</>,
    content: (
      <>
        I became focused on a simple failure mode: talented people are often
        invisible because professional communication breaks down. That insight led
        me to treat the resume as a <strong>living product</strong>, not a static
        document.
      </>
    ),
  },
];

const invisibleEngineeringItems: SectionItem[] = [
  {
    title: <>FinTech reliability at production scale</>,
    content: (
      <>
        At Millennium Atlantico, I helped lead and deliver systems used across
        high-value financial workflows, including liquidity calculations that became
        <strong> 12x faster</strong>, KPI automation that removed{' '}
        <strong>40+ hours per week</strong> of manual work, and reliability fixes for
        107 ATMs serving roughly <strong>1M clients</strong>.
      </>
    ),
  },
  {
    title: <>Backend architecture for AI workflows</>,
    content: (
      <>
        The Resume Feedback Platform uses Spring Boot APIs, asynchronous worker
        processing, Apache Kafka to decouple resume uploads from long-running
        AI analysis jobs, MySQL for transactional state, MongoDB for AI-generated
        artifacts, and Redis-backed rate limiting for public share-link protection.
      </>
    ),
  },
  {
    title: <>Human-centered AI infrastructure</>,
    content: (
      <>
        I build generative AI as a product workflow: jobs have explicit lifecycle
        states, feedback remains tied to a specific resume version, and progress
        analysis identifies resolved issues, unresolved problems, and new
        regressions between drafts.
      </>
    ),
  },
];

const recognitionImpactItems: SectionItem[] = [
  {
    title: <>OpenAI Developers x Handshake</>,
    content: (
      <>
        Selected for the AI Innovator Spotlight through the OpenAI Developers x
        Handshake Codex Creator Challenge, with the Resume Feedback Platform
        featured in the Handshake AI Showcase.
      </>
    ),
  },
  {
    title: <>Helena Explora</>,
    content: (
      <>
        Helena Explora extends the same mission into responsible AI and community
        leadership for international students. Its guiding message is translated as:
        <strong> “Dreaming is the first visa. The rest is courage.”</strong>
      </>
    ),
  },
  {
    title: <>Media validation</>,
    content: (
      <>
        Revista Carreira, ONgoma News, and AngoRussia covered the platform and the
        broader story of an Angolan engineer building AI products with international
        recognition.
      </>
    ),
  },
];

const professionalStatusItems: SectionItem[] = [
  {
    title: <>U.S. work authorization</>,
    content: (
      <>
        Currently authorized for <strong>full-time W-2 employment in the U.S.</strong>
      </>
    ),
  },
  {
    title: <>Education &amp; technical focus</>,
    content: (
      <>
        M.S. in Computer Science at Maharishi International University, with a focus
        on backend architecture, distributed systems, cloud platforms, and AI-driven
        automation.
      </>
    ),
  },
  {
    title: <>Contact channels</>,
    content: (
      <>
        Connect through{' '}
        <a
          href="https://www.linkedin.com/in/helena-software-engineer"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sky-700 hover:text-sky-800"
        >
          LinkedIn
        </a>
        ,{' '}
        <a
          href="https://github.com/helenapedro"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sky-700 hover:text-sky-800"
        >
          GitHub
        </a>
        , or{' '}
        <a
          href="mailto:mbeuapedro@gmail.com"
          className="font-semibold text-sky-700 hover:text-sky-800"
        >
          email
        </a>
        .
      </>
    ),
  },
];

export function Projects() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const remainingProjects = projects.filter((project) => project.id !== featuredProject.id);

  return (
    <section className="mb-10 sm:mb-12">
      <h2 className="mb-5 text-3xl font-bold sm:mb-6">Featured Projects</h2>
      <div className="space-y-6">
        <ProjectSnapshotCard project={featuredProject} featured />

        <div>
          <h3 className="mb-4 text-xl font-bold text-slate-900">More Projects</h3>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {remainingProjects.map((project) => (
              <ProjectSnapshotCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PressPage() {
  return (
    <section className="mb-10 sm:mb-12">
      <InternationalShowcaseSection />
      <PressSection />
      <ContentSection
        eyebrow="Community & Social Leadership"
        title="Helena Explora: Democratizing Professional Mentorship"
        items={[
          {
            title: <>From technology consumer to technology creator</>,
            content: (
              <>
                Helena Explora is a social-impact initiative for international
                students and young professionals in emerging markets, focused on
                safe guidance, career visibility, and helping more people move
                from consuming technology to building with it.{' '}
                <a
                  href={HELENA_EXPLORA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-700 hover:text-sky-800"
                >
                  View the platform
                </a>
                .
              </>
            ),
          },
        ]}
        icon={Briefcase}
        accentClasses="from-emerald-500/15 via-teal-400/10 to-transparent"
      />
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
    <section className="mb-10 sm:mb-12">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          Back to Executive Overview
        </Link>
      </div>

      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Architectural Deep-Dive
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">{project.title}</h1>
        {project.subtitle && (
          <p className="mt-2 text-xl font-semibold leading-7 text-sky-700">
            {project.subtitle}
          </p>
        )}
        <ProjectHighlight highlight={project.highlight} highlightUrl={project.highlightUrl} />
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
    <section className="mb-10 sm:mb-12">
      <div className="relative mb-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-sky-100 via-cyan-50 to-fuchsia-100 opacity-80" />
        <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
              About Helena Pedro
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Award-Winning Software Engineer &amp; AI Innovator. M.S. in
              Computer Science @ MIU.
            </h1>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
              Dedicated to making talent visible through scalable, AI-driven
              systems. I build backend platforms, generative AI workflows, and
              reliability-focused software that turn complex human problems into
              practical product experiences.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <HighlightStat
                value="107 ATMs"
                label="critical intermittent failures traced and resolved at scale"
              />
              <HighlightStat
                value="12x Faster"
                label="financial availability calculations after pipeline redesign"
              />
              <HighlightStat
                value="5K trades/day"
                label="high-value foreign exchange workflows supported"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src={REVISTA_CARREIRA_FEATURE_IMAGE}
              alt="Professional feature image of Helena Pedro from Revista Carreira coverage"
              className="h-full max-h-[420px] w-full object-contain"
            />
          </div>
        </div>
      </div>

      <ContentSection
        eyebrow="The Pivot & The Purpose"
        title="From technical reinvention to human-centered AI"
        items={pivotPurposeItems}
        icon={BrainCircuit}
        accentClasses="from-sky-500/15 via-cyan-400/10 to-transparent"
      />
      <ContentSection
        eyebrow="The Invisible Engineering"
        title="Backend architecture behind visible product impact"
        items={invisibleEngineeringItems}
        icon={BarChart3}
        accentClasses="from-violet-500/15 via-fuchsia-400/10 to-transparent"
      />
      <ContentSection
        eyebrow="Global & Social Recognition"
        title="External validation across AI, media, and community impact"
        items={recognitionImpactItems}
        icon={Briefcase}
        accentClasses="from-emerald-500/15 via-teal-400/10 to-transparent"
      />
      <PressSection />
      <ContentSection
        eyebrow="Professional Status"
        title="Available for U.S. backend, cloud, and AI engineering roles"
        items={professionalStatusItems}
        icon={GraduationCap}
        accentClasses="from-amber-400/15 via-orange-300/10 to-transparent"
      />
      <CredlySection />
    </section>
  );
}

interface ContentSectionProps {
  eyebrow: string;
  title: string;
  items: SectionItem[];
  icon: LucideIcon;
  accentClasses: string;
}

const HighlightStat = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3 shadow-sm sm:px-5 sm:py-4">
      <p className="text-2xl font-bold tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
    </div>
  );
};

const CredlySection = () => {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-5 text-white shadow-sm sm:p-6">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-sky-500/20 via-cyan-400/10 to-fuchsia-500/20" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
              Credentials
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Digital Badges & Verified Learning
            </h2>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sky-200 shadow-sm">
            <BadgeCheck className="h-5 w-5" />
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          Verified certifications and technical learning available on Credly.
        </p>

        <div className="mt-6">
          <a
            href={CREDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
          >
            View Credly Badges
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const InternationalShowcaseSection = () => {
  return (
    <div className="relative mb-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:mb-7 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-sky-500/15 via-cyan-300/10 to-violet-400/10" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              International Showcase
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              OpenAI &amp; Handshake Recognition
            </h1>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-700 shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.95),rgba(255,255,255,1))] p-4 shadow-sm sm:p-5">
          <h2 className="text-xl font-semibold leading-7 text-slate-950">
            OpenAI Developers x Handshake: AI Innovator Spotlight
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
            Recognition through the Codex Creator Challenge for building an AI
            product with practical career-development impact and a backend
            workflow around resume version tracking.
          </p>

          <a
            href={HANDSHAKE_SHOWCASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <img
              src={HANDSHAKE_FEATURE_IMAGE}
              alt="Handshake AI Showcase feature for the Resume Feedback Platform"
              className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </a>

          <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-950">
            Handshake AI Showcase
          </h3>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-700">
            Featured among global innovators for the Resume Feedback Platform
            and its version-aware AI review architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

const PressSection = () => {
  return (
    <div className="relative mb-7 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:mb-8 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-rose-500/15 via-orange-300/10 to-sky-400/10" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              In the Press
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Media recognition for the Resume Feedback Platform
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Independent coverage from Angolan media outlets validates both the
              product story and the international recognition behind the platform.
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-700 shadow-sm">
            <Newspaper className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:mt-6 lg:grid-cols-3">
          {pressItems.map((item) => (
            <a
              key={item.outlet}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[240px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.95),rgba(255,255,255,1))] text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <img
                src={item.image}
                alt={`${item.outlet} feature preview`}
                className={`h-32 w-full border-b border-slate-200 ${item.imageClassName ?? 'object-cover'}`}
                style={{ objectPosition: item.imagePosition ?? 'center' }}
              />
              <span className="flex flex-1 flex-col p-4 sm:p-5">
                <span className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                    {item.outlet}
                  </span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-sky-600" />
                </span>
                <span className="mt-4 block text-lg font-semibold leading-7 text-slate-950">
                  {item.title}
                </span>
                <span className="mt-3 block text-sm leading-6 text-slate-600">
                  {item.description}
                </span>
                <span className="mt-auto pt-5 text-sm font-semibold text-sky-700">
                  Read article
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContentSection = ({
  eyebrow,
  title,
  items,
  icon: Icon,
  accentClasses,
}: ContentSectionProps) => {
  return (
    <div className="relative mb-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:mb-7 sm:p-6">
      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${accentClasses}`} />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              {title}
            </h2>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-700 shadow-sm">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <ul className={`mt-5 grid gap-4 ${items.length > 1 ? 'sm:grid-cols-2' : ''}`}>
        {items.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.95),rgba(255,255,255,1))] px-4 py-4 text-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:px-5"
          >
            <span className="block text-lg font-semibold leading-7 text-slate-950">
              {item.title}
            </span>
            <span className="mt-3 block text-base leading-7 text-slate-700">
              {item.content}
            </span>
          </li>
        ))}
        </ul>
      </div>
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

const websiteButtonClasses =
  'inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500';

const ProjectHighlight = ({
  highlight,
  highlightUrl,
  centered = false,
}: {
  highlight?: string;
  highlightUrl?: string;
  centered?: boolean;
}) => {
  if (!highlight) {
    return null;
  }

  const classes = `mt-3 flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-semibold leading-5 text-emerald-800 transition-colors hover:border-emerald-300 hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
    centered ? 'mx-auto' : ''
  }`;
  const content = (
    <>
      <BadgeCheck className="h-4 w-4 shrink-0" />
      <span>{highlight}</span>
    </>
  );

  if (highlightUrl) {
    return (
      <a
        href={highlightUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={`Open featured showcase for ${highlight}`}
      >
        {content}
      </a>
    );
  }

  return (
    <p className={classes}>
      {content}
    </p>
  );
};

const ProjectSnapshotCard = ({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      <div className={cardContainerClasses}>
        <div className="p-4 sm:p-5 lg:p-6">
          <div className="relative mb-3 sm:mb-4">
            <h3
              className={`flex min-h-12 items-center justify-center px-10 text-center font-semibold leading-snug text-slate-900 ${
                featured ? 'text-2xl sm:text-3xl' : 'text-xl'
              }`}
            >
              {project.title}
            </h3>
            {project.subtitle && (
              <p
                className={`mt-1 px-10 text-center font-semibold text-sky-700 ${
                  featured ? 'text-base leading-7' : 'text-sm leading-6'
                }`}
              >
                {project.subtitle}
              </p>
            )}
            <ProjectHighlight
              highlight={project.highlight}
              highlightUrl={project.highlightUrl}
              centered
            />
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
            featured={featured}
            onImageClick={setModalImage}
          />

          <p className="mb-3 text-base leading-7 text-slate-700">
            {project.summary}
          </p>

          <div className="mt-4 flex flex-col items-center gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={websiteButtonClasses}
            >
              View Website
            </a>
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
  const images = featured && project.detailImages ? project.detailImages : project.images;

  return (
    <div className={cardContainerClasses}>
      <div className="p-4 sm:p-5 lg:p-6">
        {!featured && (
          <div className="relative mb-3 sm:mb-4">
            <h3 className="flex min-h-12 items-center justify-center px-10 text-center text-xl font-semibold leading-snug text-slate-900">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mt-1 px-10 text-center text-sm font-semibold leading-6 text-sky-700">
                {project.subtitle}
              </p>
            )}
            <ProjectHighlight
              highlight={project.highlight}
              highlightUrl={project.highlightUrl}
              centered
            />
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
        )}

        <ProjectTechnologies technologies={project.technologies} featured={featured} />

        <ProjectImage
          images={images}
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

