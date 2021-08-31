import React from 'react'
import '../../../Style/Components/HeaderList.css'

const HeaderList = () => {
    
     
    return (
        <>
        <div className="header-list">
           <ul className='list'>
              <li><a href="#" className="tech">Tecnology</a></li>
              <li><a href="#" className="design">Design</a></li>
              <li><a href="#" className="culture">Culture</a></li>
              <li><a href="#" className="business">Business</a></li>
              <li><a href="#" className="science">Science</a></li>
           </ul>
        </div>

        </>
    )
}

export default HeaderList;