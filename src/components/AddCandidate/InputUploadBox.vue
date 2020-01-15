<template>
  <div class="Input-Upload-Box">
    <div class="Btn-File" @click="btnUpload()">{{FieldName}} | {{fn}}</div>
    <input type="file" :id="IdName" @change="getNameFile()" style="display:none;"/>
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
      fn: null,
    };
  },
  methods: {
    btnUpload: function() {
      var x = document.getElementById(this.IdName).click();
    },
    getNameFile: function() {
      this.fn = document.getElementById(this.IdName).files.item(0).name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Input-Upload-Box {
  float: right;
  width: calc(calc(100% / 3) - 30px);
  margin: 25px 15px;
  .Btn-File {
    float: right;
    line-height: 42px;
    padding:0px 10px;


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


}
</style>
