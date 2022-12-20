import { useState, useCallback, useMemo } from 'react';
import z from 'zod';
import { Option } from '~/components/Select';

export const useTopPage = () => {
  const [question, setQuestion] = useState<string>('');
  const handleChangeQuestion = useCallback((item: string) => {
    setQuestion(item);
  }, []);

  const [answer, setAnswer] = useState<string>('');
  const handleChangeAnswer = useCallback((item: string) => {
    setAnswer(item);
  }, []);

  const [pronunciation, setPronunciation] = useState<string>('');
  const handleChangePronunciation = useCallback((item: string) => {
    setPronunciation(item);
  }, []);

  const [description, setDescription] = useState<string>('');
  const handleChangeDescription = useCallback((item: string) => {
    setDescription(item);
  }, []);

  const [difficulty, setDifficulty] = useState<Option<number>>();
  const handleChangeDifficulty = useCallback((item: Option<number>) => {
    setDifficulty(item);
  }, []);

  const [category, setCategory] = useState<Option<number>>();
  const handleChangeCategory = useCallback((item: Option<number>) => {
    setCategory(item);
  }, []);

  const [tags, setTags] = useState<Option<string>[]>([]);
  const handleChangeTags = useCallback((items: Option<string>[]) => {
    setTags(items);
  }, []);

  const [userId, setUserId] = useState<string>('');
  const handleChangeUserId = useCallback((item: string) => {
    setUserId(item);
  }, []);

  const [author, setAuthor] = useState<string>('');
  const handleChangeAuthor = useCallback((item: string) => {
    setAuthor(item);
  }, []);

  const inputValid = useMemo(() => {
    try {
      validationSchema.parse({
        question,
        answer,
        pronunciation,
        description,
        difficulty,
        category,
        tags,
        userId,
        author,
      });
      return true;
    } catch (e) {
      return false;
    }
  }, [
    answer,
    author,
    category,
    description,
    difficulty,
    pronunciation,
    question,
    tags,
    userId,
  ]);

  const [isConfirmation, setIsConfirmation] = useState<boolean>(false);

  const onClickConfirmation = () => {
    // if (inputValid) {
    setIsConfirmation(true);
    // }
  };

  return {
    question,
    answer,
    pronunciation,
    description,
    difficulty,
    category,
    tags,
    userId,
    author,
    inputValid,
    isConfirmation,
    onClickConfirmation,
    onChangeQuestion: handleChangeQuestion,
    onChangeAnswer: handleChangeAnswer,
    onChangePronunciation: handleChangePronunciation,
    onChangeDescription: handleChangeDescription,
    onChangeDifficulty: handleChangeDifficulty,
    onChangeCategory: handleChangeCategory,
    onChangeTags: handleChangeTags,
    onChangeUserId: handleChangeUserId,
    onChangeAuthor: handleChangeAuthor,
  };
};

const validationSchema = z.object({
  question: z.string(),
  answer: z.string(),
  pronunciation: z.string().optional(),
  description: z.string().optional(),
  difficulty: z.number().optional(),
  categoryId: z.number().optional(),
  tags: z.array(z.string()).optional(),
  userId: z.string(),
  author: z.string().optional(),
});
