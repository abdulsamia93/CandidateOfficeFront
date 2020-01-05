<template>
  <div class="Login-Box">
    <img src="https://png.pngtree.com/svg/20161229/e7a5cf5c9e.svg" class="Logo">
    <input placeholder="إسم المستخدم" v-model="username">
    <input placeholder="كلمة المرور" type="password" v-model="password">
    <div class="Btn-Login" @click="MakeLogin">دخول</div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "LoginBox",
  props: {
    // username:String,
    // password:String,
  },
    data: function() {
    return {
      username:'',
      password:'',
      auth:null
      }
    },
    methods: {
    MakeLogin: function() {

      axios.get("http://localhost/alendmag/admin/makelogin.php?username="+ 
      this.username +
      "&password="+
      this.password
      ).then(res => {
        this.auth = res.data
        if(this.auth[0]['isuser']=='1'){
          alert(this.auth[0]['token'])
          alert(this.auth[0]['id'])
          localStorage.userkey = this.auth[0]['token'];
          localStorage.login=true;
          localStorage.userid=this.auth[0]['id'];
          this.$parent.userkey=this.auth[0]['token'];
          this.$parent.login=true;
          this.$parent.userid=this.auth[0]['id'];
        }else{
          this.mess='wrong value'
        }
      });

    }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Login-Box{
    direction: rtl;
    float: right;
    width: 400px;
    height: 400px;
    position: fixed;
    margin:calc(50vh - 200px) calc(50% - 200px);
    -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
  .Logo{
    float: right;
    width: 100px;
    height: 100px;
    margin:15px calc(50% - 50px);
  }
  .Btn-Login{
    background-color: #56baed;
    color: white;
    padding: 10px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 20px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-top: 30px;
  }
  input{
    float: right;
    width: 300px;
    height: 44px;
    line-height: 44px;
    border:none;
    outline:none;
    border:1px solid #efefef;
    padding:0px 10px;
    margin:10px calc(50% - 160px);
    border-radius: 5px;
    font-size: 22px;
    color:#787878;
    font-family: 'cairo';
    text-align: center;
  }
      ::placeholder {
      color:#cdcdcd;
    }
  }

@media only screen and (max-width: 1110px) {
  .Location-Box {
    width: calc(calc(100% / 2) - 30px);
  }
}

@media only screen and (max-width: 700px) {
  .Location-Box {
      margin: 10px 10px;
    width: calc(100% - 20px);
  }
}


</style>
