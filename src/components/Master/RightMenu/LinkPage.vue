<template>
  <div class="Link-Page">
    <router-link :to="page.url" v-show="page.active=='active'" class="link-active">{{page.name}}</router-link>

    <router-link :to="page.url" v-show="page.active!='active'" class="link">{{page.name}}</router-link>
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
    page:null
  },
    data: function() {
    return {

      }
    },
    methods: {
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Link-Page{
  float: right;
  width:100%;
  height: 55px;
  line-height: 55px;
  font-size: 22px;
  margin: 5px 0px;
  abackground: orange;
  .link{
    float: right;
    width: 100%;
    text-align: center;
    color:#a7b1c2;
    text-decoration: none;
  }
  .link-active{
    float: right;
    width: calc(100% - 8px);
    border-right: 4px solid #1ab394;
    text-align: center;
    color:#fff;
    background: #293846;
    text-decoration: none;
  }
}
</style>
