<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // this.$store.dispatch('dict/loadAll')

    function checkIE() {
      return (
          '-ms-scroll-limit' in document.documentElement.style &&
          '-ms-ime-align' in document.documentElement.style
      )
    }

    if (checkIE()) {
      window.addEventListener(
          'hashchange',
          () => {
            var currentPath = window.location.hash.slice(1)
            if (this.$route.path !== currentPath) {
              this.$router.push(currentPath)
            }
          },
          false
      )
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
  Microsoft YaHei, Arial, sans-serif;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #646464;
  font-weight: 400;
  height: calc(100vh);
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background-color: #ffffff;
  min-width: 1000px;
}

/*
@media only screen and (min-width: 1920px) {
  .container {
    max-width: 1800px !important;
  }
} */
.container {
  /* max-width: 99% !important; */
}
</style>
