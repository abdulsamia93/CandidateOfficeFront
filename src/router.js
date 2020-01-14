import Vue from "vue";
import Router from "vue-router";
import candidate from "./views/Candidate.vue";
import devoted from "./views/Devoted.vue";
import addcandidate from "./views/AddCandidate.vue";
import approvecandidate from "./views/ApproveCandidate.vue";
import entity from "./views/Entity.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "cahdidate page",
      component: candidate
    },
    {
      path: "/candidate/devoted",
      name: "cahdidate page",
      component: devoted
    },
    {
      path: "/addcandidate",
      name: "cahdidate page",
      component: addcandidate
    },
    {
      path: "/approvecandidate",
      name: "cahdidate page",
      component: approvecandidate
    },
    {
      path: "/entity",
      name: "subscription Page",
      component: entity
    },
  ]
});
