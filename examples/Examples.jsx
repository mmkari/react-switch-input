// @flow
import * as React from 'react';
// import './Examples.css';
import Switch from '../src/SwitchButton';
import SwitchNew from '../src/SwitchButtonNew';

type Props = {};
type State = {
  toggle: ?boolean,
};
class Examples extends React.Component<Props, State> {
  state = {
    toggle: false,
    toggle2: false,
  };

  onChange = (val, value: boolean) => {
    this.setState({ [val]: value });
  };

  render() {
    const { toggle, toggle2 } = this.state;

    const width = 80;

    return (
      <div
        className="Examples"
        style={{
          border: '1px dashed brown',
          width,
          margin: 'auto',
        }}
      >
        <Switch
          width={width}
          onChange={(value) => this.onChange('toggle', value)}
          checked={toggle}
          buttonRadius={18}
          buttonPinRadius={8}
          buttonBorderWidth={1}
          trackBorderWidth={4}
        />

        <SwitchNew
          width={width}
          onChange={(value) => this.onChange('toggle2', value)}
          checked={toggle2}
          buttonRadius={20}
          buttonPinRadius={20}
          buttonBorderWidth={1}
          trackBorderWidth={1}
        />
        {/* <SwitchNew
          width={width}
          onChange={(value) => this.onChange('toggle2', value)}
          checked={toggle2}
          buttonRadius={18}
          buttonPinRadius={10}
          buttonBorderWidth={1}
          trackBorderWidth={1}
        />
        <SwitchNew
          width={width}
          onChange={(value) => this.onChange('toggle2', value)}
          checked={toggle2}
          buttonRadius={8}
          buttonPinRadius={20}
          buttonBorderWidth={1}
          trackBorderWidth={1}
        /> */}
      </div>
    );
  }
}

export default Examples;
