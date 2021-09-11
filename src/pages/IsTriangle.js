import { useState } from "react";
import Container from "../components/Container";
import styles from "./../components/IsTriangle/IsTriangle.module.css";

const Input = ({ label, id, angle, props }) => {
  return (
    <div className={styles.input_container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type="number"
        placeholder={`Enter Angle ${angle} in deg`}
      />
    </div>
  );
};

const IsTriangle = () => {
  const [answer, setAnswer] = useState(
    "Fill the angles and click the button to see the result here."
  );

  return (
    <div className={styles.triangle_app}>
      <Container className="flex-col">
        <h1>Is Triangle</h1>
        <Input label={"Angle 1"} id="angle-1" angle="1" />
        <Input label={"Angle 2"} id="angle-2" angle="2" />
        <Input label={"Angle 3"} id="angle-3" angle="3" />
        <button className={styles.btn}>Tell me now!</button>
        <div className={styles.output}>{answer}</div>
      </Container>
    </div>
  );
};

export default IsTriangle;
