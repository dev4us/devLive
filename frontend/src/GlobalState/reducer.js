export const initialState = {};

const reducer = (state, action) => {
  const reduced = { ...state };

  switch (action.type) {
    case "SET_VALUE":
      return {
        ...reduced,
        [action.target]: action.payload
      };
    case "RESET_DATA":
      return initialState;
    default:
      return state;
  }
};
export default reducer;
