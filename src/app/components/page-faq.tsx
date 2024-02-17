import { Title } from '@/components/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Faq() {
  return (
    <div id="faq" className="mt-16 px-5">
      <Title>Perguntas Frequentes</Title>
      <Accordion
        type="single"
        collapsible
        className="mt-[30px] flex w-full flex-col gap-4"
      >
        <AccordionItem
          value="item-2"
          className="rounded-lg border border-blue-text/20 bg-blue-light-background px-5"
        >
          <AccordionTrigger>Como funciona a terapia online?</AccordionTrigger>
          <AccordionContent>
            Na terapia online, nos encontramos virtualmente por meio de
            videochamadas seguras. Você compartilha suas preocupações, e juntos
            exploramos soluções e estratégias para melhorar sua saúde mental. É
            conveniente, acessível e eficaz, proporcionando apoio onde quer que
            você esteja.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="rounded-lg border border-blue-text/20 bg-blue-light-background px-5"
        >
          <AccordionTrigger>Terapia Online funciona?</AccordionTrigger>
          <AccordionContent>
            Sim, a terapia online é eficaz para muitas pessoas. Oferece
            conveniência, acesso mais amplo a profissionais de saúde mental e
            permite que as pessoas recebam apoio no conforto de seus ambientes
            familiares. No entanto, a eficácia pode variar de pessoa para
            pessoa, sendo importante encontrar um terapeuta adequado e criar uma
            conexão significativa durante as sessões virtuais.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
