// const plantNumberOne = {
//   plantOne: "Papaver somniferum"
// }

// const plantNumberTwo = {
//   plantTwo: "Cannabis"
// }

// const plantNumberThree = {
//   plantThree: "Lavender"
// }

// const plantNumbeFour = {
//   plantFour: "Hydrangea"
// }

// Business logic

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// Function stores our state
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();

const rePot = changeState("soil")(5);
const growJuice = changeState("fertilizer")(10);
const photosynthesize = changeState("light")(20);
const hydrate = changeState("water")(15);
const wormTea = changeState("fertilizer")(20);

// UI Logic

window.addEventListener("load", function() {
  document.getElementById("repot").onclick = function() {
    const newState = stateControl(rePot);
    document.getElementById("soil-value").innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById("fertilize").onclick = function() {
    const newState = stateControl(growJuice);
    document.getElementById("fertilizer-val").innerText = `Fertilizer: ${newState.fertilizer}`;
  };

  document.getElementById("light").onclick = function() {
    const newState = stateControl(photosynthesize);
    document.getElementById("light-val").innerText = `Light: ${newState.light}`;
  };

  document.getElementById("waterPlant").onclick = function() {
    const newState = stateControl(hydrate);
    document.getElementById("water-val").innerText = `Water: ${newState.water}`;
  };

  this.document.getElementById()

  document.getElementById("show-state").onClick = function() {
    const currentState = stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
    document.getElementsByName('fertilizer-val').innderText = `Fertilizer: ${currentState.fertilizer}`;
    document.getElementsByName('light-val').innderText = `Light: ${currentState.light}`;
    document.getElementsByName('water-val').innderText = `Water: ${currentState.water}`;
  };
});