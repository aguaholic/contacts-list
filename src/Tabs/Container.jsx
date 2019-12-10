import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Tabs from './Tabs'

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

const Container = () => {
  const [state, setState] = useState(0)

  const history = useHistory()

  const onSelectTab = (event) => {
    setState(event.detail.index)
    history.push(`/${alphabet[event.detail.index]}`)
  }

  return (
    <div>
      <Tabs selectedTab={state} tabHeaders={alphabet} onSelectTab={onSelectTab} />
    </div>
  )
}

export default Container
