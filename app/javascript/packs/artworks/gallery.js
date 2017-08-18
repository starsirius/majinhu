import React from 'react'
import ReactDOM from 'react-dom'
import Gallery from 'components/gallery'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('gallery')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(<Gallery {...data} />, node)
})
