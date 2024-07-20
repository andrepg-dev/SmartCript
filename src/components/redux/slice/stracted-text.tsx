import { createSlice } from "@reduxjs/toolkit";

interface ExtractedTextState {
  text: string;
  type: 'PDF' | 'Word' | 'TXT';
}

const initialState: ExtractedTextState = {
  text: '',
  type: 'PDF',
};

export const extractedTextSlice = createSlice({
  name: 'extractedText',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload.text;
      state.type = action.payload.type;
    },

    clearText: (state) => {
      state.text = '';
      state.type = 'PDF';
    },
  },
});

export const { setText, clearText } = extractedTextSlice.actions;