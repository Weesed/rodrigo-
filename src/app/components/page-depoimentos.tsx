'use client'

import { Title } from '@/components/title'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import images from '@/utils/images.json'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

export function Depoimentos() {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  const slidesQtd = isMobile ? 1 : 3

  return (
    <div id="depoimentos" className="mt-40 px-5 md:px-0">
      <Title>Depoimentos de pacientes</Title>
      <div className="mt-[30px] overflow-x-scroll rounded-md bg-blue-light-background p-5">
        <Swiper
          pagination={true}
          slidesPerView={slidesQtd}
          spaceBetween={50}
          modules={[Pagination]}
          loop={true}
          className="h-[280px]"
        >
          {images.images.map((img, i) => (
            <SwiperSlide key={i} className="w-full cursor-pointer select-none">
              <div className="">
                <Image
                  src={img.src}
                  width="350"
                  height="250"
                  alt="Rodrigo's photo"
                  className="h-[250px] w-full rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <a
        href="https://maps.app.goo.gl/91Vqwqp4QE9vVfkb8"
        target="_blank"
        className="mt-2 block text-center text-sm font-semibold transition-colors hover:text-blue-green-background"
      >
        Ver todos os depoimentos
      </a>
    </div>
  )
}
