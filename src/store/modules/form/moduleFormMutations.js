import { validationName, validationAge, isAgeStartedZero, errorTextLengthName, idRandom } from '@/helpers/common.js'

export default {
  // ==================== set name user ============================================
  SET_USER_NAME(state, userName) {
    state.user.name = userName
  },
  SET_USER_AGE(state, userAge) {
    state.user.age = userAge
  },
  
  // ====================== error/success USER NAME ================================
  SET_USER_NAME_ERROR_TRUE(state) {
    state.user.errorName.state = true
  },
  SET_USER_NAME_ERROR_FALSE(state) {
    state.user.errorName.state = false 
  },
  SET_USER_NAME_SUCCESS_TRUE(state) {
    state.user.successName = true
  },
  SET_USER_NAME_SUCCESS_FALSE(state) {
    state.user.successName = false 
  },

  // ================================ AGE ERROR USER =============================
  SET_USER_AGE_ERROR_TRUE(state) {
    state.user.errorAge.state = true
  },
  SET_USER_AGE_ERROR_FALSE(state) {
    state.user.errorAge.state = false
  },

  // =============================== SET AGE USER ================================
  SET_USER_AGE_SUCCESS_TRUE(state) {
    state.user.successAge = true
  },
  SET_USER_AGE_SUCCESS_FALSE(state) {
    state.user.successAge = false 
  },

  // ================== MESSAGE ERROR NAME USER ==================================
  SET_USER_MESSAGE_ERROR_NAME(state) {
    // пустое поле
    if (!Boolean(state.user.name.trim().length)) {
      state.user.errorName.errorMessage = state.errorMessage.faillingEmptyInput
    // не полное поле
    } else if (!errorTextLengthName(state.user.name.trim())) {
      state.user.errorName.errorMessage = state.errorMessage.faillingLengthName
    // проверка на валидность
    } else if (!validationName(state.user.name.trim())) {
      state.user.errorName.errorMessage = state.errorMessage.faillingValidateName
    } else {
      state.user.errorName.errorMessage = ''
    }
  },
  
  // ================== MESSAGE ERROR AGE USER ==========================
  SET_USER_MESSAGE_ERROR_AGE(state) {
    if (!Boolean(state.user.age.trim().length)) {
      state.user.errorAge.errorMessage = state.errorMessage.faillingEmptyInput
    } else if (!validationAge(state.user.age.trim())) {
      state.user.errorAge.errorMessage = state.errorMessage.faillingValidateAge
    } else if (isAgeStartedZero(state.user.age.trim())) {
      state.user.errorAge.errorMessage = state.errorMessage.faillingValidateZeroAge
    } else {
      state.user.errorAge.errorMessage = ''
    }
  },
  
   // ==================== set name childs ============================================
   SET_CHILDREN_NAME_FROM_LIST(state, payload) {
    state.childrenList[payload.index].name = payload.value
  },
  SET_CHILDREN_AGE_FROM_LIST(state, payload) {
    state.childrenList[payload.index].age = payload.value
  },

   // ========================== error/success CHILDREN NAME ===========================
  SET_CHILDREN_NAME_ERROR_TRUE(state, payload) {
    state.childrenList[payload.id].errorName.state = true
  },
  SET_CHILDREN_NAME_ERROR_FALSE(state, payload) {
    state.childrenList[payload.id].errorName.state = false
  },
  SET_CHILDREN_NAME_SUCCESS_TRUE(state, payload) {
    state.childrenList[payload.id].successName = true
  },
  SET_CHILDREN_NAME_SUCCESS_FALSE(state, payload) {
    state.childrenList[payload.id].successName = false
  },

   // ================================ AGE ERROR CHILD ========================
  SET_CHILDREN_AGE_ERROR_TRUE(state, payload) {
    state.childrenList[payload.id].errorAge.state = true
  },
  SET_CHILDREN_AGE_ERROR_FALSE(state, payload) {
    state.childrenList[payload.id].errorAge.state = false
  },

  // =============================== AGE SUCCESS CHILD  =======================
  SET_CHILDREN_AGE_SUCCESS_TRUE(state, payload) {
    state.childrenList[payload.id].successAge = true
  },
  SET_CHILDREN_AGE_SUCCESS_FALSE(state, payload) {
    state.childrenList[payload.id].successAge = false
  },

   // ================== MESSAGE ERROR NAME CHILD ==========================
  SET_CHILDREN_MESSAGE_ERROR_NAME(state, payload) {
    // пустое поле
    if (!Boolean(state.childrenList[payload.id].name.trim().length)) {
      state.childrenList[payload.id].errorName.errorMessage = state.errorMessage.faillingEmptyInput
      // не полное поле
    } else if (!errorTextLengthName(state.childrenList[payload.id].name.trim())) {
      state.childrenList[payload.id].errorName.errorMessage = state.errorMessage.faillingLengthName
      // проверка на валидность
    } else if (!validationName(state.childrenList[payload.id].name.trim())) {
      state.childrenList[payload.id].errorName.errorMessage = state.errorMessage.faillingValidateName
    } else {
      state.childrenList[payload.id].errorName.errorMessage = ''
    }
  },

   // ================== MESSAGE ERROR AGE CHILD  ==========================
  SET_CHILDREN_MESSAGE_ERROR_AGE(state, payload) {
    if (!Boolean(state.childrenList[payload.id].age.trim().length)) {
      state.childrenList[payload.id].errorAge.errorMessage = state.errorMessage.faillingEmptyInput
    } else if (!validationAge(state.childrenList[payload.id].age.trim())) {
      state.childrenList[payload.id].errorAge.errorMessage = state.errorMessage.faillingValidateAge
    } else if (isAgeStartedZero(state.childrenList[payload.id].age.trim())) {
      state.childrenList[payload.id].errorAge.errorMessage = state.errorMessage.faillingValidateZeroAge
    } else {
      state.childrenList[payload.id].errorAge.errorMessage = ''
    }
    
  },

  // ===================================== ADD CHILD IN LIST ==========================
  SET_CHILDREN_IN_LIST(state) {
    if (state.childrenList.length < 5) {
      let children = JSON.parse(JSON.stringify(state.childrenTemplate))
      children.id = idRandom()
      state.childrenList.push(children)
    }
  },
  DELETE_CHILDREN_FROM_LIST(state, index) {
    state.childrenList.splice([index], 1)
  }
}