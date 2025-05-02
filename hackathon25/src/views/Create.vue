<script setup>
import StandaloneNavbar from '@/components/nav/StandaloneNavbar.vue';
import { ref } from 'vue';

const matricola = ref('');
const nomeSquadra = ref('');
const shareLink = ref('');
const errorMessage = ref('');
const validationError = ref('');
const linkCopiato = ref(false);

function validateInputs() {
  if (matricola.value.length !== 7) {
    validationError.value = 'La matricola deve contenere esattamente 7 caratteri.';
    return false;
  }
  if (nomeSquadra.value.length < 3 || nomeSquadra.value.length > 15) {
    validationError.value = 'Il nome della squadra deve essere tra 3 e 15 caratteri.';
    return false;
  }
  validationError.value = '';
  return true;
}

function handleRegistration() {
  shareLink.value = '';
  errorMessage.value = '';

  if (!validateInputs()) return;

  const server_url = "http://localhost:3000";
  const request = new XMLHttpRequest();
  request.open("POST", server_url + "/create_team", true);

  const team = {
    "matricola": matricola.value,
    "squadra": nomeSquadra.value,
  };

  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(team));

  request.onload = function () {
    try {
      const res = JSON.parse(request.responseText || '{}');
      if (request.status === 200 && res.join_url) {
        shareLink.value = res.join_url;
      } else if (request.status === 409 && res.join_url) {
        errorMessage.value = res.message || 'Hai già un link.';
        shareLink.value = res.join_url;
      } else if (request.status === 404) {
        errorMessage.value = res.message || 'Utente non trovato.';
      } else {
        errorMessage.value = res.message || 'Errore durante la registrazione.';
      }
    } catch {
      errorMessage.value = 'Risposta non valida dal server.';
    }
  };

  request.onerror = function () {
    errorMessage.value = 'Errore di rete o server non raggiungibile.';
  };
}

function copyLink() {
  if (!shareLink.value) return;
  navigator.clipboard.writeText(shareLink.value).then(() => {
    linkCopiato.value = true;
    setTimeout(() => {
      linkCopiato.value = false;
    }, 2000);
  });
}

</script>


<template>
    <StandaloneNavbar bg-color="transparent" />
    <div class="create">
      <main>
        <div class="login-box">
          <form @submit.prevent="handleRegistration" autocomplete="off">
            <h2 class="form-title">Crea la tua squadra</h2>
  
            <div class="form-group">
              <label for="nomeSquadra">Nome Squadra</label>
              <input
                type="text"
                id="nomeSquadra"
                v-model="nomeSquadra"
                maxlength="15"
                minlength="3"
                required
                placeholder="3-15 caratteri"
              />
            </div>
  
            <div class="form-group">
              <label for="matricola">Matricola</label>
              <input
                type="text"
                id="matricola"
                v-model="matricola"
                maxlength="7"
                required
                placeholder="Es. 1234567"
              />
            </div>
  
                <button type="submit">CREA SQUADRA</button>
  
                <div class="message-section">
                    <div v-if="validationError" class="validation-error">
                        {{ validationError }}
                    </div>
                    <div v-if="errorMessage" class="error-message">
                        {{ errorMessage }}
                    </div>
  
                    <div v-if="shareLink" class="share-section">
                        <p>Condividi questo link per invitare persone nella tua squadra:</p>
                        <input type="text" :value="shareLink" readonly />
                        <div v-if="linkCopiato" class="copied-message">Link copiato!</div>
                        <button type="button" @click="copyLink">Copia Link</button>
                    </div>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>
  
<style>
.create {
    height: 85vh;
}
.create main {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.create .login-box {
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

.create .form-group {
  margin-bottom: 18px;
}

.create label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}

.create input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #aaa;
  border-radius: 6px;
  box-sizing: border-box;
}

.create button {
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

.create button:hover {
  background-color: #005fc1;
}

.message-section {
  margin-top: 20px;
}

.share-section input {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
}

.share-section button {
  background-color: #28a745;
}

.share-section button:hover {
  background-color: #218838;
}

.error-message,
.validation-error {
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
}

.copied-message {
  color: green;
  font-weight: bold;
  margin-top: 8px;
  transition: opacity 0.3s;
}

</style>
