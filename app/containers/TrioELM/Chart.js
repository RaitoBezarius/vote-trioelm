import React from 'react'
import { VictoryPie } from 'victory'

export class Chart extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired
  };

  render () {
    const { data } = this.props

    return (
      <VictoryPie
        data={data.map(item => ({x: item.label, y: item.value}))}
      />
    )
  }
}

export default Chart
