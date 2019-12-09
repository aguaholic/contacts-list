import React from 'react';

import { TabBar, Tab } from '@rmwc/tabs';

import '@material/tab-bar/dist/mdc.tab-bar.css';
import '@material/tab/dist/mdc.tab.css';
import '@material/tab-scroller/dist/mdc.tab-scroller.css';
import '@material/tab-indicator/dist/mdc.tab-indicator.css';

const Tabs = (props) => {
      return (
            <div>
                  <TabBar onActivate={props.onSelectTab}>
                        {props.tabHeaders.map(letter => (
                              <Tab key={letter}>
                                    {letter}
                              </Tab>
                        ))}
                  </TabBar>
                  {/* {props.tabHeaders[props.selectedTab]} */}
            </div>
      );
}

export default Tabs;
