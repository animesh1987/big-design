webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../big-design/dist/es/components/Dropdown/Dropdown.js":
/*!*************************************************************!*\
  !*** ../big-design/dist/es/components/Dropdown/Dropdown.js ***!
  \*************************************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! downshift */ "../../node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-popper */ "../../node_modules/react-popper/lib/esm/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "../big-design/dist/es/hooks/index.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Flex */ "../big-design/dist/es/components/Flex/index.js");
/* harmony import */ var _Flex_Item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Flex/Item */ "../big-design/dist/es/components/Flex/Item/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../List */ "../big-design/dist/es/components/List/index.js");
/* harmony import */ var _List_GroupHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../List/GroupHeader */ "../big-design/dist/es/components/List/GroupHeader/index.js");
/* harmony import */ var _List_Item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../List/Item */ "../big-design/dist/es/components/List/Item/index.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Tooltip */ "../big-design/dist/es/components/Tooltip/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styled */ "../big-design/dist/es/components/Dropdown/styled.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var Dropdown = Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(function (_ref) {
  var className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? 250 : _ref$maxHeight,
      id = _ref.id,
      items = _ref.items,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement,
      toggle = _ref.toggle,
      style = _ref.style,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["className", "disabled", "maxHeight", "id", "items", "placement", "toggle", "style"]);

  // We only need the items to pass down to Downshift, not groups
  var onlyItems = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return flattenItems(items);
  }, [items]); // We need to keep track of key since we need to use it between groups.

  var itemKey = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var dropdownUniqueId = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useUniqueId"])('dropdown');

  var handleOnSelectedItemChange = function handleOnSelectedItemChange(_ref2) {
    var selectedItem = _ref2.selectedItem;

    if (!selectedItem) {
      return;
    }

    if (selectedItem.type !== 'link' && typeof selectedItem.onItemClick === 'function') {
      selectedItem.onItemClick(selectedItem);
    }
  };

  var _useSelect = Object(downshift__WEBPACK_IMPORTED_MODULE_3__["useSelect"])({
    circularNavigation: true,
    defaultHighlightedIndex: 0,
    id: dropdownUniqueId,
    itemToString: function itemToString(item) {
      return item ? item.content : '';
    },
    items: onlyItems,
    menuId: id,
    onSelectedItemChange: handleOnSelectedItemChange,
    selectedItem: null,
    toggleButtonId: toggle.props.id
  }),
      getItemProps = _useSelect.getItemProps,
      getMenuProps = _useSelect.getMenuProps,
      getToggleButtonProps = _useSelect.getToggleButtonProps,
      highlightedIndex = _useSelect.highlightedIndex,
      isOpen = _useSelect.isOpen;

  var renderToggle = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_5__["Reference"], null, function (_ref3) {
      var ref = _ref3.ref;
      return Object(react__WEBPACK_IMPORTED_MODULE_4__["isValidElement"])(toggle) && Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(toggle, _objectSpread({}, getToggleButtonProps({
        disabled: disabled,
        ref: ref
      })));
    });
  }, [disabled, getToggleButtonProps, toggle]);
  var renderItem = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (item) {
    var actionType = item.actionType,
        content = item.content,
        itemDisabled = item.disabled,
        hash = item.hash,
        onItemClick = item.onItemClick,
        type = item.type,
        itemProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(item, ["actionType", "content", "disabled", "hash", "onItemClick", "type"]);

    var key = itemKey.current;
    var isHighlighted = highlightedIndex === key;
    itemKey.current += 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_List_Item__WEBPACK_IMPORTED_MODULE_11__["ListItem"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, itemProps, getItemProps({
      disabled: itemDisabled,
      index: key,
      item: item
    }), {
      actionType: actionType,
      isAction: true,
      isHighlighted: isHighlighted,
      key: "".concat(content, "-").concat(key)
    }), getContent(item, isHighlighted));
  }, [getItemProps, highlightedIndex]);
  var renderLinkItem = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (item) {
    var actionType = item.actionType,
        content = item.content,
        itemDisabled = item.disabled,
        url = item.url,
        target = item.target,
        type = item.type,
        itemProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(item, ["actionType", "content", "disabled", "url", "target", "type"]);

    var key = itemKey.current;
    var isHighlighted = highlightedIndex === key;
    itemKey.current += 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_List_Item__WEBPACK_IMPORTED_MODULE_11__["ListItem"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, itemProps, getItemProps({
      disabled: itemDisabled,
      index: key,
      item: item
    }), {
      actionType: actionType,
      isAction: true,
      isHighlighted: isHighlighted,
      key: "".concat(content, "-").concat(key)
    }), getContent(item, isHighlighted));
  }, [getItemProps, highlightedIndex]);
  var renderItems = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (dropdownItems) {
    return Array.isArray(dropdownItems) && dropdownItems.map(function (item) {
      return item.type === 'link' ? renderLinkItem(item) : renderItem(item);
    });
  }, [renderItem, renderLinkItem]);
  var renderGroup = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (group) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_List_GroupHeader__WEBPACK_IMPORTED_MODULE_10__["ListGroupHeader"], null, group.label), renderItems(group.items));
  }, [renderItems]);
  var renderChildren = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    // Reset the key every time we rerender children
    itemKey.current = 0;

    if (Array.isArray(items) && items.every(isGroup)) {
      return isOpen && items.map(function (group, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
          key: index
        }, renderGroup(group));
      });
    }

    if (Array.isArray(items) && items.every(isItem)) {
      return isOpen && renderItems(items);
    }
  }, [isOpen, items, renderGroup, renderItems]);
  var renderList = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_5__["Popper"], {
      modifiers: [{
        name: 'eventListeners',
        options: {
          scroll: isOpen,
          resize: isOpen
        }
      }, {
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      }],
      placement: placement
    }, function (_ref4) {
      var popperPlacement = _ref4.placement,
          ref = _ref4.ref,
          popperStyle = _ref4.style,
          update = _ref4.update;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_9__["List"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, getMenuProps({
        onKeyDown: function onKeyDown(event) {
          if (event.key === 'Enter') {
            var element = event.currentTarget.children[highlightedIndex];
            var link = element.querySelector('a'); // We want to click the link if it is selected

            if (link) {
              link.click();
            }
          }
        },
        ref: ref
      }), {
        "data-placement": popperPlacement,
        isOpen: isOpen,
        maxHeight: maxHeight,
        style: popperStyle,
        update: update
      }), renderChildren);
    });
  }, [getMenuProps, highlightedIndex, isOpen, maxHeight, placement, renderChildren, rest]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_5__["Manager"], null, renderToggle, renderList);
});

var flattenItems = function flattenItems(items) {
  return items.every(isGroup) ? items.map(function (group) {
    return group.items;
  }).reduce(function (acum, curr) {
    return acum.concat(curr);
  }, []) : items;
};

var isGroup = function isGroup(item) {
  return 'items' in item && !('content' in item);
};

var isItem = function isItem(item) {
  return 'content' in item && !('items' in item);
};

var renderIcon = function renderIcon(item, isHighlighted) {
  return Object(react__WEBPACK_IMPORTED_MODULE_4__["isValidElement"])(item.icon) && Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(item.icon, {
    color: iconColor(item, isHighlighted),
    size: 'large'
  });
};

var getContent = function getContent(item, isHighlighted) {
  var itemDisabled = item.disabled,
      icon = item.icon,
      tooltip = item.tooltip;
  var baseContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    alignItems: "center",
    flexDirection: "row"
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Flex_Item__WEBPACK_IMPORTED_MODULE_8__["FlexItem"], {
    paddingRight: "xSmall"
  }, renderIcon(item, isHighlighted)), item.content);
  var content = item.type === 'link' && !itemDisabled ? wrapInLink(item, baseContent) : baseContent;
  return itemDisabled && tooltip ? wrapInTooltip(tooltip, content) : content;
};

var iconColor = function iconColor(item, isHighlighted) {
  if (item.disabled) {
    return 'secondary40';
  }

  if (!isHighlighted) {
    return 'secondary60';
  }

  return item.actionType === 'destructive' ? 'danger50' : 'primary';
};

var wrapInLink = function wrapInLink(item, content) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_13__["StyledLink"], {
    href: item.url,
    tabIndex: -1,
    target: item.target
  }, content);
};

var wrapInTooltip = function wrapInTooltip(tooltip, tooltipTrigger) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], {
    placement: "left",
    trigger: tooltipTrigger,
    modifiers: [{
      name: 'preventOverflow'
    }, {
      name: 'offset',
      options: {
        offset: [0, 20]
      }
    }],
    inline: false
  }, tooltip);
};

/***/ })

})
//# sourceMappingURL=_app.js.7a69e1d9f9120d756197.hot-update.js.map