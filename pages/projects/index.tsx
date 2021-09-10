import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { PostDataWithId } from '../../lib/common'
import { getSortedProjectsData } from '../../lib/projects'
import Layout, { siteTitle } from '../../components/layout'
import ProjectList from '../../components/project-list'
import { headingLg, padding1px } from '../../styles/utils.css'

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const projects = getSortedProjectsData()

  return {
    props: {
      projects
    }
  }
}

interface ProjectsProps {
  projects: PostDataWithId[]
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section
        id="projects"
        className={padding1px}
      >
        <h2 className={headingLg}>All projects</h2>

        <ProjectList
          projects={projects}
        />
      </section>
    </Layout>
  )
}

export default Projects
