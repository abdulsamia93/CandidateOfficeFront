<template>
<div class="candidate-page">
  <Pages-Three :links="links"></Pages-Three>
  <List-View></List-View>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ListView from "@/components/Entity/Devoted/Add/ListView.vue";
import PagesThree from "@/components/Genral/PagesThree.vue";
Vue.use(VueAxios, axios);
export default {
  name: "home",
    components: {
      ListView,
      PagesThree
  },
  data: function() {
    return {
      messages:null,
      links: [{ name: "مكتب طرابلس", url: "/" }, { name: "الكيانات", url: "/Entity" }, { name: "المزكين", url: "Entity/Devoted" }]
    };
  },
  created() {
    this.$parent.pages= [
        { type: 'page', name: "المرشحين", url: "/", active: "",},
        { type: 'page', name: "أضف مرشح", url: "/addcandidate", active: "",},
        { type: 'page', name: "تأكيد مرشح", url: "/approvecandidate", active: "",},
        { type: 'page', name: "الكيانات", url: "/entity", active: "active" },
        { type: 'page', name: "أضف كيان", url: "/addentity", active: "" },
        { type: 'page', name: "تأكيد كيان", url: "/ApproveEntity", active: "" },
      ]



        axios.get("http://localhost/alendmag/admin/GetMessages.php?id="+
        localStorage.userid +
        "&token=" +
        localStorage.userkey
        ).then(res => {
            this.messages = res.data
    });


  }
};
</script>

<style lang='scss'>

</style>