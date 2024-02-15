'use client'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import photo from '@/assets/photo-call.png'

export function ImageCall() {
  const isMobile = useMediaQuery({ query: '(max-width: 390px)' })

  return (
    <div className="mx-auto -mt-32 aspect-square  transform overflow-hidden rounded-full md:mt-0 md:aspect-auto md:h-full  md:w-[1194px] md:rounded-lg">
      <Image
        src={photo}
        width={isMobile ? '1194' : '590'}
        height={isMobile ? '1326' : '660'}
        alt="Rodrigo's photo"
        className="object-cover"
      />
    </div>
  )
}
