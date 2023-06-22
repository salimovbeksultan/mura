<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <login-form></login-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'HomeView',

  components: {
    LoginForm
  },

  created () {
    if (localStorage.getItem('userToken')) {
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
