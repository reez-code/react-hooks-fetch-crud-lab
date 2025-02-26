import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  function handleUpdate(newQuestion) {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  }

  function handleDelete(deletedItem) {
    const updatedQuestions = questions.filter(
      (question) => question.id !== deletedItem.id
    );
    setQuestions(updatedQuestions);
  }

  function handleEdit(updatedQuestion) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onUpdate={handleUpdate} />
      ) : (
        <QuestionList
          questions={questions}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </main>
  );
}

export default App;
