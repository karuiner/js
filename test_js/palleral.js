const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function processImage(imagePath) {
  let n = Math.floor(Math.random() * 10000);
  await sleep(n);
  return n;
}

function workerThread() {
  parentPort.on("message", (data) => {
    const { imagePath } = data;
    processImage(imagePath)
      .then((result) => {
        parentPort.postMessage(result);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

if (isMainThread) {
  let s = new Date();
  const os = require("os");

  const images = Array.from({ length: 13 }, (_, i) => `image${i + 1}.jpg`);
  const n = images.length;
  const numWorkers = Math.min(os.cpus().length, images.length);
  let completedTasks = 0;
  const workers = [];
  let ss = 0;
  const results = [];

  function workerThreadFinished(worker, message) {
    if (message) {
      results.push(message);
    } else {
      console.error(message);
    }
    ss += message;
    console.log(message, completedTasks);
    completedTasks++;

    // 새 작업 할당
    if (images.length > 0) {
      worker.postMessage({ imagePath: images.shift() });
    } else if (completedTasks === n) {
      console.log("All images processed");
      console.log("Results:", results);
      let e = new Date();
      console.log("process time", e - s, ss);
      workers.forEach((worker) => worker.terminate());
    }
  }

  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(__filename);

    worker.on("message", (message) => workerThreadFinished(worker, message));

    worker.on("error", (error) => {
      console.error(error);
    });

    // 처음 작업 할당
    if (images.length > 0) {
      worker.postMessage({ imagePath: images.shift() });
    }
    workers.push(worker); // Keep track of all workers
  }
} else {
  workerThread();
}
