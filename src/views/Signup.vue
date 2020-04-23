<template>
  <v-container fluid>
    <v-row nogutter>
      <v-spacer></v-spacer>
      <v-btn color="#6ab04c" class="auth-btn signup" href="/signin" dark large >Sign In</v-btn>
    </v-row>
    <v-row nogutter>
      <v-col>
        <v-card
    class="mx-auto form2"
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
        <v-list-item-title class="headline mb-1"><span class="login-header">Signup...</span></v-list-item-title>
        <v-col cols="12" sm="12" md="12">
          <v-text-field
          label="Solo"
          placeholder="Full Name"
          solo
          v-model="fullname"
        ></v-text-field>
        <v-text-field
        label="Solo"
        placeholder="User Id"
        solo
        v-model="user_id"
      ></v-text-field>
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
      <v-text-field
      label="Solo"
      type="password"
      placeholder="Confirm Password"
      solo
      v-model="confirmpassword"
    ></v-text-field>
       </v-col>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text class="btn-signin" @click="signup()">Jump In  </v-btn>
    </v-card-actions>
  </v-card>
  <v-row justify="center" class="forgot-password" @click="forgot()">
    Wrong Place ? Sign In !!
  </v-row>
      </v-col>

        <v-col>
          <v-row class="mb-6 title-row" justify="center">
            Wake-n-share
          </v-row>
          <v-row class="mb-6 subsec-row" justify="center">
          <span class="wselection">The first step to awesomeness..</span>
          </v-row>
           <v-img src="../assets/humaba1.jpg" height="50vh" aspect-ratio="1" contain></v-img>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios';
export default {
name: 'Signup',
data:()=>({
  fullname:"",
  password:"",
  confirmpassword:"",
  user_id:"",
  email:"",
    loading: false,
}),

methods:{
  forgot(){
    window.location.href="/signin";
  },
  signup(){
    this.loading=true;
    if(this.password == this.confirmpassword){
      axios.post('api/addUser',{
        fullname:this.fullname,
        password:this.password,
        user_id:this.user_id,
        email:this.email
        })
        .then(response=>{
          axios.post('oauth/token',{
          grant_type : 'password',
         client_id :2,
         client_secret : 'azaQPgRPI0spp47dKrFflQS6NchNX1NReIXnUdoz',
         username : this.email,
         password : this.password,
         scope : ''
     }).then(response=>{
       this.loading=false;
       console.log('token',response);
     }).catch(error=>{
         this.loading=false;
       console.log('error',error);
     })
        })
        .catch(error=>{
          console.log('error',error);
        })
    }else{
      this.loading=false;
      console.log('Password is invalid');
    }
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
.form2{
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
