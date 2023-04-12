import Link from "next/link";
import React, { FC } from "react";
import { lightText } from "../styles/utils.css";
import { listItem2 } from './tag-list.css'

interface TagListProps {
  tags: string[]
}

const TagList: FC<TagListProps> = ({ tags }) => (
  <>
    {tags?.map(tag => (
      <Link href={`/projects/tags/${tag}`} key={tag} legacyBehavior>
        <span> <a className={`${listItem2} ${lightText}`}>{tag}</a></span>
      </Link>
    ))}
  </>
)

export default TagList