import { Checkbox, Collapse } from 'antd';
import React from 'react';
import { useState } from 'react';

const { Panel } = Collapse;

const CheckBox = ({ list, handleFilters }) => {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);

    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    handleFilters(newChecked);
  };

  const renderCheckboxLists = () =>
    list &&
    list.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value._id)}
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span>{value.name}</span>
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Continents" key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
};

export default CheckBox;
