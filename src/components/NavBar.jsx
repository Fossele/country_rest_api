import { Icons } from '../icon'

function NavBar() {

    return (
        <div className='navbar'>
            <p>Which country are you from?</p>
            <button className='button'><Icons.sun className="icon" /> dark mode </button>
        </div>
    )
}

export default NavBar;