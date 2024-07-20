import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
}

export const openYtDialogSlice = createSlice({
  name: 'openYtDialog',
  initialState,
  reducers: {
    openYTDialog: (state) => {
      state.isOpen = true;
    },
    closeYTDialog: (state) => {
      state.isOpen = false;
    },
  },
});

export const { closeYTDialog, openYTDialog } = openYtDialogSlice.actions;
export default openYtDialogSlice.reducer;