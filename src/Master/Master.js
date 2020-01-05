import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import LoginBox from '@/components/Login/LoginBox.vue';
import RightMenu from '@/components/Master/RightMenu/RightMenu.vue';

export default {
  name: "App js",
  components: {
    LoginBox,
    RightMenu
  },
  data: function () {
    return {
      login: false,
      userkey: '',
      userid: '',
      pages: [
        { type: 'page', name: "المرشحين", url: "/", active: "active",},
        { type: 'page', name: "أضف مرشح", url: "/addcandidate", active: "",},
        { type: 'page', name: "تأكيد مرشح", url: "/", active: "",},
        { type: 'page', name: "الكيانات", url: "/entity", active: "" },
        { type: 'page', name: "أضف كيان", url: "/entity", active: "" },
        { type: 'page', name: "تأكيد كيان", url: "/entity", active: "" },
      ]
    };
  },
  created() {
    if (localStorage.login == "true" && localStorage.userkey && localStorage.userid) {
      this.login = true;
      this.userkey = localStorage.userkey;
      this.userid = localStorage.userid;
    }

  },
  methods: {
    MakeLogout: function () {
      alert("Log Out");
      localStorage.userkey = null;
      localStorage.login = null;
      localStorage.userid = null;
      this.userkey = null;
      this.login = false;
      this.userid = null;

    }
  }
}