import React, { useState } from "react";
import "./header.css";

const Header=()=>{
    const [searchText, setSearchText] = useState("");
    return(
        <header className="header">
        <div id="header-left">
            <h3 id="logo">Movie Time</h3>
        </div>

        
            <div className="search-container">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Enter Movie Name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {searchText && (
            <span className="clear-btn" onClick={() => setSearchText("")}>
              ×hbfhjsbhj
            </span>
          )}
        </div>

            <select id="location">
                
                    <option id="location1">Chennai</option>
                    <option id="location1">Coimbatore</option>
                    <option id="location1">Bengaluru</option>
                    <option id="location1">Hyderabad</option>
                

            </select>

            <button id="signup-btn">Sigin</button>
            <button id="profile-btn">Profile</button>
        


        </header>
    );
};

export default Header