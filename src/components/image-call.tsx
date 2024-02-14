'use client'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import photo from '@/assets/photo-1.png'
import photoDesktop from '@/assets/photo-1-desktop.png'

export function ImageCall() {
  const isMobile = useMediaQuery({ query: '(max-width: 390px)' })

  return (
    <div className="mx-auto -mt-32 transform  overflow-hidden rounded-lg md:mt-0  md:h-full md:w-[1194px]">
      <Image
        src={isMobile ? photo : photoDesktop}
        width={isMobile ? '1194' : '590'}
        height={isMobile ? '1326' : '660'}
        alt="Rodrigo's photo"
        className="object-cover"
      />
    </div>
  )
}
