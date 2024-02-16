'use client'

import { ArrowUpCircle } from 'lucide-react'
import { ReactNode } from 'react'

interface SidebarLinkProps {
  href: string
  onClick?: () => void
  children: ReactNode
}

export function SidebarLink({ href, onClick, children }: SidebarLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 rounded-md p-3 transition-colors hover:bg-blue-light-background"
    >
      {children}
    </a>
  )
}

export function BackToTop() {
  return (
    <a
      href="#header"
      className="flex items-center gap-2 rounded-md p-3 text-blue-green-background transition-colors hover:animate-bounce md:p-0"
    >
      <ArrowUpCircle className="size-9 fill-blue-light-background" />
    </a>
  )
}
