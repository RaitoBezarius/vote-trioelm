/**
 *
 * VoteSystem.react.js
 */

import React from 'react';
import TrioELM from 'containers/TrioELM'
import RealtimeVoteConnection from 'containers/RealtimeVoteConnection'

import { actions as voteActions } from 'actions/VoteActions'
import { connect } from 'react-redux'

const selectProps = state => ({})
const selectActions = voteActions

const TRIOELM_VIDEOS = [
  {
    title: 'Musouka',
    id: 'Aen_x8AHByQ'
  },
  {
    title: 'Hitomi no Kakera',
    id: 'd-0yzwt8x_k'
  }
]

const TRIOELM_DATA = [
  {
    id: 'Aen_x8AHByQ',
    label: 'Musoka',
    value: 42
  },
  {
    id: 'd-0yzwt8x_k',
    label: 'Hitomi no Kakera',
    value: 30
  }
]

export class VoteSystem extends React.Component {
  render () {
    const { receiveData, connected, disconnected } = this.props

    return (
      <section>
        <TrioELM.Videos videos={TRIOELM_VIDEOS} />
        <TrioELM.Chart data={TRIOELM_DATA} />
        <RealtimeVoteConnection
          onData={receiveData}
          onConnected={connected}
          onDisconnected={disconnected}
        />
      </section>
    )
  }
}

export default connect(selectProps, selectActions)(VoteSystem)
