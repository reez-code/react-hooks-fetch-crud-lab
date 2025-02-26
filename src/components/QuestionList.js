import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDelete, onEdit }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
