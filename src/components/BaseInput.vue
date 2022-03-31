<template>
  <div 
    class="base-input__wrapper"
    :class="{ 'base-input__wrapper_error': error }"
  >
    <div 
      class="base-input"
      :class="{
        'base-input_error' : error,
        'base-input_success' : success
      }"
    >
      <div class="base-input__container">
        <label class="base-input__label">
          {{ labelText }}
          <input 
            type="text"
            class="base-input__text"
            :placeholder="placeholder"
            :class="{
              'base-input_error' : error,
              'base-input_success' : success
            }"
            :value="inputValue"
            @input="$emit('input', $event.target.value)"
          >
        </label>
        <img 
          v-if="success"
          class="base-input_success-img"
          :src="svgImg"
          alt="okey">
      </div>
    </div>
    <span
      v-if="error" 
      class="base-input__error-text"
    >
      {{ textError }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    inputValue: {
      type: String,
      require: false,
      default: ''
    },
    labelText: {
      type: String,
      require: false,
      default: 'Лэйбл'
    },
    placeholder: {
      type: String,
      require: false,
      default: 'Введите текст'
    },
    textError: {
      type: String,
      require: false,
      default: 'Ошибка ввода'
    },
    error: {
      type: Boolean,
      require: false,
      default: false
    },
    success: {
      type: Boolean,
      require: false,
      default: false
    }
  },

  data: () => ({
    svgImg: require('@/assets/svg/success.svg'),
  })


}
</script>

<style lang="scss" scoped>
.base-input:hover {
  box-shadow: 0px 4px 4px $gradient;
}
.base-input {
  border-radius: 4px;
  margin-bottom: 8px;
  border: 1px solid $lightGray;
  &__wrapper_error {
    margin-bottom: 16px;
  } 
  &_error {
    background: $errorBg;
    border: none;
  }

  &_success {
    background: $successBg;
    border: none;
    
    &-img {
      position: absolute;
      right: 0;
      top: 0;
      margin: 25px;
    }
  }

  &__error-text {
    font-family: 'Montserrat-Regular';
    font-size: 14px;
    line-height: 24px;
    color: $errorText;
    max-width: 260px;
    text-align: left;
  }

  &__container {
    width: 100%;
    padding: 8px 16px 6px;
    position: relative
  }

  &__label {
    font-family: 'Montserrat-Regular';
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    
    @media ($mobile) {
      font-size: 12px;
    }
  }

  &__text {
    width: 100%;
    outline: none;
    border: none;
    font-family: 'Montserrat-Regular';
    font-size: 14px;
    line-height: 24px;
    padding: 0;

    @media ($mobile) {
      font-size: 12px;
    }
  }
}



</style>