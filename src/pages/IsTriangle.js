import { useState } from "react";
import Container from "../components/Container";
import { Input } from "../components/Input";

const IsTriangle = () => {
  const [answer, setAnswer] = useState(
    "Fill the angles and click the button to see the result here."
  );
  const [formData, setFormData] = useState({
    angle1: "",
    angle2: "",
    angle3: "",
  });

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkIfTriangle = () => {
    if (!formData.angle1 && !formData.angle2 && !formData.angle3) {
      setAnswer("You do realize a triangle has 3 sides, right?");
      return;
    }
    const angle1 = parseFloat(formData.angle1);
    const angle2 = parseFloat(formData.angle2);
    const angle3 = parseFloat(formData.angle3);

    if (angle1 + angle2 + angle3 === 180) {
      setAnswer("Yay! It's a triangle");
      return;
    }
    setAnswer("Oops! It's not a triangle");
  };

  return (
    <div className="triangle_app">
      <Container className="flex-col">
        <h1>Is Triangle</h1>
        <Input
          label={"Angle 1"}
          id="angle-1"
          name="angle1"
          value={formData.angle1}
          placeholder={`Enter Angle 1 in deg`}
          onChange={(e) => handleChanges(e)}
        />
        <Input
          label={"Angle 2"}
          id="angle-2"
          name="angle2"
          value={formData.angle2}
          placeholder={`Enter Angle 2 in deg`}
          onChange={(e) => handleChanges(e)}
        />
        <Input
          label={"Angle 3"}
          id="angle-3"
          name="angle3"
          value={formData.angle3}
          placeholder={`Enter Angle 3 in deg`}
          onChange={(e) => handleChanges(e)}
        />
        <button className="btn" onClick={checkIfTriangle}>
          Tell me now!
        </button>
        <div className="output">{answer}</div>
      </Container>
    </div>
  );
};

export default IsTriangle;
