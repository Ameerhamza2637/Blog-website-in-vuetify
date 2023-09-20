<template>
    <v-main>
      <v-container fluid class="signup-container">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card>
              <v-card-title class="headline">Sign Up</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="signup">
                  <v-text-field v-model="fname" label="First Name" required></v-text-field>
                  <v-text-field v-model="lname" label="Last Name" required></v-text-field>
                  <v-text-field v-model="email" label="Email" required></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                    append-icon="mdi-eye"
                    @click:append="togglePasswordVisibility"
                  ></v-text-field>
                  <v-text-field v-model="address" label="Address" required></v-text-field>
                  <v-text-field v-model="phone" label="Phone" required></v-text-field>
                  <v-btn color="primary" type="submit">Sign Up</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
            <p>Already have an account? <router-link to="/login">Login</router-link></p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </template>
  
  <script>
  export default 
  {
    name:"Signup"
  }
</script>
  
  <style scoped>
  /* Add responsive CSS here */
  
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .v-text-field {
    width: 100%;
  }
  
  /* Add the rest of your custom styles here... */
  </style>
  