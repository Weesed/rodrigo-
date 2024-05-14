'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Whatsapp } from '@/assets/whatsapp'

export function ContactButton() {
  const router = useRouter()

  return (
    <Button
      onClick={() => {
        router.push(
          'https://api.whatsapp.com/send/?phone=5513997677528&text=Ola Rodrigo! Tenho interesse em iniciar a psicanálise!',
        )
      }}
      className="mb-40 mt-10 w-full animate-bounce rounded-full bg-blue-green-background py-7 font-bold uppercase hover:bg-blue-green-background/80"
    >
      Agendar atendimento
    </Button>
  )
}

export function WhatsappButtton() {
  const router = useRouter()

  return (
    <button
      onClick={() => {
        router.push(
          'https://api.whatsapp.com/send/?phone=5513997677528&text=Ola Rodrigo! Tenho interesse em iniciar a psicanálise!',
        )
      }}
      className="hover:animate-dance"
    >
      <Whatsapp />
    </button>
  )
}
