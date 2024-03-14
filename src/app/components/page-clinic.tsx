'use client'

import { Title } from '@/components/title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import img2 from '@/assets/escritorio-2.jpeg'
import img3 from '@/assets/escritorio-3.jpeg'
import img4 from '@/assets/escritorio-4.jpeg'
import Image from 'next/image'

const images = [img2, img3, img4]

export function Clinic() {
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
          {images.map((img, i) => (
            <SwiperSlide key={i} className="w-full cursor-pointer select-none">
              <div className="">
                <Image
                  src={img.src}
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
