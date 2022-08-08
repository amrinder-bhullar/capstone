// Helper function, used in useReducer, it takes type of value to be modified and payload, runs inside dispatch()

export const createAction = (type, payload) => ({ type, payload });
