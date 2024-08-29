import { configureStore } from '@reduxjs/toolkit';
import { openYtDialogSlice } from '../slice/open-yt-dialog';
import { extractedTextSlice } from '../slice/stracted-text';
import { YTextractedTextSlice } from '../slice/YT-stracted-text';
import { userSlice } from '../slice/user-data';

export const store = configureStore({
  reducer: {
    // Text extraction
    extractedText: extractedTextSlice.reducer,
    YTextractedText: YTextractedTextSlice.reducer,

    // Dialogs
    openYtDialog: openYtDialogSlice.reducer,

    // User data R -> Redux
    RuserInfo: userSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;