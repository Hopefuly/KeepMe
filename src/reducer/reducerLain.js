const reducerLain = (state = false, action) => {
  switch (action.type) {
    case "LAIN":
      return !state;
      break;

    default:
      return state;
  }
};

export default reducerLain;
