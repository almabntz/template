// import { useEffect, useState } from "react";
// import AddSighting from "./AddSightings";

// const Sightings = () => {
//   const [individuals, setIndividuals] = useState([]);
//   const [sightings, setSightings] = useState([]);
//   const getIndividuals = async () => {
//     const response = await fetch(`http://localhost:`);
//     const data = await response.json();
//     console.log(data);
//     setIndividuals(data);
//     filter(data);
//   };

//   const filter = (data) => {
//     if (data.length !== 0) {
//       setSightings(data.filter((individual) => individual.location !== null));
//     }
//   };

//   useEffect(() => {
//     getIndividuals();
//   });

//   const handleClick = (e) => {
//     console.log(e.currentTarget.value);
//   };

//   return (
//   //
//     );


// //RETURN STATEMEND TO DO'S
// // dont forget to use EVENT HANDLER in onclick for form
// //dont forget to use value in the form 


//    // VVV this is the closing brace for sightings 
//   };

// export default Sightings;