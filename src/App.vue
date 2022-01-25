<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-avatar>
        <img alt="FTT Logo" src="/img/ftt_logo.png" />
      </q-avatar>
      Fast Track Talent
      <!-- hacer vuemobile detect aqui -->

      <q-tabs align="left">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/sobre" label="Sobre Nosotros" />
        <q-route-tab to="/servicios" label="Servicios" />
        <q-route-tab to="/eventos" label="Eventos Y Blogs" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <keep-alive>
        <router-view v-slot="{ Component }">
          <transition name="slide">
            <component :is="Component" />
          </transition>
        </router-view>
      </keep-alive>
    </q-page-container>
    <!-- Y terminalo aqui -->
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
