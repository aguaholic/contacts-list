import React, { useState } from 'react';
import Tabs from './Tabs';

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
      'Z',
];

const Container = () => {
      const  [state, setState] = useState(0);
      const onSelectTab = (event) => setState(event.detail.index);

      return (
            <div>
                 <Tabs onSelectTab={onSelectTab} selectedTab={state} tabHeaders={listLetters} /> 
            </div>
      );
}

export default Container;
