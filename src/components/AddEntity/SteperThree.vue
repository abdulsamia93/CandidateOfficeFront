<template>
  <div class="Steper-Four" style>
    <div class="Message">
      لقد تم تسجيل الكيان
      <br />قم بإجراء عملية التحقق للكيان وإكمال بياناته
    </div>


  </div>
</template>

<script>
import SteperBox from "@/components/AddEntity/Steper.vue";
import InputBox from "@/components/AddEntity/InputBox.vue";
import SelectBox from "@/components/AddEntity/SelectBox.vue";

export default {
  name: "Steper-Four",
  components: {
    SteperBox,
    InputBox,
    SelectBox
  },
  props: {},
  data: function() {
    return {
      Sub: [
        { name: "طرابلس المركز", value: 1 },
        { name: "حي الاندلس", value: 2 }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Steper-Four {
  float: right;
  width: 100%;
  min-height: 450px;
  margin-top: 50px;
  .Message {
    float: RIGHT;
    width: 300px;
    margin: 30px calc(50% - 150px);
    padding: 20px 0px;
    text-align: center;
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    -webkit-box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28),
      0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);
    box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28),
      0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);
    border-radius: 3px;
    color: #fff;
    font-size: 22px;
    line-height: 50px;
  }
  .Input-Box {
    float: right;
    width: 300px;
    min-height: 60px;
    margin: 10px calc(50% - 150px);
    .Lable {
      float: right;
      width: 100%;
      line-height: 49px;
      color: #999;
      font-size: 21px;
    }
    input {
      float: right;
      width: 288px;
      padding: 0px 5px;
      height: 40px;
      line-height: 40px;
      font-size: 21px;
      border: 1px solid #eeeeee;
      border-radius: 5px;
      color: #454545;
      font-family: "Cairo";
    }
  }
}
</style>
