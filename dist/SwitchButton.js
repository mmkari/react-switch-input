"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  opacity: 0.4;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  cursor: pointer;\n\n  .track {\n    margin: 0\n      ", "px;\n\n    background: purple;\n    opacity: 0.2;\n\n    color: yellow;\n    width: ", "; // OR SIMPLY 100% as track has margin already\n    height: ", ";\n    border-radius: ", ";\n\n    z-index: -1;\n    position: absolute;\n\n    &.checked {\n      background: green;\n    }\n\n    border: ", "px solid black;\n  }\n\n  .button {\n    width: ", "px;\n    height: ", "px;\n    // background: red;\n    background: radial-gradient(\n      circle closest-side at center,\n      rgba(255, 255, 255, 1) 0%,\n      rgba(255, 255, 255, 1) 3%,\n      rgba(90, 90, 0, 0.7) 3%,\n      rgba(90, 90, 0, 0.7) ", ",\n      rgba(0, 90, 90, 0.5) ", ",\n      rgba(0, 90, 90, 0.5) 100%\n    );\n\n    border-radius: 50%;\n    border: ", "px solid black;\n\n    // box-shadow: 0px 1px 1px 1px rgba(50, 50, 50, 0.5);\n\n    transform: translate(\n      ", "px,\n      0\n    );\n\n    // default box-shadow\n    box-shadow: 0 0 0px 0px transparent, 0 0 0px 0px orange;\n    transition: box-shadow 0.2s, transform 0.2s;\n  }\n  :hover .button {\n    box-shadow: 0 0 0px 8px lightgray, 0 0 0px 0px orange;\n  }\n  :hover .button.checked {\n    box-shadow: 0 0 0px 0px lightgray, 0 0 0px 8px orange;\n  }\n  :hover:active .button {\n    box-shadow: 0 0 0px 0px lightgray, 0 0 0px 0px orange;\n  }\n\n  .button.checked {\n    // background: green;\n    background: radial-gradient(\n      circle closest-side at center,\n      rgba(0, 0, 0, 1) 0%,\n      rgba(0, 0, 0, 1) 3%,\n      rgba(120, 120, 0, 0.3) 3%,\n      rgba(120, 120, 0, 0.3) ", ",\n      rgba(255, 0, 0, 0.5) ", ",\n      rgba(255, 0, 0, 0.5) 100%\n    );\n\n    transform: translate(\n      ", "px,\n      0\n    );\n  }\n\n  input {\n    border-radius: 50%;\n    background: green;\n    visibility: none;\n    z-index: 1;\n    position: absolute;\n    opacity: 0; // hide checkbox\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwitchButton = function SwitchButton(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      name = _ref.name,
      className = _ref.className;

  var onClick = function onClick(e) {
    onChange(e.target.checked, name);
  };

  return (// eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", {
      className: (0, _classnames["default"])('SwitchButton', {
        checked: checked
      }, className)
    }, React.createElement("input", {
      className: (0, _classnames["default"])('input', {
        checked: checked
      }),
      type: "checkbox",
      checked: checked,
      onClick: onClick
    }), React.createElement("div", {
      className: (0, _classnames["default"])('button', {
        checked: checked
      })
    }), React.createElement("div", {
      className: (0, _classnames["default"])('track', {
        checked: checked
      })
    }))
  );
};

var StyledSwitchButton = (0, _styledComponents["default"])(SwitchButton)(_templateObject(), function (_ref2) {
  var width = _ref2.width;
  return "".concat(width, "px");
}, function (_ref3) {
  var buttonRadius = _ref3.buttonRadius,
      buttonPinRadius = _ref3.buttonPinRadius,
      trackBorderWidth = _ref3.trackBorderWidth;
  return "".concat(Math.max(2 * buttonRadius, 2 * (trackBorderWidth + buttonPinRadius), 0), "px");
}, function (_ref4) {
  var buttonRadius = _ref4.buttonRadius,
      buttonPinRadius = _ref4.buttonPinRadius,
      trackBorderWidth = _ref4.trackBorderWidth;
  return Math.max(buttonRadius - buttonPinRadius - trackBorderWidth, 0);
}, function (_ref5) {
  var width = _ref5.width,
      buttonRadius = _ref5.buttonRadius,
      buttonPinRadius = _ref5.buttonPinRadius,
      trackBorderWidth = _ref5.trackBorderWidth;
  return "".concat(width - 2 * (trackBorderWidth + Math.max(buttonRadius - buttonPinRadius - trackBorderWidth, 0)), "px");
}, function (_ref6) {
  var buttonRadius = _ref6.buttonRadius,
      buttonPinRadius = _ref6.buttonPinRadius,
      trackBorderWidth = _ref6.trackBorderWidth;
  return "".concat(2 * buttonPinRadius, "px");
}, function (_ref7) {
  var buttonPinRadius = _ref7.buttonPinRadius,
      trackBorderWidth = _ref7.trackBorderWidth;
  return "".concat(2 * buttonPinRadius + trackBorderWidth, "px");
}, function (_ref8) {
  var trackBorderWidth = _ref8.trackBorderWidth;
  return "".concat(trackBorderWidth);
}, function (_ref9) {
  var buttonRadius = _ref9.buttonRadius,
      buttonBorderWidth = _ref9.buttonBorderWidth;
  return 2 * (buttonRadius - buttonBorderWidth);
}, function (_ref10) {
  var buttonRadius = _ref10.buttonRadius,
      buttonBorderWidth = _ref10.buttonBorderWidth;
  return 2 * (buttonRadius - buttonBorderWidth);
}, function (_ref11) {
  var buttonRatio = _ref11.buttonRatio;
  return "".concat(buttonRatio * 100, "%");
}, function (_ref12) {
  var buttonRatio = _ref12.buttonRatio;
  return "".concat(buttonRatio * 100, "%");
}, function (_ref13) {
  var buttonBorderWidth = _ref13.buttonBorderWidth;
  return buttonBorderWidth;
}, function (_ref14) {
  var buttonRadius = _ref14.buttonRadius,
      buttonPinRadius = _ref14.buttonPinRadius,
      trackBorderWidth = _ref14.trackBorderWidth;
  return Math.max(trackBorderWidth - (buttonRadius - buttonPinRadius), 0);
}, function (_ref15) {
  var buttonRatio = _ref15.buttonRatio;
  return "".concat(buttonRatio * 100, "%");
}, function (_ref16) {
  var buttonRatio = _ref16.buttonRatio;
  return "".concat(buttonRatio * 100, "%");
}, function (_ref17) {
  var width = _ref17.width,
      buttonRadius = _ref17.buttonRadius,
      buttonPinRadius = _ref17.buttonPinRadius,
      trackBorderWidth = _ref17.trackBorderWidth;
  return width - 2 * buttonRadius - Math.max(trackBorderWidth - (buttonRadius - buttonPinRadius), 0);
}); // calculates relative dimensions of switch button parts

var computeDimensions = function computeDimensions(_ref18) {
  var width = _ref18.width,
      buttonRadiusProp = _ref18.buttonRadiusProp,
      buttonPinRadiusProp = _ref18.buttonPinRadiusProp,
      buttonBorderWidthProp = _ref18.buttonBorderWidthProp,
      trackBorderWidthProp = _ref18.trackBorderWidthProp;
  //
  var buttonRadius = buttonRadiusProp > 0.5 * width ? Math.floor(0.5 * width) : Math.max(buttonRadiusProp, 1); // max radius is half of component width, min is 1px

  var buttonPinRadius = buttonPinRadiusProp > buttonRadius ? buttonRadius : Math.max(buttonPinRadiusProp, 1); // max radius is buttonRadius, min is 1px

  var buttonBorderWidth = buttonBorderWidthProp >= buttonRadius ? buttonRadius - 1 : buttonBorderWidthProp; // button cannot be all border, right?

  var trackBorderWidth = trackBorderWidthProp; // TODO set custom CSS properties in JS here (?)
  // ...

  return {
    buttonRadius: buttonRadius,
    buttonPinRadius: buttonPinRadius,
    buttonBorderWidth: buttonBorderWidth,
    trackBorderWidth: trackBorderWidth
  };
};

var StyledSwitchButtonWithDefaults = function StyledSwitchButtonWithDefaults(_ref19) {
  var _ref19$width = _ref19.width,
      width = _ref19$width === void 0 ? 40 : _ref19$width,
      _ref19$buttonRadius = _ref19.buttonRadius,
      buttonRadiusProp = _ref19$buttonRadius === void 0 ? 10 : _ref19$buttonRadius,
      _ref19$buttonPinRadiu = _ref19.buttonPinRadius,
      buttonPinRadiusProp = _ref19$buttonPinRadiu === void 0 ? buttonRadiusProp : _ref19$buttonPinRadiu,
      _ref19$buttonBorderWi = _ref19.buttonBorderWidth,
      buttonBorderWidthProp = _ref19$buttonBorderWi === void 0 ? 0 : _ref19$buttonBorderWi,
      _ref19$trackBorderWid = _ref19.trackBorderWidth,
      trackBorderWidthProp = _ref19$trackBorderWid === void 0 ? 0 : _ref19$trackBorderWid,
      checked = _ref19.checked,
      className = _ref19.className,
      name = _ref19.name,
      onChange = _ref19.onChange;
  // use memoization to avoid recalculating relative dimensions
  var dimensions = React.useMemo(function () {
    return computeDimensions({
      width: width,
      buttonRadiusProp: buttonRadiusProp,
      buttonPinRadiusProp: buttonPinRadiusProp,
      buttonBorderWidthProp: buttonBorderWidthProp,
      trackBorderWidthProp: trackBorderWidthProp
    });
  }, [width, buttonRadiusProp, buttonPinRadiusProp, buttonBorderWidthProp, trackBorderWidthProp]);
  var buttonRatio = Math.min(dimensions.buttonPinRadius * 1.0 / (dimensions.buttonRadius - dimensions.buttonBorderWidth), 1.0); // TODO remove

  console.log('dimensions: ', dimensions);
  return React.createElement(StyledSwitchButton, {
    checked: checked,
    className: className,
    name: name,
    onChange: onChange,
    width: width,
    buttonRadius: dimensions.buttonRadius,
    buttonPinRadius: dimensions.buttonPinRadius,
    buttonBorderWidth: dimensions.buttonBorderWidth,
    trackBorderWidth: dimensions.trackBorderWidth,
    buttonRatio: buttonRatio
  });
};

var _default = StyledSwitchButtonWithDefaults;
exports["default"] = _default;