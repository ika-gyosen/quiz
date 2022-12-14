import { useState, useCallback, useEffect } from 'react';
import { useGetQuestionsQuery } from '~/pages/Top/getQuestions.generated';
import { Option } from '~/components/Select';

export type Question = {
  questionId: string;
  serialNumber: number;
  difficulty?: number;
  category?: string;
  subCategory?: string;
  question: string;
  answers: Answer[];
  tags?: string[];
  userName: string;
  author?: string;
};

type Answer = {
  answer: string;
  pronunciation: string;
  description: string;
};

export const useSearch = () => {
  const [difficulties, setDifficulties] = useState<Option<number>[]>([]);
  const handleChangeDifficulties = useCallback(
    (items: Option<number>[]) => setDifficulties(items),
    [],
  );

  const [categories, setCategories] = useState<Option<number>[]>([]);
  const handleChangeCategories = useCallback(
    (items: Option<number>[]) => setCategories(items),
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

  const [targetTags, setTargetTags] = useState<Option<string>[]>([]);
  const handleChangeTargetTags = useCallback((items: Option<string>[]) => {
    setTargetTags(items);
  }, []);

  const [notTargetTags, setNotTargetTags] = useState<Option<string>[]>([]);
  const handleChangeNotTargetTags = useCallback((items: Option<string>[]) => {
    setNotTargetTags(items);
  }, []);

  const { data, loading, error } = useGetQuestionsQuery({
    variables: {
      ...(difficulties.length === 0
        ? {}
        : { difficulties: difficulties.map(({ value }) => value) }),
      ...(categories.length === 0
        ? {}
        : { categoryIds: categories.map(({ value }) => value) }),
      ...(targetTags.length === 0
        ? {}
        : { targetTags: targetTags.map(({ value }) => value) }),
      ...(notTargetTags.length === 0
        ? {}
        : { notTargetTags: notTargetTags.map(({ value }) => value) }),
      ...(containWord === '' ? {} : { containWord: `%${containWord}%` }),
      ...(notContainWord === ''
        ? {}
        : { notContainWord: `%${notContainWord}%` }),
    },
  });

  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (!data?.questions) return;

    const filteredQuestions = data.questions.filter(
      (question): question is Question => {
        return typeof question !== 'undefined';
      },
    );
    setQuestions(filteredQuestions);
  }, [
    difficulties,
    categories,
    containWord,
    notContainWord,
    targetTags,
    notTargetTags,
    data?.questions,
  ]);

  return {
    difficulties,
    categories,
    targetTags,
    notTargetTags,
    containWord,
    notContainWord,
    questionsNumber,
    questions,
    loading,
    error,
    onChangeDifficulties: handleChangeDifficulties,
    onChangeCategories: handleChangeCategories,
    onChangeContainWord: handleChangeContainWord,
    onChangeNotContainWord: handleChangeNotContainWord,
    onChangeQuestionsNumber: handleChangeQuestionsNumber,
    onChangeTargetTags: handleChangeTargetTags,
    onChangeNotTargetTags: handleChangeNotTargetTags,
  };
};
