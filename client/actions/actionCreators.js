import { SAMPLE_ACTION_TYPE } from "./actionTypes";

export const actionCreator = (versionOfState) => {
  return {
    type: SAMPLE_ACTION_TYPE,
    versionOfState
  }
}
