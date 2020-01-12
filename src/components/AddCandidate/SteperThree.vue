<template>
  <div class="Steper-Three" style="">


    <Input-Upload-Box FieldName="الرقم الوطني" :VName="Fname"></Input-Upload-Box>
    <Input-Upload-Box FieldName="إيصال الدفع" :VName="Fname"></Input-Upload-Box>
    <Input-Upload-Box FieldName="شهادة الميلاد" :VName="Fname"></Input-Upload-Box>
    <Input-Upload-Box FieldName="الشهادة الصحية" :VName="Fname"></Input-Upload-Box>
    <Input-Upload-Box FieldName="شهادة البراءة" :VName="Fname"></Input-Upload-Box>
    <Input-Upload-Box FieldName="ورقة العائلة" :VName="Fname"></Input-Upload-Box>

    <Input-Download-Upload-Box FieldName="ورقة العائلة" :VName="Fname"></Input-Download-Upload-Box>


  </div>
</template>

<script>
import SteperBox from "@/components/AddCandidate/Steper.vue";
import InputBox from "@/components/AddCandidate/InputBox.vue";
import SelectBox from "@/components/AddCandidate/SelectBox.vue";
import InputUploadBox from "@/components/AddCandidate/InputUploadBox.vue";
import InputDownloadUploadBox from "@/components/AddCandidate/InputDownloadUploadBox.vue";

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
