<template>
  <div class="Form-Box">
    <div class="List-Header">
      <div class="Info-Box">
        <div class="List-Title">التحقق من المرشح</div>
        <div class="List-Des">نموذج التحقق من المرشح</div>
      </div>
    </div>

    <div class="Form-Body">
    <Candidate-Info/>
      <Steper-One v-show="stepNumber==1"></Steper-One>
      <Steper-Two v-show="stepNumber==2"></Steper-Two>
      <Steper-Three v-show="stepNumber==3"></Steper-Three>
      <Steper-Four v-show="stepNumber==4"></Steper-Four>

      <Steper-Box :stepNumber="stepNumber"></Steper-Box>
    </div>
  </div>
</template>

<script>
import CandidateInfo from "@/components/ApproveCand/CandidateInfo.vue";
import SteperBox from "@/components/ApproveCand/Steper.vue";
import SteperOne from "@/components/ApproveCand/SteperOne.vue";
import SteperTwo from "@/components/ApproveCand/SteperTwo.vue";
import SteperThree from "@/components/ApproveCand/SteperThree.vue";
import SteperFour from "@/components/ApproveCand/SteperFour.vue";

export default {
  name: "List-View",
  components: {
    CandidateInfo,
    SteperBox,
    SteperOne,
    SteperTwo,
    SteperThree,
    SteperFour
  },
  props: {},
  data: function() {
    return {
      stepNumber: 1,
      el: 9
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Form-Box {
  float: right;
  width: 100%;
  min-height: 120px;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 3px;

  .List-Header {
    float: RIGHT;
    width: calc(100% - 100px);
    margin: -40px 50px 0px 50px;
    height: 90px;
    padding: 5px 0px;
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28),
      0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);
    border-radius: 3px;
    .Info-Box {
      float: right;
      width: 100%;
      height: 90px;
      .List-Title {
        float: right;
        width: 100%;
        text-align: center;
        color: #fff;
        line-height: 50px;
        font-size: 24px;
      }
      .List-Des {
        float: right;
        width: 100%;
        padding: 0px 15px;
        font-size: 18px;
        overflow: hidden;
        text-align: center;
        color: hsla(0, 0%, 100%, 0.62);
        line-height: 40px;
        height: 40px;
      }
    }
  }

  .Form-Body {
    float: right;
    width: calc(100% - 40px);
    min-height: 100px;
    margin: 15px 20px;
    .Step-One {
      float: right;
      width: 100%;
      height: 300px;
      background: orange;
    }
    .Step-Two {
      float: right;
      width: 100%;
      height: 300px;
      background: red;
    }
    .Step-Three {
      float: right;
      width: 100%;
      height: 300px;
      background: blue;
    }
    .Step-Four {
      float: right;
      width: 100%;
      height: 300px;
      background: green;
    }
  }
}
</style>
