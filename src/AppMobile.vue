<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-avatar>
        <img alt="FTT Logo" src="/img/ftt_logo.png" />
      </q-avatar>
      Fast Track Talent
      <div style="margin-top: 2px">
        <i
          class="fab fa-instagram-square fa-2x"
          color="green"
          style="padding-right: 2px"
        ></i>

        <i
          class="fab fa-facebook-square fa-2x"
          color="white"
          style="padding-left: 2px"
        ></i>
      </div>
    </q-header>

    <div class="main">
      <div class="home bg-dark">
        <h2 class="text-primary" style="font-weight: bold">
          FAST TRACK TALENT
        </h2>
        <h3 class="text-white">Llevandote Mas Cerca Al Talento De Verdad</h3>
        <h5>
          FAST TRACK TALENT, la compañia por defecto para buscar empleo y
          contratar talento de trabajo remoto a nivel nacional e internacional,
          ya esta disponible. La red de emprendimiento que consolida un
          portafolio de 48 empresas y 94 emprendedores en el país.
        </h5>

        <div>
          <q-btn class="buttons" color="primary" size="24px">
            <router-link to="/sobre">
              <i class="far fa-address-card" style="padding-right: 10px"></i>
              Sobre Nosotros
            </router-link>
          </q-btn>

          <q-btn class="buttons" color="secondary" size="24px">
            <router-link to="/servicios">
              <i class="fas fa-broadcast-tower" style="padding-right: 10px"></i>
              Servicios
            </router-link>
          </q-btn>
        </div>
      </div>

      <div class="about bg-dark">
        <h3 class="text-primary" style="font-weight: bold">Sobre Nosotros</h3>
        <h5>
          FAST TRACK TALENT, la compañia por defecto para buscar empleo y
          contratar talento de trabajo remoto a nivel nacional e internacional,
          ya esta disponible. La red de emprendimiento que consolida un
          portafolio de 48 empresas y 94 emprendedores en el país.
        </h5>

        <h5>
          FAST TRACK TALENT, la compañia por defecto para buscar empleo y
          contratar talento de trabajo remoto a nivel nacional e internacional,
          ya esta disponible. La red de emprendimiento que consolida un
          portafolio de 48 empresas y 94 emprendedores en el país.
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
              (val) =>
                (val && val.length > 0) || 'Escriba Su Apellido Por Favor',
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

          <q-toggle
            v-model="aceptar"
            label="Acepto Los Terminos Y Condiciones"
          />

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
      </div>

      <div class="services bg-dark">
        <h3 class="text-primary" style="font-weight: bold">Servicios</h3>
        <h5 style="font-weight: bold">
          Lista de servicios que ofrecemos actualmente.
        </h5>
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

      <div class="events bg-dark">
        <h3 class="text-primary" style="font-weight: bold">Eventos</h3>
        <h5 style="font-weight: bold">Eventos De Los Que Hemos Sido Parte.</h5>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">Eventos</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Titulo</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>
          </q-card>

          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">Eventos</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Titulo</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>
          </q-card>

          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">Eventos</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Titulo</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
        <h3 class="text-primary" style="font-weight: bold">Post De Blogs</h3>
        <h5 style="font-weight: bold">Lo Que Hemos Subido Ultimamente.</h5>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">Eventos</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Titulo</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>
          </q-card>

          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">Eventos</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Titulo</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>
          </q-card>

          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">Eventos</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Titulo</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <particles-bg
      type="random"
      :canvas="{ backgroundColor: '#000000' }"
      :bg="true"
    />
  </q-layout>
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
  max-width: 100%;
  width: 100%;
  padding-top: 25%;
  margin: auto;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home {
  display: inline-block;
  margin: 20px;
  padding: 20px;
  vertical-align: top;
  border: 1px solid #94f899;
  opacity: 85%;
}

.about,
.services,
.events {
  display: inline-block;
  margin: 20px;
  padding: 20px;
  vertical-align: top;
  border: 1px solid #94f899;
  opacity: 90%;
}

.buttons {
  margin: 20px;
}
</style>
