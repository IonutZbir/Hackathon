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
    <div class="create">
        <main>
            <div class="login-box">
                <form @submit.prevent="handleRegistration">
                    <div class="form-group">
                        <label for="matricola">Matricola</label>
                        <input type="text" id="matricola" v-model="matricola" required />
                    </div>
                    <div class="form-group">
                        <label for="nomeSquadra">Nome Squadra</label>
                        <input type="text" id="nomeSquadra" v-model="nomeSquadra" required />
                    </div>
                    <button type="submit">CREA SQUADRA</button>
                </form>
            </div>
        </main>
    </div>
</template>

<style>

.create main{
    display: flex;
    height: 100vh;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 0;
}

.create .login-box {
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

.create .form-group {
    margin-bottom: 15px;
}

.create label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.create input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.create button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.button-box {
    margin-top: 40px;
    }
.create button {
    cursor: pointer;
    user-select: none;
    padding: 12px 27px;
    font-size: 1.2em;
    background-color: #3F8FDA;
    color: #ffffff;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    font-weight: bold;
    border-radius: 4px;
    -webkit-box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.2); 
    box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.2);
}

.create button:hover {
    background-color: #3479ba;
    color: #EEEEEE;
    -webkit-box-shadow: 0px 10px 11px 0px rgba(0,0,0,0.1); 
    box-shadow: 0px 10px 11px 0px rgba(0,0,0,0.1);
}

</style>
