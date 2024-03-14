'use client'

import { Button } from './ui/button'
import { sendGTMEvent } from '@next/third-parties/google'
import { Whatsapp } from '@/assets/whatsapp'

export function ContactButton() {
  // const router = useRouter()

  // function handleContact() {
  //   router.push(
  //     'https://api.whatsapp.com/send/?phone=5513997677528&text=Ola Rodrigo! Tenho interesse em iniciar a psicanálise!',
  //   )
  // }

  return (
    <Button
      onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
      className="mb-40 mt-10 w-full animate-bounce rounded-full bg-blue-green-background py-7 font-bold uppercase hover:bg-blue-green-background/80"
    >
      Agendar atendimento
    </Button>
  )
}

export function WhatsappButtton() {
  return (
    <button
      onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
      className="hover:animate-dance"
    >
      <Whatsapp />
    </button>
  )
}
