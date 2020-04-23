<template>
<div class="timeline">
  <v-toolbar dense flat class="demo-toolbar">
        <v-toolbar-title><span class="title-name">Wake-n-share</span></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon class="op_one" color="#6ab04c">account_circle</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon class="op_one" color="#6ab04c">power_settings_new</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container>
        <v-row justify="center">
        <v-card
   class="mx-auto"
   max-width="600"
   outlined
 >
   <v-list-item three-line>
     <v-list-item-content>
       <div class="overline mb-4">Share What's in your mind !!</div>
       <v-col cols="12" sm="12">
        <v-textarea
          label="Your thoughts here .."
          auto-grow
          outlined
          color="#6ab04c"
          rows="3"
          row-height="25"
          v-model="content"
        ></v-textarea>
      </v-col>
      <v-btn outlined dark color="#6ab04c" @click="createShout()">Shout Out</v-btn>
     </v-list-item-content>

   </v-list-item>
  </v-card>
        </v-row>
        <hr class="post-div">
        <v-row class="mb-6 ssubtitle-row" justify="center">
        <span class="wselection">Shout Outs...</span>
        </v-row>
        <!-- shout outs -->
        <v-row nogutter justify="center" class="shoutouts_parent" v-for="item of posts" :key="item.id">
          {{item}}
          <v-col>
            <v-row>
          <v-card
     class="mx-auto"
     max-width="600"
     outlined
   >
     <v-list-item three-line>
       <v-list-item-content>
         <div class="overline mb-4">By:</div>
         <v-col cols="12" sm="12">
           <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac congue est. Aenean facilisis nulla eu metus laoreet tristique. Maecenas condimentum erat sed convallis hendrerit. Sed at feugiat tortor. Aenean ac ante vulputate magna elementum cursus. Nullam fermentum semper volutpat. Duis sit amet mollis diam. Nulla cursus hendrerit nisl, ac dignissim dolor accumsan non. Maecenas non diam vitae elit pulvinar eleifend. </p>
        </v-col>
        </v-list-item-content>

     </v-list-item>
     <v-btn icon>
       <v-icon class="op_one" >favorite</v-icon>
     </v-btn>

     <v-btn icon>
       <v-icon class="op_one">feedback</v-icon>
     </v-btn>
     <v-btn text color="primary">
       FACEBOOK
     </v-btn>
     <v-btn text color="success">
       WHATSAPP
     </v-btn>
       0 Likes & 0 Comments
   </v-card>
 </v-row>

 <v-row nogutter justify="center" v-for="n of 2" v-if="comments">
   <v-card
class="mx-auto"
max-width="500"
outlined
>
<v-list-item three-line>
<v-list-item-content>
  <div class="overline mb-4">By: Biswas Sampad Satpathy</div>
  <v-col cols="12" sm="12">
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
 </v-col>
 </v-list-item-content>
</v-list-item>
<v-spacer></v-spacer>
<v-btn icon>
<v-icon class="op_one" >favorite</v-icon>
</v-btn>
0 Likes
</v-card>
 </v-row>
</v-col>
        </v-row>
      </v-container>
</div>
</template>
<script>
  import axios from 'axios';
export default {
  name: 'timeline',
  data:()=>({
    comments:[],
    content:'',
    posts:[]
  }),
  mounted(){
    let token ="Bearer"+' '+localStorage.getItem('token');
    console.log(token);
    axios.get('/api/getallShout', {headers: {
    "Authorization" : token
  }
})
    .then(({data,status})=>{
      if(status ==200){
        console.log('response',data);
        this.posts = data;
      }
    }).catch(err=>{
      console.log(err);
    })
  },

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

  .title-name{
    font-size:30px !important;
    font-family: 'Pacifico', cursive;
  }
.demo-toolbar{
  background:transparent !important;
}
.op_one{
  color:#6ab04c;
}
.op_one:hover{
  color:black;
}
.post-div{
  height:2px;
  margin:0 auto;
  margin-top:3vh;
  width:40vw;
}
.shoutouts_parent{
  margin:5vh;
}
.ssubtitle-row{
  font-family: 'Pacifico', cursive;
  color:#95afc0;
  margin-top:-3vh;
  font-size:20px;
}
</style>
