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
      className="mb-40 mt-10 w-[400px] w-full animate-bounce rounded-full bg-blue-green-background py-7 font-bold uppercase hover:bg-blue-green-background/80"
    >
      Agendar atendimento
    </Button>
  )
}
