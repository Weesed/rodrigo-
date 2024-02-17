import { Card } from '@/components/card'
import { Title } from '../../components/title'
import { Ear } from 'lucide-react'
import { PeopleIcon } from '@/assets/people'
import { Detective } from '@/assets/detective'
import Image from 'next/image'
import palestra1 from '@/assets/palestra 1.jpeg'
import palestra2 from '@/assets/palestra 2.jpeg'
import palestra3 from '@/assets/palestra 3.jpeg'

export function Palestras() {
  return (
    <div id="palestras" className="container mt-40 px-5 md:px-0">
      <Title>Palestras</Title>
      <div className="mt-[30px] flex grid-cols-3 flex-col gap-5 md:grid">
        <Card
          title="Abordagem"
          icon={<Detective className="size-5 stroke-white" />}
        >
          Minhas palestras são centradas no indivíduo e no seu processo de cura.
          Uso uma variedade de técnicas, incluindo histórias, metáforas e
          exercícios, para ajudar os participantes a compreenderem suas
          experiências e a encontrarem maneiras de lidar com elas.
          <Image
            src={palestra1}
            alt="imagem da palestra"
            width={1600}
            height={1060}
            className="mt-5 max-h-[215px] max-w-full rounded-lg object-cover md:mb-10 md:mt-0"
          />
        </Card>

        <Card
          title="A importância da comunidade"
          icon={<PeopleIcon className="size-5 stroke-white" />}
        >
          Também acredito na importância da comunidade no processo de cura. Crio
          um espaço seguro e acolhedor para que os participantes possam
          compartilhar suas histórias e se apoiarem mutuamente. div.
          <Image
            src={palestra2}
            alt="imagem da palestra"
            width={1600}
            height={1060}
            className="mt-5 max-h-[215px] max-w-full rounded-lg object-cover md:mb-10 md:mt-0"
          />
        </Card>

        <Card
          title="Compromisso"
          icon={<Ear className="size-5 stroke-white" />}
        >
          Acredito que todos merecem a oportunidade de superar traumas e viver
          uma vida plena. Estou comprometido em usar meus conhecimentos e
          habilidades para ajudar as pessoas a alcançarem esse objetivo.
          <Image
            src={palestra3}
            alt="imagem da palestra"
            width={1600}
            height={1060}
            className="mt-5 max-h-[215px] max-w-full rounded-lg object-cover md:mb-10 md:mt-0"
          />
        </Card>
      </div>
    </div>
  )
}
