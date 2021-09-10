import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { getProjectPostsWithTag } from '../lib/tags'
import Layout, { siteTitle } from '../components/layout'
import ProjectList from '../components/project-list'

import { padding1px, headingLg } from '../styles/utils.css'
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
          style={{ gridTemplateColumns: '1fr 1fr' }}
        />
      </section>
    </Layout>
  )
}

export default Home
