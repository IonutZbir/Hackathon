<script setup>
import StandaloneNavbar from '@/components/nav/StandaloneNavbar.vue';
// location.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=Kr7FJGTXxUCZdYLQiuR9Dq6ufqJh71NIhWBICVjQgHdUMTlEMlhIOFVNMzZRR0hSUFRXUzg0RFUwWi4u"

import { ref } from 'vue';

const matricola = ref('');
const nomeSquadra = ref('');

function handleRegistration() {
    console.log('Matricola:', matricola.value);
    console.log('Nome Squadra:', nomeSquadra.value);
    const server_url = "localhost:3000";
    const request = new XMLHttpRequest();
    request.open("POST", server_url + "/createTeam", true);
    const team = {
        "matricola": matricola.value,
        "squadra": nomeSquadra.value,
    }
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify(team));

    request.onload = function () {
		if (request.status === 200) {
			let res = JSON.parse(request.responseText);
			console.log(res);
		} else {
			console.error("Error Adding Team: " + request.statusText);
		}
	};

	request.onerror = function () {
		console.error("Network error.");
	};

}

</script>
<template>
    <StandaloneNavbar bg-color="transparent" />
    <main>
        <div class="login-box">
            <div class="">
                <p></p>
            </div>
            <form @submit.prevent="handleRegistration">
                <div class="form-group">
                    <label for="matricola">Matricola</label>
                    <input type="text" id="matricola" v-model="matricola" required />
                </div>
                <div class="form-group">
                    <label for="nomeSquadra">Nome Squadra</label>
                    <input type="text" id="nomeSquadra" v-model="nomeSquadra" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </main>
</template>

<style>

main{
    display: flex;
    height: 100vh;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 0;
}

.login-box {
    width: 500px;
    height: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
