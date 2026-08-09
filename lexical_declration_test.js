const projectName = "Parser Test";
let buildNumber = 42;

const incrementBuild = () => {
  buildNumber++;
  return buildNumber;
};

const createMessage = (name) => {
  const timestamp = new Date().toISOString();
  return `${projectName}: ${name} at ${timestamp}`;
};

export { projectName, buildNumber, incrementBuild, createMessage };