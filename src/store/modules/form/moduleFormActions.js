import { validationName, validationAge, isAgeStartedZero, errorTextLengthName } from '@/helpers/common.js'

export default {
  async VALIDATION({dispatch, commit, state} ) {
    let statusChildValidate = true
    const validationStateUserName = await dispatch('VALIDATION_USER_NAME')
    const validationStateUserAge = await dispatch('VALIDATION_USER_AGE')
    commit('SET_USER_MESSAGE_ERROR_NAME')
    commit('SET_USER_MESSAGE_ERROR_AGE')

    for ( const index in state.childrenList ) {
      statusChildValidate = await dispatch('VALIDATION_CHILDREN_NAME', { id: index }) && statusChildValidate
      statusChildValidate = await dispatch('VALIDATION_CHILDREN_AGE', { id: index }) && statusChildValidate
      commit('SET_CHILDREN_MESSAGE_ERROR_NAME', { id: index })
      commit('SET_CHILDREN_MESSAGE_ERROR_AGE', { id: index })
    }

    return validationStateUserName && statusChildValidate && validationStateUserAge 
  },

  VALIDATION_CHILDREN_AGE({ commit ,state }, payload) {
    let stateValidate = true
    const onErrorOffSuccessAge = (id) => {
      commit('SET_CHILDREN_AGE_ERROR_TRUE', { id: id})
      commit('SET_CHILDREN_AGE_SUCCESS_FALSE', { id: id})
    }

    if (!Boolean(state.childrenList[payload.id].age.trim().length)) {
      onErrorOffSuccessAge(payload.id)
      stateValidate = false
    } else if (!validationAge(state.childrenList[payload.id].age.trim())) {
      onErrorOffSuccessAge(payload.id)
      stateValidate = false
    } else if (isAgeStartedZero(state.childrenList[payload.id].age.trim())) {
      onErrorOffSuccessAge(payload.id)
      stateValidate = false
    }

    if (stateValidate) { 
      commit('SET_CHILDREN_AGE_ERROR_FALSE', { id: payload.id})
      commit('SET_CHILDREN_AGE_SUCCESS_TRUE', { id: payload.id})
    }
    return stateValidate
  },

  VALIDATION_CHILDREN_NAME({commit ,state }, payload) {
    let stateValidate = true
    const onErrorOffSuccessName = (id) => {
      commit('SET_CHILDREN_NAME_ERROR_TRUE', { id: id })
      commit('SET_CHILDREN_NAME_SUCCESS_FALSE', { id: id})
    }
    
    if (!Boolean(state.childrenList[payload.id].name.trim().length)) {
      stateValidate = false
      onErrorOffSuccessName(payload.id)
    } else if (!errorTextLengthName(state.childrenList[payload.id].name)) {
      onErrorOffSuccessName(payload.id)
      stateValidate = false
    } else if (!validationName(state.childrenList[payload.id].name)) {
      onErrorOffSuccessName(payload.id)
      stateValidate = false
    }

    if (stateValidate) { 
      commit('SET_CHILDREN_NAME_ERROR_FALSE', { id: payload.id})
      commit('SET_CHILDREN_NAME_SUCCESS_TRUE', { id: payload.id})
    }
    return stateValidate
  },

  VALIDATION_USER_NAME ({ commit, state })  {
    let stateValidate = true
    const onErrorOffSuccessName = () => {
      commit('SET_USER_NAME_ERROR_TRUE')
      commit('SET_USER_NAME_SUCCESS_FALSE')
    }

    if (!Boolean(state.user.name.trim().length)) {
      stateValidate =  false
      onErrorOffSuccessName()
    } else if (!errorTextLengthName(state.user.name.trim())) {
      stateValidate = false
      onErrorOffSuccessName()
    } else if (!validationName(state.user.name.trim())) {
      stateValidate = false
      onErrorOffSuccessName()
    }

    if (stateValidate) { 
      commit('SET_USER_NAME_ERROR_FALSE')
      commit('SET_USER_NAME_SUCCESS_TRUE')
    }
    return stateValidate
  },

  VALIDATION_USER_AGE({ commit, state }) {
    let stateValidate = true
    const onErrorOffSuccessAge = () => {
      commit('SET_USER_AGE_ERROR_TRUE')
      commit('SET_USER_AGE_SUCCESS_FALSE')
    }

    if (!Boolean(state.user.age.trim().length)) {
      onErrorOffSuccessAge()
      stateValidate = false
    } else if (!validationAge(state.user.age.trim())) {
      onErrorOffSuccessAge()
      stateValidate = false
    } else if (isAgeStartedZero(state.user.age.trim())) {
      onErrorOffSuccessAge()
      stateValidate = false
    }

    if (stateValidate) { 
      commit('SET_USER_AGE_ERROR_FALSE')
      commit('SET_USER_AGE_SUCCESS_TRUE')
    }

    return stateValidate
  },
}