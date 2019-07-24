const localStorageHelper = {
  localStorage: window.localStorage,
  getObject (key) {
    return JSON.parse(this.localStorage.getItem(key))
  },
  setObject (key, value) {
    const jsonString = JSON.stringify(value)
    this.localStorage.setItem(key, jsonString)
  },
  hasObject (key) {
    return this.getObject(key) !== null
  },
}

export default localStorageHelper
