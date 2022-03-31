<template>
  <div class="btn-flat__wrapper">
    <button class="btn-flat" @click="$emit('click')">
      {{ btnText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      require: false,
      default: 'Кнопка'
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-flat {
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  line-height: 24px;
  color: $blue;

  width: 100%;
  height: 100%;

  background: none;
  border: none;
  border-radius: 4px;

  transition: background-color 0.1s;
  
  &:focus {
    border: 2px solid $blackOpacity;
  }
  &:active {
    background-color: $secondFlatBtnHover;
  }


  &__wrapper {
    max-width: 80px;
    width: 100%;
    height: 32px;

    @media ($mobile) {
      font-size: 12px;
      max-width: 110px;
      height: 46px;
      width: 100%;
    }
  }
}

</style>