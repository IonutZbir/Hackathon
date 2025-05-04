<script setup>
import StandaloneNavbar from '@/components/nav/StandaloneNavbar.vue';
import { ref, onMounted } from 'vue';

// Simulated or fetched JSON data
const teams = ref('');

onMounted(() => {
    getTeams();
    
});

const server_url = "https://lab25a.it";

function getTeams() {
        var o;
        const request = new XMLHttpRequest();
        request.open("GET", server_url + `/api/teams/`, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send();

        request.onload = function () {
            try {
                const res = JSON.parse(request.responseText || '{}');
                teams.value = res;
              } catch {
                errorMessage.value = 'Risposta non valida dal server.';
              }
            }
    }

</script>

<template>
  <StandaloneNavbar bg-color="transparent" />

  <div class="team-list-page">
    <main>
      <div class="team-list-box">
        <h2 class="form-title">Squadre Registrate</h2>

        <div v-if="teams.length === 0" class="empty-message">
          Nessuna squadra disponibile.
        </div>

        <div v-for="team in teams" :key="team._id" class="team-card">
          <h3 class="team-name">{{ team.name }}</h3>
          <ul class="member-list">
            <li v-for="member in team.members" :key="member">{{ member }}</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.team-list-page main {
  display: flex;
  min-height: 85vh;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;
  background-color: var(--gradiente);
}

.team-list-box {
  width: 100%;
  max-width: 700px;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.8em;
  color: #333;
}

.team-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fdfdfd;
}

.team-name {
  color: var(--action_color);
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 10px;
}

.member-list {
  list-style-type: disc;
  padding-left: 20px;
}

.member-list li {
  margin-bottom: 6px;
  color: #555;
  font-size: 0.95em;
}

.empty-message {
  text-align: center;
  color: #999;
  font-size: 1.1em;
}
</style>