<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <router-view/>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">


// Fonts
@font-face {
  font-family: 'Montserrat-Regular';
  src: url('~@/assets/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat-Medium';
  src: url('~@/assets/fonts/Montserrat/Montserrat-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat-Bold';
  src: url('~@/assets/fonts/Montserrat/Montserrat-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

* {
  box-sizing: border-box;
}

#app {
  width: 100%; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  position: relative;
}

footer {
  height: 100%;
  width: 100%;
  margin-top: auto;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}


</style>
