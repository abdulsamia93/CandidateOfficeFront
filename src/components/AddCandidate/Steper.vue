<template>
  <div class="Steper-Box">
    <div class="Btn-Prev">السابق</div>
    <div class="Steps">{{stepNumber}}</div>
    <div class="Btn-Next" @click="NextStep">التالي</div>
  </div>
</template>

<script>
export default {
  name: "Steper-Box",
  components: {},
  props: {
    stepNumber: null
  },
  data: function() {
    return {};
  },
  methods: {
    NextStep: function() {
      alert("Log Out");
      this.$parent.stepNumber=2;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Steper-Box {
  float: right;
  width: 500px;
  height: 60px;
  background: orange;
  margin: 20px calc(50% - 250px);
  .Steps {
    float: right;
    width: 200px;
    text-align: center;
  }
  .Btn-Prev,
  .Btn-Next {
    float: right;
    width: 100px;
    height: 50px;
    background: blue;
  }
}
</style>
