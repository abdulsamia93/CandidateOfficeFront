<template>
  <div class="Steper-One">


    <Input-Box FieldName="إسم الكيان السياسي" :VName="Nid.FName"></Input-Box>
    <Input-Box FieldName="عنوان الكيان السياسي" :VName="Nid.SName"></Input-Box>
    <Input-Box FieldName="رقم الدائرة الرئيسية" :VName="Nid.TName"></Input-Box>
    <Input-Search-Box FieldName="الرقم الوطني لرئيس الكيان" :VName="Nid.LName"></Input-Search-Box>
    <Input-Box FieldName="إسم رئيس الكيان" :VName="Nid.LName"></Input-Box>
    <Input-Box FieldName="الهاتف الأول" :VName="Nid.MName"></Input-Box>
    <Input-Box FieldName="الهاتف الثاني" :VName="Fname"></Input-Box>
    <Input-Box FieldName="البريد الإلكتروني" :VName="Fname"></Input-Box>
  </div>
</template>

<script>
import SteperBox from "@/components/AddEntity/Steper.vue";
import InputBox from "@/components/AddEntity/InputBox.vue";
import InputSearchBox from "@/components/AddEntity/InputSearchBox.vue";

export default {
  name: "Steper-One",
  components: {
    SteperBox,
    InputBox,
    InputSearchBox
  },
  props: {},
  data: function() {
    return {
      Nid: {
        FName: "",
        SName: "",
        TName: "",
        LName: "",
        MName: ""
      }
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Steper-One {
  float: right;
  width: 100%;
  height: 500px;
  .Search-Box {
    float: right;
    width: 320px;
    padding: 30px calc(50% - 155px);
    height: 50px;
    border-bottom: 1px solid #efefef;

    input {
      float: right;
      width: 208px;
      border: none;
      height: 42px;
      line-height: 42px;
      border: 1px solid #efefef;
      border-radius: 4px;
      padding: 3px 5px;
      margin: 0px 10px;
      font-size: 20px;
      outline: none;
      font-family: "Cairo";
    }
    .Btn-Search {
      float: right;
      width: 80px;
      height: 50px;
      margin: 0px 0px;
      background: linear-gradient(60deg, #ffa726, #fb8c00);
      border: none;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      font-size: 22px;
      line-height: 50px;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
      cursor: pointer;
    }
    .Btn-Search:hover {
      background: linear-gradient(60deg, #ffa726aa, #fb8c00aa);
    }
  }
}
</style>
