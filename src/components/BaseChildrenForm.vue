<template>
  <div class="base-children-form__wrapper">
    <div class="base-children-form">
      <div class="base-children-form__item">
        <BaseInput 
          v-model="inputValueNameChildren"
          :inputValue="inputValueNameChildren"
          :labelText="labelName"
          :placeholder="placeholderName"
          :textError="textErrorName"
          :error="errorName"
          :success="successName"
        />
      </div>
      <div class="base-children-form__item">
        <BaseInput 
          v-model="inputValueAgeChildren"
          :inputValue="inputValueAgeChildren"
          :labelText="labelAge"
          :placeholder="placeholderAge"
          :textError="textErrorAge"
          :error="errorAge"
          :success="successAge"
        />
      </div>
      <div class="base-children-form__item">
        <BtnFlat 
          @click="deleteChild"
          :btnText="btnName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

import BaseInput from "./BaseInput.vue" 
import BtnFlat from "./BtnFlat.vue"

export default {
  components: {
    BaseInput,
    BtnFlat
  },
  props: {
    index: {
      type: Number,
      require: true,
      default: null
    },
    textErrorName: {
      type: String,
      require: false,
      default: 'Ошибка ввода'
    },
    textErrorAge: {
      type: String,
      require: false,
      default: 'Ошибка ввода'
    },
    errorName: {
      type: Boolean,
      require: false,
      default: false
    },
    errorAge: {
      type: Boolean,
      require: false,
      default: false
    },
    successName: {
      type: Boolean,
      require: false,
      default: false
    },
    successAge: {
      type: Boolean,
      require: false,
      default: false
    },
  },

  data: () => ({
    labelAge: 'Возраст ребенка',
    labelName: 'Имя ребенка',
    placeholderAge: 'Введите возраст',
    placeholderName: 'Введите имя',
    btnName: 'Удалить'
  }),

  computed: {
    ...mapGetters('form/', {
      getChildrenName: 'GET_CHILDREN_NAME_FROM_LIST',
      getChildrenAge: 'GET_CHILDREN_AGE_FROM_LIST'
    }),

    inputValueNameChildren: {
      get () {
        return this.getChildrenName(this.index)
      },
      set (value) {
        this.setChildName({ value: value, index: this.index })
      }
    },
    inputValueAgeChildren: {
      get () {
        return this.getChildrenAge(this.index)
      },
      set (value) {
        this.setChildAge({ value: value, index: this.index })
      }
    },
  },

  methods: {
    ...mapMutations('form/', {
      deleteFromListChildren: 'DELETE_CHILDREN_FROM_LIST',
      setChildName: 'SET_CHILDREN_NAME_FROM_LIST',
      setChildAge: 'SET_CHILDREN_AGE_FROM_LIST'
    }),
    deleteChild() {
      this.deleteFromListChildren(this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-children-form {
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media ($mobile) {
    align-items: center;
    flex-direction: column;
  }

  &__wrapper {
    width: 100%;
  }

  &__item {
    &:not(:nth-child(3)) {
      max-width: 260px;
      min-height: 56px; 
      margin-right: 18px;
      width: 100%;
      @media ($mobile) {
        margin-right: initial;
      }
      @media ($mobile) {
        max-width: 100%;
        min-height: 56px;
        width: 100%;
      }
    }
    &:nth-child(3) {
      max-width: 80px;
      width: 100%;
      margin-top: 20px;
      @media ($mobile) {
        max-width: 110px;
        margin-top: 0;
      }
    }
  }
}


</style>