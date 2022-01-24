<template>
  <div class="bg-image">
    <div class="main">
      <div class="headers">
        <h2 class="text-primary" style="font-weight: bold">FAST TRACK TALENT</h2>
        <h3 class="text-white">Llevandote Mas Cerca Al Talento De Verdad</h3>
        <h5>
          FAST TRACK TALENT, la compañia por defecto para buscar empleo y
          contratar talento de trabajo remoto a nivel nacional e internacional,
          ya esta disponible. La red de emprendimiento que consolida un
          portafolio de 48 empresas y 94 emprendedores en el país.
        </h5>

        <div>
          <q-btn class="buttons" color="primary" size="24px">
            <router-link to="/about">
              <i class="far fa-address-card" style="padding-right: 10px"></i>
              Sobre Nosotros
            </router-link>
          </q-btn>

          <q-btn class="buttons" color="secondary" size="24px">
            <router-link to="/Contact">
              <i class="far fa-envelope" style="padding-right: 10px"></i>
              Contactenos
            </router-link>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2,
h3 {
  margin: 4px;
  padding: 4px;
}
h5 {
  margin: 4px;
  padding: 4px;
  align-self: normal;
  justify-self: normal;
  color: rgb(228, 228, 228);
}
.main {
  height: 100%;
  max-width: 80%;
  width: 80%;
  padding: 60px;
  margin: auto;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 90%;
}

.headers {
  display: inline-block;
  margin: 20px;
  padding: 20px;
  vertical-align: top;
  border: 1px solid #94f899;
}

.bg-image {
  background-image: url("/img/bg-home.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 97vh;
}

.buttons {
  margin: 20px;
}
</style>
