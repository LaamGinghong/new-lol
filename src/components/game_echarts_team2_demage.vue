<template>
  <div id="game_echarts_team2_demage" class="col-6" style="height: 400px;"></div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    name: "game_echarts_team2_demage",
    props:['message'],
    data() {
      return {
        members: [],
        demage: [],
      }
    },
    mounted() {
      this.members.push(this.message.rg_team2+ this.message.rg_team2_top_id, this.message.rg_team2 + this.message.rg_team2_jungle_id, this.message.rg_team2 + this.message.rg_team2_mid_id, this.message.rg_team2 + this.message.rg_team2_ADC_id, this.message.rg_team2 + this.message.rg_team2_support_id);
      let members = this.members;
      this.demage.push(this.message.rg_team2_topdemage, this.message.rg_team2_jungledemage, this.message.rg_team2_middemage, this.message.rg_team2_ADCdemage, this.message.rg_team2_supportdemage);
      let demage = this.demage;
      let cpp = echarts.init(document.getElementById('game_echarts_team2_demage'), 'dark');
      cpp.setOption({
        title: {
          text: this.message.rg_team2 + '伤害占比',
          top: '3%'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: members,
          top: '10%'
        },
        series: [{
          name: '伤害占比',
          type: 'pie',
          radius: ['40%', '60%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '24',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: demage[0],
            name: members[0]
          }, {
            value: demage[1],
            name: members[1]
          }, {
            value: demage[2],
            name: members[2]
          }, {
            value: demage[3],
            name: members[3]
          }, {
            value: demage[4],
            name: members[4]
          }]
        }]
      })
    }
  }
</script>

<style>

</style>
