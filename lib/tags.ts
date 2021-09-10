import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getProjectsData, sortProjectData } from './projects';
import { PostData, PostDataWithId } from './common';

const projectsDir = path.join(process.cwd(), 'projects')

export function getSortedProjectsData(): PostDataWithId[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDir)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(projectsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { excerpt, data: dataObj } = matter(fileContents, { excerpt: true });
    const data = dataObj as unknown as PostData;

    const post: PostDataWithId = {
      id,
      excerpt,
      ...data
    };

    return post;
  })

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllTags() {
  const fileNames = fs.readdirSync(projectsDir)

  const tagSet = fileNames.reduce((tagSet, fileName) => {
    const fullPath = path.join(projectsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { tags } = matter(fileContents).data as unknown as PostData

    if (tags)
      for (const tag of tags)
        tagSet.add(tag)

    return tagSet
  }, new Set<string>());

  return Array
    .from(tagSet)
    .map(tag => ({ params: { tag } }))
}

export async function getProjectPostsWithTag(tag: string): Promise<PostDataWithId[]> {
  const content = getProjectsData()
  const data = sortProjectData(content)
    .filter(post => post.tags?.includes(tag))

  return data;
}
