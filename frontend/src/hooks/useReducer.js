export const initialState = {
  status: "idle",
  error: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SUBMIT":
      return { ...state, status: "submitting", error: null };

    case "SUCCESS":
      return { ...state, status: "success", error: null };

    case "ERROR":
      return { ...state, status: "error", error: action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}
