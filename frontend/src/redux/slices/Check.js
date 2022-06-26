import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchTrack = createAsyncThunk(
  "track/fetchTrack",
  async (params) => {
    console.log("Отправляем данные");
    console.log(params);
    const { data } = await axios.get(`/track/${params}`);
    return data
  }
);

export const fetchAddTrack = createAsyncThunk("track/fetchAddTrack", async (params) => {
  console.log("Пытаемся создать трек");
  const {data} = await axios.post("/addtrack", params)
  return data
})

const initialState = {
  data: null,
  status: "Loading",
};

const checkTrack = createSlice({
  name: "track",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTrack.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchTrack.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchTrack.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },
    [fetchAddTrack.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchAddTrack.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchAddTrack.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },
  },
});

export const trackReduce = checkTrack.reducer;
