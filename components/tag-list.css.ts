import { style } from '@vanilla-extract/css'

export const tagItem = style({
  display: 'inline',
  background: 'hsl(0, 0%, 100%, .06)',
  borderRadius: '4px',
  padding: '0.5ch',
  margin: '0',
  cursor: 'pointer',
  ':hover': {
    background: 'hsl(var(--accent-color-value), .12)',
  }
})
