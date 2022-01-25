<template>
  <div class="main">
    <q-card class="form bg-dark">
      <h3 class="text-primary" style="font-weight: bold">Sobre Nosotros</h3>
      <h5>
        FAST TRACK TALENT, la compañia por defecto para buscar empleo y
        contratar talento de trabajo remoto a nivel nacional e internacional, ya
        esta disponible. La red de emprendimiento que consolida un portafolio de
        48 empresas y 94 emprendedores en el país.
      </h5>

      <h5>
        FAST TRACK TALENT, la compañia por defecto para buscar empleo y
        contratar talento de trabajo remoto a nivel nacional e internacional, ya
        esta disponible. La red de emprendimiento que consolida un portafolio de
        48 empresas y 94 emprendedores en el país.
      </h5>
      <h2 class="text-primary" style="font-weight: bold">Contactenos</h2>
      <q-form style="" @submit="onSubmit" @reset="onReset">
        <q-avatar>
          <img alt="FTT Logo" src="/img/ftt_logo.png" />
        </q-avatar>
        <p style="color: white">Telefono: 12345678900</p>
        <p style="color: white">
          Direccion: Sector 1, Calle Numero 2, Local #3
        </p>

        <q-input
          style="padding-top: 20px"
          bg-color="white"
          rounded
          filled
          v-model="nombre"
          label="Escriba Su Nombre Por Favor *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Escriba Su Nombre Por Favor',
          ]"
        />

        <q-input
          bg-color="white"
          rounded
          filled
          v-model="apellido"
          label="Escriba Su Apellido Por Favor *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Escriba Su Apellido Por Favor',
          ]"
        />

        <q-input
          bg-color="white"
          rounded
          filled
          v-model="email"
          label="Escriba Su Email Por Favor *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Escriba Su Email Por Favor',
          ]"
        />

        <q-toggle v-model="aceptar" label="Acepto Los Terminos Y Condiciones" />

        <div style="padding-bottom: 10px">
          <q-btn label="Enviar" type="submit" color="primary" />
          <q-btn
            label="Reiniciar"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
        </q-card>
    <particles-bg
      type="random"
      :canvas="{ backgroundColor: '#000000' }"
      :bg="true"
    />
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { ParticlesBg } from "particles-bg-vue";

export default {
  components: {
    ParticlesBg,
  },
  setup() {
    const $q = useQuasar();

    const nombre = ref(null);
    const apellido = ref(null);
    const email = ref(null);
    const aceptar = ref(false);

    return {
      nombre,
      apellido,
      email,
      aceptar,

      onSubmit() {
        if (aceptar.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        nombre.value = null;
        apellido.value = null;
        email.value = null;
        aceptar.value = false;
      },
    };
  },
};
</script>

<style scoped>
h2,
h3 {
  margin: 6px;
  padding: 6px;
}

h4 {
  margin: 10px;
  padding: 10px;
}

h5 {
  margin: 4px;
  padding: 4px;
  align-self: normal;
  justify-self: normal;
  color: rgb(228, 228, 228);
}
p {
  margin: 0px;
  padding: 0px;
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
  max-width: 1000px;
  margin: auto;
  border: 1px solid #94f899;
  opacity: 92%;
}

.buttons {
  margin: 20px;
}
</style>
