import MisButton from './button/index.vue'

const components = [
  MisButton
]

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  MisButton
}
