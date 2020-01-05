<template>
  <div class="Test">
    <div class="x">{{list.length}}</div>
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
    list: null
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Test{
  float: right;
  width: 600px;
  height: 500px;
  background: red;
  .x{
    float: right;
    width: 100px;
    height: 50px;
    background:#777;
  }
}
</style>
