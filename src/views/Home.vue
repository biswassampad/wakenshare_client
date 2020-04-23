<template>
  <div class="home">
     <v-container fluid>
          <v-row no-gutters>
            <v-col lg="12">
              <v-row class="mb-6 subtitle-row" justify="center">
                The Secure Sharing Platform
              </v-row>
              <v-row class="mb-6 title-row" justify="center">
                Wake-n-share
              </v-row>
              <hr class="main-div">
                <v-row class="mb-6 wsubtitle-row" justify="center">
                <span class="wselection">Welcomes you..</span>
                </v-row>
              <v-row class="mb-6 bg-image" justify="center">
                 <v-img src="../assets/humaba.png" height="50vh" aspect-ratio="1.7" contain></v-img>
              </v-row>
              <v-row class="mb-6 action-group" justify="center">
                 <v-btn color="black" class=" auth-btn signin" href="/signin" dark large >Sign In</v-btn>
                 <v-btn color="#6ab04c" class="auth-btn signup" href="/signup" dark large>Sign Up</v-btn>
              </v-row>
            </v-col>
          </v-row>
          <v-row no-gutters><div>&copy; Wakenshare-2020</div><v-spacer></v-spacer><div>Developed With <span style="color:red">&hearts;</span> from India.</div> </v-row>

     </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data:()=>({
    image:'@/assets/humaba.png'
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.home{
  height:100vh;
  width:100vw;
}
.subtitle-row{
  font-family: 'Pacifico', cursive;
  color:#95afc0;
  margin-top:5vh;
  font-size:20px;
}
.title-row{
  margin-top:-5vh;
  font-size:70px;
  font-family: 'Pacifico', cursive;
}
.bg-image{
}
.main-div{
  width: 60%;margin-left: auto;margin-right: auto;
  height:5px;
  background:black;
}
.wsubtitle-row{
  font-family: 'Pacifico', cursive;
  color:#95afc0;
  margin-top:-5vh;
  font-size:30px;
}
.wselection{
  background:white;
  margin-left:5px;
  margin-right:5px;
  padding:5px;
}
.action-group{
  padding:5px;
}
.auth-btn{
  margin:5px;
}
.signin{
  background:transparent !important;
}
</style>
