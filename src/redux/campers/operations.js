import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66bc754524da2de7ff6a9bf5.mockapi.io/";

export const getAllCampers = createAsyncThunk(
  "advert/getAll",
  async (_, thunkApi) => {
    try {
      const res = await axios.get("/advert");
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getByIdCampers = createAsyncThunk(
  "advert/getById",
  async (advertId, thunkApi) => {
    try {
      const res = await axios.get(`/advert/${advertId}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
