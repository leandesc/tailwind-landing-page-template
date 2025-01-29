import Link from "next/link";
import Logo from "./logo";
import WaveLogo from "./wave-logo";
import '@fortawesome/fontawesome-free/css/all.css';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 dark:bg-gray-800/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] dark:before:[background:linear-gradient(theme(colors.gray.800),theme(colors.gray.900))_border-box]">
  
          {/* Desktop navigation */}
          <nav className="flex flex-1 items-center justify-between">
            {/* Endly branding */}
            <div>
              <Link
                href="/"
                className="flex items-center gap-2"
                aria-label="Endly"
              >
                <WaveLogo />
                <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Endly</span>
              </Link>
            </div>

            {/* Desktop sign in links */}
            <ul className="flex items-center gap-3">
              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="btn-sm bg-white dark:bg-gray-700 text-black-800 dark:text-white shadow hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-150"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <i className="fas fa-sun"></i>
                  ) : (
                    <i className="fas fa-moon"></i>
                  )}
                </button>
              </li>
              <li>
                <Link href="https://www.linkedin.com" className="btn-sm bg-white dark:bg-gray-700 text-black-800 dark:text-white shadow hover:bg-gray-50 dark:hover:bg-gray-600">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="btn-sm bg-white dark:bg-gray-700 text-black-800 dark:text-white shadow hover:bg-gray-50 dark:hover:bg-gray-600">
                  <i className="fab fa-x-twitter"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
