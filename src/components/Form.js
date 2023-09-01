import React from "react";

function Form() {
    return (
        <form className="smallHeader">
            <label>
                Name:
                <input type="text" name="name"/>
            </label>

            <label>
                Specialty:
                <input type="text" name="specialty"/>
            </label>

            <label>
                Greased:
                <select name="greased">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>

            <label>
                Weight:
                <input type="number" name="weight"/>
            </label>

            <button type="submit">Add Pig</button>
        </form>
    )
}

export default Form;