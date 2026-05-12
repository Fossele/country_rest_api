export default function CountryCard({ item, setShowDetails, setSearchElement }) {
    return (

        <div onClick={() => { setShowDetails(true); setSearchElement(item.name) }} className='country_infos'>
            <img src={item.flags.png} alt='image error' style={{ width: "100%", height: "150px", borderRadius: "5px 5px 0 0 " }} />
            <div className='infos'>
                <p>{item.name}</p>
                <p>population :{item.population}</p>
                <p>Region  :{item.region}</p>
                <p>capital :{item.capital}</p>
            </div>
        </div>

    );

}


