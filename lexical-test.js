const projectName = "Parser Test";
let buildNumber = 42;

const defaultEnvironment = "development";
const maxRetryLimit = 5;
let activeParser = "ticket-parser";

const incrementBuild = () => {
  buildNumber++;
  return buildNumber;
};

const createMessage = (name) => {
  const timestamp = new Date().toISOString();
  return `${projectName}: ${name} at ${timestamp}`;
};

const buildLabel = (env) => `${projectName}-${env}-b${buildNumber}`;

const normalizeToken = (token) => token?.trim()?.toLowerCase() ?? "";

const switchParser = (nextParser) => {
  activeParser = normalizeToken(nextParser) || activeParser;
  return activeParser;
};

const canRetry = (attempt) => attempt < maxRetryLimit;

export {
  projectName,
  buildNumber,
  defaultEnvironment,
  maxRetryLimit,
  activeParser,
  incrementBuild,
  createMessage,
  buildLabel,
  normalizeToken,
  switchParser,
  canRetry
};
