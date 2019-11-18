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
      <div className={classnames('button', { checked })} />
      <div className={classnames('track', { checked })} />
    </label>
  );
};

const StyledSwitchButton = styled(SwitchButton)`
  width: ${({ width }) => `${width}px`};
  height: ${({ buttonRadius, buttonPinRadius, trackBorderWidth }) =>
    `${Math.max(
      2 * buttonRadius,
      2 * (trackBorderWidth + buttonPinRadius),
      0
    )}px`};
  opacity: 0.4;
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;

  .track {
    margin: 0
      ${({ buttonRadius, buttonPinRadius, trackBorderWidth }) =>
        Math.max(buttonRadius - buttonPinRadius - trackBorderWidth, 0)}px;

    background: lightgray;
    // opacity: 0.2;

    color: yellow;
    width: ${({ width, buttonRadius, buttonPinRadius, trackBorderWidth }) =>
      `${width -
        2 *
          (trackBorderWidth +
            Math.max(
              buttonRadius - buttonPinRadius - trackBorderWidth,
              0
            ))}px`}; // OR SIMPLY 100% as track has margin already
    height: ${({ buttonRadius, buttonPinRadius, trackBorderWidth }) =>
      `${2 * buttonPinRadius}px`};
    border-radius: ${({ buttonPinRadius, trackBorderWidth }) =>
      `${2 * buttonPinRadius + trackBorderWidth}px`};

    z-index: -1;
    position: absolute;

    &.checked {
      background: lightgreen;
    }

    border: ${({ trackBorderWidth }) => `${trackBorderWidth}`}px solid black;
  }

  .button {
    width: ${({ buttonRadius, buttonBorderWidth }) =>
      2 * (buttonRadius - buttonBorderWidth)}px;
    height: ${({ buttonRadius, buttonBorderWidth }) =>
      2 * (buttonRadius - buttonBorderWidth)}px;
    background: red;

    border-radius: 50%;
    border: ${({ buttonBorderWidth }) => buttonBorderWidth}px solid black;

    // box-shadow: 0px 1px 1px 1px rgba(50, 50, 50, 0.5);

    transform: translate(
      ${({ buttonRadius, buttonPinRadius, trackBorderWidth }) =>
        Math.max(trackBorderWidth - (buttonRadius - buttonPinRadius), 0)}px,
      0
    );

    // // default box-shadow
    // box-shadow: 0 0 0px 0px transparent, 0 0 0px 0px orange;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  // :hover .button {
  //   box-shadow: 0 0 0px 8px lightgray, 0 0 0px 0px orange;
  // }
  // :hover .button.checked {
  //   box-shadow: 0 0 0px 0px lightgray, 0 0 0px 8px orange;
  // }
  // :hover:active .button {
  //   box-shadow: 0 0 0px 0px lightgray, 0 0 0px 0px orange;
  // }

  .button.checked {
    background: green;

    transform: translate(
      ${({ width, buttonRadius, buttonPinRadius, trackBorderWidth }) =>
        width -
        2 * buttonRadius -
        Math.max(trackBorderWidth - (buttonRadius - buttonPinRadius), 0)}px,
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
  trackBorderWidthProp: number,
|};
const computeDimensions = ({
  width,
  buttonRadiusProp,
  buttonPinRadiusProp,
  buttonBorderWidthProp,
  trackBorderWidthProp,
}: DimensionProps) => {
  //
  const limitToHalfLength = (val) =>
    val > 0.5 * width ? Math.floor(0.5 * width) : Math.max(val, 1);
  const buttonRadius = limitToHalfLength(buttonRadiusProp); // max radius is half of component width, min is 1px
  const buttonPinRadius = limitToHalfLength(buttonPinRadiusProp);
  const buttonBorderWidth =
    buttonBorderWidthProp >= buttonRadius
      ? buttonRadius - 1
      : buttonBorderWidthProp; // button cannot be all border, right?
  const trackBorderWidth =
    trackBorderWidthProp >= buttonPinRadius
      ? buttonPinRadius - 1
      : trackBorderWidthProp; // button cannot be all border, right?

  // TODO set custom CSS properties in JS here (?)
  // ...

  return { buttonRadius, buttonPinRadius, buttonBorderWidth, trackBorderWidth };
};

type Props = {|
  ...SwitchButtonProps,
  width: number,
  buttonRadius: number,
  buttonPinRadius: number,
  buttonBorderWidth: number,
  trackBorderWidth: number,
|};
const StyledSwitchButtonWithDefaults = ({
  width = 40,
  buttonRadius: buttonRadiusProp = 10,
  buttonPinRadius: buttonPinRadiusProp = buttonRadiusProp,
  buttonBorderWidth: buttonBorderWidthProp = 0,
  trackBorderWidth: trackBorderWidthProp = 0,
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
        trackBorderWidthProp,
      }),
    [
      width,
      buttonRadiusProp,
      buttonPinRadiusProp,
      buttonBorderWidthProp,
      trackBorderWidthProp,
    ]
  );

  const buttonRatio = Math.min(
    (dimensions.buttonPinRadius * 1.0) /
      (dimensions.buttonRadius - dimensions.buttonBorderWidth),
    1.0
  ); // TODO remove

  // console.log('dimensions: ', dimensions);

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
      trackBorderWidth={dimensions.trackBorderWidth}
      buttonRatio={buttonRatio}
    />
  );
};

export default StyledSwitchButtonWithDefaults;
