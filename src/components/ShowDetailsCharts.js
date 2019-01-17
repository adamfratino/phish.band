import React from 'react'
import { Line } from 'react-chartjs-2'

class ShowDetailsCharts extends React.Component {
  render() {
    const { set } = this.props
    const songs = set.map((song, i) => song.song)
    const durations = set.map((song, i) => song.duration.replace(/:/g, '.'))

    const data = {
      labels: songs,
      datasets: [
        {
          label: '',
          fill: true,
          lineTension: 0,
          backgroundColor: 'rgba(2,42,49,0.4)',
          borderColor: 'rgba(2,42,49,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          borderWidth: 5,
          pointBorderColor: '#011519',
          pointBackgroundColor: 'rgba(2,42,49,1)',
          pointBorderWidth: 15,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: '#011519',
          pointHoverBorderColor: '#011519',
          pointHoverBorderWidth: 15,
          pointRadius: 3,
          pointHitRadius: 50,
          data: durations
        }
      ]
    }

    return (
      <div className="show-details__charts">
        <Line
          data={data}
        	height={400}
        	options={{
        		maintainAspectRatio: false,
            legend: {
              display: false,
              labels: {
                fontColor: 'white',
                fontStyle: 'bold',
                fontSize: 16
              }
            },
            scales: {
              yAxes: [{
                ticks: {
                  display: false,
                  beginAtZero: true,
                  fontSize: 12,
                  suggestedMax: 20,
                  fontStyle: 'bold',
                  fontColor: 'white',
                  backdropColor: 'rgba(2,42,49,1)'
                }
              }],
              xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  display: false,
                  showLabelBackdrop: true,
                  beginAtZero: true,
                  fontSize: 12,
                  fontStyle: 'bold',
                  autoSkip: false,
                  fontColor: 'white',
                  backdropColor: 'white'
                }
              }]
            }
        	}}
        />
      </div>
    )
  }
}

export default ShowDetailsCharts
