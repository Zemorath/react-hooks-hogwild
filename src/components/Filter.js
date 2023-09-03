import React from "react";

function Filter({ onCategoryChange, onSortChange }) {
    return (
        <div className="Filter">
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">All</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Not Greased</option>
            </select>
            <div> Sort by: 
                <select name="sort" onChange={onSortChange}> 
                    <option value="All">All</option>
                    <option value="Name">Name</option>
                    <option value="Weight">Weight</option>
                </select>
            </div>
        </div>
    )
}

export default Filter;