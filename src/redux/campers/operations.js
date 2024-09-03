import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66bc754524da2de7ff6a9bf5.mockapi.io/";
const perPage = 4;

export const getStartCampers = createAsyncThunk(
  "advert/getStartCampers",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`/advert?page=1&limit=${perPage}`);

      console.log(res.data);

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCampers = createAsyncThunk(
  "advert/fetchCampers",
  async (page, thunkApi) => {
    try {
      const res = await axios.get(`/advert?page=${page}&limit=${perPage}`);

      console.log(res.data);

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
