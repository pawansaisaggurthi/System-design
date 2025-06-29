
const Header =  ({lang,setLang}) =>{

    return (
             <header className='bg-black text-white py-4 flex justify-between'>
        <div>Hello</div>

        <select className="bg-black text-white border border-white rounded-sm" value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="sp">Spanish</option>
            <option value="te">Telugu</option>
        </select>

        <div className='justify-between'>
          <nav className='justify-space-between'>
            <a href='/'>Home</a>
            <a href='/teams'>Teams</a>
            <a href='/login'>Login</a>
            <a href='/about'>About</a>
          </nav>
        </div>

      </header>

    )
}

export default Header;