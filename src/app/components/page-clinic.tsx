'use client'

import { Title } from '@/components/title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

interface PageClinicProps {
  nossoEspaco: {
    url: string
  }[]
}

export function Clinic({ nossoEspaco }: PageClinicProps) {
  return (
    <div id="clinic" className="container mt-40 px-5 md:px-0">
      <Title>Nosso espaço</Title>

      <div className="mt-[30px] w-full rounded-lg bg-blue-light-background p-5 md:p-10">
        <Swiper
          pagination={true}
          slidesPerView={1}
          spaceBetween={50}
          modules={[Pagination]}
          loop={true}
        >
          {nossoEspaco.map((image, i) => (
            <SwiperSlide key={i} className="w-full cursor-pointer select-none">
              <div className="">
                <Image
                  src={image.url}
                  width="1280"
                  height="480"
                  alt="Rodrigo's photo"
                  className="h-[250px] w-full rounded-lg object-cover md:h-[480px]"
                  quality={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
