// Object Oriented Approach
// class Plant {
//   constructor () {
//     this.water = 0;
//     this.fertilizer = 0;
//     this.light = 0;
//   }

//   hydrate() {
//     this.water ++
//   }

//   growJuice() {
//     this.fertilizer ++
//   }

//   photosynth() {
//     this.light ++
//   }
// }

// // Functional Approach

// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const growJuice = (plant) => {
//   return {
//     ...plant,
//     fertilizer: (plant.fertilizer || 0) + 1
//   }
// };

// const photosynth = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// }

// // below is refactored functional approach

// const changPlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   }
// }

// > let plant = { soil: 0, light: 0, water: 0}
// > changePlantState(plant, "soil");
// terminal should return --> {soil: 1, light: 0, water: 0}

// Function Refactor #3

// const changeState = (state, prop, value) => ({
//   ...state,
//   [prop] : (state[prop] || 0) + value
// })

// Functional approach with Curry

// Function Factory
// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// };

// // Function stores our state
// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// };

// const stateControl = storeState();

// const rePot = changeState("soil")(5);
// const growJuice = changeState("fertilizer")(10);
// const photosynthesize = changeState("light")(20);
// const hydrate = changeState("water")(15);
// const wormTea = changeState("fertilizer")(20);

// window.addEventListener("load", function() {
//   document.getElementById("repot").onclick = function() {
//     const newState = stateControl(rePot);
//     document.getElementById("soil-value").innerText = `Soil: ${newState.soil}`;
//   };

//   document.getElementById("show-state").onClick = function() {
//     const currentState = stateControl();
//     document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
//   };
// });
