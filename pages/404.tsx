import { FC } from "react"
import Head from 'next/head'

import Layout from '../components/layout'
import { headingXl, lightText } from "../styles/utils.css"

const ProjectPost: FC = () => {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>

      <article>
        <h1 className={headingXl}>404</h1>
        <span className={lightText}>
          Page not found
        </span>
      </article>
    </Layout>
  )
}

export default ProjectPost
