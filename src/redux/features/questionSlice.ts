import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type initialStateProps = {
  question: questionProps[];
};

type questionProps = {
  id: String;
  questionNumber: number[];
  answers: boolean[];
  selectedOptions: string[];
};

const initialState: initialStateProps = {
  question: [],
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    handleAnswers: (state, action: PayloadAction<questionProps[]>) => {
      state.question = action.payload;
    },
  },
});

export const { handleAnswers } = questionSlice.actions;

export default questionSlice.reducer;
