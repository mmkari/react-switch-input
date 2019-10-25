The button border width can be set with the `buttonBorderWidth` prop. The border is counted towards the total button radius so increasing the border width will affect the button's layout.

```jsx
import React, { useState } from 'react';
import Switch from 'react-switch-input';

const ParentComponent = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (value) => {
    setChecked(value);
  };

  return (
    <div>
      <Switch
        onChange={onChange}
        checked={checked}
        width={100}
        buttonRadius={30}
        buttonPinRadius={20}
        buttonBorderWidth={10}
      />

      <Switch
        onChange={onChange}
        checked={checked}
        width={100}
        buttonRadius={30}
        buttonPinRadius={20}
        buttonBorderWidth={20}
      />

      <Switch
        onChange={onChange}
        checked={checked}
        width={100}
        buttonRadius={30}
        buttonPinRadius={20}
        buttonBorderWidth={30}
      />
    </div>
  );
};

<ParentComponent />;
```

Button border with transparent coloring -> smaller button

```jsx
import React, { useState } from 'react';
import Switch from 'react-switch-input';

const ParentComponent = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (value) => {
    setChecked(value);
  };

  return (
    <div>
      <Switch
        onChange={onChange}
        checked={checked}
        width={100}
        buttonRadius={30}
        buttonPinRadius={30}
        buttonBorderWidth={10}
        className="smallButton"
      />
    </div>
  );
};

<ParentComponent />;
```
