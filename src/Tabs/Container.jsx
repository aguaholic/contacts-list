import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

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
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const history = useHistory()
  const params = useParams()

  useEffect(() => {
    const indexOfSelectedLetter = alphabet.findIndex((letter) => letter === params.letter)
    if (indexOfSelectedLetter !== selectedTabIndex) {
      setSelectedTabIndex(indexOfSelectedLetter)
    }
  }, [params])

  const onSelectTab = (event) => {
    setSelectedTabIndex(event.detail.index)
    history.push(`/${alphabet[event.detail.index]}`)
  }

  return (
    <div>
      <Tabs selectedTab={selectedTabIndex} tabHeaders={alphabet} onSelectTab={onSelectTab} />
    </div>
  )
}

export default Container
