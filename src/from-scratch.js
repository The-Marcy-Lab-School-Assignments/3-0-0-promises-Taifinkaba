const resolvedWrapper = (value) => {
  return Promise.resolve(value);
};

const rejectedWrapper = (value) => {
  return  Promise.reject(new Error(value));
};

const handleResolvedPromise = (value) => {
  return value.then((newVal) =>  {
    console.log(newVal);
    return newVal;
  })
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
