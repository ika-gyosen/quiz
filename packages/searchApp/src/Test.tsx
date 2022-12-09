import { useGetQuestionsQuery } from '~/getQuestions.generated';

export const Test = () => {
  const { data, loading, error } = useGetQuestionsQuery();

  if (loading) {
    return <div>now loading...</div>;
  }

  if (error) {
    return <div>error occured.</div>;
  }

  if (data) {
    return (
      <table>
        <tr>
          <th>No.</th>
          <th>難易度</th>
          <th>ジャンル</th>
          <th>問題</th>
          <th>解答</th>
          <th>読み方</th>
          <th>別解・備考</th>
        </tr>
        {data.quiz_questions.map((question) => {
          return (
            <tr key={question.id}>
              <td>{question.serial_number}</td>
              <td>{question.difficulty}</td>
              <td>{question.categories_to_questions?.category}</td>
              <td>{question.question}</td>
              <td>{question.answers_to_questions[0].answer}</td>
              <td>{question.answers_to_questions[0].pronunciation}</td>
              <td>{question.answers_to_questions[0].description}</td>
            </tr>
          );
        })}
      </table>
    );
  }

  return <div>test</div>;
};
