import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  darkMode: boolean;
  hasMultiLanguages: boolean;
}

const initialState: ThemeState = {
  darkMode: true,
  hasMultiLanguages: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;