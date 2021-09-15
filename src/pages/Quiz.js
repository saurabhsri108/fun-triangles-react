import { useState } from "react";
import Container from "../components/Container";
import { InputRadio } from "../components/Input";

const correctAnswers = {
  answer1: "c",
  answer2: "c",
  answer3: "a",
};

let finalScore = 0;

const Quiz = () => {
  const [answer, setAnswer] = useState(`Final Score = ${finalScore}`);
  const [formData, setFormData] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
  });

  const onChangeRadio = (e, answer) => {
    if (answer === "answer1")
      setFormData({ ...formData, answer1: e.target.value });
    if (answer === "answer2")
      setFormData({ ...formData, answer2: e.target.value });
    if (answer === "answer3")
      setFormData({ ...formData, answer3: e.target.value });
  };

  const calculateScore = () => {
    const { answer1, answer2, answer3 } = formData;

    if (correctAnswers.answer1 === answer1) {
      finalScore++;
    }
    if (correctAnswers.answer2 === answer2) {
      finalScore++;
    }
    if (correctAnswers.answer3 === answer3) {
      finalScore++;
    }
    if (finalScore === 3)
      setAnswer(
        `Final Score = ${finalScore}! Congratulations! You answered all questions right!`
      );
    else setAnswer(`Final Score = ${finalScore}`);
    finalScore = 0;
  };

  return (
    <div className="triangle_app">
      <Container className="flex-col">
        <h1>Quiz on triangles</h1>
        <p className="radio-paragraph">
          What is the third angle for the triangle where angle1 = 45° and angle2
          = 45°?
        </p>
        <div
          className="radio-group"
          onChange={(e) => onChangeRadio(e, "answer1")}
        >
          <InputRadio label="45°" name="answer1" value="a" />
          <InputRadio label="60°" name="answer1" value="b" />
          <InputRadio label="90°" name="answer1" value="c" />
        </div>
        <p className="radio-paragraph">
          What is the third angle for the triangle where angle1 = 45° and angle2
          = 45°?
        </p>
        <div
          className="radio-group"
          onChange={(e) => onChangeRadio(e, "answer2")}
        >
          <InputRadio label="obtuse" name="answer2" value="a" />
          <InputRadio label="acute" name="answer2" value="b" />
          <InputRadio label="right angled" name="answer2" value="c" />
        </div>
        <p className="radio-paragraph">A triangle can have</p>
        <div
          className="radio-group"
          onChange={(e) => onChangeRadio(e, "answer3")}
        >
          <InputRadio label="one right angle" name="answer3" value="a" />
          <InputRadio label="two right angle" name="answer3" value="b" />
        </div>

        <button className="btn" onClick={calculateScore}>
          Submit Answers
        </button>
        <div className="output">{answer}</div>
      </Container>
    </div>
  );
};

export default Quiz;
