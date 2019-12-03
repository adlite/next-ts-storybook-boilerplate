// Action names
export const INCREMENT = '@example/INCREMENT';
export const DECREMENT = '@example/DECREMENT';
export const RESET = '@example/RESET';

// Action creators
export const incrementCount = () => {
  return {type: INCREMENT};
};

export const decrementCount = () => {
  return {type: DECREMENT};
};

export const resetCount = () => {
  return {type: RESET};
};

// Reducer
const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: initialState.count,
      };
    default:
      return state;
  }
};
