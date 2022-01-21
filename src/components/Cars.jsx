import React, {useState, useEffect} from 'react'; 
import { csv } from 'd3';

const Cars = () => {

    // const [rows, setRows] = useState('')
    const [data, setData] = useState();

    //runs once
    useEffect(() => {
        csv('data.csv')
        .then(data=> { // returns a promise
            console.log(data)
            setData(data)
        })
    }, [])

    return (
        <div className="cars-wrapper">
            <h1>Cars will be shown here</h1>
                {data.map(car => <h3>
                    <p>License Plate</p>
                    {car.license_plate_number}</h3>) }
        </div>
    )
}

export default Cars; 

