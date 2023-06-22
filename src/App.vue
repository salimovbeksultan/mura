<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { useAxios } from './services/useAxios'

export default {
  name: 'App',

  data: () => ({
  }),

  async mounted () {
    const token = localStorage.getItem('userToken')
    const axios = useAxios()
    if (token && !this.$store.state.userData) {
      const headers = {
        Authorization: `Bearer ${token}`
      }
      const response = await axios.get('v1/user/me', { headers: headers })
      this.$store.dispatch('setUserData', response.data.user_data)
    }
  }
}
</script>
