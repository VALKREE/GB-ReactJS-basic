import {REQUEST_STATUS} from "../../constants";

export const selectAnimals = (state) => state.animals.data;
export const selectAnimalsLoading = (state) => state.animals.request.status === REQUEST_STATUS.PENDING;
export const selectAnimalsError = (state) => state.animals.request.error;