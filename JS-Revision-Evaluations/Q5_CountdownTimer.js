function createCountdown(seconds, onTick, onComplete) {
  let remaining = seconds;
  let timer = null;
  let isPaused = false;
  let startTime = null;

  function tick() {
    if (isPaused) return;

    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    const newRemaining = seconds - elapsed;

    if (newRemaining <= 0) {
      onTick(0);
      clearInterval(timer);
      onComplete();
    } else {
      remaining = newRemaining;
      onTick(remaining);
    }
  }

  function start() {
    startTime = Date.now();
    timer = setInterval(tick, 1000);
  }

  start();

  return {
    pause() {
      isPaused = true;
      clearInterval(timer);
    },

    resume() {
      if (!isPaused) return;
      isPaused = false;
      seconds = remaining;
      start();
    }
  };
}