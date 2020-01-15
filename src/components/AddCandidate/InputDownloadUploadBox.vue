<template>
  <div class="Input-Download-Upload-Box">
    <div class="btn-download">تنزيل النموذج</div>

    <div class="Input-Upload" @click="btnUpload()"> رفع النموذج | {{fn}}</div>
    <input type="file" :id="IdName"  @change="getNameFile()" style="display:none;"/>
  </div>
</template>

<script>
export default {
  name: "Input-Upload-Box",
  components: {},
  props: {
    FieldName: null,
    VName: null,
    IdName: null
  },
  data: function() {
    return {
      fn: null
    };
  },
  methods: {
    btnUpload: function() {
      var x = document.getElementById(this.IdName).click();
    },
    getNameFile: function(){
      this.fn = document.getElementById(this.IdName).files.item(0).name;
    }
  },
  watch:{





    
  }
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Input-Download-Upload-Box {
  float: right;
  width: 600px;
  margin: 10px calc(50% - 150px);
  margin-top: 100px;
  .btn-download {
    float: right;
    line-height: 42px;
    padding:0px 10px;
    width: 80px;
    height: 50px;
    margin: 5px 10px;
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    -webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    border-radius: 5px;


  }
    .btn-download:hover{
    background: linear-gradient(60deg, #ffa726aa, #fb8c00aa);
  }
  .Input-Upload {
    float: right;
    line-height: 42px;
    padding:0px 10px;
    width: 230px;
    height: 50px;
    margin: 5px 10px;
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    -webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
    .Input-Upload:hover{
    background: linear-gradient(60deg, #ffa726aa, #fb8c00aa);
  }
}
</style>
