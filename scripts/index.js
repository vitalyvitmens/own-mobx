import { store } from './store.js'
import { renderProduct, renderCartTotal } from './renderer.js'
import { autorun } from '../node_modules/mobx/dist/mobx.esm.development.js'

autorun(() => {
  console.log('#### renderProduct')
  store.products.forEach(renderProduct)
})

autorun(() => {
  console.log('#### renderCartTotal')
  renderCartTotal(store.total)
})

document.querySelector('.header').addEventListener('click', () => {
  store.increaseHeaderClicks()
  console.log('#### store.headerClicks', store.headerClicks)
})
