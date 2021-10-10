import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { PostDataWithId } from '../lib/common'
import TagList from '../components/tag-list'
import { listItem, listItem2 } from './project-card.css'
import { thumbnail, lightText } from '../styles/utils.css'

const Project: FC<{ project: PostDataWithId }> = ({ project }) => {
  const { id, title, date, tags, excerpt, images } = project
  const [image] = images || []

  return (
    <Link href={`/projects/${id}`}>
      <li className={listItem2}>
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

          {excerpt && <p><small>{excerpt}</small></p>}
        </div>
      </li>
    </Link>
  )
}

const ProjectTitle: FC<{ title: string, date: string | Date }> = props => {
  const { title, date } = props

  return (
    <a>
      <h4>{title} · {new Date(date).getUTCFullYear()}</h4>
    </a>
  )
}

const Project2: FC<{ project: PostDataWithId }> = ({ project }) => {
  const { id, title, date, tags, excerpt, images } = project
  const [image] = images || []

  return (
    <Link href={`/projects/${id}`}>
      <li className={listItem}>
        <a>
          <h4>{title}</h4>
        </a>

        <small className={lightText}>
          {new Date(date).getUTCFullYear()} ·
        </small>

        {tags && <small className={lightText}>
          <TagList tags={tags} />
        </small>}

        <br/>

        <div
          style={{
            display: 'grid',
            width: '100%',
            gridTemplateColumns: '1fr auto',
            alignItems: 'flex-start',
            gap: '.5rem',
          }}
        >
          <div style={{ width: '100%' }}>
            {excerpt && <p><small>{excerpt}</small></p>}
          </div>

          {image &&
            <div className={thumbnail}>
              <Image
                {...image}
                width={64} height={64}
                objectFit="cover"
                objectPosition="center top"
              />
            </div>
          }
        </div>
      </li>
    </Link>
  )
}

export default Project
