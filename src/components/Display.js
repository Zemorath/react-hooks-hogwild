import React, { useState } from "react";
import Form from "./Form"
import Item from "./Item"
import Filter from "./Filter"
import { v4 as uuid} from "uuid";


function Display({ hogs }) {

    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedSorting, setSorting] = useState("All")
    const [resetHogs, setResetHogs] = useState(true)
    const [hogList, addHog] = useState(hogs)

    function onCategoryChange(e) {
        setSelectedCategory(e.target.value)
    }

    function onSortChange(e) {
        setSorting(e.target.value)
    }

    function onNewHog(newHog) {
        addHog([...hogs, newHog])
    }


    const hogsToDisplay = hogList
    .filter((hog) => {
        if (selectedCategory === "All") return true;

        else if (selectedCategory === "Greased") return hog.greased == true;

        else return hog.greased == false;
    })
    .sort((a, b) => {
        if (selectedSorting === "All") return true;

        else if (selectedSorting === "Name") {
            if (a.name < b.name) return -1;
            if (a.name > b.nam) return 1;
            return 0
        } else if (selectedSorting === "Weight") {
            if (a.weight < b.weight) return -1;
            if (a.weight > b.weight) return 1;
            return 0
        }
    })
 

    return (
        <div>
            <Form onNewHog={onNewHog}/>
            <Filter onCategoryChange={onCategoryChange} onSortChange={onSortChange}/>
            <button className="reset-button" onClick={setResetHogs}>Reset Piggies</button>
            <div className="ui grid container">
                {hogsToDisplay.map((hog) => (
                <Item key={uuid()} 
                    hog={hog} 
                    name={hog.name} 
                    image={hog.image} 
                    specialty={hog.specialty} 
                    weight={hog.weight} 
                    greased={hog.greased} 
                    medal={hog["highest medal achieved"]}
                    resetHogs={resetHogs}/> 
                ))}
            </div>
        </div>
    )
}

export default Display;