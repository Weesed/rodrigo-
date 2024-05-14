'use client'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

interface ImageCallProps {
  image: string
}

export function ImageCall({ image }: ImageCallProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 390px)' })

  return (
    <div className="mx-auto -mt-32 aspect-square  transform overflow-hidden rounded-full md:mt-0 md:aspect-auto md:h-full  md:w-[1194px] md:rounded-lg">
      <Image
        src={image}
        width={isMobile ? '1194' : '590'}
        height={isMobile ? '1326' : '660'}
        alt="Rodrigo's photo"
        className="object-cover"
      />
    </div>
  )
}
