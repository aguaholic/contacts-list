import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Tabs from './Tabs'

const listLetters = [
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
  'X',
  'Y',
  'Z'
]

const Container = () => {
  const [state, setState] = useState(0)

  const history = useHistory()

  const onSelectTab = (event) => {
    setState(event.detail.index)
    history.push(`/${listLetters[event.detail.index]}`)
  }

  return (
    <div>
      <Tabs selectedTab={state} tabHeaders={listLetters} onSelectTab={onSelectTab} />
    </div>
  )
}

export default Container
