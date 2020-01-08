<template>
  <div class="Select-Box">
      <div class="Label">{{FieldName}}</div>
      <select class="Input" v-model="VName">
        <option v-for="item in VList" :value="item.value">{{item.name}}</option>
      </select>
  </div>
</template>

<script>

export default {
  name: "Select-Box",
  components: {
  },
  props: {
      FieldName:null,
      VList:null,
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
.Select-Box{
    float: right;
    width: calc(calc(100% / 3) - 30px);
    abackground: red; 
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
        font-size: 20px;
        border:1px solid #eeeeee;
        border-radius: 5px;
        color:#787878;
        font-family: 'Cairo';
    }
}
</style>
