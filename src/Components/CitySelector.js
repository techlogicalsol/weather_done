import React, { useState} from 'react'


function CitySelector({onSearch}){

    const [city, setCity] = useState('')


    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1>Search city here</h1>
                        <div className="form-group">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Search city........"
                        onChange={(event)=> setCity(event.target.value)}
                        value={city}
                        />
                        </div>
                        
        <button onClick={()=> onSearch(city)} className="btn btn-dark">Search</button>
                    
                       
                    
                    </div>


                    
                </div>
            </div>


        </>
    )
}

export default CitySelector