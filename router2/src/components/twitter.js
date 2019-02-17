import React from 'react'
import {Timeline} from 'react-twitter-widgets'

const Twitter = () => {
    return (
        <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'goldshades'
    }}
    options={{
      username: 'goldshades',
      height: '260',
      width: '270'
    }}
  />
    )
}

export default Twitter