const submarineOne = (function () {
  let xPosition = 0;
  let depth = 0;
  const execute = (instruction) => {
    const instructionArray = instruction.split(" ");
    let direction = instructionArray[0];
    let amount = parseInt(instructionArray[1]);
    switch (direction) {
      case "forward":
        xPosition += amount;
        break;
      case "down":
        depth += amount;
        break;
      case "up":
        depth -= amount;
        break;
      default:
      console.log("Wrong instruction!");
    };
  };
  const position = () => {
    console.log(`X position: ${xPosition} -- Depth: ${depth}`);
  };
  const coordinatesProduct = () => {
    console.log(xPosition * depth);
  };
  return {
    execute,
    position,
    coordinatesProduct,
  };
})();

const submarineTwo = (function () {
  let xPosition = 0;
  let depth = 0;
  let aim = 0;
  const execute = (instruction) => {
    const instructionArray = instruction.split(" ");
    let direction = instructionArray[0];
    let amount = parseInt(instructionArray[1]);
    switch (direction) {
      case "forward":
        xPosition += amount;
        depth += amount * aim ;
        break;
      case "down":
        aim += amount;
        break;
      case "up":
        aim -= amount;
        break;
      default:
      console.log("Wrong instruction!");
    };
  };

  const position = () => {
    console.log(`X position: ${xPosition} -- Depth: ${depth}`);
  };
  const coordinatesProduct = () => {
    console.log(xPosition * depth);
  };
  return {
    execute,
    position,
    coordinatesProduct,
  };
})();

async function getInstructions() {
  const response = await fetch("./02-dive-input.txt");
  const rawData = await response.text();
  const instructions = rawData.split("\n");
  return instructions;
}

async function getFinalCoordinatesProduct(submarine) {
  const instructions = await getInstructions();
  console.log
  instructions.forEach(i => submarine.execute(i));
  submarine.position();
  submarine.coordinatesProduct();
}

getFinalCoordinatesProduct(submarineOne);
getFinalCoordinatesProduct(submarineTwo);
