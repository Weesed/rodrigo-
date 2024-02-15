import { Card } from '@/components/card'
import { Title } from '@/components/title'
import photo from '@/assets/photo-2.png'
import Image from 'next/image'
import { ContactButton } from '@/components/contact-button'

export function About() {
  return (
    <div id="about" className="mx-5 mt-40 md:mx-0">
      <Title>Sobre mim</Title>
      <div className="mt-[30px]">
        <Card>
          <div className="grid grid-cols-1 gap-5 md:-mb-[40px] md:max-h-[740px] md:grid-cols-2 md:grid-rows-3">
            <div className="">
              Olá! Meu nome é{' '}
              <span className="font-semibold text-blue-text">
                Rodrigo Freitas
              </span>{' '}
              e sou{' '}
              <span className="font-semibold text-blue-text">
                {' '}
                psicanalista e terapeuta há mais de 10 anos
              </span>
              . Meu trabalho é criar um espaço seguro para você explorar suas
              emoções e encontrar soluções para seus problemas. <br />
              <br /> Minha abordagem é empática e profunda, buscando promover
              mudanças positivas na sua vida. A terapia é uma experiência
              transformadora que ajuda você a se conhecer melhor e a viver com
              mais autenticidade. <br />
              <br /> Usando psicanálise e técnicas terapêuticas modernas,
              ofereço um atendimento personalizado que se adapta às suas
              necessidades. Vamos juntos construir uma vida melhor. Agende sua
              consulta!
            </div>
            <div className="flex h-24 justify-center md:col-start-1 md:row-start-2 md:mt-20">
              <ContactButton />
            </div>
            <Image
              src={photo}
              alt="Rodrigo's photo"
              width="590"
              height="940"
              className="-mb-[20px] ml-12 max-h-[927px] max-w-[350px] md:row-span-full md:ml-auto md:max-h-[740px] md:max-w-[450px]"
              quality={100}
            />
          </div>
        </Card>
      </div>
    </div>
  )
}
