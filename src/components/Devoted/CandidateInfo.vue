<template>
  <div class="Candidate-Info">

    <div class="Box">
      <div class="Lable">إسم المرشح</div>
          <div class="Field">عبدالله خالد عبدالله</div>
    </div>

    <div class="Box">
      <div class="Lable">الرقم الوطني</div>
          <div class="Field">1993234234</div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Candidate-Info",
  components: {},
  props: {},
  data: function() {
    return {
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Candidate-Info{
  float: right;
  width: calc(100% - 40px);
  margin:40px 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;

  .Box{
    float: right;
    width: 50%;
        .Lable{
          float: right;
          margin: 10px 10px;
          width: calc(100% - 20px);
          font-size: 16px;
          color: #787878;

        }
        .Field{
    float: right;
    width: 260px;
    overflow: hidden;
    line-height: 48px;
    height: 48px;
    border:1px solid #eeeeee;
    border-radius: 4px;
    padding:0px 10px;
    font-size: 18px;
    margin: 0px 8px;
  }
  }

}
</style>
