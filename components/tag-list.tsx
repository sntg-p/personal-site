import Link from "next/link";
import React, { FC } from "react";
import { lightText } from "../styles/utils.css";
import { tagItem } from './tag-list.css'

interface TagListProps {
  tags: string[]
}

const TagList: FC<TagListProps> = ({ tags }) => (
  <>
    {tags?.map(tag => (
      <Link href={`/projects/tags/${tag}`} key={tag} legacyBehavior>
        <span> <a className={`${tagItem} ${lightText}`}>{tag}</a></span>
      </Link>
    ))}
  </>
)

export default TagList