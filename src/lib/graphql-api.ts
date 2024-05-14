import { PageDataProps } from '@/app/page'
import { GraphQLClient, gql } from 'graphql-request'

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_API!)

export const getData = async (): Promise<PageDataProps> => {
  const query = gql`
    query MyQuery {
      pageFiles(where: { id: "clw6isbtq05ta07kckoh0ntl5" }) {
        pageCall
        pagePsicanalise
        pageAbout
        nossoEspaco {
          url
        }
        faq
      }
    }
  `

  const response: PageDataProps = await graphQLClient.request(query)
  return response
}
