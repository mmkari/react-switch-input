The button radius can be set with the `buttonRadius` prop. The value of buttonPinRadius will be forced into the range [1, Math.floor(0.5 * width)].

```jsx
import React, { useState } from 'react';
import Switch from 'react-switch-input';

const ParentComponent = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (value) => {
    setChecked(value);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px dashed grey',
        borderBottom: '1px dashed grey',
      }}
    >
      <Switch
        onChange={onChange}
        checked={checked}
        width={100}
        buttonRadius={10}
        buttonPinRadius={10}
      />

      <Switch
        onChange={onChange}
        checked={checked}
        width={100}
        buttonRadius={20}
        buttonPinRadius={10}
      />

      <Switch
        onChange={onChange}
        checked={checked}
        width={100}
        buttonRadius={30}
        buttonPinRadius={10}
      />
    </div>
  );
};

<ParentComponent />;
```
