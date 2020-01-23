<template>
  <div class="Steper-Four" style>
    <div class="Message">
      هل ترغب في تأكيد هذا المرشح
      <br />أم حفظ التغيرات بدون تأكيد
    </div>

    <div class="Box-Btn">
      <router-link class="Btn" to="approvecandidate">حفظ</router-link>
    <router-link class="Btn" to="approvecandidate">تأكيد وحفظ</router-link>
    </div>



  </div>
</template>

<script>
import SteperBox from "@/components/AddCandidate/Steper.vue";
import InputBox from "@/components/AddCandidate/InputBox.vue";
import SelectBox from "@/components/AddCandidate/SelectBox.vue";

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

.Box-Btn{
  float: right;
  width: 300px;
  margin:30px calc(50% - 150px);
    .Btn{
    float: right;
    width: 100px;
    height: 50px;
    margin: 5px 25px;
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    -webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    text-decoration: none;

  }
        .Btn:hover{
    background: #87c13f;
        background: linear-gradient(60deg, #ffa726aa, #fb8c00aa);
        cursor: pointer;
  }

}

}
</style>
