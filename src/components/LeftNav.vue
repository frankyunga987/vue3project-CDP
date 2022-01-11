<template>
  <div class="leftNav">
    <ul class="list-unstyled components">
      <li style="margin-bottom:30px">
        <div
          :class="behavior ? 'highlight' : 'nohighlight'"
          class="ps-3"
          @click="this.behavior = !this.behavior"
        >
          <img src="../assets/trendGray.png" v-show="!behavior" />
          <img src="../assets/trend.png" v-show="behavior" />
          <span class="ms-1"> 營運表現 </span>
          <img src="../assets/rightArrow.png" v-show="!behavior" />
          <img src="../assets/downArrow.png" v-show="behavior" />
        </div>
        <div :class="behavior ? 'show' : 'noshow'">
          <router-link to="/OperationalOverview" active-class="active">
            營運總覽
          </router-link>
          <router-link to="/MembershipSales" active-class="active">
            會員銷售
          </router-link>
          <router-link to="/CommoditySales" active-class="active">
            商品銷售
          </router-link>
          <router-link to="/StoreChannelSales" active-class="active">
            門市通路銷售
          </router-link>
        </div>
      </li>
      <li>
        <div :class="labelGroup ? 'highlight' : 'nohighlight'" class="ps-3" @click="this.labelGroup = !this.labelGroup">
          <img src="../assets/analyzeGray.png" v-show="!labelGroup" />
          <img src="../assets/analyze.png" v-show="labelGroup" />
          <span class="ms-1"> 顧客貼標分群 </span>
          <img src="../assets/rightArrow.png" v-show="!labelGroup" />
          <img src="../assets/downArrow.png" v-show="labelGroup" />
        </div>
        <div :class="labelGroup ? 'show' : 'noshow'">
          <router-link to="/ValueGrouping" active-class="active">
            價值分群
          </router-link>
          <router-link to="/CustomLabel" active-class="active">
            自定義貼標
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
  data() {
    return {
      behavior:false,
      labelGroup:true,
    };
  },
  watch: {
    $route: function () {
      this.behavior =
        this.$route.path === "/OperationalOverview" ||
        this.$route.path === "/MembershipSales"||
        this.$route.path === "/CommoditySales" ||
        this.$route.path === "/StoreChannelSales";
      this.labelGroup =
        this.$route.path === "/ValueGrouping" ||
        this.$route.path === "/CustomLabel";
    },
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  position: relative;
  top: -2px;
}
.leftNav {
  background-color: #eaf3f4;
  color: black;
  height: 100%;
  min-width: 216px;
  min-height: 800px;
  padding-top: 50px;
}
.highlight {
  vertical-align: bottom;
  font-size: 18px;
  font-weight: bold;
  color: #63a7c8;
}
.nohighlight {
  vertical-align: bottom;
  font-size: 18px;
  font-weight: bold;
  color: #8a8a8a;
}
.show {
  display: block;
}
.noshow {
  display: none;
}
a {
  display: block;
  color: #8a8a8a;
  text-decoration: none;
  border-radius: 8px;
  margin: 10px;
  height: 40px;
  line-height: 40px;
  padding-left: 35px;
}
.active {
  display: block;
  background-color: #63a7c8;
  color: white;
}
</style>
