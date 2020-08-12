import Hello from './hello'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

ReactDOM.render(
  <Hello fruit={['apple', 'banana']} onDeleteFruit={(name) => {
    console.log('Delete: ', name)
  }}/>,
  document.body
)
