import { products } from './constants.js'
import { makeAutoObservable } from '../node_modules/mobx/dist/mobx.esm.development.js'

export const store = makeAutoObservable({
  products,
})
