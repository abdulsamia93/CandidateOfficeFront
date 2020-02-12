<template>
  <div class="List-View">
    <div class="List-Header">
      <div class="Info-Box">
        <div class="List-Title">أضف دائرة فرعية</div>
        <div class="List-Des">أضف دائرة فرعية للكيان السياسي</div>
      </div>

      <div class="Btn-Box"></div>
    </div>

    <Entity-Info />

    <div class="List-Body">
      <div class="Select-Box">
        <div class="Label">الدائرة الرئيسية</div>
        <select class="Input" v-model="VName">
          <option v-for="item in VList" :value="item.value">{{item.name}}</option>
        </select>
      </div>

      <div class="Select-Box">
        <div class="Label">الدائرة الفرعية</div>
        <select class="Input" v-model="VName">
          <option v-for="item in VList" :value="item.value">{{item.name}}</option>
        </select>
      </div>

      <div class="Btn-Add">إضافة</div>
    </div>
  </div>
</template>

<script>
import EntityInfo from "@/components/Entity/Subconstituency/EntityInfo.vue";

export default {
  name: "List-View",
  components: {
    EntityInfo
  },
  props: {},
  data: function() {
    return {
      el: 9,
      VList: [
        { name: "طرابلس" },
        { name: "بنغازي" },
        { name: "سبها" },
        { name: "سرت" }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.List-View {
  float: right;
  width: 100%;
  min-height: 120px;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 3px;

  .List-Header {
    float: RIGHT;
    width: calc(100% - 100px);
    margin: -40px 50px 0px 50px;
    height: 90px;
    padding: 5px 0px;
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28),
      0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);
    border-radius: 3px;
    .Info-Box {
      float: right;
      width: 50%;
      height: 90px;
      .List-Title {
        float: right;
        width: 100%;
        text-align: center;
        color: #fff;
        line-height: 50px;
        font-size: 24px;
      }
      .List-Des {
        float: right;
        width: 100%;
        padding: 0px 15px;
        font-size: 18px;
        overflow: hidden;
        color: hsla(0, 0%, 100%, 0.62);
        line-height: 40px;
        height: 40px;
      }
    }
    .Btn-Box {
      float: left;
      height: 90px;
      .Btn {
        float: right;
        padding: 0px 30px;
        height: 50px;
        margin: 22px 10px;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        line-height: 50px;
        background: hsla(0, 0%, 100%, 0.2) !important;
        text-decoration: none;
      }
    }
  }

  .List-Body {
    float: right;
    width: 290px;
    margin: 20px calc(50% - 145px);
    abackground: #fb8c00;
    .Select-Box {
      float: right;
      width: calc(calc(100% / 1) - 30px);
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
        width: 260px;
        padding: 0px 5px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        border: 1px solid #eeeeee;
        border-radius: 5px;
        color: #787878;
        font-family: "Cairo";
      }
    }
    .Btn-Add {
      float: right;
      width: 120px;
      height: 50px;
      margin: 20px calc(50% - 60px);
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
  }
}
</style>
