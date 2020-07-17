import React from 'react';
import { HorizontalBar } from "react-chartjs-2";

const Chart = ({data}) => {
  const {positive, negative, totalTestResults} = data

  const dataStructure = {
    positive,
    negative,
    total: totalTestResults,
  }

  return (
    <div>
      <HorizontalBar />
    </div>
  )
}

export default Chart