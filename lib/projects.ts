import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostData, PostDataWithId } from './common'

const projectsDir = path.join(process.cwd(), 'projects')

const mdImagesRegExp = /!\[(.*?)\]\((.*?)\)/;

function findImages(markdown: string) {
  const result = mdImagesRegExp.exec(markdown)

  if (!result)
    return null

  const asd: { alt: string, src: string }[] = [];
  let image: any;

  for (let i = 0; i <= result.length; i++) {
    const element = result[i];
    const a = i % 3;

    if (a === 0) {
      if (image)
        asd.push(image)

      image = {}
    } else if (a === 1) {
      image.alt = element
    } if (a === 2) {
      image.src = element
    }
  }

  return asd
}

export function getProjectsData(): PostDataWithId[] {
  const fileNames = fs.readdirSync(projectsDir)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(projectsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { excerpt, data: dataObj, content } = matter(fileContents, { excerpt: true });
    const data = dataObj as unknown as PostData;
    const images = findImages(content)

    const post: PostDataWithId = {
      id,
      excerpt,
      images,
      ...data
    };

    return post;
  })

  return allPostsData
}

export function getSortedProjectsData(): PostDataWithId[] {
  const allPostsData = getProjectsData()
  return sortProjectData(allPostsData)
}

export function sortProjectData(data: PostDataWithId[]) {
  return data.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDir)

  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }));
}

export async function getProjectData(id: string): Promise<PostDataWithId> {
  const fullPath = path.join(projectsDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { content, data: dataObj } = matter(fileContents);
  const data = dataObj as unknown as PostData;

  return {
    id,
    content,
    ...data
  }
}
