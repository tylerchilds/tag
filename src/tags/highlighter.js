import tag from '../tag.js'
const highlighter = tag('highlighter')

highlighter.html((target) => {
  const color = target.getAttribute('color')

  if(!target.css) {
    target.css = `
      & {
        display: inline-block;
        position: relative;
        z-index: 1;
        white-space: nowrap;
      }

      &[color="${color}"]::before {
        background: ${color};
        border-radius: ${n(4, 0, 100, 'px')};
        content: '';
        inset: ${n(4, -.75, .1, 'rem')};
        position: absolute;
        opacity: ${n(1, .2, .35)};
        transform: rotate(${n(1, -7, 7, 'deg')}) scale(${n(1, .95, 1.1)});
      }

      & span {
        position: relative;
        z-index: 1;
      }
    `
    highlighter.css(target.css)
    target.html = `<span>${target.innerHTML}</span>`
  }

  return target.html
})

function n(times = 1, min = 0, max = 1, suffix = '') {
  return [...new Array(times)]
    .map(() => Math.random() * (max - min) + min)
    .map(x => `${x}${suffix}`)
    .join(' ')
}

