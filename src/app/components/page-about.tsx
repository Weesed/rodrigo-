import { Card } from '@/components/card'
import { Title } from '@/components/title'
import photo from '@/assets/photo-2.png'
import Image from 'next/image'
import { ContactButton } from '@/components/contact-button'
import exp1 from '@/assets/exp-1.png'
import exp2 from '@/assets/exp-2.png'
import exp3 from '@/assets/exp-3.png'
import exp4 from '@/assets/exp-4.png'
import certificate from '@/assets/certificate.jpeg'

interface PageAboutProps {
  body: string
  title: string
}

export function About({ title }: PageAboutProps) {
  return (
    <div id="about" className="mx-5 mt-40 md:mx-0">
      <Title>{title}</Title>
      <div className="mt-[30px]">
        <Card padding={0}>
          <div className="flex flex-col gap-10 md:flex-row md:gap-2">
            <div className="flex flex-1 flex-col items-center gap-10 p-5">
              {/* text */}
              <div className="">
                Olá! Meu nome é{' '}
                <span className="font-semibold text-blue-text">
                  Rodrigo Freitas
                </span>{' '}
                e sou{' '}
                <span className="font-semibold text-blue-text">
                  {' '}
                  psicanalista e terapeuta
                </span>
                . Meu trabalho é criar um espaço seguro para você explorar suas
                emoções e encontrar soluções para seus problemas. <br />
                <br /> Minha abordagem é empática e profunda, buscando promover
                mudanças positivas na sua vida. A terapia é uma experiência
                transformadora que ajuda você a se conhecer melhor e a viver com
                mais autenticidade. <br />
                <br /> Usando psicanálise e técnicas terapêuticas modernas,
                ofereço um atendimento personalizado que se adapta às suas
                necessidades. Vamos juntos construir uma vida melhor.{' '}
                <span className="font-semibold">Agende sua consulta!</span>
              </div>

              {/* exp */}
              <div className="flex flex-col gap-5">
                <h2 className="text-center text-xl font-semibold">
                  Experiências
                </h2>

                <div className=" grid w-fit grid-cols-2 items-center gap-16 gap-y-20 text-center text-blue-text md:col-start-1 md:row-start-2 md:gap-x-32">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1">
                      <Image
                        src={exp1}
                        alt=""
                        width={200}
                        height={200}
                        className="h-[60px] w-[60px] object-cover md:h-[80px] md:w-[80px]"
                      />
                      <div className="flex flex-col items-center font-semibold">
                        <span className="text-4xl ">5</span>
                        <span className="text-xl tracking-widest">ANOS</span>
                      </div>
                    </div>
                    <span className="">Desenvolvendo pessoas</span>
                  </div>

                  <div className="ml-auto flex w-fit flex-col">
                    <div className="flex items-center gap-1">
                      <Image
                        src={exp2}
                        alt=""
                        width={200}
                        height={200}
                        className="h-[60px] w-[60px] object-cover md:h-[80px] md:w-[80px]"
                      />
                      <div className="flex flex-col items-center font-semibold">
                        <span className="text-4xl">2</span>
                        <span className="text-xl tracking-widest">ANOS</span>
                      </div>
                    </div>
                    <span className="text-left">
                      Estudando traumas <br /> religiosos
                    </span>
                  </div>

                  <div className="items-left flex flex-col justify-center">
                    <div className="flex items-center gap-1">
                      <Image
                        src={exp3}
                        alt=""
                        width={200}
                        height={200}
                        className="-ml-3 h-[60px] w-[60px] object-cover md:h-[80px] md:w-[80px]"
                      />
                      <div className="flex flex-col items-center font-semibold">
                        <span className="text-4xl ">+100</span>
                      </div>
                    </div>
                    <span className="text-left">Palestras realizadas</span>
                  </div>

                  <div className="ml-auto flex flex-col pr-6">
                    <div className="flex items-center gap-1">
                      <Image
                        src={exp4}
                        alt=""
                        width={200}
                        height={200}
                        className="h-[60px] w-[60px] object-cover md:h-[80px] md:w-[80px]"
                      />
                      <div className="flex flex-col items-center font-semibold">
                        <span className="text-4xl ">+6</span>
                      </div>
                    </div>
                    <span className="text-left">Países atendidos</span>
                  </div>
                </div>
              </div>

              {/* certificate */}
              <div className="flex flex-col gap-5">
                <h2 className="text-center text-xl font-semibold">Premiação</h2>
                <Image
                  src={certificate}
                  alt="certificado de melhor psicanalista de guarujá"
                  width={1600}
                  className="w-full rounded-lg md:w-[500px]"
                />
              </div>

              {/* action button */}
              <div className="h-24 w-full">
                <ContactButton />
              </div>
            </div>

            <div className="ml-auto flex w-[290px] items-end md:w-[490px]">
              <Image
                src={photo}
                alt="Rodrigo's photo"
                width="590"
                height="940"
                className="h-full w-full md:h-[940px]"
                quality={100}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
