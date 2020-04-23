<template>
  <v-container fluid>
    <v-row nogutter>
      <v-spacer></v-spacer>
      <v-btn color="#6ab04c" class="auth-btn signup" href="/signup" dark large >Sign Up</v-btn>
    </v-row>
    <v-row nogutter>
      <v-col>
        <v-row class="mb-6 title-row" justify="center">
          Wake-n-share
        </v-row>
        <v-row class="mb-6 subsec-row" justify="center">
        <span class="wselection">The second step to awesomeness..</span>
        </v-row>
         <v-img src="../assets/humaba1.jpg" height="50vh" aspect-ratio="1" contain></v-img>
      </v-col>
      <v-col>
        <v-card
    class="mx-auto form"
    max-width="344"
    outlined
    color="#6ab04c"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-progress-linear
       :active="loading"
       :indeterminate="loading"
       absolute
       bottom
       color="white"
     ></v-progress-linear>
        <v-list-item-title class="headline mb-1"><span class="login-header">Signin...</span></v-list-item-title>
        <v-col cols="12" sm="12" md="12">
          <v-text-field
          label="Solo"
          placeholder="Email Id"
          solo
          v-model="email"
        ></v-text-field>
        <v-text-field
        label="Solo"
        placeholder="Password"
        type="password"
        solo
        v-model="password"
      ></v-text-field>
       </v-col>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text class="btn-signin" @click="login()">Jump In  </v-btn>
    </v-card-actions>
  </v-card>
  <v-row justify="center" class="forgot-password" @click="forgot()">
    Forgot Password ?
  </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
name: 'Login',
data:()=>({
  email:'',
  password:'',
  loading:false,
}),

methods:{
  forgot(){
    window.location.href="/signup";
  },
  login(){
    this.loading = true;
    this.$store.dispatch("Login",{
        grant_type : 'password',
       client_id :2,
       client_secret : 'RsleSKLaanBdJiepRzQxwNsUfQmcto6CABTOuRHe',
       username : this.email,
       password : this.password,
       scope : ''
    }).then(success=>{
      console.log('authed');
      console.log('getting user info');
      setTimeout(()=>{
          this.$store.dispatch("getUser",{
            email:this.email
          })
 },3000);
    }).catch(err=>{
      console.log(err);
    })
    // this.loading=true;
    // this.$store.dispatch("Login",{
    //   grant_type : 'password',
    //  client_id :2,
    //  client_secret : 'RsleSKLaanBdJiepRzQxwNsUfQmcto6CABTOuRHe',
    //  username : this.email,
    //  password : this.password,
    //  scope : ''
    // })
    // .then(success=>{
    //   this.$store.dispatch("getUser",{
    //     email:this.email
    //   })
    //   .then(success=>{
    //     console.log('success');
    // // this.$router.push('timeline');
    //   })
    //   this.loading=false;
    // }).catch(err=>{
    //   console.log('err',err);
    // })
  }
}
}
</script>
<style>
.signup{
  padding:10px;
  margin-right:20px;
}
.signup .a{
  text-decoration:none;
  color:black;
}
.subsec-row{
  font-family: 'Pacifico', cursive;
  color:#95afc0;
  margin-top:-5vh;
  font-size:20px;
}
.form{
  margin-top:15vh;
}
.login-header{
  font-family: 'Pacifico', cursive;
  color:white;
  padding:20px;
}
.btn-signin{
  background: transparent !important;
  border:1px solid white;
  color:white !important;
}
.forgot-password{
  margin-top:10px;
  color:#6ab04c;
  cursor:pointer;
}
</style>
