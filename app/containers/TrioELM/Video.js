import React from 'react'
import YouTube from 'react-youtube'

export class Video extends React.Component {
  static propTypes = {
    video: React.PropTypes.object.isRequired
  };

  render () {
    const { video: { id } } = this.props

    return (
      <section>
        <YouTube
          videoId={id}
        />
      </section>
    )
  }
}

export default Video
