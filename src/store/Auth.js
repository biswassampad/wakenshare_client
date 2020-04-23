import axios from 'axios';

export default{
  state:{
    auth_data:{},
    userdata:{},
  },
  getters:{
    authdata(state){
      return state.auth_data;
    },
    userdata(state){
      return state.user_data;
    }
  },
  mutations:{
    Login:(state,payload)=>{
      return new Promise((resolve,reject )=>{
          axios.post('/oauth/token',payload)
          .then(({data,status})=>{
            if(status==200){
              console.log('response',data);
                localStorage.setItem('token',data.access_token);
              resolve(true);
              return data;
            }
          }).catch(err=>{
            reject(err);
          })
      })
    },
    getUser:(state,payload)=>{
      console.log('payload',payload);
      return new Promise((resolve,reject)=>{
        let token ="Bearer"+' '+localStorage.getItem('token');
        axios.post('/api/getUser',{headers:{"Authorization":token}},payload)
        .then(res=>{
            console.log('response1',res);
            localStorage.setItem('fullname',res.data[0].fullname);
            localStorage.setItem('email',res.data[0].email);
            localStorage.setItem('user_id',res.data[0].user_id);
            state.userdata.fullname =res.data[0].fullname;
            state.userdata.email =res.data[0].email;
            state.userdata.user_id =res.data[0].user_id;
            console.log('user data',state.user_data);
            resolve(true);
        }).catch(err=>{
          reject(err)
        })
      })
    }
  },
  actions:{
    Login:(context,payload)=>{
      context.commit('Login',payload);
    },
    getUser:(context,payload)=>{
      context.commit('getUser',payload);
    }

  }
}
