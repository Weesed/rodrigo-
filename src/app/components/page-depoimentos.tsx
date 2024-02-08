'use client'

import { Title } from '@/components/title'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import images from '@/utils/images.json'
import Image from 'next/image'

export function Depoimentos() {
  return (
    <div id="depoimentos" className="mt-16 px-5">
      <Title>Depoimentos de pacientes</Title>
      <div className="mt-[30px] overflow-x-scroll rounded-md bg-blue-light-background p-5">
        <Swiper
          pagination={true}
          slidesPerView={1}
          modules={[Pagination]}
          className="h-[280px]"
        >
          {images.images.map((img, i) => (
            <SwiperSlide key={i} className="w-full">
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
    </div>
  )
}
