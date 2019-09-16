import axios from "axios";

const changeList = list => ({
  type: "newslist",
  list
});

export const getNewsList = () => (dispatch, getState) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(res => dispatch(changeList(res.data)));
};
