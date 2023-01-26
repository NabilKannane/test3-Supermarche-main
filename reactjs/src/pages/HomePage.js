import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='content Blocs'>
        <Link to={"/revenuebrut"} className='Bloc'><h2>RevenuBrut</h2></Link>
        <Link to={"/achats"}  className='Bloc'><h2>Achats</h2></Link>
        <Link to={"rating"}  className='Bloc'><h2>Rating</h2></Link>
    </div>
  )
}

export default HomePage