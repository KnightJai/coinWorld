// import React, { useEffect } from 'react'

// import Chart from 'react-google-charts'

// const LineChart = ({historicalData}) => {

//     const [data, setData] = useState([["Date", "Prices"]]);

//     useEffect(() => {
//         let dataCopy = [["Data" , "Prices"]];

//         if(historicalData.prices){
//             historicalData.prices.map( (item)=>{
//                 dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
//             })
//             setData(dataCopy);
//         } // 10/05/2002

//     }, [historicalData])


//   return (
//     <div>

//         <Chart
//         chartType='LineChart'
//         data = {data}
//         height = "100%"
//         legendToggle
//         />
      
//     </div>
//   )
// }

// export default LineChart



import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (historicalData && historicalData.prices) {
      // Prepare the data for the chart
      const dataCopy = [["Date", "Price"]];
      historicalData.prices.forEach((item) => {
        const date = new Date(item[0]).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        dataCopy.push([date, item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chart
        chartType="LineChart"
        data={data}
        height="400px"
        width="100%"
        options={{
          title: "Price History",
          hAxis: { title: "Date" },
          vAxis: { title: "Price" },
          legend: { position: "bottom" },
        }}
      />
    </div>
  );
};

export default LineChart;
