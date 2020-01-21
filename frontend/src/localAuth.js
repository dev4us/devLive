export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("jwt")) || false
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("jwt", token);
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
