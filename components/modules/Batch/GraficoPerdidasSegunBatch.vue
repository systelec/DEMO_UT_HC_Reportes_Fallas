<template>
  <div style="height: 350px">
    <div class="body-2 pt-3">Top de perdidas</div>
    <div id="grafico"></div>
  </div>
</template>

<style scoped>
#grafico {
  width: 100%;
  height: 100%;
}
</style>


<script>
import moment from 'moment'
import echarts from 'echarts'

export default {
  props: {
    perdidas: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    categoriasPerdidas: [],
    valuesPerdidass: []
  }),

  mounted() {
    this.graficar()
  },

  watch: {
    perdidas() {
      this.graficar()
    }
  },

  methods: {
    graficar() {
      let myChart = echarts.init(document.getElementById('grafico'))
      this.categoriasPerdidas = this.perdidas.map(
        item => item.Motivo.substr(0, 16) + '.'
      )
      this.valuesPerdidass = this.perdidas.map(item => item.Duracion)

      let option = {
        color: ['#64B5F6'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: '#fff'
            }
          }
        },
        grid: [
          {
            top: '6%',
            left: '30%',
            width: '60%',
            height: '70%'
          }
        ],
        xAxis: [
          {
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#90979c'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#999'
              }
            },
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: this.categoriasPerdidas,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#90979c'
              }
            }
          }
        ],
        series: [
          {
            name: 'Perdidas',
            type: 'bar',
            data: this.valuesPerdidass,
            itemStyle: {
              opacity: 0.7,
              color: '#235894',
              borderWidth: 2,
              borderColor: '#235894'
            }
          }
        ]
      }

      myChart.setOption(option)
    }
  }
}
</script>