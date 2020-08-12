import React from 'react';
import Box from './box';

type Props = {
  fruit: string[]
  onDeleteFruit?: (name: string) => void
}

export default function Hello({fruit, onDeleteFruit}: Props) {
  return <div>
    <h1>Hello, I like:</h1>
    {
      fruit.map((name, index) =>
        <Box name={name} onDeleteFruit={onDeleteFruit} key={index}/>
      )
    }
  </div>
}
