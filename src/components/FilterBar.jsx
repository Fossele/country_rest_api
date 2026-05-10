function Filter() {
    return (
        <form>
            <div className='filter'>
                <span>
                    filter by region <Icons.down className="icon" />
                </span>

                <div className='filter-dropdown-content'>
                    <button className='but' onClick={() => { setfilter(false); setRegion("Africa") }}>Africa</button>
                    <button className='but' onClick={() => { setfilter(false); setRegion("Americas") }}>America</button>
                    <button className='but' onClick={() => { setfilter(false); setRegion("Asia") }}>Asia</button>
                    <button className='but' onClick={() => { setfilter(false); setRegion("Europe") }}>Europe</button>
                    <button className='but' onClick={() => { setfilter(false); setRegion("Oceania") }}>Oceania</button>
                </div>
            </div>
        </form>
    )
}

export default Filter;