import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProfile } from "Interfaces/profileInterface";
import profileAPI from "Services/profileAPI";

interface State {
  profile: IProfile | null;
}
const initialState: State = {
  profile: null,
};

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
  try {
    const data = await profileAPI.getProfile();
    return data;
  } catch (error) {
    throw error;
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.profile = payload.data.mypage.profile;
    });
  },
});

export default profileSlice.reducer;
