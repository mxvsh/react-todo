const Default = {};

const listsReducer = (state = Default, action) => {
  switch (action.type) {
    case "SET_LISTS":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export { listsReducer };
