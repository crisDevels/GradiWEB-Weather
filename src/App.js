import React, { Fragment } from 'react'
import DaysBogota from './Components/days3'
import WeatherBogota from './Components/weatherBogota'

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <WeatherBogota />
        <DaysBogota />
      </Fragment>
    )
  }
}

export default App