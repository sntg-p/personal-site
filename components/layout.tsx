import { FC } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Arrow from "../public/icons/arrow_forward_24dp.svg";
import { colorInherit, fullWidth } from '../styles/utils.css';
import { backToHome, container, header, headerLeft, headerRight, headerSm, navMenu, seeProjectsButton, subtitle, title, titleSm } from './layout.css';

const name = 'Santiago Podestá'
const description = 'Full-stack Dev · Tinkerer · Learner'
export const siteTitle = 'Santiago Podestá'

const scrollToProjects = () => {
  document
    .querySelector('#projects')
    ?.scrollIntoView({ behavior: 'smooth' })
}

const SeeProjectsButton = () => (
  <a onClick={scrollToProjects}>
    <div className={seeProjectsButton}>
      <div style={{
        display: 'inline-flex',
        alignSelf: 'center'
      }}>
        <Arrow style={{
          height: '1em',
          width: '1em',
          top: '.125em',
          position: 'relative'
        }}/>
      </div>
      &nbsp;See my work
    </div>
  </a>
  // </Link>
)

const Layout: FC<{ home?: boolean }> = ({ children, home }) => {
  return (
    <div className={container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {home ? <HeroHeader /> : <SmallHeader />}

      <main>{children}</main>

      {!home && (
        <div className={backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <Footer/>
    </div>
  )
}

export default Layout

const scrollToFooter = () => {
  document
    .querySelector('#footer')
    ?.scrollIntoView({ behavior: 'smooth' })
}

export const NavMenu: FC<React.HTMLProps<HTMLDivElement>> = ({ className, style, ...props }) => (
  <div {...props}
    style={style}
    className={`${navMenu} ${className}`}
  >
    <Link href="/">About</Link> · <Link href="/projects">Projects</Link> · <Link href="mailto:santiagolp98@gmail.com">Contact</Link> · <Link href="https://github.com/sntg-p">GitHub</Link>
  </div>
)

export const SmallHeader: FC = () => (
  <header className={headerSm}>
    <Link href="/">
      <a className={`${colorInherit} ${titleSm}`}>{name}</a>
    </Link>

    <div className={fullWidth}/>

    <NavMenu/>
  </header>
)

export const HeroHeader: FC = () => (
  <>
    <NavMenu style={{
      position: 'relative',
      top: '2.28rem',
      textAlign: 'end'
    }}/>

    <header className={header}>
      <div className={headerLeft}>
        <h1 className={title}>{name}</h1>

        <h1 className={subtitle}>{description}</h1>
      </div>

      <aside className={headerRight}>
        <SeeProjectsButton/>
      </aside>
    </header>
  </>
)

export const Footer: FC = () => (
  <footer id="footer">
    <hr/>
    asdf
  </footer>
)