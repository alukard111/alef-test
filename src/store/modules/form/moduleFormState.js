export default {
  errorMessage: {
    faillingLengthName: 'Длинна имени должна быть не меньше 2 символов',
    faillingValidateName: 'Имя может состоять только из а-я А-Я Ёё -',
    faillingEmptyInput: 'Поле должно быть заполнено',

    faillingValidateAge: 'Возвраст может состоять только из цифр 0-9 и не привышать 99',
    faillingValidateZeroAge: 'Возраст не может начинатся с 0'
  },

  user: {
    name: '',
    age: '',
    errorName: {
      state: false,
      errorMessage: '',
    },
    errorAge: {
      state: false,
      errorMessage: '',
    },
    successName: false,
    successAge: false,
  },

  childrenTemplate: {
    name: '',
    age: '',
    id: '',
    errorName: {
      state: false,
      errorMessage: '',
    },
    errorAge: {
      state: false,
      errorMessage: '',
    },
    successName: false,
    successAge: false,
  },

  childrenList: []
}