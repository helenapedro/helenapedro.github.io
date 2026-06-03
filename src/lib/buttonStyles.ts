export const buttonStyles = {
  snapshot:
    'inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
  website:
    'inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
  darkExternal:
    'inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
  iconBase:
    'mb-3 rounded-full p-3 text-lg text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
  textLink: 'font-semibold text-sky-700 hover:text-sky-800',
  backLink:
    'inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
  externalIcon:
    'text-sky-600 hover:text-sky-700 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded',
};

export const projectLinkIconVariants = {
  live: 'bg-emerald-600 hover:bg-emerald-700',
  frontend: 'bg-sky-600 hover:bg-sky-700',
  backend: 'bg-slate-700 hover:bg-slate-800',
};

export const classNames = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');
