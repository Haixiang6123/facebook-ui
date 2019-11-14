import * as React from 'react'
import FbDialog, {alert} from './FbDialog'
import {useState} from 'react'

export default function () {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
  return (
    <div>
      <div>
        <h1>Example 1</h1>
        <button onClick={() => setX(!x)}>Example 1</button>
        <FbDialog closeOnClickMask={true} visible={x} title="Example 1" buttons={
          [
            <button key={1} onClick={() => setX(false)}>1</button>,
            <button key={2} onClick={() => setX(false)}>2</button>
          ]
        } onClose={() => setX(false)}>
          <strong>hi</strong>
        </FbDialog>
      </div>

      <div>
        <h1>Example 2</h1>
        <button onClick={() => setY(!y)}>Example 2</button>
        <FbDialog closeOnClickMask={false} visible={y} title="Example 2" buttons={
          [
            <button key={1} onClick={() => setY(false)}>1</button>,
            <button key={2} onClick={() => setY(false)}>2</button>
          ]
        } onClose={() => setY(false)}>
          <strong>hi</strong>
        </FbDialog>
      </div>

      <div>
        <h1>Example3</h1>
        <button onClick={() => alert('Example 3', 'hello')}>Example 3</button>
      </div>
    </div>
  )
}
