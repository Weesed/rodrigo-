import { Logo } from '@/assets/logo'
import { Sidebar } from './sidebar'

export function Header() {
  return (
    <div id="header" className="w-full  bg-blue-background py-5 md:h-64">
      <div className="container flex justify-between">
        <Logo />
        {/* como te ajudo? sobre mim depoimentos palestras perguntas frequentes contato */}
        <div className="sr-only flex gap-5 md:not-sr-only">
          <a
            href="#psicanalise"
            className="border-[#37b7f0] pb-1 text-sm font-semibold text-white hover:border-b hover:text-[#37b7f0]"
          >
            Como te ajudo?
          </a>

          <a
            href="#about"
            className="border-[#37b7f0] pb-1 text-sm font-semibold text-white hover:border-b hover:text-[#37b7f0]"
          >
            Sobre mim
          </a>

          <a
            href="#depoimentos"
            className="border-[#37b7f0] pb-1 text-sm font-semibold text-white hover:border-b hover:text-[#37b7f0]"
          >
            Depoimentos
          </a>

          <a
            href="#palestras"
            className="border-[#37b7f0] pb-1 text-sm font-semibold text-white hover:border-b hover:text-[#37b7f0]"
          >
            Palestras
          </a>

          <a
            href="#faq"
            className="border-[#37b7f0] pb-1 text-sm font-semibold text-white hover:border-b hover:text-[#37b7f0]"
          >
            Perguntas frequentes
          </a>

          <a
            href="#footer"
            className="border-[#37b7f0] pb-1 text-sm font-semibold text-white hover:border-b hover:text-[#37b7f0]"
          >
            Contato
          </a>
        </div>
        {/* visible only in mobile */}
        <div className="md:sr-only">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
