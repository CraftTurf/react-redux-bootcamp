'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _nodeNoop = require('node-noop');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button.scss');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var _classNames;

  var onClick = _ref.onClick,
      children = _ref.children,
      disabled = _ref.disabled,
      styleSheet = _ref.styleSheet,
      tabIndex = _ref.tabIndex,
      type = _ref.type;
  return _react2.default.createElement(
    'button',
    {
      onClick: onClick,
      disabled: disabled,
      tabIndex: tabIndex,
      styleName: 'button',
      className: (0, _classnames2.default)(styleSheet.button, (_classNames = {}, (0, _defineProperty3.default)(_classNames, _Button2.default.disabled, disabled), (0, _defineProperty3.default)(_classNames, styleSheet.disabled, disabled), _classNames)),
      type: type
    },
    children
  );
};


Button.defaultProps = {
  onClick: _nodeNoop.noop,
  children: 'Click me',
  disabled: false,
  tabIndex: 0,
  styleSheet: {
    button: 'button'
  },
  type: 'button'
};

exports.default = (0, _reactCssModules2.default)(Button, _Button2.default);