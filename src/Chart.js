import React from 'react';

const Chart = ({data}) => {
  const {positive, negative, totalTestResults, dateModified} = data

  const dataStructure = {
    positive,
    negative,
    total: totalTestResults,
  }

  return (
    <div>
      <h2>Our Future Bar Chart!</h2>
    </div>
  )
}

export default Chart