<template>
  <v-card outlined>
    <v-card-title>
      Войти в систему
    </v-card-title>
    <v-card-text>
        <v-text-field v-model="form.login" label="Логин"></v-text-field>
        <v-text-field type="password" v-model="form.password" label="Пароль"></v-text-field>
        <v-checkbox v-model="rememberMe" label="Запомнить меня"></v-checkbox>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="login()" color="primary">Войти</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useAxios } from '../services/useAxios'

export default {
  name: 'LoginForm',
  data: () => {
    return {
      form: {
        login: null,
        password: null,
        device: 'web'
      },
      rememberMe: false
    }
  },
  methods: {
    async login () {
      const axios = useAxios()
      try {
        const response = await axios.post('v1/login', this.form)
        if (this.rememberMe) {
          localStorage.setItem('userToken', response.data.token)
          localStorage.setItem('userTokenExpiration', response.data.token_expired)
        } else {
          sessionStorage.setItem('userToken', response.data.token)
          sessionStorage.setItem('userTokenExpiration', response.data.token_expired)
        }
        await this.$store.dispatch('setUserData', response.data.user_data)
        this.$router.push({ name: 'dashboard' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
