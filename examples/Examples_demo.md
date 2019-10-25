The button radius can be set with the `buttonRadius` prop. The value of buttonPinRadius will be forced into the range [1, Math.floor(0.5 * width)].

```jsx
import React, { useState } from 'react';
import Switch from 'react-switch-input';

const ParentComponent = () => {
  const [checked, setChecked] = useState(false);

  const [width, setWidth] = useState(40);
  const [buttonRadius, setButtonRadius] = useState(10);
  const [buttonPinRadius, setButtonPinRadius] = useState(10);
  const [buttonBorderWidth, setButtonBorderWidth] = useState(0);

  const onChange = (value) => {
    setChecked(value);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ width: 150 }}>
        <Switch
          onChange={onChange}
          checked={checked}
          width={width}
          buttonRadius={buttonRadius}
          buttonPinRadius={buttonPinRadius}
          buttonBorderWidth={buttonBorderWidth}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: 200,
        }}
      >
        Width: {width}px
        <input
          type="range"
          value={width}
          onChange={(e) => setWidth(parseInt(e.target.value))}
          min="0"
          max="150"
        />
        Button radius:{' '}
        <span style={buttonRadius > 0.5 * width ? { color: 'green' } : {}}>
          {buttonRadius}px {buttonRadius > 0.5 * width && '(max at 1/2 width)'}
        </span>
        <input
          type="range"
          value={buttonRadius}
          onChange={(e) => setButtonRadius(parseInt(e.target.value))}
          min="0"
          max="150"
        />
        Button pin radius:
        <span style={buttonPinRadius > buttonRadius ? { color: 'green' } : {}}>
          {buttonPinRadius}px{' '}
          {buttonPinRadius > buttonRadius && '(max at button-radius)'}
        </span>
        <input
          type="range"
          value={buttonPinRadius}
          onChange={(e) => setButtonPinRadius(parseInt(e.target.value))}
          min="0"
          max="150"
        />
        Button border width:
        <span
          style={buttonBorderWidth >= buttonRadius ? { color: 'green' } : {}}
        >
          {buttonBorderWidth}px{' '}
          {buttonBorderWidth >= buttonRadius && '(max below button-radius)'}
        </span>
        <input type="range" value={buttonBorderWidth} onChange={(e) => setButtonBorderWidth(parseInt(e.target.value))} min="0" max="150" />
      </div>
    </div>
  );
};

<ParentComponent />;
```
