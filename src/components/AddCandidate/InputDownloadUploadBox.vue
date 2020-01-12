<template>
  <div class="Input-Download-Upload-Box">
    <div class="btn-download">تنزيل النموذج</div>

    <div class="btn-Upload" onclick="document.getElementById('UploadFile').click()">رفع النموذج</div>
    <input type="file" id="UploadFile" class="Input" value="رفع النموذج" />

  </div>
</template>

<script>
export default {
  name: "Input-Upload-Box",
  components: {},
  props: {
    FieldName: null,
    VName: null
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Input-Download-Upload-Box {
  float: right;
  width: 400px;
  margin: 10px calc(50% - 150px);
  margin-top: 100px;
  .btn-download {
    float: right;
    width: 120px;
    text-align: center;
    height: 45px;
    line-height: 45px;
    background: #fb8c00;
    color: #fff;
    margin: 0px 5px;
  }
  .Input {
    float: right;
    width: 200px;
    padding: 0px 5px;
    height: 45px;
    margin: 0px 5px;
    line-height: 45px;
    font-size: 15px;
    border: none;
    color: #fff;
    font-family: "Cairo";
    background: linear-gradient(60deg, #ffa726, #fb8c00);
  }
}
</style>
