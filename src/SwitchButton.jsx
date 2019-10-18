// @flow
import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

type SwitchButtonProps = {|
  checked: boolean,
  onChange: (checked: boolean, name?: string) => void,
  name: string,
  className: string,
|};
const SwitchButton = ({
  checked,
  onChange,
  name,
  className,
}: SwitchButtonProps) => {
  const onClick = (e: SyntheticInputEvent<HTMLInputElement>) => {
    onChange(e.target.checked, name);
  };
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classnames('SwitchButton', { checked }, className)}>
      <input
        className={classnames('input', { checked })}
        type="checkbox"
        checked={checked}
        onClick={onClick}
      />
      <div className={classnames('button', { checked })}>b</div>
      <div className={classnames('track', { checked })}>c</div>
    </label>
  );
};

const StyledSwitchButton = styled(SwitchButton)`
  width: ${({ width }) => `${width}px`};
  height: ${({ buttonRadius }) => `${2 * buttonRadius}px`};
  opacity: 0.5;
  display: flex;
  align-items: center;
  position: relative;

  margin-bottom: 30px;

  .track {
    margin: 0
      ${({ buttonRadius, buttonPinRadius }) => buttonRadius - buttonPinRadius}px;

    background: purple;
    opacity: 0.2;

    color: yellow;
    width: ${({ width, buttonRadius, buttonPinRadius }) =>
      `${width - 2 * (buttonRadius - buttonPinRadius)}px`};
    height: ${({ buttonPinRadius }) => `${2 * buttonPinRadius}px`};
    border-radius: ${({ buttonPinRadius }) => `${2 * buttonPinRadius}px`};

    z-index: -1;
    position: absolute;

    &.checked {
      background: green;
    }

    border: 1px solid black;
  }

  cursor: pointer;

  .button {
    width: ${({ buttonRadius, buttonBorderWidth }) =>
      2 * (buttonRadius - buttonBorderWidth)}px;
    height: ${({ buttonRadius, buttonBorderWidth }) =>
      2 * (buttonRadius - buttonBorderWidth)}px;
    // background: rgba(90, 90, 0, 0.4);
    background: radial-gradient(
      circle closest-side at center,
      rgba(0, 255, 0, 1) 0%,
      rgba(0, 255, 0, 1) 1%,
      rgba(90, 90, 0, 0.7) 1%,
      rgba(90, 90, 0, 0.7) ${({ buttonRatio }) => `${buttonRatio * 100}%`},
      rgba(0, 90, 90, 0.9) ${({ buttonRatio }) => `${buttonRatio * 100}%`},
      rgba(0, 90, 90, 0.9) 100%
    );

    border-radius: 50%;
    border: ${({ buttonBorderWidth }) => buttonBorderWidth}px solid black;

    transition-property: transform;
    transition-duration: 0.2s;

    // box-shadow: 0px 1px 1px 1px rgba(50, 50, 50, 0.5);
  }
  .button.checked {
    background: rgba(255, 0, 0, 0.4);
    background: radial-gradient(
      circle closest-side at center,
      rgba(0, 255, 0, 1) 0%,
      rgba(0, 255, 0, 1) 1%,
      rgba(120, 120, 0, 0.3) 1%,
      rgba(120, 120, 0, 0.3) ${({ buttonRatio }) => `${buttonRatio * 100}%`},
      rgba(255, 0, 0, 0.9) ${({ buttonRatio }) => `${buttonRatio * 100}%`},
      rgba(255, 0, 0, 0.9) 100%
    );

    transform: translate(
      ${({ width, buttonRadius }) => width - 2 * buttonRadius}px,
      0
    );
  }

  input {
    border-radius: 50%;
    background: green;
    visibility: none;
    z-index: 1;
    position: absolute;
    opacity: 0; // hide checkbox
  }
`;

// calculates relative dimensions of switch button parts
type DimensionProps = {|
  width: number,
  buttonRadiusProp: number,
  buttonPinRadiusProp: number,
  buttonBorderWidthProp: number,
|};
const computeDimensions = ({
  width,
  buttonRadiusProp,
  buttonPinRadiusProp,
  buttonBorderWidthProp,
}: DimensionProps) => {
  //
  const buttonRadius =
    buttonRadiusProp > 0.5 * width
      ? Math.floor(0.5 * width)
      : Math.max(buttonRadiusProp, 1); // max radius is half of component width, min is 1px
  const buttonPinRadius =
    buttonPinRadiusProp > buttonRadius
      ? buttonRadius
      : Math.max(buttonPinRadiusProp, 1); // max radius is buttonRadius, min is 1px
  const buttonBorderWidth =
    buttonBorderWidthProp >= buttonRadius
      ? buttonRadius - 1
      : buttonBorderWidthProp; // button cannot be all border, right?

  // TODO set custom CSS properties in JS here (?)
  // ...

  return { buttonRadius, buttonPinRadius, buttonBorderWidth };
};

type Props = {|
  ...SwitchButtonProps,
  width: number,
  buttonRadius: number,
  buttonPinRadius: number,
  buttonBorderWidth: number,
|};
const StyledSwitchButtonWithDefaults = ({
  width = 40,
  buttonRadius: buttonRadiusProp = 10,
  buttonPinRadius: buttonPinRadiusProp = buttonRadiusProp,
  buttonBorderWidth: buttonBorderWidthProp = 0,
  checked,
  className,
  name,
  onChange,
}: Props) => {
  // use memoization to avoid recalculating relative dimensions
  const dimensions = React.useMemo(
    () =>
      computeDimensions({
        width,
        buttonRadiusProp,
        buttonPinRadiusProp,
        buttonBorderWidthProp,
      }),
    [width, buttonRadiusProp, buttonPinRadiusProp, buttonBorderWidthProp]
  );

  const buttonRatio =
    (dimensions.buttonPinRadius * 1.0) / dimensions.buttonRadius; // TODO remove

  return (
    <StyledSwitchButton
      checked={checked}
      className={className}
      name={name}
      onChange={onChange}
      width={width}
      buttonRadius={dimensions.buttonRadius}
      buttonPinRadius={dimensions.buttonPinRadius}
      buttonBorderWidth={dimensions.buttonBorderWidth}
      buttonRatio={buttonRatio}
    />
  );
};

export default StyledSwitchButtonWithDefaults;
