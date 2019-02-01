import React from 'react'

const Runs = ({ run, date }) => (
  <div className="runs">
    {run.map(item => <small key={`${date}_${item}`} className="runs__run">{ item }</small>)}
  </div>
)

export default Runs
