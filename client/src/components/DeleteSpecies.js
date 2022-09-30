import { useState } from "react";

//prop from parent component Species being called here

const DeleteSpecies = ({deleteSpecies}) => {
    const [id, setId] = useState ("");
    const handleSubmit = (e) => {
        e.preventDefault();
        deleteSpecies(id);
    };
    return (
        <div>
            <h3>Delete Species</h3>
            <form id= "delete-species" action="#" onSubmit={handleSubmit}>
                <fieldset>
                    <label> Species Id</label>
                    <input
                    type= "text"
                    id= "delete-species-id"
                    value= {id}
                    onChange={(e) => setId(e.target.value)}
                    />
                </fieldset>
                <input type= "submit" />
            </form>
        </div>
    );
};

export default DeleteSpecies;