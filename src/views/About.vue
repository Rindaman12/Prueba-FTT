<template>
  <div class="bg-image">
    <div class="main">
      <div class="box">
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
        <h4 class="text-white">
          Coloque Sus Datos Para Enviarle Emails Referentes A FTT
        </h4>

        <div class="email">
          <q-chip color="dark" dense size="50px">
            <q-input
              style="padding: 20px"
              bg-color="white"
              rounded
              outlined
              label="Nombre Completo"
            />

            <q-input bg-color="white" rounded outlined label="Email" />

            <q-btn class="buttons bg-primary" size="px">
              <i class="fas fa-sign-in-alt" style="padding-right: 10px"></i>
              Enviar
            </q-btn>
          </q-chip>
        </div>
      </div>
    </div>
  </div>
</template>

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
.main {
  height: 100%;
  max-width: 80%;
  width: 80%;
  padding: 30px;
  margin: auto;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 90%;
}

.box {
  display: inline-block;
  margin: 20px;
  padding: 20px;
  vertical-align: top;
  border: 1px solid #94f899;
}

.bg-image {
  background-image: url("/img/bg-about.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 96.5vh;
}

.buttons {
  margin: 20px;
}
</style>
