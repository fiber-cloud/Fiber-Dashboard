<template>
  <div class="maximum">
    <login-form />
  </div>
</template>

<script lang="ts">
import LoginForm from '@/components/login/LoginForm.vue'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>

.maximum {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100%;
  min-width: 100%;
}

</style>
