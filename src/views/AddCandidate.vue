<template>
<div class="Add-Candidate">
  <Pages-Three :links="links"></Pages-Three>
  <Form-Box></Form-Box>
  <!-- <List-View></List-View> -->
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import PagesThree from "@/components/Genral/PagesThree.vue";
import FormBox from "@/components/AddCandidate/FormBox.vue";
Vue.use(VueAxios, axios);
export default {
  name: "home",
    components: {
      PagesThree,
      FormBox,
  },
  data: function() {
    return {
      messages:null,
      links: [{ name: "مكتب طرابلس", url: "/" }, { name: "المرشحين", url: "/" }, { name: "أضف مرشح", url: "/addcandidate" }]

    };
  },
  created() {
    this.$parent.pages= [
        { type: 'page', name: "المرشحين", url: "/", active: "",},
        { type: 'page', name: "أضف مرشح", url: "/addcandidate", active: "active",},
        { type: 'page', name: "تأكيد مرشح", url: "/approvecandidate", active: "",},
        { type: 'page', name: "الكيانات", url: "/entity", active: "" },
        { type: 'page', name: "أضف كيان", url: "/addentity", active: "" },
        { type: 'page', name: "تأكيد كيان", url: "/ApproveEntity", active: "" },
      ]
  }
};
</script>

<style lang='scss'>

</style>