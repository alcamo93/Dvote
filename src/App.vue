<template>
  <div id="app">
    <img src="../public/img/dvote 54x54.png" aling="left" style="left:40px;max-width:100%;width:100px;height:100px;">
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Nosotros</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
