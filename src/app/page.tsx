import { getData } from '@/lib/graphql-api'
import { About } from './components/page-about'
import { Call } from './components/page-call'
import { Clinic } from './components/page-clinic'
import { Depoimentos } from './components/page-depoimentos'
import { Faq } from './components/page-faq'
import { Palestras } from './components/page-palestras'
import { Psicanalise } from './components/page-psicanalise'

export interface PageDataProps {
  pageFiles: {
    pageCall: {
      body: string
      title: string
      image: string
    }
    pagePsicanalise: {
      body: {
        title: string
        content: string
      }[]
    }
    pageAbout: {
      body: string
      title: string
    }
    nossoEspaco: {
      url: string
    }[]
    faq: {
      title: string
      Menus: {
        content: string
        subtitle: string
      }[]
    }
  }
}

async function getPageData(): Promise<PageDataProps> {
  const pageFiles = await getData()

  return pageFiles
}

export default async function Home() {
  const pageFiles = await getPageData()

  const {
    pageFiles: { pagePsicanalise, pageCall, pageAbout, nossoEspaco, faq },
  } = pageFiles

  return (
    <main className="flex flex-col ">
      <Call {...pageCall} />
      <div className="container px-0">
        <Psicanalise {...pagePsicanalise} />
        <About {...pageAbout} />
        <Depoimentos />
        <Palestras />
        <Clinic nossoEspaco={nossoEspaco} />
        <Faq {...faq} />
      </div>
    </main>
  )
}
