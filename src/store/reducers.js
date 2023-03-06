import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

const country = createSlice({
  name: "selectCountry",
  initialState: "India",
  reducers: {
    update: (_, action) => action.payload,
  },
});

const coordinates = createSlice({
  name: "coordinates",
  initialState: [28.6448, 77.216721],
  reducers: {
    update: (_, action) => data[action.payload].coordinates,
  },
});

const info = createSlice({
  name: "info",
  initialState: null,
  reducers: {
    update: (_, action) => data[action.payload],
  },
});
export const reducerObject = {
  country: country.reducer,
  coordinates: coordinates.reducer,
  info: info.reducer,
};
export const countryAction = country;
export const coordinatesAction = coordinates;
export const infoAction = info;
export default reducerObject;

