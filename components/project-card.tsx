import { FC } from 'react'
import Link from 'next/link'
import Image from "next/legacy/image"

import { PostDataWithId } from '../lib/common'
import TagList from '../components/tag-list'
import { cardBody, cardItem, cardTitle } from './project-card.css'
import { lightText } from '../styles/utils.css'

const Project: FC<{ project: PostDataWithId }> = ({ project }) => {
  const { id, title, date, tags, excerpt, images } = project
  const [image] = images || []

  return (
    <Link href={`/projects/${id}`} legacyBehavior>
      <li className={cardItem}>
        {image && (
          <>
            <Image
              {...image}
              width={2} height={1}
              layout="responsive"
              objectFit="cover"
              objectPosition="center top"
            />

            <div
              style={{
                position: 'absolute',
                paddingBottom: '50%',
                top: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(0deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.66) 33%, rgba(0,0,0,0) 100%)' 
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  margin: '.25rem .75rem',
                }}
              >
                <ProjectTitle title={title} date={date} />
              </div>
            </div>
          </>
        )}

        <div style={{ width: '100%', padding: '0 .75rem 0', marginTop: '.75rem' }}>
          {!image &&
            <ProjectTitle title={title} date={date} />
          }

          {tags && <small className={lightText}>
            <TagList tags={tags} />
          </small>}

          {excerpt && <p className={cardBody}>{excerpt}</p>}
        </div>
      </li>
    </Link>
  );
}

const ProjectTitle: FC<{ title: string, date: string | Date }> = props => {
  const { title, date } = props

  return (
    <a className={cardTitle}>
      <h4>{title} · {new Date(date).getUTCFullYear()}</h4>
    </a>
  )
}

export default Project
