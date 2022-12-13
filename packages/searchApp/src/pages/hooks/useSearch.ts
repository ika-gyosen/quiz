import { useState, useCallback } from 'react';
import { useGetQuestionsQuery } from '~/getQuestions.generated';
// import { useGetQuestionsLazyQuery } from '~/getQuestions.generated';

type Answer = {
  answer: string;
  pronunciation: string;
  description: string;
};

type Question = {
  questionId: string;
  serialNumber: number;
  difficulty?: number;
  category?: string;
  question: string;
  answers: Answer[];
  tags?: string[];
  userName: string;
  author?: string;
};

export const useSearch = () => {
  const [difficulty, setDifficulty] = useState(0);
  const handleChangeDifficulty = useCallback(
    (item: number) => setDifficulty(item),
    [],
  );

  const [category, setCategory] = useState(0);
  const handleChangeCategory = useCallback(
    (item: number) => setCategory(item),
    [],
  );

  const [containWord, setContainWord] = useState('');
  const handleChangeContainWord = useCallback(
    (item: string) => setContainWord(item),
    [],
  );

  const [notContainWord, setNotContainWord] = useState('');
  const handleChangeNotContainWord = useCallback(
    (item: string) => setNotContainWord(item),
    [],
  );

  const [questionsNumber, setQuestionsNumber] = useState(30);
  const handleChangeQuestionsNumber = useCallback(
    (item: number) => setQuestionsNumber(item),
    [],
  );

  const { data, loading, error } = useGetQuestionsQuery({
    variables: {
      ...(difficulty === 0 ? {} : { difficulties: [difficulty] }),
      ...(category === 0 ? {} : { categoryIds: [category] }),
      ...(containWord === '' ? {} : { containWord: `%${containWord}%` }),
      ...(notContainWord === ''
        ? {}
        : { notContainWord: `%${notContainWord}%` }),
    },
  });

  // const [getQuestions, { data, loading, error }] = useGetQuestionsLazyQuery({
  //   variables: {
  //     ...(difficulty === 0 ? {} : { difficulties: [difficulty] }),
  //     ...(category === 0 ? {} : { categoryIds: [category] }),
  //     ...(containWord === '' ? {} : { containWord: `%${containWord}%` }),
  //     ...(notContainWord === ''
  //       ? {}
  //       : { notContainWord: `%${notContainWord}%` }),
  //   },
  // });

  // const handleClickSearchButton = useCallback(() => {
  //   getQuestions();
  // }, [getQuestions]);

  // const [questions, setQuestions] = useState<Question[]>([]);

  // useEffect(() => {
  //   if (!data?.questions) return;

  //   const filteredQuestions = data.questions.filter(
  //     (question): question is Question => {
  //       return typeof question !== 'undefined';
  //     },
  //   );
  //   setQuestions(filteredQuestions);
  // }, [difficulty, category, containWord, notContainWord, data?.questions]);

  console.log(data?.questions, loading);

  return {
    difficulty,
    category,
    containWord,
    notContainWord,
    questionsNumber,
    questions: data?.questions,
    loading: loading,
    error: error,
    onChangeDifficulty: handleChangeDifficulty,
    onChangeCategory: handleChangeCategory,
    onChangeContainWord: handleChangeContainWord,
    onChangeNotContainWord: handleChangeNotContainWord,
    onChangeQuestionsNumber: handleChangeQuestionsNumber,
    // onClickSearchButton: handleClickSearchButton,
  };
};
