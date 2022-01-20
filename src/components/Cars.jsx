import React, {useState, useEffect} from 'react'; 
import { csv } from 'd3';

const Cars = () => {

    const [car, setCar] = useState('')

    useEffect(() => {
        csv('data.csv').then(data=> { // returns a promise
            // setCar(data)
            console.log(data)
        })
    }, [])

    // const url = 'data.csv'

    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => console.log(data))


    return (
        <div className="cars-wrapper">
            <p>{car}</p>
        </div>
    )
}

export default Cars; 

