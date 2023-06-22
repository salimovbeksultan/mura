<template>
  <div>
    <v-app-bar :elevation="1" color="primary">
      <v-btn v-if="userData" text color="white">
        <v-icon left>mdi-account</v-icon>
        {{ userData.firstname }}</v-btn>
    </v-app-bar>
    <v-container>
      <v-row justify="center">
        <v-col v-for="num in 3" :key="num">
          <v-card>
            <v-card-title>{{ num }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data: () => {
    return {
      userData: null
    }
  },
  watch: {
    '$store.state.userData' (newValue) {
      this.userData = newValue
    }
  },
  mounted () {
    this.userData = this.$store.state.userData
  }
}
</script>
