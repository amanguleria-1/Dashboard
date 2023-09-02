import React from 'react'
import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function UserListHome() {
  return (
    <div className='home'>
      Home
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" dataKey="Active" />
      <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
