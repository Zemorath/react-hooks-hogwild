import React, { useState } from "react";

function Item({ name, image, specialty, weight, greased, medal, hog}) {

    const [showMore, setShowMore] = useState(false)

    return (
        <div className="ui eight wide column">
            <div className="ui fluid card">
                <div className="smallHeader">{name}</div>
                <div><img src={image} className="image"/></div>
                {showMore && (
                    <ul>
                        <li>Speciality: {specialty}</li>
                        <li>Weight: {weight}</li>
                        <li>Greased: {greased}</li>
                        <li>Medal: {medal}</li>
                    </ul>
                )}
                <div className="ui bottom attached button" onClick={() => setShowMore(!showMore)}>
                    <i className="add icon"></i>
                    Info
                </div>
            </div>
        </div>
    )
}

export default Item;