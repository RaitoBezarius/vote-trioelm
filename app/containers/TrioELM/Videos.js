import React from 'react'
import Video from './Video'

import { GridList, GridTile } from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 1200,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24
  }
}

export class Videos extends React.Component {
  static propTypes = {
    videos: React.PropTypes.array.isRequired
  };

  render () {
    const { videos } = this.props

    return (
      <div style={styles.root}>
        <GridList
          cellHeight={340}
          style={styles.gridList}
        >
          <Subheader>Les vidéos du TrioELM</Subheader>
          {videos.map(video => {
            return (
              <GridTile
                key={video.id}
                title={video.title}
                actionIcon={<IconButton><StarBorder color='white' /></IconButton>}
              >
                <Video video={video} />
              </GridTile>
            )
          })}
        </GridList>
      </div>
    )
  }
}

export default Videos
