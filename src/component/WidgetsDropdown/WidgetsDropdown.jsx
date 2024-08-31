import React from 'react'
import {
  CWidgetStatsA,
  CChartLine,
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom } from '@coreui/icons'

export default function WidgetsDropdown({ filter }) {
  const dataByFilter = {
    day: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    month: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
    year: ['2021', '2022', '2023', '2024', '2025', '2026', '2027'],
  }

  const chartLabels = dataByFilter[filter] 

  return (
    <div className='container-chart'>
      <div className='chart'>
        <div>
          <CWidgetStatsA
            value={
              <>
                26K{' '}
                <span className="fs-6 fw-normal">
                  (-12.4% <CIcon className='icon-down' icon={cilArrowBottom} />)
                </span>
              </>
            }
            title="Người dùng"
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: chartLabels, 
                  datasets: [
                    {
                      label: 'Dataset 1',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      data: [65, 59, 84, 84, 51, 55, 40], 
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: { display: false },
                      ticks: { display: false },
                    },
                    y: {
                      grid: { display: false },
                      ticks: { display: false },
                    },
                  },
                }}
              />
            }
          />
        </div>
      </div>
    </div>
  )
}
