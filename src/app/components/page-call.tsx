import Image from 'next/image'
import photo from '@/assets/photo-1.png'
import { ContactButton } from '@/components/contact-button'
export function Call() {
  return (
    <>
      <div
        id="call"
        className="bg-blue-light-background px-5 md:md:rounded-b-lg"
      >
        <h1 className="mx-auto text-balance pt-10 text-center text-2xl font-semibold">
          Ajudo você a se encontrar e aceitar a vida real e não a ideal
        </h1>
        <p className="mt-5 text-balance text-center">
          Descubra o poder da empatia e da transformação profunda. Permita-se
          conhecer melhor e viver uma vida mais abutêntica. Agende sua sessão de
          terapia online agora e inicie sua jornada de transformação
          significativa
        </p>

        <ContactButton />
      </div>
      <div className="mx-auto -mt-32 h-[240px] w-[240px] transform overflow-hidden rounded-full">
        <Image
          src={photo}
          width="350"
          height="350"
          alt="Rodrigo's photo"
          className="h-full w-full object-cover"
        />
      </div>
    </>
  )
}
