export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("jwt")) || false
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token, username }, { cache }) => {
      localStorage.setItem("jwt", token);
      localStorage.setItem("username", username);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      window.location = "/";
      return null;
    },
    logUserOut: (_, __) => {
      localStorage.removeItem("jwt");
      localStorage.removeItem("username");
      window.location = "/";
      return null;
    }
  }
};
