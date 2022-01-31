import React from 'react';
import { useState } from 'react';


export default function SearchForm() {

    const [buttonText, setButtonText] = useState("Title/Year"); 
    const changeText = (text) => setButtonText(text);
    
  return <div id='searchForm'>

        <div className='container formWrapper'>

        <div className="dropdown dropDForm rounded-pill">
        <button className="btn dropdown-toggle rounded-pill dropDForm" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >{buttonText}
        {/* Title/Year  */}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li onClick={() => changeText('Title')} className="dropdown-item title">Title</li>
        <li onClick={() => changeText('Year')}  className="dropdown-item year">Year</li>
        <li onClick={() => changeText('Author')} className="dropdown-item author">Author</li>
        </ul>
        </div>

        <input type="text" id="inputSearchField" className="form-control w-50 mx-3 text-light" placeholder='Type your book here..' />
        
        <button type="button" className="btn rounded-pill">search</button>

        </div>

        <div className="dropdown dropDForm2 rounded-pill mt-3">
        <button className="btn dropdown-toggle rounded-pill dropDForm2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">{buttonText}
    {/* Title/Year  */}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li onClick={() => changeText('Title')} className="dropdown-item">Title</li>
        <li onClick={() => changeText('Year')} className="dropdown-item">Year</li>
        <li onClick={() => changeText('Author')} className="dropdown-item">Author</li>
        </ul>
        </div>
        <div className="form-text mt-3 vText">
You found 11111 books text to be a variable of search.
        </div>
  </div>;
}
