export const LoaderReducer = (state = {loader: false}, action) => {
  switch (action.type) {
    case 'UPDATE_LOADER':
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
};

export default LoaderReducer;
