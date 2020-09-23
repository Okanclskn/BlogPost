import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (title, content) => {
    dispatch({
      type: "add_blogpost",
      payload: { title, content },
    });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content, callback },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "TEST POST", content: "TEST CONTENT", id: 1 }]
);
