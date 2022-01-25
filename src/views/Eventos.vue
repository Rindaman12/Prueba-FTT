<template>
  <div class="main">
    <div class="form bg-dark">
      <h3 class="text-primary" style="font-weight: bold">Eventos</h3>
      <h5 style="font-weight: bold">Eventos De Los Que Hemos Sido Parte.</h5>
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Eventos</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Titulo</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
