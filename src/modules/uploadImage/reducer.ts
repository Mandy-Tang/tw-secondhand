const defaultState = '';

export const UploadImgeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_UPLOAD_IMAGE': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default UploadImgeReducer;
