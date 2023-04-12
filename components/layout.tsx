import { FC } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { colorInherit, fullWidth } from '../styles/utils.css';
import { backToHome, container, footer, header, headerLeft, headerRight, headerSm, navMenu, navMenuLink, seeProjectsButton, subtitle, title, titleSm } from './layout.css';
import ArrowIcon from '../public/icons/arrow_forward_24dp.svg';
import GitHubIcon from '../public/icons/github_24dp.svg'
import ContactIcon from '../public/icons/email-outline_24dp.svg'
import AboutIcon from '../public/icons/information-outline_24dp.svg'
import ProjectsIcon from '../public/icons/folder-multiple-outline_24dp.svg'
import AngularIcon from '../public/icons/angular_24dp.svg'
import ReactIcon from '../public/icons/react_24dp.svg'
import AndroidIcon from '../public/icons/android_24dp.svg'
import NodeJsIcon from '../public/icons/nodejs_24dp.svg'
import DotNetIcon from '../public/icons/dotnet_24dp.svg'

const name = 'Santiago Podestá'
const description = 'Full-stack developer'
export const siteTitle = 'Santiago Podestá'

const Icons = [
  {
    name: 'Angular',
    icon: AngularIcon,
    tag: 'angular',
  },
  {
    name: 'React',
    icon: ReactIcon,
    tag: 'react',
  },
  {
    name: 'Node.js',
    icon: NodeJsIcon,
    tag: 'nodejs',
  },
  {
    name: '.NET',
    icon: DotNetIcon,
    tag: 'dotnet',
  },
  {
    name: 'Android',
    icon: AndroidIcon,
    tag: 'android',
  },
]

const scrollToProjects = () => {
  document
    .querySelector('#projects')
    ?.scrollIntoView({ behavior: 'smooth' })
}

export const Icon: FC<{ icon: any }> = ({ icon: Icon }) => (
  <div style={{
    display: 'inline-flex',
    alignSelf: 'center'
  }}>
    <Icon style={{
      height: '1em',
      width: '1em',
      top: '.125em',
      position: 'relative',
    }} />
  </div>
)

const SeeProjectsButton = () => (
  <a onClick={scrollToProjects}>
    <div className={seeProjectsButton}>
      <Icon icon={ArrowIcon}/>
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
            ← Back to home
          </Link>
        </div>
      )}

      <Footer/>
    </div>
  );
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
    <Link href="/" className={navMenuLink}><Icon icon={AboutIcon} />About</Link> · <Link href="/projects" className={navMenuLink}><Icon icon={ProjectsIcon} />Projects</Link> · <Link href="mailto:santiagolp98@gmail.com" className={navMenuLink}><Icon icon={ContactIcon} />Contact</Link> · <Link href="https://github.com/sntg-p" className={navMenuLink}>
    <Icon icon={GitHubIcon} />GitHub</Link>
  </div>
)

export const SmallHeader: FC = () => (
  <header className={headerSm}>
    <Link href="/" className={`${colorInherit} ${titleSm}`}>
      {name}
    </Link>

    <div className={fullWidth}/>

    <NavMenu/>
  </header>
)

export const HeroHeader: FC = () => (
  <>
    <NavMenu style={{
      position: 'relative',
      top: '2.15rem',
      textAlign: 'end'
    }}/>

    <header className={header}>
      <div className={headerLeft}>
        <h1 className={title}>{name}</h1>

        <h1 className={subtitle}>{description}</h1>
      </div>

      <aside className={headerRight} style={{
        marginTop: '1.5rem',
      }}>
        <SeeProjectsButton/>

        <div className={navMenu} style={{
          fontSize: '24px',
          display: 'flex',
          justifyContent: 'center',
          gap: '.25rem',
          marginTop: '.5rem',
        }}>
          {Icons.map(({ name, icon, tag }) => (
            (<Link
              href={`/projects/tags/${tag}`}
              key={tag}
              className={navMenuLink}
              title={name}>

              <Icon icon={icon} />

            </Link>)
          ))}
        </div>
      </aside>
    </header>
  </>
)

export const Footer: FC = () => (
  <footer className={footer}>
    <hr/>
    <small>Made with <span role="img" aria-label="heart">❤️</span> using Next.js and TypeScript.</small>
  </footer>
)