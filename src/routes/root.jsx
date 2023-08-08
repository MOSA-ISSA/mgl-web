import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ShowImage from "../component/ShowImage";


const SearchBar = ({ onSearch, searchText }) => (
  <div>
    <form id="search-form" role="search">
      <input
        id="q"
        aria-label="Search contacts"
        placeholder="Search"
        onChange={({ target: { value } }) => onSearch(value)}
        value={searchText}
        type="search"
        name="q"
        style={{ color: "#fff" }}
      />
    </form>
    <form method="post">
      <button type="submit">New</button>
    </form>
  </div>
);

const Navigator = ({ index, navName }) => (
  <li>
    <Link to={`contacts/${index}`} state={{ name: navName }}>
      {navName}
    </Link>
  </li>
);

const RenderNav = ({ pages }) => (
  <nav>
    <ul>
      {pages.map((item, i) => (
        <Navigator key={item} index={i} navName={item} />
      ))}
    </ul>
  </nav>
);

export default function Root() {
  
  const navPages = ["Your Name", "Your Friend"];

  const [searchText, setSearchText] = useState("");
  const [filteredPages, setFilteredPages] = useState(navPages);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(true);
  const searchIcon="https://images.vexels.com/media/users/3/132068/isolated/lists/f9bb81e576c1a361c61a8c08945b2c48-search-icon.png"
  const HumIcon="https://th.bing.com/th/id/OIP.97Vm9syuDmoffGd_weVqDQHaHa?pid=ImgDet&rs=1"

  const onSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filteredPagesName = navPages
        .filter((page) => page.toLowerCase().includes(text.toLowerCase()))
        .sort((a, b) => a.localeCompare(b));
      setFilteredPages(filteredPagesName);
    } else {
      setFilteredPages(navPages);
    }
  };

  const SidebarButtons=()=>{
    return(
      <div>
        <button onClick={() => setShowSearchBar(!showSearchBar)}>
          <ShowImage sorce={searchIcon}
            style={{height: 20,width: 20,}}
          />
        </button>
        <button onClick={() => setSliderVisible(!sliderVisible)}>
          <ShowImage sorce={HumIcon}
            style={{height: 20,width: 20,}}
          />
        </button>
      </div>
    )
  }

  return (
    <>
      {sliderVisible && (
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          
          <SidebarButtons/>


          <div>
            {/* <button onClick={() => setSliderVisible(!sliderVisible)}> */}
              <ShowImage sorce={"https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image.png"}
                style={{height: 50,width: 60,}}
              />
              <nav>
                <ul>
                  <Navigator index={"profile"} navName={"profile"}/>
                </ul>
              </nav>
            {/* </button> */}
          </div>

          {showSearchBar && <SearchBar onSearch={onSearch} searchText={searchText} />}
          <RenderNav pages={filteredPages} />
          
        </div>
      )||
        <button 
        onClick={() => setSliderVisible(!sliderVisible)}>
          <ShowImage sorce={HumIcon}
            style={{height: 20,width: 20,}}
          />
        </button>
      }

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
