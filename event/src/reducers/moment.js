const initialState = {
  time: null
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'SET_TIME':
      newState.time = action.time;
      return newState;
    default:
      return state;
  }
};
