import { About } from './components/page-about'
import { Call } from './components/page-call'
import { Depoimentos } from './components/page-depoimentos'
import { Faq } from './components/page-faq'
import { Palestras } from './components/page-palestras'
import { Psicanalise } from './components/page-psicanalise'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Call />
      <Psicanalise />
      <About />
      <Depoimentos />
      <Palestras />
      <Faq />
    </main>
  )
}
