import Vue from 'vue'

const mutations = {
  setId (state, id) {
    state.id = id
  },
  setName (state, name) {
    state.name = name
  },
  // Objects
  setObjects (state, objects) {
    state.objects = objects
  },
  addObject (state, object) {
    // We need to use Vue.set for Vue to notice new properties.
    // See https://vuejs.org/v2/api/#Vue-set
    Vue.set(state.objects, object.id, object)
  },
  deleteObject (state, objectId) {
    // We need to use Vue.delete for Vue to notice the removed property
    // See https://vuejs.org/v2/api/#Vue-delete
    Vue.delete(state.objects, objectId)
  },
  // Children
  addChild (state, { childId, containerId }) {
    // If the containerId is the documentId we add the child into the document children
    if (containerId === state.id) {
      state.children.push(childId)
    } else {
      // Otherwise we add the child into the object with the given id
      state.objects[containerId].children.push(childId)
    }
  },
  insertChild (state, { childId, containerId, index }) {
    // If the containerId is the documentId we insert the child into the document children
    if (containerId === state.id) {
      state.children.splice(index, 0, childId)
    } else {
      // Otherwise we insert the child into the object with the given id
      state.objects[containerId].children.splice(index, 0, childId)
    }
  },
  removeChild (state, { containerId, index }) {
    // If the containerId is the documentId we remove the child from the document children
    if (containerId === state.id) {
      state.children.splice(index, 1)
    } else {
      // Otherwise we remove the child from the object with the given id
      state.objects[containerId].children.splice(index, 1)
    }
  },
}

export default mutations
