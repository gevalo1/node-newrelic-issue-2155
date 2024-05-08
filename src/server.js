const timeout = 5000;

const start = async () => {
  console.log(`Starting, running for ${timeout/1000} seconds`);

  await new Promise(function (resolve, _reject) {
    setTimeout(function () {
      console.log('Stopping, timeout expired');

      resolve();
    }, timeout);
 });
};

start().catch((error) => {
  console.log('Error', { error });

  process.exit(1);
});
