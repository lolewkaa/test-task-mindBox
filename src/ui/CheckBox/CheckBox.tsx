import React from 'react';
import styles from "./style.module.css";

type PropsCheckBox = {
    checked: boolean;
    handleCheckboxChange: () => void;
  };

const Checkbox: React.FC<PropsCheckBox> = ({checked, handleCheckboxChange}) => {

  return (
    <div>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;