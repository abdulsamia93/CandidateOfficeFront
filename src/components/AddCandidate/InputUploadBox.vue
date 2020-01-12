<template>
  <div class="Input-Upload-Box">
      <div class="Label">{{FieldName}}</div>
      <input  type="file" class="Input">
  </div>
</template>

<script>

export default {
  name: "Input-Upload-Box",
  components: {
  },
  props: {
      FieldName:null,
      VName:null,
  },
  data: function() {
    return {
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Input-Upload-Box{
    float: right;
    width: calc(calc(100% / 3) - 30px);
    margin:10px 15px; 
    .Label{
        float: right;
        width: 100%;
        line-height: 42px;
        color:#999;
    }
    .Input{
        float: right;
        width: 260px;
        padding:0px 5px;
        height: 40px;
        line-height: 40px;
        font-size:17px;
        border:1px solid #eeeeee;
        border-radius: 5px;
        color:#787878;
        font-family: 'Cairo';
        background: linear-gradient(60deg, #ffa726, #fb8c00);
    }
}
</style>
