<template>
  <div class="btn-second__wrapper">
    <button 
      @click="$emit('click')"
      class="btn-second"
      :class="{ 'btn-second_disable': disableBtn }"
    >
      <img
        v-if="this.svgSrc" 
        :src="this.svgSrc"
        alt="svgImg"
        class="btn-second__img"
      >
      {{ this.btnText }}
    </button>
  </div>
</template>

<script>

export default {
  props: {
    svgSrc: {
      type: String,
      require: false,
      default: ''
    },
    btnText: {
      type: String,
      require: false,
      default: 'Кнопка'
    },
    disableBtn: {
      type: Boolean,
      require: false, 
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-second {
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  line-height: 24px;
  color: $blue;

  max-width: 204px;
  min-height: 44px;
  width: 100%;
  height: 100%;
  
  border-radius: 100px;
  border: 2px solid $blue;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.1s;

  &:focus {
    border: 2px solid $blackOpacity;
  }
  &:active {
    background-color: $secondFlatBtnHover;
  }

  @media ($mobile) {
    font-size: 12px;
    max-width: 125px;
    line-height: initial;
  }

  &__img {
    margin: 0 7px;
  }
}
.btn-second_disable {
  opacity: 0.56;
  cursor: not-allowed;
  &:focus {
    border: 2px solid $blue;
  }
  &:active {
    background-color: initial;
  }
}

// ДОБАВИТЬ ФЛАГ ДЛЯ ВКЛЮЧЕНИЯ/ВЫКЛЮЧЕНИЯ СТИЛЕЙ DISABLE

// .form__content-btn_disabled {
//   opacity: 0.56;
//   cursor: not-allowed;
// }


</style>