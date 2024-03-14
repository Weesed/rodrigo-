import { Logo } from '@/assets/logo'
import { Sidebar } from './sidebar'
import { HeaderAnchorLink } from './header-anchor-link'

export function Header() {
  return (
    <div id="header" className="w-full  bg-blue-background py-5 md:h-64">
      <div className="container flex items-center justify-between">
        <Logo className="-ml-8 -mt-2 w-[137px] md:ml-0 md:mt-0 md:w-[200px]" />
        <div className="sr-only flex gap-5 md:not-sr-only">
          <HeaderAnchorLink href="#psicanalise" text="Como te ajudo?" />
          <HeaderAnchorLink href="#about" text="Sobre mim" />
          <HeaderAnchorLink href="#depoimentos" text="Depoimentos" />
          <HeaderAnchorLink href="#palestras" text="Palestras" />
          <HeaderAnchorLink href="#clinic" text="Espaço" />
          <HeaderAnchorLink href="#faq" text="Perguntas frequentes" />
          <HeaderAnchorLink href="#footer" text="Contato" />
        </div>
        {/* visible only in mobile */}
        <div className="md:sr-only">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
