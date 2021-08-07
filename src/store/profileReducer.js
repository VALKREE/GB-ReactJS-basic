import { PROFILE_TOGGLE_SHOW, PROFILE_DROP_NAME, PROFILE_SAVE_VALUE } from "./actionTypes";

const initialState = {
  show: false,
  name: 'No name',
  cheked: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TOGGLE_SHOW: {
      return {
        ...state,
        show: !state.show,
      };
    }
    case PROFILE_DROP_NAME: {
      return {
        ...state,
        name: '',
      };
    }
    case PROFILE_SAVE_VALUE: {
      return {
        ...state,
        cheked: !state.cheked,
      }
    }
    default:
      return state;
  }
};
