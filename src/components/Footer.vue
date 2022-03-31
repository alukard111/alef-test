<template>
  <div class="footer__wrapper">
    <div class="footer">
      <span class="footer__text">
        all rights reserved
      </span>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.footer {
  margin: auto;
  &__wrapper {
    width: 100%;
    height: 76px;
    display: flex;
    align-items: center;
  }

  &__text {
    font-family: 'Montserrat-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    @media ($mobile) {
      font-size: 11px;
    }
  }
}

</style>