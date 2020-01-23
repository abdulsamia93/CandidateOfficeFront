<template>
  <div class="Input-Search-Box">
    <div class="Label">{{FieldName}}</div>
    <input class="Input" v-model="VName" />
    <div class="Btn">جلب</div>
  </div>
</template>

<script>
export default {
  name: "Input-Search-Box",
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
.Input-Search-Box {
  float: right;
  width: calc(calc(100% / 3) - 30px);
  abackground: red;
  margin: 10px 15px;
  .Label {
    float: right;
    width: 100%;
    line-height: 42px;
    color: #999;
  }
  .Input {
    float: right;
    width: 180px;
    padding: 0px 5px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    color: #787878;
    font-family: "Cairo";
  }
  .Btn {
    float: right;
    width: 70px;
    height: 40px;
    margin: 0px 5px;
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    -webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
  }
  .Btn:hover{
        background: #87c13f;
        background: linear-gradient(60deg, #ffa726aa, #fb8c00aa);
        cursor: pointer;
  }
}
</style>
