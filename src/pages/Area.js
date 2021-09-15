import { useState } from "react";
import Container from "../components/Container";
import { Input } from "../components/Input";

const Area = () => {
  const [answer, setAnswer] = useState("Fill all 3 sides and press calculate");
  const [formData, setFormData] = useState({
    side1: "",
    side2: "",
    side3: "",
  });

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkIfTriangle = () => {
    if (!formData.side1 || !formData.side2 || !formData.side3) {
      setAnswer("I need all 3 values please...");
      return;
    }

    const side1 = parseFloat(formData.side1);
    const side2 = parseFloat(formData.side2);
    const side3 = parseFloat(formData.side3);

    if (side1 < 0 || side2 < 0 || side3 < 0) {
      setAnswer("Length cannot be negative");
      return;
    }

    if (
      side1 + side2 < side3 ||
      side2 + side3 < side1 ||
      side3 + side1 < side2
    ) {
      setAnswer(
        "Enter valid lengths of triangle. Sum of 2 sides should be greater than 3rd side for each sides."
      );
      return;
    }

    const semiPerimeter = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - side1) *
        (semiPerimeter - side2) *
        (semiPerimeter - side3)
    );
    setAnswer(`Area of triangle = ${area.toFixed(2)}`);
  };

  return (
    <div className="triangle_app">
      <Container className="flex-col">
        <h1>What's the Area?</h1>
        <Input
          label={"Enter 1st side of a triangle"}
          id="side1"
          name="side1"
          value={formData.side1}
          onChange={(e) => handleChanges(e)}
        />
        <Input
          label={"Enter 2nd side of a triangle"}
          id="side2"
          name="side2"
          value={formData.side2}
          onChange={(e) => handleChanges(e)}
        />
        <Input
          label={"Enter 3rd side of a triangle"}
          id="side3"
          name="side3"
          value={formData.side3}
          onChange={(e) => handleChanges(e)}
        />
        <button className="btn" onClick={checkIfTriangle}>
          Calculate hypotenuse
        </button>
      </Container>
      <Container
        style={{
          "justify-content": "space-evenly",
          "align-items": "start",
          "margin-top": "1.5rem",
        }}
      >
        <div
          className="output"
          style={{ color: "#333", border: "1px solid #333" }}
        >
          <p>Area formula = √s(s-side1)(s-side2)(s-side3)</p>
          <p>s = (side1 + side2 + side3) / 2</p>
        </div>
        <div className="output">{answer}</div>
      </Container>
    </div>
  );
};

export default Area;
