'use client'

import { ArrowUpCircle } from 'lucide-react'
import { ReactNode } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface SidebarLinkProps {
  href: string
  onClick?: () => void
  children: ReactNode
}

export function SidebarLink({ href, onClick, children }: SidebarLinkProps) {
  return (
    <AnchorLink
      offset={70}
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 rounded-md p-3 transition-colors hover:bg-blue-light-background"
    >
      {children}
    </AnchorLink>
  )
}

export function BackToTop() {
  return (
    <AnchorLink
      offset={70}
      href="#call"
      className="flex items-center gap-2 rounded-md p-3 text-blue-text transition-colors hover:animate-bounce md:p-0"
    >
      <ArrowUpCircle className="size-9 fill-blue-light-background" />
    </AnchorLink>
  )
}
