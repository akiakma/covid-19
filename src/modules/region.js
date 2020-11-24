import * as postsAPI from "./api";

const GET_REGION = "GET_REGION";
const GET_REGION_SUCCESS = "GET_REGION_SUCESS";
const GET_REGION_ERROR = "GET_REGION_ERROR";

export const getRegion = () => async dispatch => {
  dispatch({ type: GET_REGION });
  try {
    const region = await postsAPI.getRegion();
    dispatch({ type: GET_REGION_SUCCESS, region });
  } catch (e) {
    dispatch({ type: GET_REGION_ERROR, error: e });
  }
};

const initialState = {
  region: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function region(state = initialState, action) {
  switch (action.type) {
    case GET_REGION:
      return {
        ...state,
        region: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_REGION_SUCCESS:
      return {
        ...state,
        region: {
          loading: false,
          data: action.region,
          error: null,
        },
      };
    case GET_REGION_ERROR:
      return {
        ...state,
        region: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
