import tag from '../../mod.js'

const TILES = {
  welcome,
  name,
  wisdom,
  rejoin,
  l8r
}

const game = tag('game-qftgu', { tile: 'welcome' })

export default function start() {
  const { paused } = game.get()
  if(paused) game.set({ paused: false, tile: 'rejoin' })
  requestAnimationFrame(gameLoop)
}

function gameLoop() {
  const { tile, paused } = game.get()

  if(paused) return

  TILES[tile] ? TILES[tile]() : error()
  requestAnimationFrame(gameLoop)
}

function error() {
  const tile = prompt('Pirate: Upon which tile shall ye be placed?', 'welcome')
  game.set({ tile })
}

function welcome() {
 alert('It is dangerous to go alone.');
 game.set({ tile: 'name' }) 
}

function name() {
  const name = prompt('What is your name?', 'Zelda');
  game.set({ tile: 'wisdom', name }) 
}

function wisdom() {
  const { name } = game.get()
  const dumb = confirm(`A word of advice, ${name}. The wise simply give up.`)
  dumb ? null : game.set({ paused: true, tile: 'rejoin' })
}

function rejoin() {
  const { name } = game.get()
  alert(`Welcome back, ${name}`);
  game.set({ tile: 'l8r' }) 
}

function l8r(){
  alert('sry. m04r l8r...')
  game.set({ tile: 'error' }) 
}
