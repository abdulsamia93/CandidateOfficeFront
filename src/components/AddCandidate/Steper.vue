<template>
  <div class="Steper-Box">
    <div class="Btn-Prev" @click="PrevStep">السابق</div>
    <div v-for="i in allSteps" class="">
      <div v-show="i<=thestep" class="Stage-active"></div>
      <div v-show="i>thestep" class="Stage"></div>
    </div>
    <div class="Btn-Next" @click="NextStep">التالي</div>
  </div>
</template>

<script>
export default {
  name: "Steper-Box",
  components: {},
  props: {
    stepNumber: null,
  },
  data: function() {
    return {
    allSteps:4,
    thestep:1

    };
  },
  methods: {
    NextStep: function() {
      if(this.$parent.stepNumber<4){
      this.$parent.stepNumber+=1;
      this.thestep=this.$parent.stepNumber;
      }
    },
    PrevStep: function() {
      if(this.$parent.stepNumber>1){
      this.$parent.stepNumber-=1;
      this.thestep=this.$parent.stepNumber;
      }
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
  abackground: orange;
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
    margin:5px 10px;
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    box-shadow: 0 9px 18px rgba(0,0,0,0.2);
    border-radius: 5px;
  }
  .Stage{
    float: right;
    width: 50px;
    height: 50px;
    margin:5px 7.5px;
    background: #aaa;
    border-radius: 50px;
  }

    .Stage-active{
    float: right;
    width: 50px;
    height: 50px;
    margin:5px 7.5px;
    background: #234;
    border-radius: 50px;
  }

}
</style>
