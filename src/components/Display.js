import React from "react";
import Form from "./Form"
import Item from "./Item"
import Filter from "./Filter"
import { v4 as uuid} from "uuid";


function Display({ hogs }) {
    return (
        <div>
            <Form />
            {/* <Filter /> */}
            <div className="ui grid container">
                {hogs.map((hog) => (
                <Item key={uuid()} 
                    hog={hog} 
                    name={hog.name} 
                    image={hog.image} 
                    specialty={hog.specialty} 
                    weight={hog.weight} 
                    greased={hog.greased} 
                    medal={hog["highest medal achieved"]}/> 
                ))}
            </div>
        </div>
    )
}

export default Display;