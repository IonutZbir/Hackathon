<script setup>
import StandaloneNavbar from '@/components/nav/StandaloneNavbar.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const server_url = "https://lab25a.it";
  
const route = useRoute();
const id_squadra = ref('');
const squadra = ref('');
const matricola = ref('');
const successMessage = ref('');
const errorMessage = ref('');
const validationError = ref('');

onMounted(() => {
  id_squadra.value = route.query.code;
  getInfo(route.query.code);

});

function getInfo(codiceSquadra) {
  const request = new XMLHttpRequest();
  request.open("GET", server_url + `/api/teams/${codiceSquadra}`, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();

  request.onload = function () {
    try {
      const res = JSON.parse(request.responseText || '{}');
      if (request.status === 200) {
        squadra.value = res.name;
      } else if (request.status === 404) {
        errorMessage.value = res.message || 'Squadra non trovata';
      } else {
        errorMessage.value = res.message || 'Errore durante la registrazione.';
      }

    } catch {
      errorMessage.value = 'Risposta non valida dal server.';
    }
  }

}

function validateInput() {
  if (matricola.value.length !== 7) {
    validationError.value = 'La matricola deve contenere esattamente 7 caratteri.';
    return false;
  }
  validationError.value = '';
  return true;
}

function handleJoin() {
  successMessage.value = '';
  errorMessage.value = '';

  if (!validateInput()) return;

  const request = new XMLHttpRequest();
  request.open("POST", server_url + "/api/teams/join", true);

  const payload = {
    "matricola": matricola.value,
    "code": id_squadra.value,
  };

  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(payload));

  request.onload = function () {
    try {
      const res = JSON.parse(request.responseText || '{}');
      if (request.status === 200) {
        successMessage.value = res.message || "Ti sei unito alla squadra con successo!";
      } else {
        errorMessage.value = res.message || "Errore durante l'unione alla squadra.";
      }
    } catch {
      errorMessage.value = 'Risposta non valida dal server.';
    }
  };

  request.onerror = function () {
    errorMessage.value = 'Errore di rete o server non raggiungibile.';
  };
}
</script>

<template>
  <StandaloneNavbar bg-color="transparent" />
  <div class="join">
    <main>
      <div class="login-box">
        <form @submit.prevent="handleJoin" autocomplete="off">
          <h2 class="form-title">Unisciti alla squadra "<strong>{{ squadra }}</strong>"</h2>

          <div class="form-group">
            <label for="matricola">Matricola</label>
            <input type="text" id="matricola" v-model="matricola" maxlength="7" required placeholder="Es. 1234567" />
          </div>

          <button type="submit">UNISCITI</button>

          <div class="message-section">
            <div v-if="validationError" class="validation-error">
              {{ validationError }}
            </div>
            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>
            <div v-if="successMessage" class="success-message">
              {{ successMessage }}
            </div>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<style>
.join main {
  display: flex;
  height: 85vh;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.join .login-box {
  width: 100%;
  max-width: 500px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
}

.join .form-group {
  margin-bottom: 18px;
}

.join label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}

.join input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #aaa;
  border-radius: 6px;
  box-sizing: border-box;
}


.join button {
  width: 100%;
  padding: 12px;
  font-size: 1.1em;
  background-color: var(--action_color);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.join button:hover {
  background-color: #005fc1;
}


.message-section {
  margin-top: 20px;
}

.error-message,
.validation-error {
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
}

.success-message {
  color: green;
  font-weight: bold;
}
</style>
