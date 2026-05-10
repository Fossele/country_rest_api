import { useState, useEffect } from 'react'
import { Icons } from '../icon'
import NavBar from '../components/NavBar.jsx'
import CountryDetails from '../components/country-detail.jsx'
import Country from '../components/country.jsx'
import '../App.css'
import data from '../assets/data.json'
import searchIcon from '../assets/search-outline.svg'





function Home() {
    const [searchElement, setSearchElement] = useState("");
    const [showDetails, setShowDetails] = useState(true);//stupidly details will show when the state is false
    const [filtering, setFiltering] = useState(true);

    const countrySearch = (name) => data.find(elt => elt.name.toLowerCase() === name.toLowerCase());


    useEffect(() => {
        if (showDetails === true) {
            if (countrySearch(searchElement)) {
                setShowDetails(false);
            }
        }
    }, [searchElement, showDetails, setShowDetails]);

    return (
        <div>
            <NavBar />
            {
                showDetails ? (
                    <Country searchElement={searchElement} setSearchElement={setSearchElement} setShowDetails={setShowDetails} filtering={filtering} setFiltering={setFiltering} />
                ) : (<CountryDetails searchItem={searchElement} setSearchElement={setSearchElement} setShowDetails={setShowDetails} setFiltering={setFiltering} />)
            }
        </div>

    )
}

export default Home
