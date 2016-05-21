import React from 'react'

import SockJS from 'sockjs-client'

export class RealtimeVoteConnection extends React.Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired
  };

  constructor (props) {
    super(props)
    this.openSocket(props)
  }

  openSocket (props) {
    this.sock = new SockJS(props.url)
    this.sock.onopen = () => props.onConnected(this.sock)
    this.sock.onmessage = e => props.onData(e)
    this.sock.onclose = () => props.onDisconnected()
  }

  closeSocket () {
    if (this.sock) {
      this.sock.close()
      this.sock = null
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.url !== nextProps.url) {
      this.closeSocket()
      this.openSocket(nextProps)
    }
  }

  componentWillUnmount () {
    this.closeSocket()
  }

  render () {
    return null
  }
}

export default RealtimeVoteConnection
