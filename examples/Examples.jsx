// @flow
import * as React from 'react';
// import './Examples.css';
import Switch from '../src/SwitchButton';

type Props = {};
type State = {
  toggle: ?boolean,
};
class Examples extends React.Component<Props, State> {
  state = {
    toggle: false,
  };

  onChange = (value: boolean) => {
    this.setState({ toggle: value });
  };

  render() {
    const { toggle } = this.state;

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
          onChange={this.onChange}
          checked={toggle}
          buttonRadius={18}
          buttonPinRadius={5}
          buttonBorderWidth={2}
          trackBorderWidth={2}
        />
      </div>
    );
  }
}

export default Examples;
