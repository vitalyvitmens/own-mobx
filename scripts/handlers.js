import { products, selectors } from './constants.js'
import { populateProductCard, renderCartTotal } from './renderer.js'
import { calcCartTotal } from './calc.js'
import { store } from './store.js'
import { action } from '../node_modules/mobx/dist/mobx.esm.development.js'

export function addHandlers(card) {
  card
    .querySelector(selectors.increaseQuantityButton)
    .addEventListener('click', handleIncreaseQuantity)
  card
    .querySelector(selectors.decreaseQuantityButton)
    .addEventListener('click', handleDecreaseQuantity)
}

function handleIncreaseQuantity(e) {
  const card = e.target.closest(selectors.product)
  const id = Number(card.dataset.id)

  store.increaseQuantity(id)
}

function handleDecreaseQuantity(e) {
  const card = e.target.closest(selectors.product)
  const id = Number(card.dataset.id)

  store.decreaseQuantity(id)
}
