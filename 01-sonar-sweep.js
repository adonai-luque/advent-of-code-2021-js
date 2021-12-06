function processMeasurements(measurements) {
  let previous = measurements[0];
  let increments = 0;
  measurements.slice(1).forEach((m) => {
    if (m > previous) increments++;
    previous = m;
  });
  console.log("Increments in measurements: ", increments);
}

function getWindows(measurements) {
  let first = 0;
  let second = measurements[0];
  let third = measurements[1];
  let windows = [];
  measurements.slice(2).forEach((m) => {
    [first, second, third] = [second, third, m];
    windows.push(first + second + third);
  });
  return windows;
}

function processWindows(windows) {
  let previous = windows[0];
  let increments = 0;
  windows.slice(1).forEach((w) => {
    if (w > previous) increments++;
    previous = w;
  });
  console.log("Increments in windows: ", increments);
}

async function getIncrements() {
  const response = await fetch("./01-sonar-sweep-input.txt");
  const rawData = await response.text();
  const measurements = rawData.split("\n").map((m) => parseInt(m));
  processMeasurements(measurements);
  let windows = getWindows(measurements);
  processWindows(windows);
}

getIncrements();
