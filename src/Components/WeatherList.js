import React from 'react'

function WeatherList(props){

     const {weathers} = props





    return(
        <>
            
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-10 mb-5 mx-auto">
                        <h1 className="text-center">Weather Application</h1>
                            
                            
                    
                            

                        <div className="row">
                            {weathers.map(({dt_txt, main})=>(
                            <div className="col-md-3 mb-3 mt-5" key={dt_txt}>
                                <div className="card">
                                   <p>{dt_txt}</p> 
                                   <p>{main.temp}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherList