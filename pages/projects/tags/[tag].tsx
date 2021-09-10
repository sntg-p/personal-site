import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'

import { getAllTags, getProjectPostsWithTag } from '../../../lib/tags'
import { PostDataWithId } from '../../../lib/common'
import Layout from '../../../components/layout'
import ProjectList from '../../../components/project-list'
import { headingXl, lightText } from '../../../styles/utils.css'

export async function getStaticPaths() {
  const paths = getAllTags()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params)
    return { props: {} };

  const { tag } = params;
  if (typeof tag !== 'string')
    return { props: {} };

  const projectsData = await getProjectPostsWithTag(tag)

  return {
    props: {
      tag,
      projectsData
    }
  }
}

interface TagProps {
  tag: string
  projectsData: PostDataWithId[]
}

const Tag: FC<TagProps> = ({ tag, projectsData }) => {
  return (
    <Layout>
      <Head>
        <title>{tag}</title>
      </Head>

      <section>
        <h1 className={headingXl}>{tag}</h1>

        <h3 className={lightText}>
          {projectsData.length} post(s) found
        </h3>

        <ProjectList
          projects={projectsData}
        />
      </section>
    </Layout>
  )
}


export default Tag