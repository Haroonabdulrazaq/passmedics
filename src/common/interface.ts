export interface IOption {
  label: string;
  value: string;
  isCorrect: boolean;
}

export interface IMetaData {
  questionNumber: number;
  difficulty: string;
}

export interface IQuestion {
  question: string;
  options: IOption[];
  metaData: IMetaData;
}
