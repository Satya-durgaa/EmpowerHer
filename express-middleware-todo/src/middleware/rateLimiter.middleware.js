const requestMap = {};
const LIMIT = 15;
const WINDOW = 60 * 1000;

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (!requestMap[ip]) requestMap[ip] = [];

  requestMap[ip] = requestMap[ip].filter(time => now - time < WINDOW);

  if (requestMap[ip].length >= LIMIT) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  requestMap[ip].push(now);
  next();
};

module.exports = rateLimiter;
