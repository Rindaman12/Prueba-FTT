<template>
  <div class="main">
    <div class="form bg-dark">
      <h3 class="text-primary" style="font-weight: bold">Servicios</h3>
      <h5 style="font-weight: bold">Lista de servicios que ofrecemos actualmente.</h5>
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-actions align="right">
            FAST TRACK TALENT, la compañia por defecto para buscar empleo y
            contratar talento de trabajo remoto a nivel nacional e
            internacional, ya esta disponible. La red de emprendimiento que
            consolida un portafolio de 48 empresas y 94 emprendedores en el
            país.
          </q-card-actions>
        </q-card>
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-actions align="right">
            FAST TRACK TALENT, la compañia por defecto para buscar empleo y
            contratar talento de trabajo remoto a nivel nacional e
            internacional, ya esta disponible. La red de emprendimiento que
            consolida un portafolio de 48 empresas y 94 emprendedores en el
            país.
          </q-card-actions>
        </q-card>

        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-actions align="right">
            FAST TRACK TALENT, la compañia por defecto para buscar empleo y
            contratar talento de trabajo remoto a nivel nacional e
            internacional, ya esta disponible. La red de emprendimiento que
            consolida un portafolio de 48 empresas y 94 emprendedores en el
            país.
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <particles-bg
      type="random"
      :canvas="{ backgroundColor: '#000000' }"
      :bg="true"
    />
  </div>
</template>
<script>
import { ParticlesBg } from "particles-bg-vue";

export default {
  components: {
    ParticlesBg,
  },
};
</script>

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
  padding: 30px;
  margin: auto;
  align-self: center;
  justify-self: center;
  flex-direction: column;
  align-items: center;
}

.form {
  display: inline-block;
  margin: 20px;
  padding: 20px;
  vertical-align: top;
  border: 1px solid #94f899;
  opacity: 90%;
}

.my-card {
  height: 20%;
  max-width: 30%;
  width: 30%;
  padding: 10px;
  margin: auto;
  align-self: center;
  justify-self: center;
  flex-direction: column;
  align-items: center;
}
</style>
