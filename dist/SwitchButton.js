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
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  opacity: 0.5;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  margin-bottom: 30px;\n\n  .track {\n    margin: 0\n      ", "px;\n\n    background: purple;\n    opacity: 0.2;\n\n    color: yellow;\n    width: ", ";\n    height: ", ";\n    border-radius: ", ";\n\n    z-index: -1;\n    position: absolute;\n\n    &.checked {\n      background: green;\n    }\n\n    border: 1px solid black;\n  }\n\n  cursor: pointer;\n\n  .button {\n    width: ", "px;\n    height: ", "px;\n    // background: rgba(90, 90, 0, 0.4);\n    background: radial-gradient(\n      circle closest-side at center,\n      rgba(0, 255, 0, 1) 0%,\n      rgba(0, 255, 0, 1) 1%,\n      rgba(90, 90, 0, 0.7) 1%,\n      rgba(90, 90, 0, 0.7) ", ",\n      rgba(0, 90, 90, 0.9) ", ",\n      rgba(0, 90, 90, 0.9) 100%\n    );\n\n    border-radius: 50%;\n    border: ", "px solid black;\n\n    transition-property: transform;\n    transition-duration: 0.2s;\n\n    // box-shadow: 0px 1px 1px 1px rgba(50, 50, 50, 0.5);\n  }\n  .button.checked {\n    background: rgba(255, 0, 0, 0.4);\n    background: radial-gradient(\n      circle closest-side at center,\n      rgba(0, 255, 0, 1) 0%,\n      rgba(0, 255, 0, 1) 1%,\n      rgba(120, 120, 0, 0.3) 1%,\n      rgba(120, 120, 0, 0.3) ", ",\n      rgba(255, 0, 0, 0.9) ", ",\n      rgba(255, 0, 0, 0.9) 100%\n    );\n\n    transform: translate(\n      ", "px,\n      0\n    );\n  }\n\n  input {\n    border-radius: 50%;\n    background: green;\n    visibility: none;\n    z-index: 1;\n    position: absolute;\n    opacity: 0; // hide checkbox\n  }\n"]);

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
    }, "b"), React.createElement("div", {
      className: (0, _classnames["default"])('track', {
        checked: checked
      })
    }, "c"))
  );
};

var StyledSwitchButton = (0, _styledComponents["default"])(SwitchButton)(_templateObject(), function (_ref2) {
  var width = _ref2.width;
  return "".concat(width, "px");
}, function (_ref3) {
  var buttonRadius = _ref3.buttonRadius;
  return "".concat(2 * buttonRadius, "px");
}, function (_ref4) {
  var buttonRadius = _ref4.buttonRadius,
      buttonPinRadius = _ref4.buttonPinRadius;
  return buttonRadius - buttonPinRadius;
}, function (_ref5) {
  var width = _ref5.width,
      buttonRadius = _ref5.buttonRadius,
      buttonPinRadius = _ref5.buttonPinRadius;
  return "".concat(width - 2 * (buttonRadius - buttonPinRadius), "px");
}, function (_ref6) {
  var buttonPinRadius = _ref6.buttonPinRadius;
  return "".concat(2 * buttonPinRadius, "px");
}, function (_ref7) {
  var buttonPinRadius = _ref7.buttonPinRadius;
  return "".concat(2 * buttonPinRadius, "px");
}, function (_ref8) {
  var buttonRadius = _ref8.buttonRadius,
      buttonBorderWidth = _ref8.buttonBorderWidth;
  return 2 * (buttonRadius - buttonBorderWidth);
}, function (_ref9) {
  var buttonRadius = _ref9.buttonRadius,
      buttonBorderWidth = _ref9.buttonBorderWidth;
  return 2 * (buttonRadius - buttonBorderWidth);
}, function (_ref10) {
  var buttonRatio = _ref10.buttonRatio;
  return "".concat(buttonRatio * 100, "%");
}, function (_ref11) {
  var buttonRatio = _ref11.buttonRatio;
  return "".concat(buttonRatio * 100, "%");
}, function (_ref12) {
  var buttonBorderWidth = _ref12.buttonBorderWidth;
  return buttonBorderWidth;
}, function (_ref13) {
  var buttonRatio = _ref13.buttonRatio;
  return "".concat(buttonRatio * 100, "%");
}, function (_ref14) {
  var buttonRatio = _ref14.buttonRatio;
  return "".concat(buttonRatio * 100, "%");
}, function (_ref15) {
  var width = _ref15.width,
      buttonRadius = _ref15.buttonRadius;
  return width - 2 * buttonRadius;
}); // calculates relative dimensions of switch button parts

var computeDimensions = function computeDimensions(_ref16) {
  var width = _ref16.width,
      buttonRadiusProp = _ref16.buttonRadiusProp,
      buttonPinRadiusProp = _ref16.buttonPinRadiusProp,
      buttonBorderWidthProp = _ref16.buttonBorderWidthProp;
  //
  var buttonRadius = buttonRadiusProp > 0.5 * width ? Math.floor(0.5 * width) : Math.max(buttonRadiusProp, 1); // max radius is half of component width, min is 1px

  var buttonPinRadius = buttonPinRadiusProp > buttonRadius ? buttonRadius : Math.max(buttonPinRadiusProp, 1); // max radius is buttonRadius, min is 1px

  var buttonBorderWidth = buttonBorderWidthProp >= buttonRadius ? buttonRadius - 1 : buttonBorderWidthProp; // button cannot be all border, right?
  // TODO set custom CSS properties in JS here (?)
  // ...

  return {
    buttonRadius: buttonRadius,
    buttonPinRadius: buttonPinRadius,
    buttonBorderWidth: buttonBorderWidth
  };
};

var StyledSwitchButtonWithDefaults = function StyledSwitchButtonWithDefaults(_ref17) {
  var _ref17$width = _ref17.width,
      width = _ref17$width === void 0 ? 40 : _ref17$width,
      _ref17$buttonRadius = _ref17.buttonRadius,
      buttonRadiusProp = _ref17$buttonRadius === void 0 ? 10 : _ref17$buttonRadius,
      _ref17$buttonPinRadiu = _ref17.buttonPinRadius,
      buttonPinRadiusProp = _ref17$buttonPinRadiu === void 0 ? buttonRadiusProp : _ref17$buttonPinRadiu,
      _ref17$buttonBorderWi = _ref17.buttonBorderWidth,
      buttonBorderWidthProp = _ref17$buttonBorderWi === void 0 ? 0 : _ref17$buttonBorderWi,
      checked = _ref17.checked,
      className = _ref17.className,
      name = _ref17.name,
      onChange = _ref17.onChange;
  // use memoization to avoid recalculating relative dimensions
  var dimensions = React.useMemo(function () {
    return computeDimensions({
      width: width,
      buttonRadiusProp: buttonRadiusProp,
      buttonPinRadiusProp: buttonPinRadiusProp,
      buttonBorderWidthProp: buttonBorderWidthProp
    });
  }, [width, buttonRadiusProp, buttonPinRadiusProp, buttonBorderWidthProp]);
  var buttonRatio = dimensions.buttonPinRadius * 1.0 / dimensions.buttonRadius; // TODO remove

  return React.createElement(StyledSwitchButton, {
    checked: checked,
    className: className,
    name: name,
    onChange: onChange,
    width: width,
    buttonRadius: dimensions.buttonRadius,
    buttonPinRadius: dimensions.buttonPinRadius,
    buttonBorderWidth: dimensions.buttonBorderWidth,
    buttonRatio: buttonRatio
  });
};

var _default = StyledSwitchButtonWithDefaults;
exports["default"] = _default;