import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExtractedTextState {
  link: string;
  transcription: [];
  summary?: string;
  videoDetails: {
    title: string;
    author: string;
    thumbnails: string[];
    description: string;
  }
}

const initialState: ExtractedTextState = {
  link: '',
  transcription: [],
  summary: '',
  videoDetails: {
    title: '',
    author: '',
    thumbnails: [],
    description: ''
  }
}

export const YTextractedTextSlice = createSlice({
  initialState,
  name: 'YTExtractedText',
  reducers: {
    setText: (state, action: PayloadAction<ExtractedTextState>) => {
      state.link = action.payload.link;
      state.transcription = action.payload.transcription;
      state.videoDetails = action.payload.videoDetails;
      state.summary = action.payload.summary;
    },

    clearText: (state) => {
      state.link = '';
      state.transcription = [];
      state.videoDetails = {
        title: '',
        author: '',
        thumbnails: [],
        description: ''
      }
    }
  }
});


export const { setText, clearText } = YTextractedTextSlice.actions;