import Vue from "vue";
import Router from "vue-router";
import candidate from "./views/Candidate.vue";
import devoted from "./views/Devoted.vue";
import addcandidate from "./views/AddCandidate.vue";
import approvecandidate from "./views/ApproveCandidate.vue";
import approveCand from "./views/ApproveCand.vue";
import entity from "./views/Entity.vue";
import representative from "./views/Representative.vue";
import addrepresentative from "./views/AddRepresentative.vue";
import subconstituency from "./views/Subconstituency.vue";
import addsubconstituency from "./views/AddSubconstituency.vue";
import EntityCandidate from "./views/EntityCandidate.vue";
import EntityAddCandidate from "./views/EntityAddCandidate.vue";
import EntityDevoted from "./views/EntityDevoted.vue";
import EntityAddDevoted from "./views/EntityAddDevoted.vue";
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
      path: "/entity/representative/add",
      name: "subscription Page",
      component: addrepresentative
    },
    {
      path: "/entity/Subconstituency",
      name: "subscription Page",
      component: subconstituency
    },
    {
      path: "/entity/Subconstituency/add",
      name: "subscription Page",
      component: addsubconstituency
    },
    {
      path: "/entity/candidate",
      name: "subscription Page",
      component: EntityCandidate
    },
    {
      path: "/entity/candidate/add",
      name: "subscription Page",
      component: EntityAddCandidate
    },
    {
      path: "/entity/devoted",
      name: "subscription Page",
      component: EntityDevoted
    },
    {
      path: "/entity/devoted/add",
      name: "subscription Page",
      component: EntityAddDevoted
    },
    {
      path: "/addentity",
      name: "subscription Page",
      component: addentity
    },
  ]
});
