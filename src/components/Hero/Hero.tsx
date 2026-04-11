import { Clock3, MapPin } from 'lucide-react';
import { ProfileImage } from './ProfileImage';
import { StatusBadge } from './StatusBadge';

const CONTACT_EMAIL = 'mailto:mbeuapedro@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/helena-software-engineer';
const GITHUB_URL = 'https://github.com/helenapedro';
const ADDRESS = "Bellevue, WA";
const TIME_ZONE = 'Pacific Time (PT)';

const quickActions = [
  {
    label: 'Contact Me',
    href: CONTACT_EMAIL,
    className: 'bg-sky-400 text-slate-950 shadow-lg shadow-sky-900/30 hover:bg-sky-300',
  },
  {
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    className: 'border border-white/25 bg-white/10 text-white hover:bg-white/20',
  },
  {
    label: 'GitHub',
    href: GITHUB_URL,
    className: 'border border-white/25 bg-white/10 text-white hover:bg-white/20',
  },
];

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white h-full">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      <div className="relative px-5 py-8 sm:px-6 sm:py-10 lg:px-6 lg:py-8 xl:px-7">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <ProfileImage />
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 sm:text-sm">
              Software Engineer | Expert in Scalable AI-Ready Systems & Cloud Architecture
            </p>
            <h1 className="mt-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:text-5xl lg:text-4xl xl:text-5xl">
              Helena Pedro
            </h1>
            {/* <p className="mt-3 text-lg leading-8 text-gray-100 sm:text-xl lg:text-lg xl:text-xl">
              I build reliable backend systems and scalable applications with a focus on
              resilience, observability, and business impact.
            </p> */}
          </div>
          <div className="mt-5 flex w-full max-w-sm flex-col gap-2.5 text-sm">
            <StatusBadge Icon={MapPin} text={`${ADDRESS}`} />
            <StatusBadge Icon={Clock3} text={TIME_ZONE} />
          </div>
          <div className="mt-5 grid w-full max-w-sm grid-cols-1 gap-2.5 sm:max-w-xl sm:grid-cols-2 lg:max-w-sm xl:max-w-xl">
            {quickActions.map(({ label, href, className }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${className}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
