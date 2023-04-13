import { createStore } from 'redux';

const counterReducer = (state = { enabled: false }, action) => {
  if (action.type === 'Admin') {
    return {
      enabled: false,
    };
  }

  if (action.type === 'Registrars') {
    return {
      enabled: true
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;