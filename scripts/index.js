import { renderProduct, renderCartTotal } from './renderer.js'
import { calcCartTotal } from './calc.js'
import { products } from './constants.js'
import {
  autorun,
  reaction,
  when,
} from '../node_modules/mobx/dist/mobx.esm.development.js'
import { store } from './store.js'

autorun(() => {
  store.products.forEach(renderProduct)
})

autorun(() => {
  store.products.forEach(renderProduct)
})

autorun(() => {
  renderCartTotal(calcCartTotal(store.products))
})

document.querySelector('.header').addEventListener('click', () => {
  //! TODO: Increase counter
})
