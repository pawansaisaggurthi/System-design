
const Header = ({ lang, setLang }) => {

  return (
    <header className='bg-black text-white py-4 flex justify-between'>
      <div className="ms-2">Web</div>



      <div className='justify-between flex'>
        <select className="bg-black text-white border border-white rounded-sm me-2" value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="te">Telugu</option>
        </select>
        <nav className="justify-between">
          <a className="mx-2" href='/'>Home</a>
          <a className="mx-2" href='/teams'>Teams</a>
          <a className="mx-2" href='/login'>Login</a>
          <a className="mx-2" href='/about'>About</a>
          <a className="mx-2" href='/accordion'>Accordion</a>
          <a className="mx-2" href='/comments'>Comments</a>
          <a className="mx-2" href='/imageSlider'>Image-Slider</a>
          <a className="mx-2" href='/pagination'>Pagination</a>
        </nav>
      </div>

    </header>

  )
}

export default Header;