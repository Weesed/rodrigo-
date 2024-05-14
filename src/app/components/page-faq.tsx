import { Title } from '@/components/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface PageFaqProps {
  title: string
  Menus: {
    content: string
    subtitle: string
  }[]
}

export function Faq({ title, Menus }: PageFaqProps) {
  return (
    <div id="faq" className="mt-16 px-5">
      <Title> {title} </Title>
      <Accordion
        type="single"
        collapsible
        className="mt-[30px] flex w-full flex-col gap-4"
      >
        {Menus.map((menu) => (
          <AccordionItem
            key={menu.subtitle}
            value="item-2"
            className="rounded-lg border border-blue-text/20 bg-blue-light-background px-5"
          >
            <AccordionTrigger>{menu.subtitle}</AccordionTrigger>
            <AccordionContent className="text-pretty">
              {menu.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
