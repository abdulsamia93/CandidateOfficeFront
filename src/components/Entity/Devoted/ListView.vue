<template>
  <div class="List-View">
    <div class="List-Header">
      <div class="Info-Box">
        <div class="List-Title">قائمة المزكين</div>
        <div class="List-Des">قائمة المزكين للكيان السياسي</div>
      </div>

      <div class="Btn-Box">
                <router-link class="Btn" to="devoted/add">أضف مزكي</router-link>
      </div>
    </div>


    <Entity-Info/>

    <div class="List-Body">
      <div class="HRow">
        <div class="Cel">رقم المزكي</div>

        <div class="Cel">إسم المزكي</div>

        <div class="Cel">الرقم الوطني</div>


      </div>



      <div class="Row">
        <div class="Cel">1</div>
        <div class="Cel">احمد علي خالد</div>
        <div class="Cel">199341231413</div>
      </div>



      <div class="Row">
        <div class="Cel">2</div>
        <div class="Cel">احمد علي خالد</div>
        <div class="Cel">199341231413</div>
      </div>


      
      <div class="Row">
        <div class="Cel">3</div>
        <div class="Cel">احمد علي خالد</div>
        <div class="Cel">199341231413</div>
      </div>



      
      <div class="Row">
        <div class="Cel">4</div>
        <div class="Cel">احمد علي خالد</div>
        <div class="Cel">199341231413</div>
      </div>



      
      <div class="Row">
        <div class="Cel">5</div>
        <div class="Cel">احمد علي خالد</div>
        <div class="Cel">199341231413</div>
      </div>


      
      <div class="Row">
        <div class="Cel">6</div>
        <div class="Cel">احمد علي خالد</div>
        <div class="Cel">199341231413</div>
      </div>



    </div>

    <div class="Pages-Number">
      <div class="Page-Number-active">1</div>
      <div class="Page-Number">2</div>
      <div class="Page-Number">3</div>
      <div class="Page-Number">4</div>
    </div>
  </div>
  </div>
</template>

<script>
import EntityInfo from "@/components/Entity/Devoted/EntityInfo.vue";

export default {
  name: "List-View",
  components: {
    EntityInfo
  },
  props: {},
  data: function() {
    return {
      el: 9
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
    width: calc(100% - 40px);
    min-height: 100px;
    margin: 15px 20px;

    .HRow {
      float: right;
      width: 100%;
      height: 32px;
      border-bottom: 1px solid #efefef;
      padding: 6px 0px;
      font-size: 18px;
      .Cel {
        float: right;
        direction: rtl;
        height: 32px;
        width: calc(100% / 3);
        color: #ff9800 !important;
      }
    }

    .Row {
      float: right;
      width: 100%;
      height: 32px;
      border-bottom: 1px solid #efefef;
      padding: 6px 0px;
      font-size: 17px;
      .Cel {
        float: right;
        direction: rtl;
        height: 32px;
        width: calc(100% / 3);
        color: #9a9a9a;
      }
    }

    .Btn-Add-Candidate {
      float: right;
      padding: 0px 15px;
      background: #2f4050;
      color: #fff;
      text-align: center;
      border-radius: 3px;
      height: 32px;
      font-size: 16px;
      line-height: 32px;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
      text-decoration: none;
    }
        .Btn-Add-Candidate:hover {
                background: #2f4050aa;
        }

  }

  .Pages-Number {
    float: right;
    width: 400px;
    height: 44px;
    margin: 30px 20px;
    .Page-Number {
      float: right;
      margin-left: 10px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      text-align: center;
      line-height: 44px;
      overflow: hidden;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
      font-size: 22px;
      background: #fff;
      color: #fb8c00;
    }
    .Page-Number-active {
      float: right;
      margin-left: 10px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      text-align: center;
      line-height: 44px;
      overflow: hidden;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
      font-size: 22px;
      background: #fff;
      color: #888;
    }
  }
}
</style>
