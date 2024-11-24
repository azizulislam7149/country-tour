import { useEffect, useState } from "react"
import ShowAll from "../ShowAll";
import './Countries.css'
export default function Country(){

    const[country,setCountry] = useState([]);
    const[visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags ,setVisitedFlags] = useState([]);
    useEffect(()=>{
       fetch('https://restcountries.com/v3.1/all')
       .then(res=>res.json())
       .then(data=>setCountry(data));

    },[])
        const handleVisitedCountry = country=>{
            console.log('Add this visited my country');

            const newVisitedCountries = [...visitedCountries,country]
            setVisitedCountries(newVisitedCountries);
        }
        const handleVisitedFlags = flag =>{
            console.log('flag adding');
            const newVisitedFlsgs = [...visitedFlags,flag];
            setVisitedFlags(newVisitedFlsgs);
        }


   return(
    <div>
        <h2>Country name :{country.length} </h2>
       <div>
       <h1>Visited countries{visitedCountries.length} </h1>
       <ul>
            {
                visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
            }
       </ul>
       </div>
       <div className="flag-container">
        
        {
            visitedFlags.map((flag,idx) =><img key={idx} src={flag}></img>)
        }
       </div>
           <div  className="country-container">
           {
            
                country.map(data=><ShowAll key={country.cca3} 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags}
                    information={data}></ShowAll>)
            }
           </div>
    </div>
   ) 
}