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
  alignItems: 'baseline'
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
  fontSize: 24,
  lineHeight: '46px',
  fontWeight: 200,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
})

export const title = style({
  fontSize: 56,
  fontWeight: 200,
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
  fontWeight: 100,
  margin: 0
})

export const navMenu = style({
  fontSize: '.8rem',
  fontWeight: 200,
  color: 'hsla(0, 0%, 100%, 0.54)',
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
