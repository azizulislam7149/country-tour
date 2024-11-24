import { useState } from 'react';
import './country.css'
export default function ShowAll({information , handleVisitedCountry,handleVisitedFlags}){
const{name,flags, population, area, cca3} = information;
     
const[visited, setVisited] = useState(false);
const handleVisited = ()=>{
    // setVisited(true);
    setVisited(!visited)

}
const passWithParams = ()=>handleVisitedCountry(information);

    return(
        <div className={`country ${visited ? 'visited' : 'non-vited'}`}>
        

            <h1 style={{color:visited? 'red' : 'green'}}>common name :{name?.common}</h1>
            <h2>official :{name.official} </h2>
           <img src={flags.png} alt="" />
           <p>population :{population} </p>
           <p>Area:{area} </p>
           <p><small> code : {cca3}</small></p>
           {/* <button onClick={handleVisited}>Visited</button> */}
           <button onClick={handleVisited}>{visited? 'visited': 'Going'}</button>
           {/* {visited && 'I have visited this country'} */}
           {visited ? 'I have visited this country' : 'I want to visit this country'}

           <br />
           <button onClick={passWithParams}>Mark As Visited</button>
           <br />
           <button onClick={()=> handleVisitedFlags(information.flags.png)}>Add Flag</button>
        </div>
    )
}