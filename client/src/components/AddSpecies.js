import { useState } from "react";

const AddSpecies = (props) => {

    const {initialSpecies = {
        id: null,
        common_name: "",
        scientific_name: "",
        population: "",
        conservation_status:"",
        created_on: ""
    }} = props;
    
    //this is the original state with no initial species
    const [specieS, setSpecieS] = useState(initialSpecies);

    //function for event, the event is user form entrys
    //you will have to add one for EVERY field in the form entry
//event handle for edit of common name
    const  handleNameChange = (event) => {
        const commonname = event.target.value;
        setSpecieS((specieS) => ({...specieS, commonname}));
    };

   
//event handle for edit on form Scientific name
    const handleScienceNameChange = (event) => {
        const scientificname = event.target.value;
        setSpecieS((specieS) => ({...specieS, scientificname}));
    };

//event handle for edit on form Population
const handlePopulationChange = (event) => {
    const population = event.target.value;
    setSpecieS((specieS) => ({...specieS, population}))
};

//event handle for edit on form Conservation Status
const handleConservationChange = (event) => {
    const conservationstatus = event.target.value;
    setSpecieS((specieS) => ({...specieS, conservationstatus}));
};

//THIS IS WHERE THE PARENT FOR ADD IS PASSING PROPS
    //function that handles the POST request
    const postSpecies = (newSpecies) => {
        return fetch("http://localhost:5000/api/species",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSpecies),
        })
        .then((response) =>{
            return response.json();
        })
        .then((data) => {
            console.log(data);
            props.saveSpecies(data);
        });
    };

    //function that handles UPDATE request
    const updateSpecies = (existingSpecies) =>{
        return fetch(`http://localhost:5000/api/species/${existingSpecies.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(existingSpecies)
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
            props.saveSpecies(data);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(specieS.id){
            updateSpecies(specieS);
        } else {
            postSpecies(specieS);
        }
    }; //this is the end of my handle submit
    return (
        //This is my Add Species Form!
        <form onSubmit={handleSubmit}>
            <fieldset>

                <label>Common Name</label>
                <input 
                type="text"
                id="add-common-name"
                placeholder="Common Name"
                required
                value={specieS.commonname}
                onChange={handleNameChange}/>

                <label>Scientific Name</label>
                <input 
                type="text"
                id="add-scientific-name"
                placeholder="Scientific Name"
                required
                value={specieS.scientificname}
                onChange={handleScienceNameChange}/>

                <label>Population</label>
                <input 
                type="text"
                id="add-population"
                placeholder="Population"
                required
                value={specieS.population}
                onChange={handlePopulationChange}/>

                <label>Conservation Status</label>
                <input 
                type="text"
                id="conservation-Status"
                placeholder="Conservation Status"
                required
                value={specieS.conservationstatus}
                onChange={handleConservationChange}/>

            </fieldset>
            <button type="submit">{!specieS.id ? "ADD" : "SAVE"}</button>
        </form>
    );
};

export default AddSpecies;