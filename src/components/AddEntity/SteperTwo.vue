<template>
  <div class="Steper-Three" style="">


    <Input-Upload-Box FieldName="إفادة بإسم رئيس الكيان" :VName="Fname" IdName="one"></Input-Upload-Box>
    <Input-Upload-Box FieldName="الإتفاق القانوني للكيان السياسي" :VName="Fname" IdName="two"></Input-Upload-Box>
    <Input-Upload-Box FieldName="رمز الكيان السياسي" :VName="Fname" IdName="three"></Input-Upload-Box>
    <Input-Upload-Box FieldName="رقم حساب الحملة الإنتخابية" :VName="Fname" IdName="four"></Input-Upload-Box>

    <Input-Download-Upload-Box FieldName="ورقة العائلة" :VName="Fname" IdName="onee"></Input-Download-Upload-Box>


  </div>
</template>

<script>
import SteperBox from "@/components/AddEntity/Steper.vue";
import InputBox from "@/components/AddEntity/InputBox.vue";
import SelectBox from "@/components/AddEntity/SelectBox.vue";
import InputUploadBox from "@/components/AddEntity/InputUploadBox.vue";
import InputDownloadUploadBox from "@/components/AddEntity/InputDownloadUploadBox.vue";

export default {
  name: "Steper-Three",
  components: {
    SteperBox,
    InputBox,
    SelectBox,
    InputUploadBox,
    InputDownloadUploadBox
  },
  props: {},
  data: function() {
    return {
      Sub:[
        {name:"طرابلس المركز",value:1},
        {name:"حي الاندلس",value:2},
      ],
      Fname:null,
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Steper-Three{
  float: right;
  width: 100%;
  height: 450px;
  margin-top: 50px;
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
