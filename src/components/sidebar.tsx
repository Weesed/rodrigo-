'use client'

import { FAQ } from '@/assets/faq'
import { Lectures } from '@/assets/lectures'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  AlignJustify,
  HeartHandshake,
  Home,
  MessageSquareText,
  Sticker,
  User,
} from 'lucide-react'
import { useState } from 'react'
import { SidebarLink } from './sidebar-link'

export function Sidebar() {
  const [openSheet, setOpenSheet] = useState(false)

  function handleCloseSheet() {
    setOpenSheet(false)
  }
  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetTrigger asChild className="">
        <button>
          <AlignJustify className="size-6 stroke-white" />
        </button>
      </SheetTrigger>
      <SheetContent className="w-fit">
        <div className="mx-auto mt-10 flex w-fit flex-col gap-5">
          <SidebarLink href="#psicanalise" onClick={handleCloseSheet}>
            <HeartHandshake className="size-5 stroke-primary/70" />
            <span>Como te ajudo?</span>
          </SidebarLink>

          <SidebarLink href="#about" onClick={handleCloseSheet}>
            <User className="size-5 stroke-primary/70" />
            <span>Sobre mim</span>
          </SidebarLink>

          <SidebarLink href="#depoimentos" onClick={handleCloseSheet}>
            <Sticker className="size-5 stroke-primary/70" />
            <span>Depoimentos</span>
          </SidebarLink>

          <SidebarLink href="#palestras" onClick={handleCloseSheet}>
            <Lectures className="size-5 text-primary/70" />
            <span>Palestras</span>
          </SidebarLink>

          <SidebarLink href="#clinic" onClick={handleCloseSheet}>
            <Home className="size-5 text-primary/70" />
            <span>Espaço</span>
          </SidebarLink>

          <SidebarLink href="#faq" onClick={handleCloseSheet}>
            <FAQ className="size-5 text-primary/70" />
            <span>Perguntas frequentes</span>
          </SidebarLink>

          <SidebarLink href="#footer" onClick={handleCloseSheet}>
            <MessageSquareText className="size-5 stroke-primary/70" />
            <span>Contato</span>
          </SidebarLink>
        </div>
      </SheetContent>
    </Sheet>
  )
}
