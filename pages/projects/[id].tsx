import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import TagList from '../../components/tag-list'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { PostData } from '../../lib/common'
import { headingXl, lightText } from '../../styles/utils.css'

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params)
    return { props: {} };

  const { id } = params;
  if (typeof id !== 'string')
    return { props: {} };

  const post = await getProjectData(id)

  return {
    props: {
      post
    }
  }
}

const ProjectPost: FC<{ post: PostData }> = ({ post }) => {
  const { title, date, tags, content } = post

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={headingXl}>{title}</h1>

        <p>
          <span className={lightText}>
            <Date dateString={date} /> ·
            <TagList tags={tags} />
          </span>
        </p>

        {content && <ReactMarkdown children={content} remarkPlugins={[remarkGfm]}
          // components={{
          //   img: (props) => (
          //     <div className="img">
          //       <Image {...props} layout="fill" objectFit="scale-down" />
          //     </div>
          //   )
          // }}
        />}
      </article>
    </Layout>
  )
}

export default ProjectPost
