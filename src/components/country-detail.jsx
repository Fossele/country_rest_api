import { Icons } from '../icon'
import data from '../assets/data.json'


function CountryDetails({ searchItem, setSearchElement, setShowDetails, setFiltering }) {

    const countrySearch = (name) => data.find(elt => elt.name.toLowerCase() === name.toLowerCase());
    const item = countrySearch(searchItem);
    return (
        <div key={item.alpha3Code} className='container'>
            <button className='buty' onClick={() => { setShowDetails(false); setFiltering(true); setSearchElement("")}} > <Icons.back className="icon" />back</button>
            <img src={item.flags.png} alt='image error' style={{ width: "400px", height: "400px", gridRow: "2/3", gridColumn: "1/2" }} />
            <div className='text_container'>
                <p>{item.name}</p>
                <div className='sub_text_container'>
                    <p>Native name:{item.nativeName}</p>
                    <p>population :{item.population}</p>
                    <p>Region  :{item.region}</p>
                    <p>Sub Region : {item.subregion}</p>
                    <p>capital : {item.capital !== undefined ? item.capital : "no capital city"}</p>
                    <p>top level domain : {item.topLevelDomain}</p>
                    
                    <p>Currentcy: {item.currencies !== undefined ? item.currencies[0].name : "no currency"}</p>
                    <div>
                        languages: {item.languages.map(
                            element => (
                                <p key={element.iso639_2}> {element.name},</p>
                            )
                        )
                        }
                    </div>
                </div>
                <p>
                    Border countries:{
                        item.borders !== undefined ?
                            item.borders.map(code => {
                                const country = data.find(elt => elt.alpha3Code === code);
                                return (
                                    <button key={code} onClick={() => setSearchElement(country.name)}>
                                        {country ? country.name : 'Unknown'}
                                    </button>
                                );
                            }) : "This country has no neighbouring"
                    }
                </p>
            </div>
        </div>
    )
}

export default CountryDetails;
