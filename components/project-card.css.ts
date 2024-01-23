import { style } from '@vanilla-extract/css'

export const cardItem = style({
  position: 'relative',
  margin: 0,
  background: 'hsla(0, 0%, 100%, 0.04)',
  cursor: 'pointer',
  borderRadius: '.5rem',
  overflow: 'hidden',
  transition: 'transform .2s ease-out, background .15s ease-out',
  ':hover': {
    background: 'hsla(0, 0%, 100%, 0.08)',
    transform: 'scale(1.025)',
  },
})

export const cardTitle = style({
  transition: 'color .2s ease-out',
  selectors: {
    [`${cardItem}:hover &`]: {
      color: 'var(--accent-color)',
    }
  }
})

export const cardBody = style({
  fontFamily: 'JetBrains Mono',
  fontSize: '0.75rem',
})