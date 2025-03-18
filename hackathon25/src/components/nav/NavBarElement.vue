<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
	pageName: {
		type: String,
		required: true,
	},
	pageLink: {
		type: String,
		required: true,
	},
});

const route = useRoute();

// Calcola se il link è attivo confrontando il percorso attuale
const isActive = computed(() => route.path === props.pageLink);
const isRegister = computed(() => props.pageName === "Registrati");
const isCreateTeam = computed(() => props.pageName === "Crea Squadra");
const isTeam = computed(() => props.pageName === "Squadra");
</script>

<template>
	<li :class="['nav-item', { active: isActive }]">
		<router-link :to="props.pageLink" class="nav-link">
			<template v-if="isRegister">
				<font-awesome-icon icon="fa-solid fa-user" />
			</template>
			<template v-if="isCreateTeam">
				<font-awesome-icon icon="fa-solid fa-plus" />
			</template>
			<template v-if="isTeam">
				<font-awesome-icon icon="fa-solid fa-users" />
			</template>
			{{ props.pageName }}
		</router-link>
	</li>
</template>

<style>
.nav-item:hover{
	color: #3f8fda
}
</style>