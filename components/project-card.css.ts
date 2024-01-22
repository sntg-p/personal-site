import { style } from '@vanilla-extract/css'

export const listItem = style({
  margin: 0,
  padding: '0 1rem',
  background: 'hsla(0, 0%, 100%, 0.04)',
  cursor: 'pointer',
  borderRadius: '.5rem',
})

export const listItem2 = style({
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
