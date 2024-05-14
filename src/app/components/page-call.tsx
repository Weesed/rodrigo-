import { ContactButton } from '@/components/contact-button'
import { ImageCall } from '@/components/image-call'

interface PageCallProps {
  body: string
  title: string
  image: string
}

export function Call({ body, title, image }: PageCallProps) {
  console.log('aq', image)

  return (
    <div className="mx-0 min-h-screen rounded-b-lg md:min-h-fit">
      <div className="container h-[620px] rounded-lg bg-blue-light-background shadow-sm shadow-blue-light-background md:-mt-20 md:flex md:h-full md:rounded-lg md:bg-white md:p-0">
        <div id="call" className="flex flex-col px-5">
          <h1 className="mx-auto text-balance pt-10 text-center text-2xl font-semibold">
            {title}
          </h1>
          <p className="mt-5 text-balance text-center">{body}</p>

          <div className="mx-auto mt-auto flex justify-center md:w-[600px]">
            <ContactButton />
          </div>
        </div>
        <ImageCall image={image} />
      </div>
    </div>
  )
}
