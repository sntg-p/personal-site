import { style } from '@vanilla-extract/css'

export const headingXl = style({
  fontSize: '2rem',
  lineHeight: 1.3,
  fontWeight: 800,
  letterSpacing: '-0.05rem',
  margin: '1rem 0',
})

export const headingLg = style({
  fontSize: '1.5rem',
  lineHeight: 1.4,
  margin: '1rem 0',
})

export const colorInherit = style({
  color: 'inherit'
})

export const padding1px = style({
  paddingTop: '1px'
})

export const lightText = style({
  color: 'hsla(0, 0%, 100%, 0.54)'
})

export const thumbnail = style({
  display: 'flex',
  overflow: 'auto',
  borderRadius: '.5rem',
  width: '64px',
  margin: '1rem 0',
})

export const fullWidth = style({
  width: '100%'
})
