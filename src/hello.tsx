import React, {useState} from 'react';

export function Inner({onClick}: { onClick: (data: string) => void }) {
  return <button onClick={() => onClick('click!')}>Click</button>
}

export default function Hello() {
  const [data, setData] = useState('')
  return <div>
    <div className='data'>{data}</div>
    <Inner onClick={(str) => setData(str)}/>
  </div>
}
