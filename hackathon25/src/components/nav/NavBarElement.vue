<script setup>
defineProps({
  pageName: {
    type: String,
    required: true,
  },
  pageLink: {
    type: String,
    required: true,
  }
})
</script>

<template>
    <li class="nav-item">
    <router-link :to="pageLink" class="nav-link">
      {{ pageName }}
    </router-link>
  </li>
</template>
