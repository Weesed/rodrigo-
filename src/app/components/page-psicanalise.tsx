import { Card } from '@/components/card'
import { Title } from '../../components/title'
import { BookOpen, HandHeart, Search } from 'lucide-react'

interface PagePsicanaliseProps {
  body: {
    title: string
    content: string
  }[]
}

export function Psicanalise({ body }: PagePsicanaliseProps) {
  const cards = [
    {
      title: body[0].title,
      content: body[0].content,
      icon: <Search className="size-5 stroke-white" />,
    },
    {
      title: body[1].title,
      content: body[1].content,
      icon: <BookOpen className="size-5 stroke-white" />,
    },
    {
      title: body[2].title,
      content: body[2].content,
      icon: <HandHeart className="size-5 stroke-white" />,
    },
  ]

  return (
    <div id="psicanalise" className="mx-5 mt-40 md:mx-0">
      <Title>Como a psicanálise te ajuda?</Title>
      <div className="mt-[30px] flex flex-col gap-5 md:flex-row">
        {cards.map((card) => (
          <Card key={card.title} title={card.title} icon={card.icon}>
            {card.content}
          </Card>
        ))}
      </div>
    </div>
  )
}
