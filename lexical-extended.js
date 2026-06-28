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

export function parseTicket(input) {
  return input?.trim()?.toLowerCase();
}

const buildPrompt = (title, body) => {
  const separator = "---";
  return `${title}\n${separator}\n${body}`;
};

const runJob = function(jobId) {
  const result = `done:${jobId}`;
  return result;
};

const normalValue = "should not be symbol";
let retryCount = 3;

class WebhookService {
  constructor(client) {
    this.client = client;
  }

  async handleEvent(payload) {
    return this.client.send(payload);
  }

  static validateSignature(sig) {
    return Boolean(sig && sig.length > 10);
  }
}

export { projectName, buildNumber, incrementBuild, createMessage };
