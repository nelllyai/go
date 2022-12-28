export default function (duration, callback) {
  let start = NaN;

  requestAnimationFrame(function step(timestamp) {
    start ||= timestamp;

    const progress = (timestamp - start) / duration;

    callback(progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  })
};