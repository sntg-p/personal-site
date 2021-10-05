import { FC } from 'react'

import { PostDataWithId } from '../lib/common'
import Project from './project-card'

import { list } from './project-list.css'

interface ProjectListProps extends React.HTMLProps<HTMLUListElement> {
  projects: PostDataWithId[]
}

const ProjectList: FC<ProjectListProps> = ({ projects, className, ...props }) => (
  <ul
    className={`${list} ${className}`}
    {...props}
  >
    {projects.map((project) =>
      <Project project={project} key={project.id} />
    )}
  </ul>
)

export default ProjectList
