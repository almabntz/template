// import { useState } from "react";

// const AddSighting = ({ individuals }) => {
//   const [newSighting, setNewSighting] = useState({
//     nickname: "",
//     common_name: "",
//     healthy: "",
//     location: "",
//     last_seen: "",
//   });
//   const [nicknameExists, setNicknameExists] = useState(false);

//   const set = (input) => {
//     return ({ target: { value, id } }) => {
//       if (id === "add-nickname") {
//         const filter = individuals.filter(
//           (individual) =>
//             individual.nickname.toLowerCase() === value.toLowerCase()
//         );
//         if (filter.length !== 0) {
//           console.log("exists!");
//           setNicknameExists(true);
//           setNewSighting((originalValues) => ({
//             ...originalValues,
//             common_name: filter[0].common_name,
//           }));
//         } else {
//           setNicknameExists(false);
//         }
//       }
//       setNewSighting((originalValues) => ({
//         ...originalValues,
//         [input]: value,
//       }));
//     };
//   };

//   return (
//     {/* sighting logic*/}
//   )
// // VVV this closing bracker is for const AddSighting!!
// };  

// export default AddSighting;