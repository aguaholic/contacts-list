import React from 'react'
import { TabBar, Tab } from '@rmwc/tabs'

import '@material/tab-bar/dist/mdc.tab-bar.css'
import '@material/tab/dist/mdc.tab.css'
import '@material/tab-scroller/dist/mdc.tab-scroller.css'
import '@material/tab-indicator/dist/mdc.tab-indicator.css'

const Tabs = (props) => {
  return (
    <div>
      <TabBar
        activeTabIndex={props.selectedTab}
        onActivate={props.onSelectTab}>
        {props.tabHeaders.map((header) => (
          <Tab key={header.label} label={header.label} icon={header.icon} />
        ))}
      </TabBar>
    </div>
  )
}

export default Tabs
