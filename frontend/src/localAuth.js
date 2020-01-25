export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("jwt")) || false
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, args, { cache }) => {
      localStorage.setItem("jwt", args.token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      return null;
    },
    logUserOut: (_, __) => {
      localStorage.removeItem("jwt");
      window.location = "/";
      return null;
    }
  }
};
