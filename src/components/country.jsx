import { Icons } from '../icon'
import Filter from './FilterBar';
import SearchBar from './searchBar';
import { useState } from "react";
import data from '../assets/data.json'
import CountryCard from './CountryCard';



function Country({ searchElement, setSearchElement, setShowDetails }) {
    const [region, setRegion] = useState("");
    const [filtering, setFiltering] = useState(false);
    return (
        <div className='country'>

            <div className='heading'>
                <SearchBar />
                <Filter setFiltering={setFiltering} setRegion={setRegion}/>
            </div>
            {!filtering ? data.map(item => (
                <CountryCard  key={item.alpha3Code} item={item} setSearchElement={setSearchElement}  setShowDetails={setShowDetails}/>
            )) : data.map(item => (item.region === region) && ( <CountryCard  key={item.alpha3Code} item={item} setSearchElement={setSearchElement} setShowDetails={setShowDetails}/>))}
        </div>

    )
}


export default Country;