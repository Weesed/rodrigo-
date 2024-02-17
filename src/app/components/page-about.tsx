import { Card } from '@/components/card'
import { Title } from '@/components/title'
import photo from '@/assets/photo-2.png'
import Image from 'next/image'
import { ContactButton } from '@/components/contact-button'
import exp1 from '@/assets/exp-1.png'
import exp2 from '@/assets/exp-2.png'
import exp3 from '@/assets/exp-3.png'
import exp4 from '@/assets/exp-4.png'

export function About() {
  return (
    <div id="about" className="mx-5 mt-40 md:mx-0">
      <Title>Sobre mim</Title>
      <div className="mt-[30px]">
        <Card>
          <div className="flex flex-col gap-10 md:flex-row md:gap-0">
            <div className="flex flex-col items-center gap-5 md:w-[60%] md:gap-0">
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

              <div className="mt-20 grid grid-cols-2 grid-rows-2 items-start gap-16 text-center text-blue-text md:col-start-1 md:row-start-2">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-1">
                    <Image
                      src={exp1}
                      alt=""
                      width={200}
                      height={200}
                      className="h-[80px] w-[80px] object-cover"
                    />
                    <div className="flex flex-col items-center font-semibold">
                      <span className="text-5xl ">10</span>
                      <span className="text-2xl tracking-widest">ANOS</span>
                    </div>
                  </div>
                  <span className="">Desenvolvendo pessoas</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-1">
                    <Image
                      src={exp2}
                      alt=""
                      width={200}
                      height={200}
                      className="h-[80px] w-[80px] object-cover"
                    />
                    <div className="flex flex-col items-center font-semibold">
                      <span className="text-5xl">2</span>
                      <span className="text-2xl tracking-widest">ANOS</span>
                    </div>
                  </div>
                  <span className="">Estudando traumas religiosos</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-1">
                    <Image
                      src={exp3}
                      alt=""
                      width={200}
                      height={200}
                      className="h-[80px] w-[80px] object-cover"
                    />
                    <div className="flex flex-col items-center font-semibold">
                      <span className="text-5xl ">+100</span>
                    </div>
                  </div>
                  <span className="">Palestras realizadas</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-1">
                    <Image
                      src={exp4}
                      alt=""
                      width={200}
                      height={200}
                      className="h-[80px] w-[80px] object-cover"
                    />
                    <div className="flex flex-col items-center font-semibold">
                      <span className="text-5xl ">+6</span>
                    </div>
                  </div>
                  <span className="">Países atendidos</span>
                </div>
              </div>

              <div className="flex h-24 md:mt-20">
                <ContactButton />
              </div>
            </div>

            <Image
              src={photo}
              alt="Rodrigo's photo"
              width="590"
              height="940"
              className="-mb-[20px] max-h-[927px] max-w-[350px] md:row-span-full md:-mb-[40px]  md:ml-auto md:max-h-[850px] md:max-w-[500px]"
              quality={100}
            />
          </div>
        </Card>
      </div>
    </div>
  )
}
