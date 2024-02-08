import { Card } from '@/components/card'
import { Title } from '@/components/title'
import photo from '@/assets/photo-2.png'
import Image from 'next/image'
import { ContactButton } from '@/components/contact-button'

export function About() {
  return (
    <div id="about" className="mt-16">
      <Title>Sobre mim</Title>
      <div className="mt-[30px] px-5">
        <Card>
          Olá! Meu nome é{' '}
          <span className="font-semibold text-blue-text">Rodrigo Freitas</span>{' '}
          e sou{' '}
          <span className="font-semibold text-blue-text">
            {' '}
            psicanalista e terapeuta há mais de 10 anos
          </span>
          . Meu trabalho é criar um espaço seguro para você explorar suas
          emoções e encontrar soluções para seus problemas. <br />
          <br /> Minha abordagem é empática e profunda, buscando promover
          mudanças positivas na sua vida. A terapia é uma experiência
          transformadora que ajuda você a se conhecer melhor e a viver com mais
          autenticidade. <br />
          <br /> Usando psicanálise e técnicas terapêuticas modernas, ofereço um
          atendimento personalizado que se adapta às suas necessidades. Vamos
          juntos construir uma vida melhor. Agende sua consulta!
          <Image
            src={photo}
            alt="Rodrigo's photo"
            width="350"
            height="927"
            className="-mb-[20px] ml-12"
          />
        </Card>

        <ContactButton />
      </div>
    </div>
  )
}
