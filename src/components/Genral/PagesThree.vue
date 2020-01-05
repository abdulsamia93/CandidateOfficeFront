<template>
  <div class="Pages-Three">
    <div v-for="link in links" style="float:right;">
      <router-link :to="link.url" class="Page-Link">{{link.name}}</router-link>
      <i class="fas fa-chevron-left"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pages-Three",
  components: {},
  props: {
    links:null
  },
  data: function() {
    return {
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Pages-Three {
  float: right;
  height: 50px;
  min-width: 100px;
  background: #fff;
  margin-bottom: 100px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
  border-radius: 12px 4px 4px 12px;
  padding: 0px 10px;
  line-height: 50px;
  i {
    float: right;
    line-height: 50px;
    color: #888;
    font-size: 20px;
  }
  .Page-Link {
    float: right;
    font-size: 17px;
    color: #777;
    padding: 0px 6px;
    text-decoration: none;
  }
  .Page-Link:hover {
    color: #fb8c00;
  }
}
</style>
