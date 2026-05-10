import { Icons } from '../icon'
import Filter from './FilterBar';
import SearchBar from './searchBar';
import { useState } from "react";

function Country({ searchElement, setSearchElement, setShowDetails, filtering, setFiltering }) {

    const [region, setRegion] = useState("");

    return (
        <div className='country'>

            <div className='heading'>
                <SearchBar />
                <Filter />
            </div>


            {filtering ? data.map(item => (
                <div key={item.alpha3Code} onClick={() => { setShowDetails(false); setSearchElement(item.name) }} className='country_infos'>
                    <img src={item.flags.png} alt='image error' style={{ width: "100%", height: "150px", borderRadius: "5px 5px 0 0 " }} />
                    <div className='infos'>
                        <p>{item.name}</p>
                        <p>population :{item.population}</p>
                        <p>Region  :{item.region}</p>
                        <p>capital :{item.capital}</p>
                    </div>
                </div>
            )) : data.map(item => (item.region === region) && (<div key={item.alpha3Code} onClick={() => { setShowDetails(false); setSearchElement(item.name) }} className='country_infos'>
                <img src={item.flags.png} alt='image error' style={{ width: "100%", height: "150px" }} />

                <div className='infos'>
                    <p>{items.name}</p>
                    <p>population :{item.population}</p>
                    <p>Region  :{item.region}</p>
                    <p>capital :{item.capital}</p>
                </div>

            </div>
            ))
            }
        </div>

    )
}


export default Country;