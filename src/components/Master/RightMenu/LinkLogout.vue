<template>
  <div class="Link-Logout" @click="MakeLogout">
    <div class="btn-logout">
      <i class="fas fa-sign-out-alt"></i>

      تسجيل الخروج</div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "Right-Menu",
  props: {
  },
    data: function() {
    return {

      }
    },
    methods: {
      MakeLogout: function() {
        alert("Log Out");
        localStorage.userkey = null;
        localStorage.login=null;
        localStorage.userid=null;
        this.$parent.$parent.userkey=null;
        this.$parent.$parent.login=false;
        this.$parent.$parent.userid=null;
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Link-Logout{
  float: right;
  width: 180px;
  height: 50px;
  line-height: 50px;
  font-size: 19px;
  margin: 30px calc(50% - 90px);
  background: #293846;
  border-radius: 4px;
  cursor:pointer;
  :hover{
    background: #5885afaa;
  } 
  .btn-logout{
    float: right;
    width: 100%;
    text-align: center;
    color:#ddd;
    text-decoration: none;
    i{
      float: right;
      height: 40px;
      line-height: 40px;
      margin:5px 10px 5px 0px;
    }
  }
}
</style>
