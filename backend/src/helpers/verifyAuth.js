export const verifyAuth = request => {
  if (!request.user) {
    throw Error("You need to log in to perform this action");
  }
  return;
};
