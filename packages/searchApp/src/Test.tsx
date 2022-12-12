// import { useGetAllQuestionsQuery } from '~/getAllQuestions.generated';
import { useGetQuestionsQuery } from '~/getQuestions.generated';

export const Test = () => {
  //   const { data, loading, error } = useGetAllQuestionsQuery();

  //   if (loading) {
  //     return <div>now loading...</div>;
  //   }

  //   if (error) {
  //     return <div>error occured.</div>;
  //   }

  //   if (data) {
  //     return (
  //       <table>
  //         <tr>
  //           <th>No.</th>
  //           <th>難易度</th>
  //           <th>ジャンル</th>
  //           <th>問題</th>
  //           <th>解答</th>
  //           <th>読み方</th>
  //           <th>別解・備考</th>
  //         </tr>
  //         {data.quiz_questions.map((question) => {
  //           return (
  //             <tr key={question.id}>
  //               <td>{question.serial_number}</td>
  //               <td>{question.difficulty}</td>
  //               <td>{question.categories_to_questions?.category}</td>
  //               <td>{question.question}</td>
  //               <td>{question.answers_to_questions[0].answer}</td>
  //               <td>{question.answers_to_questions[0].pronunciation}</td>
  //               <td>{question.answers_to_questions[0].description}</td>
  //             </tr>
  //           );
  //         })}
  //       </table>
  //     );
  //   }

  //   return <div>test</div>;
  // };

  const { data, loading, error } = useGetQuestionsQuery({
    variables: {
      difficulties: [1, 2, 3],
      categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      containWord: '%ー%',
      notContainWord: '',
      targetTag: 'テストタグ１',
      notTagetTag: '',
    },
  });

  if (loading) {
    return <div>now loading...</div>;
  }

  if (error) {
    return (
      <div>
        error occured:
        <br /> {error.message}
      </div>
    );
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
        {data.questions.map((question) => {
          return (
            <tr key={question?.questionId}>
              <td>{question?.serialNumber}</td>
              <td>{question?.difficulty ?? ''}</td>
              <td>{question?.category ?? ''}</td>
              <td>{question?.question}</td>
              <td>{question?.answers[0].answer}</td>
              <td>{question?.answers[0].pronunciation}</td>
              <td>{question?.answers[0].description}</td>
            </tr>
          );
        })}
      </table>
    );
  }

  return <div>no data</div>;
};
