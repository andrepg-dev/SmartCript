import { configureStore } from '@reduxjs/toolkit';
import { extractedTextSlice } from '../slice/stracted-text';
import { YTextractedTextSlice } from '../slice/YT-stracted-text';
import { openYtDialogSlice } from '../slice/open-yt-dialog';

export const store = configureStore({
  reducer: {
    // Text extraction
    extractedText: extractedTextSlice.reducer,
    YTextractedText: YTextractedTextSlice.reducer,

    // Dialogs
    openYtDialog: openYtDialogSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;