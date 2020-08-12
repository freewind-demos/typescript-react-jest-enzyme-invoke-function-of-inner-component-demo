import React from 'react';

type Props = {
  name: string,
  onDeleteFruit?: (name: string) => void
}

export default function Box({name, onDeleteFruit}: Props) {
  return <div>
    <div>Box: {name}</div>
    <button title='delete' onClick={() => onDeleteFruit?.(name)}>Delete</button>
  </div>
}
