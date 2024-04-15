import { LOAD_DATA } from "./actionTypes";

export const loadData = (data) => ({
  type: LOAD_DATA,
  payload: data,
});
