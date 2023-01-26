import React from 'react'
import { Bar } from 'react-chartjs-2';


const AchatsPage = (props) => {
    const data = {
        labels: ['Membre' , 'Normal'],  
        datasets: [
          {
            label: 'Female',
            data: props.achats.countMembre, //les valeurs de Female pour [Membre, Normal]
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Male',
            data: props.achats.countNormal, //les valeurs de Male pour [Membre, Normal]
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          }
        ]
      };

    return (
    <div className='content'>
        <h4>Nombre total des achats par type de client</h4>
        <br/>
        <Bar data={data} width="600" height="500"
        />
    </div>
  )
}

export default AchatsPage