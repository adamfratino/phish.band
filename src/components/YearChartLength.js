import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

class YearChartLength extends React.Component {
  render() {
    const [...songs] = this.props.songs
    const names = songs.map(song => song.song.toUpperCase()).slice(0, 50)
    const lengths = songs.map(song => song.duration.length).slice(0, 50)

    const data = {
      labels: names,
      datasets: [
        {
          label: 'Songs',
          backgroundColor: 'rgba(2,42,49,0.5)',
          borderColor: 'rgba(2,42,49,1)',
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(2,42,49,.7)',
          hoverBorderColor: 'rgba(2,42,49,1)',
          data: lengths
        }
      ]
    }

    return (
      <div className="length">
        <HorizontalBar
          data={data}
          height={2600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                categoryPercentage: .9,
                barPercentage: 1,
                gridLines: {
                  display: false
                },
                ticks: {
                  mirror: true,
                  beginAtZero: 0,
                  fontSize: 14,
                  fontStyle: 'bold',
                  fontColor: 'white',
                  autoSkip: false,
                  padding: -10
                }
              }],
              xAxes: [{
                ticks: {
                  // display: false,
                  showLabelBackdrop: true,
                  beginAtZero: true
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
    )
  }
}

export default YearChartLength
