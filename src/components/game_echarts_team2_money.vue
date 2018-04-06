<template>
  <div id="game_echarts_team2_money" class="col-6" style="height: 400px;"></div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    name: "game_echarts_team2_money",
    props: ['message'],
    data() {
      return {
        members: [],
        money: [],
      }
    },
    mounted() {
      this.members.push(this.message.rg_team2 + this.message.rg_team2_top_id, this.message.rg_team2 + this.message.rg_team2_jungle_id, this.message.rg_team2 + this.message.rg_team2_mid_id, this.message.rg_team2 + this.message.rg_team2_ADC_id, this.message.rg_team2 + this.message.rg_team2_support_id);
      let members = this.members;
      this.money.push(this.message.rg_team2_topearn, this.message.rg_team2_jungleearn, this.message.rg_team2_midearn, this.message.rg_team2_ADCearn, this.message.rg_team2_supportearn);
      let money = this.money;
      let bpp = echarts.init(document.getElementById('game_echarts_team2_money'), 'dark');
      bpp.setOption({
        title: {
          text: this.message.rg_team2 + '经济占比',
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
          name: '经济占比',
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
            value: money[0],
            name: members[0]
          }, {
            value: money[1],
            name: members[1]
          }, {
            value: money[2],
            name: members[2]
          }, {
            value: money[3],
            name: members[3]
          }, {
            value: money[4],
            name: members[4]
          }]
        }]
      })
    }
  }
</script>

<style>

</style>
