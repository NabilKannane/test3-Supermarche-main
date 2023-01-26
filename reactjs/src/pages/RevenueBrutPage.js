import React from 'react'
import { Bar } from 'react-chartjs-2';

const RevenueBrutPage = (props) => {
  const data = {
    labels: props.revenubrut.labels,  //ici je mets tableau qui contient les noms de RevenueBrut 
    datasets: [
      {
        label: 'Count',
        data: props.revenubrut.values, //ici je mets tableau qui contient les valeurs de RevenueBrut
        backgroundColor: ['rgba(255, 99, 132)',
        'rgba(161, 243, 187)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)',
        'rgba(255, 159, 64)'
        ],
        
      }
    ]
  };

  // Configuration de Bar charts.js
  const options= {
    indexAxis: 'y',  // Bar Horizontal
    scales: {
      xAxes: [{
          scaleLabel: {
              display: true   //affichage de label
          }
      }]
  }
  }

  return (
    <div className='content'>
       <h4>Revenue brut par catégorie</h4>
        <br/>
       <Bar data={data} options={options}width="600" height="500"/>
    </div>
  )
}

export default RevenueBrutPage