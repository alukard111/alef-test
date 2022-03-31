<template>
  <div class="btn-primary__wrapper">
    <button class="btn-primary" @click="$emit('click')">
      {{ this.btnText }}
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
.btn-primary {
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  line-height: 24px;
  
  max-width: 118px;
  max-height: 44px;
  width: 100%;
  height: 100%;

  background: $blue;
  border-radius: 100px;
  border: none;
  color: $white;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;


  transition: background-color 0.1s;
  
  &:hover {
    background-color: $primaryHover;
  }
  &:active {
    background-color: $primaryActive;
  }
  &:focus {
    border: 2px solid $blackOpacity;
  }
  
  @media ($mobile) {
    font-size: 12px;
  }
}

</style>"