import {types} from 'mobx-state-tree';

// Main model
const ${TM:MODEL_NAME} = types
  .model({
    isLoading: types.boolean,
    error: types.string,
  })
  .actions(self => ({
    startLoading() {
      self.isLoading = true;
    },
  }));

// Initial state for main model
const initialState = {
  isLoading: false,
  error: '',
};

export default {
  model: ${TM:MODEL_NAME},
  initialState: initialState,
};
