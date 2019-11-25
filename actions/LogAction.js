export default logaction = user => {
  return {
    type: "SIGNIN",
    payload: user
  };
};
