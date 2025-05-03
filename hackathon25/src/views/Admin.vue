<script setup>
import StandaloneNavbar from '@/components/nav/StandaloneNavbar.vue';

</script>
<template>
    <StandaloneNavbar bg-color="transparent" />
    <div class="admin">
        <main>
            <div class="login-box">
                <form @submit.prevent="handleJoin" autocomplete="off">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" v-model="username" required/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" required/>
                    </div>

                    <button type="submit">Accedi</button>
                </form>
            </div>
        </main>
    </div>
</template>

<style>
.admin {
    height: 85vh;
}
.admin main {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.admin .login-box {
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

.admin .form-group {
  margin-bottom: 18px;
}

.admin label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}

.admin input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #aaa;
  border-radius: 6px;
  box-sizing: border-box;
}

.admin button {
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

.admin button:hover {
  background-color: #005fc1;
}
</style>