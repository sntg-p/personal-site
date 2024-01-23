import { ComponentType, ReactNode } from "react"

declare module 'react-responsive-masonry' {
  export const ResponsiveMasonry: ComponentType<{
    columnsCountBreakPoints: { [key: number]: number }
    children: ReactNode
  }>

  const Masonry: ComponentType<{
    columnsCount?: number
    gutter?: string
    children: ReactNode
  }>

  export default Masonry
}