import React, {useState, useEffect} from 'react'; 
import { csv } from 'd3';
import Papa from 'papaparse'

const Cars = () => {

    // const [rows, setRows] = useState('')

        // useEffect(() => {
        //     async function getData() {
        //         const response = await fetch('data.csv')
        //         const reader = response.body.getReader()
        //         const result = await reader.read() // raw array
        //         const decoder = new TextDecoder('utf-8')
        //         const csv = decoder.decode(result.value) // the csv text
        //         const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
        //         const rows = results.data // array of objects
        //         setRows(console.log(rows))
        //     }
        //     getData()
        // }, []) // [] means just do this once, after initial render
    

    const [car, setCar] = useState('')

    useEffect(() => {
        csv('./data.csv')
        // .then(response => response.json())
        .then(data=> { // returns a promise
            setCar(data)
            console.log(data)
        })
    }, [])

    
    return (
        <div className="cars-wrapper">
            {/* {car} */}
        </div>
    )
}

export default Cars; 

