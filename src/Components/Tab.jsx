import React, { useState } from 'react';

import { TabBar, Tab } from '@rmwc/tabs';

import '@material/tab-bar/dist/mdc.tab-bar.css';
import '@material/tab/dist/mdc.tab.css';
import '@material/tab-scroller/dist/mdc.tab-scroller.css';
import '@material/tab-indicator/dist/mdc.tab-indicator.css';


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

const Tabs = () => {
      const  [state, setState] = useState(0);

      return (
            <div>
                  <TabBar onActivate={(event)=>setState(event.detail.index)}>
                        {listLetters.map(letter => (
                              <Tab>
                                    {letter}
                              </Tab>
                        ))}
                  </TabBar>
                  {listLetters[state]}
            </div>
      );
}

export default Tabs;
