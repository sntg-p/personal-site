import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { PostDataWithId } from '../lib/common'
import TagList from '../components/tag-list'
import { listItem } from './project-card.css'
import { thumbnail, lightText } from '../styles/utils.css'

const Project: FC<{ project: PostDataWithId }> = ({ project }) => {
  const { id, title, date, tags, excerpt, images } = project;
  const [image] = images || []

  return (
    <Link href={`/projects/${id}`}>
      <li
        className={listItem}
        >
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
          <div
            style={{
              width: '100%'
            }}
          >
            {excerpt && <p><small>{excerpt}</small></p>}
          </div>

          {image &&
            <div
              className={thumbnail}
            >
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
