const defaultState = {
  newsList: [],
  name: "daniellll"
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "newslist":
      return {
        ...state,
        newsList: action.list
      };
    default:
      return state;
  }
};
