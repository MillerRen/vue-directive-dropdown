const DROPDOWN_HANDLER = '__dropdown_handler'
const DOCUMENT_DROPDOWN_HANDLER = '__document_dropdown_handler'

export default {
  bind (el, binding, vnode) {
    var className = binding.value || 'open'
    el[DROPDOWN_HANDLER] = (e) => {
      e.stopPropagation()
      el.classList.toggle(className)
    }
    el[DOCUMENT_DROPDOWN_HANDLER] = (e) => {
      el.classList.remove(className)
    }
    el.addEventListener('click', el[DROPDOWN_HANDLER])
    document.addEventListener('click', el[DOCUMENT_DROPDOWN_HANDLER])
  },
  unbind (el, binding, vnode) {
    el.removeEventListener('click', el[DROPDOWN_HANDLER])
    document.removeEventListener('click', el[DOCUMENT_DROPDOWN_HANDLER])
  }
}
