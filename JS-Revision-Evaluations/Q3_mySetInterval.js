const timers = new Map();
let timerIdCounter = 0;

function mySetInterval(callback, delay) {
  const id = ++timerIdCounter;

  function run() {
    if (!timers.has(id)) return;

    callback();
    const timeoutId = setTimeout(run, delay);
    timers.set(id, timeoutId);
  }

  const timeoutId = setTimeout(run, delay);
  timers.set(id, timeoutId);

  return id;
}

function myClearInterval(id) {
  if (timers.has(id)) {
    clearTimeout(timers.get(id));
    timers.delete(id);
  }
}