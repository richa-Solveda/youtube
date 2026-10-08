import { Icon } from "./ui/icon"


const Header = () => {
  return (
    <header className="App-header w-full grid grid-cols-12">
        <div className="col-span-1">
       <Icon
          name="youtube"
          size={32}
          fill="currentColor"
          stroke="none"
          style={{ color: "#FF0000" }}
        />
      
      </div>
      <div className="col-span-10">
        <input name="search" type="text" className="rounded-l-full  border-black border-2 p-2"/>
        <button type="submit" className="rounded-r-full bg-gray-400 font-white p-2.5">search</button>
        </div>
        <div className="col-span-1">

        </div>
      </header>
  )
}

export default Header
