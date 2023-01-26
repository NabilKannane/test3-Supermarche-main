import React from 'react'
import {Bar} from 'react-chartjs-2'


const RatingPage = (props) => {

   var data = {
        labels: props.rating.labels , // tableau de labels : ["Female" , "Male"]
        datasets: [{
          label: 'gender',
          data: props.rating.values, // tableau des valeurs (moyenne de chaque champ)
          backgroundColor:[
            'rgb(64, 101, 169)',
            'rgb(224, 162, 100)'
          ]
        }]
      }
      
  return (
    <div className='content'>
        <h4>Moyenne de rating par sexe</h4>
        <br/>
        <Bar
        data={data}
        width="600" height="500"
        />
    </div>
  )
}

export default RatingPage