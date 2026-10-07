export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Mohammad Hafizd Affandi. Built with
          Next.js & Aceternity UI.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:fidzaffandi@gmail.com"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            Email
          </a>
          <a
            href="https://github.com/fidzaffandi-gif"
            target="_blank"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
