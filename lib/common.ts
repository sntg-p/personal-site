export interface PostData {
  title: string
  excerpt?: string
  date: string
  tags: string[]
	content?: string
  images?: any
}

export type WithId<T> = T & { id: string }
export type PostDataWithId = WithId<PostData>
