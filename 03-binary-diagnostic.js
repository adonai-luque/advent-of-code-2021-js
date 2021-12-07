const submarineOne = (function () {
  let gammaRate;
  let epsilonRate;
  const processDiagnostic = (diagnostic) => {
    let numberLength = diagnostic[0].length;
    let gammaRateArray = [];
    let toggler = { 0: "1", 1: "0" };
    let i = -1;
    while (++i < numberLength) {
      let winner = 0;
      diagnostic.forEach((number) => {
        winner = number[i] === "1" ? winner + 1 : winner - 1;
      });
      gammaRateArray.push(winner > 0 ? "1" : "0");
    }
    gammaRate = gammaRateArray.join("");
    epsilonRate = gammaRateArray.map((d) => toggler[d]).join("");
  };
  const powerConsumption = () => {
    console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
  };
  return {
    processDiagnostic,
    powerConsumption,
  };
})();

async function getDiagnostic() {
  const response = await fetch("./03-binary-diagnostic-input.txt");
  const rawData = await response.text();
  const diagnostic = rawData.split("\n");
  return diagnostic;
}

async function getPowerConsumption(submarine) {
  const diagnostic = await getDiagnostic();
  submarine.processDiagnostic(diagnostic);
  submarine.powerConsumption();
}

getPowerConsumption(submarineOne);

const submarineTwo = (function () {
  let o2GenRating;
  let co2ScrubRating;
  const getO2GenRating = (diagnostic) => {
    let numberLength = diagnostic[0].length;
    let i = -1;
    while (++i < numberLength) {
      let count = 0;
      let winner;
      diagnostic.forEach((number) => {
        count = number[i] === "1" ? count + 1 : count - 1;
      });
      winner = count < 0 ? "0" : "1";
      diagnostic = diagnostic.filter((number) => number[i] === winner);
      if (diagnostic.length === 1) {
        o2GenRating = diagnostic[0];
        break;
      }
    }
  };
  const getCo2ScrubRating = (diagnostic) => {
    let numberLength = diagnostic[0].length;
    let i = -1;
    while (++i < numberLength) {
      let count = 0;
      let winner;
      diagnostic.forEach((number) => {
        count = number[i] === "1" ? count + 1 : count - 1;
      });
      winner = count < 0 ? "1" : "0";
      diagnostic = diagnostic.filter((number) => number[i] === winner);
      if (diagnostic.length === 1) {
        co2ScrubRating = diagnostic[0];
        break;
      }
    }
  };
  const lifeSupportRating = () => {
    console.log(parseInt(o2GenRating, 2) * parseInt(co2ScrubRating, 2));
  };
  return {
    getO2GenRating,
    getCo2ScrubRating,
    lifeSupportRating,
  };
})();

async function getLifeSupportRating(submarine) {
  const diagnostic = await getDiagnostic();
  submarine.getO2GenRating(diagnostic);
  submarine.getCo2ScrubRating(diagnostic);
  submarine.lifeSupportRating();
}

getLifeSupportRating(submarineTwo);
