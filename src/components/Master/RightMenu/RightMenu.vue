<template>
  <div class="Right-Menu">
    <img class="logo" src='http://hnec.ly/wp-content/uploads/2015/10/hnec-logo-h601.png'>
    <LinkPage v-for="page in pages" :page="page"></LinkPage>

    <linkLogout></linkLogout>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import LinkPage from "@/components/Master/RightMenu/LinkPage.vue";
import LinkLogout from "@/components/Master/RightMenu/LinkLogout.vue";

export default {
  name: "Right-Menu",
  components: {
    LinkPage,
    LinkLogout
  },
  props: {
    pages: null
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Right-Menu {
  float: right;
  width: 260px;
  height: 100vh;
  position: fixed;
  background-color: #2f4050;
  -webkit-box-shadow: 0 3px 9px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 9px 1px rgba(0, 0, 0, 0.2);
  .logo{
    float: right;
    width: 240px;
    margin:50px calc(50% - 120px);
  }
}
</style>
