import React from 'react'

class Runs extends React.Component {
  render() {
    const { run, date } = this.props
    return (
      <div className="runs">
        {run.map(item => <small key={`${date}_${item}`} className="runs__run">{ item }</small>)}
      </div>
    )
  }
}

export default Runs
