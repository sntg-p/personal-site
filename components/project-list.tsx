import { FC } from 'react'
import Masonry from "react-responsive-masonry"
import { PostDataWithId } from '../lib/common'
import Project from './project-card'

interface ProjectListProps extends React.HTMLProps<HTMLUListElement> {
  projects: PostDataWithId[]
}

const ProjectList: FC<ProjectListProps> = ({ projects, className, ...props }) => (
  <Masonry
    columnsCount={2}
    gutter='1rem'
    {...props}
  >
    {projects.map((project) =>
      <Project project={project} key={project.id} />
    )}
  </Masonry>
)

export default ProjectList
