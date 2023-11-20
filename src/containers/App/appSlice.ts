import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  userData: null,
};

const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearData: () => initialState,
  },
});

export const { setUserData, clearData } = appSlice.actions;
export default appSlice.reducer;
