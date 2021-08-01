import { Checkbox, Collapse, Radio } from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import React from 'react';
import { useState } from 'react';

const { Panel } = Collapse;

function RadioBox({ list, handleFilters }) {
  const [Value, setValue] = useState(0);

  const renderRadioBox = () =>
    list &&
    list.map((value) => (
      <Radio key={value._id} value={value._id}>
        {value.name}
      </Radio>
    ));

  const handleChange = (event) => {
    setValue(event.target.value);
    handleFilters(event.target.value);
  };

  return (
    <div>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Continents" key="1">
          <RadioGroup onChange={handleChange} value={Value}>
            {renderRadioBox()}
          </RadioGroup>
        </Panel>
      </Collapse>
    </div>
  );
}

export default RadioBox;
