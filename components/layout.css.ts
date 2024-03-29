import { style } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: 'hsla(0, 0%, 13%, 0.7)',
  maxWidth: '1024px',
  minHeight: '100vh',
  padding: '0 64px 1rem',
  margin: '0 auto 0',
  '@media': {
    'screen and (max-width: 800px)': {
      padding: '0 32px 1rem',
    }
  },
})

export const header = style({
  display: 'flex',
  height: '100vh',
  flexDirection: 'row',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 800px)': {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
})

export const headerLeft = style({
  width: '100%',
  '@media': {
    'screen and (max-width: 800px)': {
      textAlign: 'center'
    }
  },
})

export const headerRight = style({
  textAlign: 'end',
})

export const headerSm = style({
  display: 'flex',
  padding: '1rem 0',
  fontSize: '.7rem',
  fontWeight: 200,
  color: 'hsla(0, 0%, 100%, 0.54)',
  whiteSpace: 'nowrap',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 800px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
})

export const backToHome = style({
  margin: '3rem 0 0'
})

export const seeProjectsButton = style({
  display: 'inline-block',
  background: 'transparent',
  height: 48,
  padding: '0 24px',
  borderRadius: 24,
  border: 'solid currentColor 2px',
  fontFamily: 'JetBrains Mono',
  fontSize: '24px',
  lineHeight: '46px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  color: 'var(--accent-color-transparent)',
  transition: 'color .15s ease-out',
  ':hover': {
    color: 'var(--accent-color)',
  }
})

export const title = style({
  fontSize: 56,
  fontWeight: 400,
  fontFamily: 'Iosevka',
  margin: 0,
})

export const titleSm = style([
  title,
  {
    fontSize: 36,
  }
])

export const subtitle = style({
  fontSize: 24,
  fontWeight: 200,
  fontFamily: 'JetBrains Mono',
  opacity: 0.54,
  margin: 0
})

export const navMenu = style({
  display: 'flex',
  gap: '.25rem',
  margin: 0,
  padding: 0,
  fontSize: '.8rem',
  fontFamily: 'JetBrains Mono',
  flexWrap: 'wrap',
  color: 'hsla(0, 0%, 100%, 0.54)',
})

export const navItem = style({
  selectors: {
    [`${navMenu} &`]: {
      display: 'inline',
    },
  }
})

export const navMenuLink = style({
  selectors: {
    [`${navMenu} &`]: {
      color: 'hsla(0, 0%, 100%, 0.54)',
    },
    [`${navMenu} &:hover`]: {
      color: 'var(--accent-color)',
      textDecoration: 'none'
    },
  }
})

export const footer = style({
  textAlign: 'center',
  paddingTop: '1rem'
})
