<template>
  <div class="container home">
    <div class="header d-flex justify-content-between">
      <div class="d-flex">
        <span class="title-span">營運總覽</span>
        <div class="title-button-div d-flex align-items-center">
          <button @click="getall">全部</button>
          <button @click="getonline">線上</button>
          <button @click="getoffline">線下</button>
        </div>
      </div>
      <select name="date" id="date" class="datepicker">
        <option value="all">全部</option>
        <option value="year">最近1年 1/1-12/31</option>
        <option value="month">最近1月</option>
      </select>
    </div>
    <div class="container" style="padding: 0px">
      <div class="d-flex flex-wrap">
        <div class="col-5" :class="all?'col-5 pe-4':'col-12 d-flex justify-content-between'">
          <div
            class="number-div d-flex align-items-center justify-content-between " :class="all?'':'online-width flex-wrap align-content-center'"
          >
            <span style="color: #71afb6; font-size: 20px">營業額</span>
            <span style="font-size: 24px">79,972,833&nbsp;&nbsp;&nbsp;($)</span>
          </div>
          <div
            class="number-div d-flex align-items-center justify-content-between" :class="all?'':'online-width'"
          > 
            <span style="color: #71afb6; font-size: 20px">客單價</span>
            <span style="font-size: 24px">1,874&nbsp;&nbsp;&nbsp;($)</span>
          </div>
          <div
            class="number-div d-flex align-items-center justify-content-between" :class="all?'':'online-width'"
          >
            <span style="color: #71afb6; font-size: 20px">訂單數</span>
            <span style="font-size: 24px">39,470&nbsp;&nbsp;&nbsp;($)</span>
          </div>
        </div>
        <div class="col-7 line-bar-div" :class="all?'col-7':'col-12'">
          <div id="lineBar">
            <apexchart
              type="line"
              height="360"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
      </div>
      <div v-show="all">
      <div class="d-flex">
        <div class="col-5 ">
          <div class="pie-div">
            <span style="color: #71afb6; font-size: 20px"
              >通路線上/線下佔比</span
            >
            <div id="donut">
              <apexchart
                type="donut"
                height="330"
                :options="chartOptions2"
                :series="series2"
              ></apexchart>
            </div>
          </div>
        </div>
        <div class="col-7  line-div">
          <div id="line">
            <apexchart
              type="line"
              height="330"
              :options="chartOptions3"
              :series="series3"
            ></apexchart>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "OperationalOverview",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      // lineBar
      series: [
        {
          name: "銷售額",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "訂單數",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
        
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
        },
        colors:['#63A7C8','#F9C357'],
        stroke: {
          width: [0, 4],
        },
        title: {
          text: "營業額 X 訂單數",
          style: {
            fontSize: "20px",
            fontWeight: "medium",
            color: "#71AFB6",
          },
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        labels: [
          "01 Jan 2001",
          "02 Jan 2001",
          "03 Jan 2001",
          "04 Jan 2001",
          "05 Jan 2001",
          "06 Jan 2001",
          "07 Jan 2001",
          "08 Jan 2001",
          "09 Jan 2001",
          "10 Jan 2001",
          "11 Jan 2001",
          "12 Jan 2001",
        ],
        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            title: {
              text: "銷售額",
              style: {
                fontSize: "15px",
                fontWeight: "medium",
              },
            },
          },
          {
            opposite: true,
            title: {
              text: "訂單數",
              style: {
                fontSize: "15px",
                fontWeight: "medium",
              },
            },
          },
        ],
      },
      // dount
      series2: [44, 55],
      chartOptions2: {
        chart: {
          height:330,
          type: "donut",
        },
        colors: ["#63A7C8", "#F9C357"],
        labels: ["線上", "線下",],
        legend:{
          position: 'bottom',
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      // line
      series3: [
        {
          name: "線上 - 2013",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "線下 - 2013",
          data: [12, 11, 14, 18, 17, 13, 13],
        },
      ],
      chartOptions3: {
        chart: {
          height: 320,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#63A7C8", "#F9C357"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "線上線下消費走勢",
          align: "left",
           style: {
            fontSize: "20px",
            fontWeight: "medium",
            color: "#71AFB6",
          },
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "月份",
          },
        },
        yaxis: {
          title: {
            text: "消費金額",
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },

      online:false,
      offline:false,
      all:true,
    };
  },
  methods:{
    getall(){
      this.all=true
    },
    getonline(){
      this.all=false
    }
  }
};
</script>

<style scoped>
.home {
  padding: 50px;
}
.title-span {
  font-size: 24px;
  font-weight: bold;
  margin-right: 40px;
}
.title-button-div {
  background-color: #eaf3f4;
  border-radius: 8px;
  height: 40px;
}
.title-button-div button {
  background-color: #eaf3f4;
  border: none;
  color: black;
  border-radius: 8px;
  width: 7.7vw;
  height: 40px;
}
.title-button-div button:focus {
  background-color: #71afb6;
  color: white;
  border-radius: 8px;
  height: 40px;
}
.datepicker {
  background-color: #eaf3f4;
  border: none;
  color: black;
  border-radius: 8px;
  width: 20.8vw;
  height: 40px;
}
.number-div {
  padding: 0 15px;
  margin-top: 30px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  height: 110px;
}
.online-width{
  width: 24.3vw;
}
.line-bar-div {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 15px;
  padding: 15px;
  margin-top: 30px;
  height: 390px;
}
.pie-div {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 15px;
  padding: 15px;
  margin-top: 30px;
  margin-right: 30px;
  height: 356px;
}
.line-div {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 15px;
  padding: 15px;
  margin-top: 30px;
  height: 356px;
}

@media (min-width: 1660px) {
  .container {
    max-width: 1560px;
  }
}
@media (max-width: 1200px){
  .online-width {
    width: 22vw;
  }
}
</style>