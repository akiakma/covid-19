const MODE = "mode/TOGGLE";

export const toggle = () => ({ type: MODE });

const initialState = {
  mode: true,
};

export default function mode(state = initialState, action) {
  switch (action.type) {
    case MODE:
      return {
        ...state,
        mode: !state.mode,
      };
    default:
      return state;
  }
}
