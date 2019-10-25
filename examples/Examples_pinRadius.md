The pin radius can be set with the `buttonPinRadius` prop. The value of buttonPinRadius will be forced into the range [1, buttonRadius].

```jsx
import React, { useState } from 'react';
import Switch from 'react-switch-input';

const width = 100;

const HighlightPinRadius = ({ children, buttonPinRadius }) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          height: 2 * buttonPinRadius,
          width: '100%',
          position: 'absolute',
          borderTop: '1px dashed grey',
          borderBottom: '1px dashed grey',
        }}
      />
      {children}
    </div>
  );
};

const ParentComponent = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (value) => {
    setChecked(value);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: width,
          borderLeft: '1px dashed grey',
          borderRight: '1px dashed grey',
        }}
      >
        <HighlightPinRadius buttonPinRadius={10}>
          <Switch
            onChange={onChange}
            checked={checked}
            width={width}
            buttonRadius={30}
            buttonPinRadius={10}
          />
        </HighlightPinRadius>

        <HighlightPinRadius buttonPinRadius={20}>
          <Switch
            onChange={onChange}
            checked={checked}
            width={width}
            buttonRadius={30}
            buttonPinRadius={20}
          />
        </HighlightPinRadius>

        <HighlightPinRadius buttonPinRadius={30}>
          <Switch
            onChange={onChange}
            checked={checked}
            width={width}
            buttonRadius={30}
            buttonPinRadius={40}
          />
        </HighlightPinRadius>
      </div>
      <div>
        <div style={{ height: 60 }}>Pin radius 10</div>

        <div style={{ height: 60 }}>Pin radius 20</div>

        <div style={{ height: 60 }}>Pin radius >= 30</div>
      </div>
    </div>
  );
};

<ParentComponent />;
```
