export const throwNotFoundError = () => {
  const err = new Error();
  err.code = "not.found";
  throw err;
};

export const throwBadRequestError = () => {
  const err = new Error();
  err.code = "bad.request";
  throw err;
};
