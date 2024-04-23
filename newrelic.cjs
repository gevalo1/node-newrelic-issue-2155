module.exports.config = {
  agent_enabled: true,
  app_name: "node-newrelic-issue-2155",
  license_key: "",
  logging: { // Adding this logging block causes: "New Relic for Node.js in worker_threads is not officially supported. Not starting! To bypass this, set `config.worker_threads.enabled` to true in configuration."
    level: 'warning',
    filepath: 'stdout',
  },
};
