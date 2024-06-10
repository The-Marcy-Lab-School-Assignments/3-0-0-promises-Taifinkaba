const resolvedWrapper = (value) => {
  return Promise.resolve(value);
};

const rejectedWrapper = (value) => {
  return  Promise.reject(new Error(value));
};

const handleResolvedPromise = () => {
};

const handleResolvedOrRejectedPromise = () => {
};

const pauseForMs = () => {
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
