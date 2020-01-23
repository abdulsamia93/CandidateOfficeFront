import Vue from "vue";
import Router from "vue-router";
import candidate from "./views/Candidate.vue";
import devoted from "./views/Devoted.vue";
import addcandidate from "./views/AddCandidate.vue";
import approvecandidate from "./views/ApproveCandidate.vue";
import approveCand from "./views/ApproveCand.vue";
import entity from "./views/Entity.vue";
import representative from "./views/Representative.vue";
import addentity from "./views/AddEntity.vue";


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
      path: "/approvecandidate/approve",
      name: "cahdidate page",
      component: approveCand
    },
    {
      path: "/entity",
      name: "subscription Page",
      component: entity
    },
    {
      path: "/entity/representative",
      name: "subscription Page",
      component: representative
    },
    {
      path: "/addentity",
      name: "subscription Page",
      component: addentity
    },
  ]
});
