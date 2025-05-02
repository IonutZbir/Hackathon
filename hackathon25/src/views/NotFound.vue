<script setup>
import InteractiveButton from '@/components/InteractiveButton.vue';
</script>

<template>
  <section class="not-found-section">
    <div class="container text-center">
      <h1 class="error-code">404</h1>
      <h2 class="error-message">Pagina non trovata</h2>
      <p class="error-description">
        Ops! La pagina che stai cercando non esiste. Controlla l'URL o torna alla <a href="/">home</a>.
      </p>
      <InteractiveButton text="TORNA ALLA HOME" to="/" />
    </div>
  </section>

  <footer class="footer">
    <!-- Existing footer content unchanged -->
    <!-- Paste the full footer HTML from your original file here if needed -->
  </footer>
</template>

<style scoped>
.not-found-section {
  background: var(--gradiente);
  color: white;
  padding: 100px 20px;
  text-align: center;
}

.error-code {
  font-size: 120px;
  font-weight: bold;
  margin-bottom: 20px;
}

.error-message {
  font-size: 36px;
  margin-bottom: 10px;
}

.error-description {
  font-size: 18px;
  margin-bottom: 30px;
}

</style>
