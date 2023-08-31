import React, { useEffect, useState } from 'react';
import { FindCountry } from '../Shared/FindCountry';
import Country from './Country';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../Shared/useOnline';

function Countries() {
    const [searchText,setSearchText]=useState("")
    const [countries,setCountries]=useState([]);
    const [allCountries,setAllCountries]=useState([]);
    const loadData=async()=>{
        const res=await fetch('https://restcountries.com/v3.1/all');
        const data=await res.json();
        setCountries(data)
        setAllCountries(data)
    }
    useEffect(()=>{
        loadData()
    },[])
    const handleSearch=()=>{
        setCountries(FindCountry(allCountries,searchText))
    }
    const isOnline=useOnline();
    if(!isOnline){
        return <h1>You are currently Offline,Please check your network</h1>
    }
    return allCountries?.length===0?(
        <div className='shimmer-container'>
            {
                Array.from({length:30}).map((_,index)=><Shimmer key={index}></Shimmer>
                )
            }
        </div>
    ):(
        <div>
            <input type="text" name="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
            <button onClick={handleSearch}>search</button>
            <div className="countries">
            {
                countries.map(country=><Link to={"/country/"+country?.name?.common} key={country?.name?.common}><Country country={country} key={country?.name?.common}></Country></Link>)
            }
            </div>
        </div>
    )
}
export default Countries;
