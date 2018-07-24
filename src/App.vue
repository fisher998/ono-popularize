<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      clientWidth: null,
      clientHeight: null
    };
  },
  mounted () {
    this.clientWidth = `${document.documentElement.clientWidth}`;
    this.clientHeight = `${document.documentElement.clientHeight}`;
    var per = this.clientWidth / 750;
    document.documentElement.style.fontSize = per * 100 + 'px';
    window.onresize = () => {
      this.clientWidth = `${document.documentElement.clientWidth}`;
      this.clientHeight = `${document.documentElement.clientHeight}`;
      var per = this.clientWidth / 750;
      document.documentElement.style.fontSize = per * 100 + 'px';
    };
  }
}
</script>

<style>
@import './styles/index.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
