<template>
  <div id="game_echarts_main" class="container" style="clear: both;height: 1000px">

  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    name: "game_echarts_main",
    data() {
      return {
        members: [],
        demage: [],
        legends: [],
        DK: []
      }
    },
    props: ['message'],
    mounted() {
      this.members.push(this.message.rg_team1 + this.message.rg_team1_top_id, this.message.rg_team1 + this.message.rg_team1_jungle_id, this.message.rg_team1 + this.message.rg_team1_mid_id, this.message.rg_team1 + this.message.rg_team1_ADC_id, this.message.rg_team1 + this.message.rg_team1_support_id, this.message.rg_team2 + this.message.rg_team2_top_id, this.message.rg_team2 + this.message.rg_team2_jungle_id, this.message.rg_team2 + this.message.rg_team2_mid_id, this.message.rg_team2 + this.message.rg_team2_ADC_id, this.message.rg_team2 + this.message.rg_team2_support_id);
      let members = this.members;
      this.demage.push(this.message.rg_team1_topdemage, this.message.rg_team1_jungledemage, this.message.rg_team1_middemage, this.message.rg_team1_ADCdemage, this.message.rg_team1_supportdemage, this.message.rg_team2_topdemage, this.message.rg_team2_jungledemage, this.message.rg_team2_middemage, this.message.rg_team2_ADCdemage, this.message.rg_team2_supportdemage);
      let demage = this.demage;
      this.DK.push(this.message.rg_team1_topdk,this.message.rg_team1_jungledk,this.message.rg_team1_middk,this.message.rg_team1_ADCdk,this.message.rg_team1_supportdk,this.message.rg_team2_topdk,this.message.rg_team2_jungledk,this.message.rg_team2_middk,this.message.rg_team2_ADCdk,this.message.rg_team2_supportdk)
      let DK=this.DK;
      this.legends.push(this.message.rg_team1_toppick, this.message.rg_team1_junglepick, this.message.rg_team1_midpick, this.message.rg_team1_ADCpick, this.message.rg_team1_supportpick, this.message.rg_team2_toppick, this.message.rg_team2_junglepick, this.message.rg_team2_midpick, this.message.rg_team2_ADCpick, this.message.rg_team2_supportpick)
      let legends = this.legends;
      let box = {
        value: {
          lineHeight: 20,
          align: 'center'
        },
      };
      for (let i=0;i<10;i++){
        box[members[i]]={
          height:40,
          align:'center',
          backgroundColor:{
            image:legends[i]
          }
        }
      }
      let app = echarts.init(document.getElementById('game_echarts_main'), 'dark');
      app.setOption({
        title: {
          text: '赛后数据统计',
          top: '3%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['对敌方英雄造成的伤害', '承受伤害'],
          top: '3%'
        },
        grid: {
          left: '1%',
          right: '4%',
          top: '8%',
          bottom: '5%',
          containLabel: true,
          height: '900px',
          textAlign:'center'
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.001]
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data:members,
          axisLabel: {
            formatter: function (value) {
              return '{' + value + '| }\n{value|' + value + '}';
            },
            margin: 20,
            interval: 0,
            rich:box
          }
        },
        series: [{
          name: '对敌方英雄造成的伤害',
          type: 'bar',
          data: demage
        }, {
          name: '承受伤害',
          type: 'bar',
          data: DK
        }]
      })
    }
  }
</script>

<style>

</style>
