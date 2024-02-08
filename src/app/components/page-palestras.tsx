import { Card } from '@/components/card'
import { Title } from '../../components/title'
import { Ear } from 'lucide-react'
import { PeopleIcon } from '@/assets/people'
import { Detective } from '@/assets/detective'

export function Palestras() {
  return (
    <div id="palestras" className="mx-auto mt-16 px-5">
      <Title>Palestras</Title>
      <div className="mt-[30px] flex flex-col gap-5">
        <Card
          title="Abordagem"
          icon={<Detective className="size-5 stroke-white" />}
        >
          A psicanálise é como um detetive da mente. Ela ajuda a descobrir
          pensamentos e sentimentos escondidos que podem estar influenciando seu
          dia a dia sem que você perceba.
        </Card>

        <Card
          title="A importância da comunidade"
          icon={<PeopleIcon className="size-5 stroke-white" />}
        >
          É como se você tivesse um livro sobre sua vida, mas algumas páginas
          estão coladas. O psicanalista ajuda a descolar essas páginas para que
          você possa entender melhor sua própria história.
        </Card>

        <Card
          title="Compromisso"
          icon={<Ear className="size-5 stroke-white" />}
        >
          Compreender sua história pessoal pode melhorar seu bem-estar e
          capacidade de lidar positivamente com situações. A psicanálise é uma
          ferramenta eficaz para autoconhecimento e desenvolvimento pessoal
        </Card>
      </div>
    </div>
  )
}
