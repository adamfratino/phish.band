import React from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
    const match = shows.find(object => object.fields.date.split('T')[0] === id)

    let details = {}
    if (shows.length) details = match.fields

    const {locationName, run, set1, set2, set3, encore, thumbnail, location = {lat: 0, lon: 0}} = details

    return (
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
    )
  }
}

export default connect(mapStateToProps)(ShowDetails)
