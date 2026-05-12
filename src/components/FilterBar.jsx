import { Icons } from "../icon";

function Filter({setFiltering, setRegion}) {
    return (
      
            <div className='filter'>
                <span>
                    filter by region <Icons.down className="icon" />
                </span>

                <div className='filter-dropdown-content'>
                    <button className='but' onClick={() => { setFiltering(true); setRegion("Africa") }}>Africa</button>
                    <button className='but' onClick={() => { setFiltering(true); setRegion("Americas") }}>America</button>
                    <button className='but' onClick={() => { setFiltering(true); setRegion("Asia") }}>Asia</button>
                    <button className='but' onClick={() => { setFiltering(true); setRegion("Europe") }}>Europe</button>
                    <button className='but' onClick={() => { setFiltering(true); setRegion("Oceania") }}>Oceania</button>
                </div>
            </div>
        
    )
}

export default Filter;