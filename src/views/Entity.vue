<template>
<div class="Entity-page">
  <Pages-Three :links="links"></Pages-Three>
  <List-View ></List-View>
</div></template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import ListView from "@/components/Entity/ListView.vue";
import PagesThree from "@/components/Genral/PagesThree.vue";
Vue.use(VueAxios, axios);
export default {
  name: "home",
    components: {
      ListView,
      PagesThree, 
      },
  data: function() {
    return {
      messages: null,
            links: [{ name: "مكتب طرابلس", url: "/" }, { name: "الكيانات", url: "/entity" }]

    };
  },
  created() {
        this.$parent.pages= [
        { type: 'page', name: "المرشحين", url: "/", active: "",},
        { type: 'page', name: "أضف مرشح", url: "/addcandidate", active: "",},
        { type: 'page', name: "تأكيد مرشح", url: "/approvecandidate", active: "",},
        { type: 'page', name: "الكيانات", url: "/entity", active: "active" },
        { type: 'page', name: "أضف كيان", url: "/entity", active: "" },
        { type: 'page', name: "تأكيد كيان", url: "/entity", active: "" },
      ]
  },
  methods: {
  }
};
</script>

<style lang='scss'>

</style>