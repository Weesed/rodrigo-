import { About } from './components/page-about'
import { Call } from './components/page-call'
import { Clinic } from './components/page-clinic'
import { Depoimentos } from './components/page-depoimentos'
import { Faq } from './components/page-faq'
import { Palestras } from './components/page-palestras'
import { Psicanalise } from './components/page-psicanalise'

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Call />
      <div className="container px-0">
        <Psicanalise />
        <About />
        <Depoimentos />
        <Palestras />
        <Clinic />
        <Faq />
      </div>
    </main>
  )
}
