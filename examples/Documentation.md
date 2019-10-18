`react-switch-input`...

This is the component with its default prop values:

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
      <Switch onChange={onChange} checked={checked} />
    </div>
  );
};

<ParentComponent />;
```
