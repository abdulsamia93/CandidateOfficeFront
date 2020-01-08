<template>
  <div class="Steper-One">

    <div class="Search-Box">
        <input type="text" placeholder="الرقم الوطني">
        <div class="Btn-Search">بحث</div>
    </div>

    <Input-Box FieldName="إسم المرشح" :VName="Fname"></Input-Box>
    <Input-Box FieldName="إسم الأب" :VName="Fname"></Input-Box>
    <Input-Box FieldName="إسم الجد" :VName="Fname"></Input-Box>
    <Input-Box FieldName="اللقب" :VName="Fname"></Input-Box>
    <Input-Box FieldName="إسم الأم" :VName="Fname"></Input-Box>
    <Input-Box FieldName="تاريخ الميلاد" :VName="Fname"></Input-Box>
    <Input-Box FieldName="الجنس" :VName="Fname"></Input-Box>
    <Input-Box FieldName="رقم كتيب العائلة" :VName="Fname"></Input-Box>


  </div>
</template>

<script>
import SteperBox from "@/components/AddCandidate/Steper.vue";
import InputBox from "@/components/AddCandidate/InputBox.vue";

export default {
  name: "Steper-One",
  components: {
    SteperBox,
    InputBox
  },
  props: {},
  data: function() {
    return {
      Fname:"ahmed"
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Steper-One{
  float: right;
  width: 100%;
  height: 500px;
  .Search-Box{
    float: right;
    width: 320px;
    padding:30px calc(50% - 155px);
    height: 50px;
    border-bottom:1px solid #efefef;

    input{
      float: right;
      width: 208px;
      border:none;
      height: 42px;
      line-height: 42px;
      border:1px solid #efefef;
      border-radius: 4px;
      padding:3px 5px;
      margin:0px 10px;
      font-size: 20px;
      outline: none;
      font-family: 'Cairo';
    }
    .Btn-Search{
      float: right;
      width: 80px;
      height: 50px;
      margin:0px 0px;
      background: linear-gradient(60deg, #ffa726, #fb8c00);
      border:none;
      text-align: center;
      color:#fff;
      border-radius: 4px;
      font-size: 22px;
      line-height: 50px;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
    }

  }
}
</style>
