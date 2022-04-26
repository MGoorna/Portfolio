import { ResponsivePie } from '@nivo/pie'

import Chart from 'react-apexcharts'

const BudgetChart = ({data}) => {
    if(typeof window !== "undefined"){
        const series = {
            name: data.map(item => item.name),
            data: data.map(item => item.value)
          }
        
      
      const data1 = data.map(item => item.value)
      const labels = data.map(item => item.name)
      const options={
          legend:{show:false},       
      }
      //const series = data.map(item => item.value)
      
      console.log(series.series)
      return(
          <div style={{height:'450px', width: '100%', borderRadius: '10px'}}>
              <Chart
                  options={options}
                  series={series.data}
                  type="donut"
                  width="500"
                  margin="auto"
                  legend="false"
                  labels= {labels}
                  />
  
              {/*<ResponsivePie
                  data={data}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={5}
                  activeOuterRadiusOffset={8}
                  borderWidth={1}
                  keys={["name"]}
                  indexBy="value"
                  borderColor={{
                      from: 'color',
                      modifiers: [
                          [
                              'darker',
                              0.2
                          ]
                      ]
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          2
                      ]
                  ]
              }}
              defs={[
                  {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      size: 4,
                      padding: 1,
                      stagger: true
                      
                  },
                  {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                  }
              ]}
              fill={[
                  {
                      match: {
                          name: 'car'
                      },
                      id: 'lines'
                  },
                  {
                      match: {
                          name: 'food'
                      },
                      id: 'lines'
                  },
                  {
                      match: {
                          name: 'bicycle'
                      },
                      id: 'lines'
                  }
                  ]}
              />*/}
          </div>
      )

    }

}


export default BudgetChart