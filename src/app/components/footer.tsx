'use client'
import { Whatsapp } from '@/assets/whatsapp'
import { Whatsapp2 } from '@/assets/whatsapp-2'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

const contactFormSchema = z.object({
  name: z.string().min(3, { message: 'Por favor, informe seu nome completo' }),
  contact: z
    .string()
    .min(8, 'Preencha seu email ou telefone completo, por favor'),
  message: z.string().min(8, 'Ops, a mensagem está muito curta'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Footer() {
  const router = useRouter()
  const [submitType, setSubmitType] = useState<null | string>(null)
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form

  function handleNewContact(data: ContactFormData) {
    if (submitType === 'whatsapp') {
      const message = `Ola Rodrigo! Tenho interesse em iniciar a psicanálise! Meu nome é ${data.name}, contato: ${data.contact}! Mensagem: ${data.message}`
      router.push(
        `https://api.whatsapp.com/send/?phone=5513997677528&text=${message}`,
      )
    }

    console.log(submitType)
    console.log(data)
  }

  return (
    <div
      id="footer"
      className="mt-16 bg-blue-background md:rounded-t-lg md:pb-5"
    >
      <div className="container pt-3 md:px-60">
        <h2 className="mt-5 text-center text-2xl font-semibold text-white">
          Vamos conversar!
        </h2>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(handleNewContact)}
            className="mt-[30px] space-y-8"
          >
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Seu nome</FormLabel>
                  <FormControl>
                    <Input {...field} {...register('name')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    Seu e-mail ou telefone
                  </FormLabel>
                  <FormControl>
                    <Input {...field} {...register('contact')} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    Seu e-mail ou telefone
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escreva um resumo do que você está sentindo"
                      className="resize-none"
                      {...field}
                      {...register('message')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button
                type="submit"
                onClick={() => {
                  setSubmitType('email')
                }}
                className="flex gap-2 bg-white font-semibold text-black hover:bg-white/70"
              >
                <Mail className="size-4" />
                Enviar e-mail
              </Button>

              <Button
                type="submit"
                onClick={() => {
                  setSubmitType('whatsapp')
                }}
                className="flex gap-2 bg-[#60D669] font-semibold text-white hover:bg-[#60D669]/70"
              >
                <Whatsapp className="size-4" />
                WhatsApp
              </Button>
            </div>
          </form>
        </Form>

        <div className="mt-[30px] flex flex-col gap-4 text-sm text-white">
          <div className="flex items-center gap-1">
            <MapPin className="size-4 stroke-white" />
            <span className="">
              R. Montenegro, 169 - Vila Maia, Guarujá - SP
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Mail className="size-4 stroke-white" />
            <span className="">minrodrigofreitas@gmail.com</span>
          </div>

          <div className="flex items-center gap-1">
            <Whatsapp2 className="size-4 stroke-white" />
            <span className="">(13) 9 7419-4196</span>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.weslleyeduardo.dev/"
            target="_blank"
            className="p-3 text-center text-xs font-light text-white/80 hover:text-white"
          >
            Desenvolvido por {''}
            <span className="font-bold">weslleyeduardo.dev</span>
          </a>
        </div>
      </div>
    </div>
  )
}
