import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type initialStateProps = {
  answers: number[];
};

const initialState: initialStateProps = {
  answers: [],
};

const questions = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    storeAnswer: (state, action: PayloadAction<number>) => {
      state.answers.push(action.payload);
    },
  },
});
