
import { ContactButton } from '@/components/contact-button'
import { ImageCall } from '@/components/image-call'
export function Call() {

  return (
    <div className="mx-0 min-h-screen rounded-b-lg md:min-h-fit">
      <div className="container h-[620px] rounded-lg bg-blue-light-background shadow-sm shadow-blue-light-background md:-mt-20 md:flex md:h-full md:rounded-lg md:bg-white md:p-0">
        <div id="call" className="flex flex-col px-5">
          <h1 className="mx-auto text-balance pt-10 text-center text-2xl font-semibold">
            Ajudo você a se encontrar e aceitar a vida real e não a ideal
          </h1>
          <p className="mt-5 text-balance text-center">
            Descubra o poder da empatia e da transformação profunda. Permita-se
            conhecer melhor e viver uma vida mais abutêntica. Agende sua sessão
            de terapia online agora e inicie sua jornada de transformação
            significativa
          </p>

          <div className="mt-auto flex justify-center">
            <ContactButton />
          </div>
        </div>
        <ImageCall />
      </div>
    </div>
  )
}
