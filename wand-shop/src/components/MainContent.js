import React from 'react'
import product_card from '../product_card';
import SearchBar from './SearchBar';
import { useState } from 'react';


const MainContent = () => {
    const [query, setQuery] = useState("");
    console.log(product_card);
    const listItems = product_card.filter((item) => item.slug.includes(query))
    .map((item) =>
        <div  className="card" key={item.id}>
            <div className="card_img">
                <img src={item.imageUrl} />
            </div>
            <div className="card_header">
                <h2>{item.core}</h2>
                <p>{item.wood}</p>
                <p>{item.length}</p>
                <p>{item.slug}</p>
                <div className="btn" >View Details</div>
            </div>
        </div>

    );
    return (
        <div>
              <p>
                
                </p>
            <SearchBar setQuery={setQuery}/>
        <div className="main_content">
          
           
            <h3>Ollivander's Wand Shop</h3>
            {listItems}
           
        </div>
        </div>
    )
}
export default MainContent;
