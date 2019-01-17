import React from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom'
import ShowDetailsHeader from '../components/ShowDetailsHeader'
import ShowDetailsInfo from '../components/ShowDetailsInfo'
import ShowDetailsMap from '../components/ShowDetailsMap'
import ShowDetailsCharts from '../components/ShowDetailsCharts'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}

class ShowDetails extends React.Component {
  render() {
    const { shows } = this.props.data
    const { id } = this.props.match.params

    const match = shows.find((show, i) => {
      return show.fields.date.split('T')[0] === id
    })

    const it = match ? {
      prev: shows[(shows.findIndex(x => x === match))+1],
      next: shows[(shows.findIndex(x => x === match))-1]
    } : 'none'

    let details = {}
    if (shows.length) details = match.fields

    const {locationName, run, set1, set2, set3, encore, thumbnail, location = {lat: 0, lon: 0}} = details

    return (
      <div className="show-details__container">
        {it.prev &&
          <Link to={`/show/${it.prev.fields.date.split('T')[0]}`} className="show-details__controls show-details__controls--previous"><span className="controls--arrow">➧</span></Link>
        }
        <div className="show-details">
          { this.props.data.loading
              ? <div>Loading</div>
              : <React.Fragment>
                  <ShowDetailsHeader
                    run={run}
                    venue={locationName}
                    date={id}
                  />
                  <ShowDetailsInfo
                    date={id}
                    location={location}
                    set1={set1}
                    set2={set2}
                    set3={set3}
                    encore={encore}
                    thumbnail={thumbnail}
                  />

                <Tabs className="tabs">
                    <TabList className="tabs__list">
                      <Tab>First</Tab>
                      <Tab>Second</Tab>
                      <Tab>Encore</Tab>
                    </TabList>
                    <TabPanel className="tabs__panel">
                      <ShowDetailsCharts set={set1} />
                    </TabPanel>
                    <TabPanel>
                      <ShowDetailsCharts set={set2} />
                    </TabPanel>
                    <TabPanel>
                      <ShowDetailsCharts set={encore} />
                    </TabPanel>
                  </Tabs>

                  <ShowDetailsMap
                    lat={location.lat}
                    lon={location.lon}
                  />
                </React.Fragment>
           }
        </div>
        {it.next &&
          <Link to={`/show/${it.next.fields.date.split('T')[0]}`} className="show-details__controls show-details__controls--next"><span className="controls--arrow">➧</span></Link>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(ShowDetails)
