import { useState } from "react";
import Container from "../components/Container";
import { Input } from "../components/Input";

const Hypotenuse = () => {
  const [answer, setAnswer] = useState(
    "Enter the base and height and press calculate"
  );
  const [formData, setFormData] = useState({
    base: "",
    height: "",
  });

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkIfTriangle = () => {
    if (!formData.base || !formData.height) {
      setAnswer("Ah! both values please...");
      return;
    }
    const base = parseFloat(formData.base);
    const height = parseFloat(formData.height);
    const hypotenuse = Math.sqrt(base ** 2 + height ** 2);
    setAnswer(`Hypotenuse Length = ${hypotenuse.toFixed(2)}`);
  };

  return (
    <div className="triangle_app">
      <Container className="flex-col">
        <h1>What's the Hypotenuse?</h1>
        <Input
          label={"Enter base value (b)"}
          id="base"
          name="base"
          value={formData.base}
          onChange={(e) => handleChanges(e)}
        />
        <Input
          label={"Enter height value (h)"}
          id="height"
          name="height"
          value={formData.height}
          onChange={(e) => handleChanges(e)}
        />
        <button className="btn" onClick={checkIfTriangle}>
          Calculate hypotenuse
        </button>
        <div
          className="output"
          style={{ color: "#333", border: "1px solid #333" }}
        >
          Hypotenuse formula √(base² + height²)
        </div>
        <div className="output">{answer}</div>
      </Container>
    </div>
  );
};

export default Hypotenuse;
