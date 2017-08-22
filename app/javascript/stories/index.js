import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Gallery from '../components/gallery'

storiesOf('Gallery', module)
  .add('skeleton', () => {
    const data = {artist: {name: 'Jin Hu Ma'}}
    return <Gallery {...data} />
  })
