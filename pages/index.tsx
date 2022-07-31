import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { getProjectPostsWithTag } from '../lib/tags'
import Layout, { siteTitle } from '../components/layout'
import ProjectList from '../components/project-list'

import { padding1px, headingLg, twoColumns } from '../styles/utils.css'
import { PostDataWithId } from '../lib/common'

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const projects = await getProjectPostsWithTag('highlight')

  return {
    props: {
      projects
    }
  }
}

interface HomeProps {
  projects: PostDataWithId[]
}

const Home: FC<HomeProps> = ({ projects }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="google-site-verification" content="hlSvkDyo8fUw3HFcs3tRTyQVZFn3LKxNS8vj4BzSEJg" />
      </Head>

      <section
        id="projects"
        className={padding1px}
      >
        <h2 className={headingLg}>
          Project highlights

          (<Link href="/projects">see all</Link>)
        </h2>

        <ProjectList
          projects={projects}
          className={twoColumns}
        />
      </section>
    </Layout>
  )
}

export default Home
