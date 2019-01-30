import React from 'react'
import { HorizontalBar, Chart } from 'react-chartjs-2'
import * as moment from 'moment'
// defaults.global.animation = false;

class YearChartTime extends React.Component {
  render() {
    const [...songs] = this.props.songs
    const total = songs.map(song => song.total).slice(0, 24)
    const names = songs.map(song => song.song.toUpperCase()).slice(0, 24)

    const data = {
      labels: names,
      datasets: [
        {
          label: 'Seconds',
          backgroundColor: 'rgba(2,42,49,0.5)',
          borderColor: 'rgba(2,42,49,1)',
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(2,42,49,.7)',
          hoverBorderColor: 'rgba(2,42,49,1)',
          data: total
        }
      ]
    }

    return (
      <div className="length">
        <h1>Top 25 Songs</h1>
        <div className="length-chart">
          <HorizontalBar
            data={data}
            height={1200}
            options={{
              tooltips: { enabled: false },
              maintainAspectRatio: false,
              animation: {
                onProgress: (el) => {
                  const chartInstance = el.chart;
                  const ctx = chartInstance.ctx;
                  // const dataset = data.datasets[0];
                  const meta = chartInstance.controller.getDatasetMeta(0);

                  Chart.helpers.each(meta.data.forEach((bar, index) => {
                    const label = data.labels[index];
                    const labelPositionX = 20;
                    const labelWidth = ctx.measureText(label).width + labelPositionX;

                    ctx.textBaseline = 'middle';
                    ctx.textAlign = 'left';
                    ctx.fillStyle = '#fff';
                    ctx.fillText(`${label} (${moment.duration(data.datasets[0].data[index], 'seconds').format('h [hr] m [min] s [sec]')})`, labelPositionX, bar._model.y);
                  }));
                }
              },
              scales: {
                yAxes: [{
                  categoryPercentage: .9,
                  barPercentage: 1,
                  barThickness: 'flex',
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    mirror: true,
                    beginAtZero: 0,
                    fontSize: 12,
                    fontColor: 'white',
                    fontStyle: 'bold',
                    autoSkip: false,
                    padding: -10
                  }
                }],
                xAxes: [{
                  ticks: {
                    display: false,
                    fontStyle: 'bold',
                    showLabelBackdrop: true,
                    beginAtZero: true,
                    callback: (value, index, values) => {
                      return moment.duration(value, 'seconds').format('hh:mm:ss')
                    }
                  }
                }]
              },
              legend: {
                display: false,
                labels: {
                  fontColor: 'white',
                  fontStyle: 'bold',
                  fontSize: 16
                }
              },
            }}
          />
        </div>
      </div>
    )
  }
}

export default YearChartTime
