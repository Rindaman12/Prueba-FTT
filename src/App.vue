<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
          <q-avatar>
            <img src="/img/ftt_logo.png">
          </q-avatar>
      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About" />
      </q-tabs>
    </q-header>

    //Hacer vuemobile detect aqui
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>

#app {
  font-family: Avant Garde Gothic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
