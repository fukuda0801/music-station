import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AudioState {
  currentlyPlayingId: number | null;
}

const initialState: AudioState = {
  currentlyPlayingId: null,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setCurrentlyPlayingId(state, action: PayloadAction<number | null>) {
      state.currentlyPlayingId = action.payload;
    },
  },
});

export const { setCurrentlyPlayingId } = audioSlice.actions;
export default audioSlice.reducer;
