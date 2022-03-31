<template>
  <div class="header__wrapper">
    <div class="header">
      <div class="header__logo">
        <img :src="logo" alt="logo">
      </div>
      <div class="header__links">
        <router-link class="header__link" to="/">
          Форма
        </router-link>
        <router-link class="header__link" to="/preview">
          Превью
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    logo: require('@/assets/svg/logo.svg')
  })
}
</script>


<style lang="scss" scroped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media ($mobile) {
    justify-content: space-between;
  }
  &__wrapper {
    padding: 0 92px;
    height: 76px;
    position: relative;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
    
    @media ($mobile) {
      padding: 0 30px;
    }
  }

  &__links {
    justify-self: center;
    width: 100%;

    @media ($mobile) {
      justify-self: initial;
      width: initial;
    }
  }

  &__link {
    font-family: 'Montserrat-Regular';
    color: $gray;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    margin: 0 12px;

    transition: color 0.2s;
    
    @media ($mobile) {
      font-size: 12px;
      margin: 0 6px;  
    }
    &:hover {
      color: $black;
    }
  }
  &__logo>img {
    @media ($mobile) {
      width: 80%;
    }
  }
}


</style>