function runSequential(tasks, delay) {
  return new Promise(async (resolve, reject) => {
    const results = [];

    try {
      for (let i = 0; i < tasks.length; i++) {
        const result = await tasks[i]();
        results.push(result);

        if (i < tasks.length - 1) {
          await new Promise(res => setTimeout(res, delay));
        }
      }

      resolve(results);
    } catch (error) {
      reject(error);
    }
  });
}