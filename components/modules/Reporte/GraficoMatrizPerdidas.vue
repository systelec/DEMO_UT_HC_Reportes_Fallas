<template>
  <div style="height: 350px">
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
      this.categoriasPerdidas = []
      this.valuesPerdidass = []

      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: '#fff'
            }
          }
        },
        legend: {
          data: [
            'Falla Eléctrica',
            'Calidad de Materias Primas',
            'Sanitización planeada',
            'Falla de Proceso'
          ]
        },
        grid: [
          {
            top: '6%',
            left: '10%',
            width: '84%',
            height: '88%'
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
            data: [
              'Mixer 1000',
              'Mixer 2000',
              'Mixer 4000',
              'Mixer 5000',
              'Mixer 6000',
              'Mixer 8000'
            ],
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
            name: 'Falla Eléctrica',
            type: 'bar',
            stack: 'Duracion total',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              normal: {
                color: '#E57373'
              }
            },
            data: [320, 302, 301, 334, 390, 330]
          },
          {
            name: 'Calidad de Materias Primas',
            type: 'bar',
            stack: 'Duracion total',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              normal: {
                color: '#4DB6AC'
              }
            },
            data: [120, 132, 101, 134, 90, 230]
          },
          {
            name: 'Sanitización planeada',
            type: 'bar',
            stack: 'Duracion total',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              normal: {
                color: '#4FC3F7'
              }
            },
            data: [220, 182, 191, 234, 290, 330]
          },
          {
            name: 'Falla de Proceso',
            type: 'bar',
            stack: 'Duracion total',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              normal: {
                color: '#81C784'
              }
            },
            data: [150, 212, 201, 154, 190, 330]
          }
        ]
      }

      myChart.setOption(option)
    }
  }
}
</script>