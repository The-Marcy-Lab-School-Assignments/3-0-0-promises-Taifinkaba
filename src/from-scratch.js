/** FEEDBACK: Great job getting all test cases to pass! */
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

const handleResolvedOrRejectedPromise = (value) => {
  return value.then(
    (value) => {
      console.log(value);
      return value;
    },
    (error) => {
      console.error(`Your error message was: ${error.message}`);
      return null;
    }
  );
};

const pauseForMs = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, value);
  });
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
