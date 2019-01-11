import React from 'react'

class Setlist extends React.Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {set1 &&
          <ul className="card__sets-set">
            <strong className="card__sets-title">First</strong>
            {set1.map( (song, i) =>
              <li key={`${id}_${i}`} className="card__sets-song">
                { song }
                {set1Times && <small>{set1Times[i]}</small>}
              </li>
            )}
            <strong className="show__setlist-info">{ set1.length } songs</strong>
            { set1Minutes && <strong className="show__setlist-info">{set1Minutes.reduce((a, b) => a + b)} minutes</strong>}
          </ul>
        }
        {set2 &&
          <ul className="card__sets-set">
            <strong className="card__sets-title">Second</strong>
            {set2.map( (song, i) =>
              <li key={`${id}_${i}`} className="card__sets-song">
                { song }
                {set2Times && <small>{set2Times[i]}</small>}
              </li>
            )}
            <strong className="show__setlist-info">{ set2.length } songs</strong>
            { set2Minutes && <strong className="show__setlist-info">{set2Minutes.reduce((a, b) => a + b)} minutes</strong>}
          </ul>
        }
        {set3 &&
          <ul className="card__sets-set">
            <strong className="card__sets-title">Third</strong>
            {set3.map( (song, i) =>
              <li key={`${id}_${i}`} className="card__sets-song">
                { song }
                {set3Times && <small>{set3Times[i]}</small>}
              </li>
            )}
            <strong className="show__setlist-info">{ set3.length } songs</strong>
            { set3Minutes && <strong className="show__setlist-info">{set3Minutes.reduce((a, b) => a + b)} minutes</strong>}
          </ul>
        }
        {encore &&
          <ul className="card__sets-set">
            <strong className="card__sets-title">Encore</strong>
            {encore.map( (song, i) =>
              <li key={`${id}_${i}`} className="card__sets-song">
                { song }
                {encoreTimes && <small>{encoreTimes[i]}</small>}
              </li>
            )}
            <strong className="show__setlist-info">{ encore.length } songs</strong>
            { encoreMinutes && <strong className="show__setlist-info">{encoreMinutes.reduce((a, b) => a + b)} minutes</strong>}
          </ul>
        }
      </React.Fragment>
    )
  }
}

export default Setlist
