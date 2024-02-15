'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

export function ContactButton() {
  const router = useRouter()

  function handleContact() {
    router.push(
      'https://api.whatsapp.com/send/?phone=5513997677528&text=Ola Rodrigo! Tenho interesse em iniciar a psicanálise!',
    )
  }

  return (
    <Button
      onClick={handleContact}
      className="mb-40 mt-10 w-full max-w-[350px] animate-bounce rounded-full bg-blue-background py-7 font-bold uppercase hover:bg-blue-background/80"
    >
      Agendar atendimento
    </Button>
  )
}
