export default {
  GET_CHILDREN_LIST(state) {
    return state.childrenList
  },
  GET_CHILDREN_NAME_FROM_LIST: state => index => {
    return state.childrenList[index].name
  },
  GET_CHILDREN_AGE_FROM_LIST: state => index => {
    return state.childrenList[index].age
  },

  GET_USER_NAME(state) {
    return state.user.name.trim()
  },
  GET_USER_AGE(state) {
    return state.user.age.trim()
  },
}