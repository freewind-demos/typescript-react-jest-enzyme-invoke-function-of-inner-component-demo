import React, {useState} from 'react';

type Props = {
  onClick: (data: string) => void
}

export function Inner({onClick}: Props) {
  return <button onClick={() => onClick('click!')}>Click</button>
}

export function Middle({onClick}: Props) {
  return <Inner onClick={onClick}/>
}

export default function Hello() {
  const [data, setData] = useState('')
  return <div>
    <div className='data'>{data}</div>
    <Middle onClick={(str) => setData(str)}/>
  </div>
}
