import { Icons } from "../icon";


function SearchBar({searchElement,  setSearchElement}) {

    return (
        <div className='search'>
            <Icons.search className="icon" />
            <input
                type="text"
                placeholder="Search for a country..."
                value={searchElement}
                onChange={(e) => setSearchElement(e.target.value)}
                style={{ padding: '8px', fontSize: '16px', width: '250px', backgroundColor: 'hsl(209, 23%, 22%)', outline: 'none', border: 'none' }}
            />
        </div>
    )
}

export default SearchBar;