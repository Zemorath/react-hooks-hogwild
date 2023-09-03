import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Form({ onNewHog }) {

    const [nameData, setNameData] = useState('')
    const [specialtyData, setSpecialty] = useState('')
    const [greasedData, setGreased] = useState()
    const [weightData, setWeight] = useState('')
    const [imageData, setImage] = useState('')
    const [medalData, setMedal] = useState('')

    function handleNameChange(e) {
        setNameData(e.target.value)
    }

    function handleSpecialtyChange(e) {
        setSpecialty(e.target.value)
    }

    function handleGreased(e) {
        if (e.target.value == true) setGreased(true)

        else setGreased(false)
    }

    function handleWeight(e) {
        setWeight(e.target.value)
    }

    function handleImage(e) {
        setImage(e.target.value)
    }

    function handleMedal(e) {
        setMedal(e.target.value)
    }

    function handleAddHog(event) {
        event.preventDefault();
        const newHog = {
            id: uuid(),
            name: nameData,
            specialty: specialtyData,
            greased: greasedData,
            weight: weightData,
            image: imageData,
            "highest medal achieved": medalData
        }
        onNewHog(newHog)
    }

    return (
        <form className="smallHeader" onSubmit={handleAddHog}>
            <label>
                Name:
                <input type="text" name="name" onChange={handleNameChange}/>
            </label>

            <label>
                Specialty:
                <input type="text" name="specialty" onChange={handleSpecialtyChange}/>
            </label>

            <label>
                Greased:
                <select name="greased" onChange={handleGreased}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </label>

            <label>
                Weight:
                <input type="float" name="weight" onChange={handleWeight}/>
            </label>

            <label>
                Image Link:
                <input type="text" name="url" onChange={handleImage}/>
            </label>

            <label>
                Medal:
                <input type="text" name="medal" onChange={handleMedal}/>
            </label>

            <button type="submit">Add Pig</button>
        </form>
    )
}

export default Form;