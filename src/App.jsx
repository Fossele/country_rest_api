import { useState } from 'react'
import './App.css'
import data from './assets/data.json'
import searchIcon from './assets/search-outline.svg'
import { useEffect } from 'react'
//import { ReactComponent as BackIcon } from '/arrow-back-outline.svg';
import { Icons } from './icon'



  const countrySearch = (name) => data.find(elt => elt.name.toLowerCase() === name.toLowerCase());

function AboutCountry({ what, setSearchElement, setShow, setfilter }) {
  const item = countrySearch(what);
  return (

    <div key={item.alpha3Code} className='container'>
      <button className='buty' onClick={() => { setShow(true); setfilter(true); setSearchElement("") }} > <Icons.back className="icon" />back</button>
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
        {/**  */}
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
              }) : "no border"
          }
        </p>


      </div>




    </div>
  )
}





function NavBar() {

  return (
    <div className='navbar'>
      <p>Which country are you from?</p>
      <button className='button'><Icons.sun className="icon" /> dark mode </button>
    </div>
  )
}

function Country({ searchElement, setSearchElement, setShow, notfilter, setfilter }) {


  //const countrySearch = (name) => data.find(elt => elt.name.toLowerCase() === name.toLowerCase());

 // const item = countrySearch(searchElement);


  const [region, setRegion] = useState("");

  return (
    <div className='country'>

      <div className='heading'>
        
      <div  className='search'>
         <Icons.search className="icon" />
        <input
        type="text"
        placeholder="Search for a country..."
        value={searchElement}
        onChange={(e) => setSearchElement(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', width: '250px', backgroundColor:'hsl(209, 23%, 22%)',outline:'none',border:'none' }}
      />
      </div>

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
        </div>


      {notfilter ? data.map(items => (
        
        <div key={items.alpha3Code} onClick={() => { setShow(false); setSearchElement(items.name) }} className='country_infos'>
        <img src={items.flags.png} alt='image error' style={{ width: "100%", height: "150px", borderRadius:"5px 5px 0 0 "}} />
        <div className='infos'>
          <p>{items.name}</p>
        <p>population :{items.population}</p>
        <p>Region  :{items.region}</p>
        <p>capital :{items.capital}</p>
        </div>
        
      </div>
      )
      ) : data.map(items => (items.region === region) ? (<div key={items.alpha3Code} onClick={() => { setShow(false); setSearchElement(items.name) }} className='country_infos'>
        <img src={items.flags.png} alt='image error' style={{ width: "100%", height: "150px" }} />

<div className='infos'>
           <p>{items.name}</p>
        <p>population :{items.population}</p>
        <p>Region  :{items.region}</p>
        <p>capital :{items.capital}</p>
        </div>


       
      </div>
      ) : null)
      }
    </div>

  )
}

function App() {
  const [searchElement, setSearchElement] = useState("");
  const [show, setShow] = useState(true);
  const [notfilter, setfilter] = useState(true);

  console.log(countrySearch("algeria"));


  useEffect( ()=>{
  if(show===true){

    if(countrySearch(searchElement)!=undefined){
         setShow(false);
      }
  }
      
  }
    
    ,[searchElement,show,setShow]);   



  return (
    <div>
      <NavBar />

      <p>
        {console.log(data[2].borders)

        }
      </p>


      {
        show? (
          <Country searchElement={searchElement} setSearchElement={setSearchElement} setShow={setShow} notfilter={notfilter} setfilter={setfilter} />
        ) : (<AboutCountry what={searchElement} setSearchElement={setSearchElement} setShow={setShow} setfilter={setfilter} />)
        
      }
    </div>

  )
}

export default App
