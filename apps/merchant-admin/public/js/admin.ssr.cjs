var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = /* @__PURE__ */ Symbol.for("react.element");
    var n = /* @__PURE__ */ Symbol.for("react.portal");
    var p = /* @__PURE__ */ Symbol.for("react.fragment");
    var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var r = /* @__PURE__ */ Symbol.for("react.profiler");
    var t = /* @__PURE__ */ Symbol.for("react.provider");
    var u = /* @__PURE__ */ Symbol.for("react.context");
    var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var w = /* @__PURE__ */ Symbol.for("react.suspense");
    var x = /* @__PURE__ */ Symbol.for("react.memo");
    var y = /* @__PURE__ */ Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.act = X;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = X;
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.3.1";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// apps/merchant-admin/src/views/App.jsx
var App_exports = {};
__export(App_exports, {
  default: () => App
});
module.exports = __toCommonJS(App_exports);
var import_react28 = __toESM(require_react(), 1);

// apps/merchant-admin/src/views/partials/Header.jsx
var import_react = __toESM(require_react(), 1);
function Header() {
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("header", { className: "bg-white dark:bg-[#070a12] border-b border-slate-200 dark:border-slate-800 px-6 py-3.5 flex items-center justify-between sticky top-0 z-[1000] backdrop-blur-md" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-3.5" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 tracking-tight" }, /* @__PURE__ */ import_react.default.createElement("span", null, "\u{1F6E1}\uFE0F YOUPI PG")), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-[0.72rem] font-bold py-1 px-2.5 rounded-full uppercase tracking-wider bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" }, "Merchant & Supervisor Hub")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center gap-3 flex-wrap" }, /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: "theme-mode-pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer select-none transition-all hover:border-slate-400 hover:-translate-y-0.5 shadow-sm",
      id: "headerThemeBadge",
      onClick: (e) => {
        try {
          new Function("e", "toggleThemeManual()")(e);
        } catch (err) {
          console.error(err);
        }
      },
      title: "Auto-switches to Dark Mode in Developer Hub and Bright White Mode in Operations & Store Settings. Click to toggle manually anytime."
    },
    /* @__PURE__ */ import_react.default.createElement("span", { id: "headerThemeIcon" }, "\u2600\uFE0F"),
    /* @__PURE__ */ import_react.default.createElement("span", { id: "headerThemeText" }, "Bright White")
  ), /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: "store-switch-badge is-offline inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 cursor-pointer select-none transition-all hover:brightness-105 [&.is-online]:bg-emerald-500/10 [&.is-online]:text-emerald-500 [&.is-online]:border-emerald-500/30 [&.is-offline]:bg-rose-500/10 [&.is-offline]:text-rose-500 [&.is-offline]:border-rose-500/30",
      id: "headerStoreBadge",
      onClick: (e) => {
        try {
          new Function("e", "toggleYoupiStore()")(e);
        } catch (err) {
          console.error(err);
        }
      },
      title: "Click to 1-Click Enable/Disable YOUPI Showcase Store on Port 5000"
    },
    /* @__PURE__ */ import_react.default.createElement("span", { id: "headerStoreDot" }, "\u25CF"),
    /* @__PURE__ */ import_react.default.createElement("span", { id: "headerStoreText" }, "Store (5000): Checking...")
  ), /* @__PURE__ */ import_react.default.createElement(
    "span",
    {
      className: "inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 cursor-pointer transition-all hover:border-blue-400",
      id: "accountVpaDisplay",
      onClick: (e) => {
        try {
          new Function("e", "switchSection('storeSettings', 'subTabVpa')")(e);
        } catch (err) {
          console.error(err);
        }
      }
    },
    "VPA: Loading..."
  ), /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: "flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 cursor-pointer",
      onClick: (e) => {
        try {
          new Function("e", "switchSection('developerHub', 'subViewDevCloudflare')")(e);
        } catch (err) {
          console.error(err);
        }
      }
    },
    /* @__PURE__ */ import_react.default.createElement("span", { className: "text-[0.72rem] text-slate-500 dark:text-slate-400 font-bold" }, "ENV:"),
    /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        className: "inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-[0.72rem] font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20",
        id: "headerEnvBadge"
      },
      "\u{1F4BB} LOCALHOST"
    )
  ), /* @__PURE__ */ import_react.default.createElement("div", { className: "live-pulse-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "pulse-dot w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" }), /* @__PURE__ */ import_react.default.createElement("span", null, "Live Syncing")))), /* @__PURE__ */ import_react.default.createElement("nav", { className: "main-nav-bar flex gap-2 px-6 sticky top-[57px] z-[999] overflow-x-auto bg-white dark:bg-[#0b1120] border-b border-slate-200 dark:border-slate-800" }, /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: "main-nav-btn active flex items-center gap-2.5 py-4 px-5 cursor-pointer font-extrabold border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 whitespace-nowrap text-sm transition-all duration-200 [&.active]:border-blue-600 [&.active]:text-blue-600 dark:[&.active]:border-sky-400 dark:[&.active]:text-sky-400 [&.active]:bg-blue-50/50 dark:[&.active]:bg-sky-500/10",
      id: "mainNavOperations",
      onClick: (e) => {
        try {
          new Function("e", "switchSection('operations')")(e);
        } catch (err) {
          console.error(err);
        }
      }
    },
    /* @__PURE__ */ import_react.default.createElement("span", null, "\u{1F3EA}"),
    /* @__PURE__ */ import_react.default.createElement("span", null, "Daily Merchant Operations")
  ), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: "main-nav-btn flex items-center gap-2.5 py-4 px-5 cursor-pointer font-extrabold border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 whitespace-nowrap text-sm transition-all duration-200 [&.active]:border-blue-600 [&.active]:text-blue-600 dark:[&.active]:border-sky-400 dark:[&.active]:text-sky-400 [&.active]:bg-blue-50/50 dark:[&.active]:bg-sky-500/10",
      id: "mainNavStoreSettings",
      onClick: (e) => {
        try {
          new Function("e", "switchSection('storeSettings')")(e);
        } catch (err) {
          console.error(err);
        }
      }
    },
    /* @__PURE__ */ import_react.default.createElement("span", null, "\u2699\uFE0F"),
    /* @__PURE__ */ import_react.default.createElement("span", null, "Store Settings")
  ), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: "main-nav-btn flex items-center gap-2.5 py-4 px-5 cursor-pointer font-extrabold border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 whitespace-nowrap text-sm transition-all duration-200 [&.active]:border-blue-600 [&.active]:text-blue-600 dark:[&.active]:border-sky-400 dark:[&.active]:text-sky-400 [&.active]:bg-blue-50/50 dark:[&.active]:bg-sky-500/10",
      id: "mainNavDeveloperHub",
      onClick: (e) => {
        try {
          new Function("e", "switchSection('developerHub')")(e);
        } catch (err) {
          console.error(err);
        }
      }
    },
    /* @__PURE__ */ import_react.default.createElement("span", null, "\u{1F6E0}\uFE0F"),
    /* @__PURE__ */ import_react.default.createElement("span", null, "Developer & Infrastructure Hub")
  ), /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: "main-nav-btn flex items-center gap-2.5 py-4 px-5 cursor-pointer font-extrabold border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 whitespace-nowrap text-sm transition-all duration-200 [&.active]:border-blue-600 [&.active]:text-blue-600 dark:[&.active]:border-sky-400 dark:[&.active]:text-sky-400 [&.active]:bg-blue-50/50 dark:[&.active]:bg-sky-500/10",
      id: "mainNavSecurity",
      onClick: (e) => {
        try {
          new Function("e", "switchSection('security')")(e);
        } catch (err) {
          console.error(err);
        }
      }
    },
    /* @__PURE__ */ import_react.default.createElement("span", null, "\u{1F6E1}\uFE0F"),
    /* @__PURE__ */ import_react.default.createElement("span", null, "Security")
  )), /* @__PURE__ */ import_react.default.createElement("nav", { className: "sub-nav-bar flex gap-2 py-2.5 px-6 overflow-x-auto bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800", id: "subNavBar" }));
}

// apps/merchant-admin/src/views/partials/SectionOperations.jsx
var import_react7 = __toESM(require_react(), 1);

// apps/merchant-admin/src/views/partials/operations/KpiSummary.jsx
var import_react2 = __toESM(require_react(), 1);
function KpiSummary() {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-row grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mb-6" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400" }, "Today's Volume"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white", id: "kpiVol", style: { "color": "var(--kpi-vol-color)" } }, "\u20B90.00")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400" }, "Successful Payments"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white", id: "kpiSuccessCount", style: { "color": "var(--kpi-success-color)" } }, "0")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400" }, "In Waiting Queue"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white", id: "kpiQueueCount", style: { "color": "var(--kpi-queue-color)" } }, "0")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400" }, "Pending Counter Payments"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white", id: "kpiPendingCounterCount", style: { "color": "var(--kpi-pending-color)" } }, "0"))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-row grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mb-6", style: { "marginTop": "-0.5rem", "marginBottom": "1.5rem" } }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400" }, "Single Verified (1 Source)"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white", id: "kpiSingleVerify", style: { "color": "var(--info)", "fontSize": "1.5rem" } }, "0")), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400" }, "Dual Verified (2 Sources: SMS + Gmail)"), /* @__PURE__ */ import_react2.default.createElement("div", { className: "kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white", id: "kpiDualVerify", style: { "color": "var(--success)", "fontSize": "1.5rem" } }, "0"))));
}

// apps/merchant-admin/src/views/partials/operations/SubViewLiveQueue.jsx
var import_react3 = __toESM(require_react(), 1);
function SubViewLiveQueue() {
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("div", { id: "subViewOpsLive" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F534} Real-Time Receiving Account Slot Ownership (UPI Invariant)"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Guarantees zero payment collision by rotating dynamic slots per receiving UPI VPA.")), /* @__PURE__ */ import_react3.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem" } }, /* @__PURE__ */ import_react3.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "fetchLiveData()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "Force Refresh"), /* @__PURE__ */ import_react3.default.createElement("button", { className: "btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "promptClearAllQueue()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "Clear Waiting Queue"))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "queue-grid grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5 mb-6" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "slot-card rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-5 text-center bg-slate-50 dark:bg-slate-950 transition-all", id: "slotActiveBox" }, /* @__PURE__ */ import_react3.default.createElement("div", { style: { "fontSize": "0.8rem", "fontWeight": "700", "color": "var(--text-muted)", "textTransform": "uppercase" } }, "Active Slot (5-Minute Window)"), /* @__PURE__ */ import_react3.default.createElement("div", { id: "slotActiveContent", style: { "padding": "1rem 0", "color": "var(--text-muted)" } }, "No customer actively checking out right now.")), /* @__PURE__ */ import_react3.default.createElement("div", { className: "slot-card rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-5 text-center bg-slate-50 dark:bg-slate-950 transition-all", id: "slotProcBox" }, /* @__PURE__ */ import_react3.default.createElement("div", { style: { "fontSize": "0.8rem", "fontWeight": "700", "color": "var(--text-muted)", "textTransform": "uppercase" } }, "Processing Slot (30s Verification Window)"), /* @__PURE__ */ import_react3.default.createElement("div", { id: "slotProcContent", style: { "padding": "1rem 0", "color": "var(--text-muted)" } }, "No payment in verification window."))), /* @__PURE__ */ import_react3.default.createElement("div", { style: { "marginTop": "1.5rem" } }, /* @__PURE__ */ import_react3.default.createElement("div", { style: { "fontSize": "0.92rem", "fontWeight": "700", "marginBottom": "0.75rem", "color": "var(--text-heading)" } }, "\u23F3 Waiting Customer Queue"), /* @__PURE__ */ import_react3.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react3.default.createElement("table", { className: "w-full border-collapse text-sm" }, /* @__PURE__ */ import_react3.default.createElement("thead", null, /* @__PURE__ */ import_react3.default.createElement("tr", null, /* @__PURE__ */ import_react3.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Queue #"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Order"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Amount"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Status"), /* @__PURE__ */ import_react3.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Enqueued At"))), /* @__PURE__ */ import_react3.default.createElement("tbody", { id: "queueTableBody" }, /* @__PURE__ */ import_react3.default.createElement("tr", null, /* @__PURE__ */ import_react3.default.createElement("td", { colSpan: "5", style: { "textAlign": "center", "color": "var(--text-muted)", "padding": "1rem" } }, "Waiting queue is empty.")))))))));
}

// apps/merchant-admin/src/views/partials/operations/SubViewCounterDesk.jsx
var import_react4 = __toESM(require_react(), 1);
function SubViewCounterDesk() {
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("div", { id: "subViewOpsCounter", hidden: true }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm", id: "counterDeskOfflineCard" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F3EA} Cash & Card Billing Counter Desk (Live Counter Payment Requests)"), /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Real-time incoming payment requests from checkout screens. Verify banknotes or POS slips and approve immediately.")), /* @__PURE__ */ import_react4.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.6rem" } }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20", id: "operatorDisplay" }, "Cashier Desk #1"), /* @__PURE__ */ import_react4.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "fetchCounterPayments()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "Refresh"))), /* @__PURE__ */ import_react4.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react4.default.createElement("table", { className: "w-full border-collapse text-sm" }, /* @__PURE__ */ import_react4.default.createElement("thead", null, /* @__PURE__ */ import_react4.default.createElement("tr", null, /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Order ID"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Payment ID"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Amount"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Counter Method"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Requested At"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Cashier Actions"))), /* @__PURE__ */ import_react4.default.createElement("tbody", { id: "counterTableBody" }, /* @__PURE__ */ import_react4.default.createElement("tr", null, /* @__PURE__ */ import_react4.default.createElement("td", { colSpan: "6", style: { "textAlign": "center", "color": "var(--text-muted)", "padding": "1.5rem" } }, "No pending counter payments right now.")))))), /* @__PURE__ */ import_react4.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm", id: "counterDeskCodCard", style: { "display": "none" } }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F4E6} Cash on Delivery (COD) Verified Orders"), /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Orders placed with Cash on Delivery payment confirmation. Ready for fulfillment and dispatch.")), /* @__PURE__ */ import_react4.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "fetchCodOrders()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "Refresh Orders")), /* @__PURE__ */ import_react4.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react4.default.createElement("table", { className: "w-full border-collapse text-sm" }, /* @__PURE__ */ import_react4.default.createElement("thead", null, /* @__PURE__ */ import_react4.default.createElement("tr", null, /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Order ID"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Payment Ref"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Amount"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Customer Name"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Phone"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Placed At"), /* @__PURE__ */ import_react4.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Actions"))), /* @__PURE__ */ import_react4.default.createElement("tbody", { id: "codOrdersTableBody" }, /* @__PURE__ */ import_react4.default.createElement("tr", null, /* @__PURE__ */ import_react4.default.createElement("td", { colSpan: "7", style: { "textAlign": "center", "color": "var(--text-muted)", "padding": "1.5rem" } }, "No COD orders placed yet."))))))));
}

// apps/merchant-admin/src/views/partials/operations/SubViewTransactionsLedger.jsx
var import_react5 = __toESM(require_react(), 1);
function SubViewTransactionsLedger() {
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("div", { id: "subViewOpsTransactions", hidden: true }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F4B3} Payment Transactions Ledger"), /* @__PURE__ */ import_react5.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Comprehensive transaction audit history with automated bank observer attribution & verification tiers.")), /* @__PURE__ */ import_react5.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "fetchPaymentsLedger()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "Refresh")), /* @__PURE__ */ import_react5.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react5.default.createElement("table", { className: "w-full border-collapse text-sm" }, /* @__PURE__ */ import_react5.default.createElement("thead", null, /* @__PURE__ */ import_react5.default.createElement("tr", null, /* @__PURE__ */ import_react5.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Order ID"), /* @__PURE__ */ import_react5.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Payment ID"), /* @__PURE__ */ import_react5.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Amount"), /* @__PURE__ */ import_react5.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Method"), /* @__PURE__ */ import_react5.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Status"), /* @__PURE__ */ import_react5.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Verification Tier"), /* @__PURE__ */ import_react5.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Channel Sources"), /* @__PURE__ */ import_react5.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Created At"), /* @__PURE__ */ import_react5.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Completed At"))), /* @__PURE__ */ import_react5.default.createElement("tbody", { id: "paymentsLedgerTbody" }, /* @__PURE__ */ import_react5.default.createElement("tr", null, /* @__PURE__ */ import_react5.default.createElement("td", { colSpan: "9", style: { "textAlign": "center", "padding": "1.5rem" } }, "Loading transactions..."))))))));
}

// apps/merchant-admin/src/views/partials/operations/SubViewPaymentObservers.jsx
var import_react6 = __toESM(require_react(), 1);
function SubViewPaymentObservers() {
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("div", { id: "subViewOpsObservers", hidden: true }, /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      style: { "fontSize": "1.15rem", "fontWeight": "800", "color": "var(--text-heading)", "marginBottom": "1rem", "display": "flex", "alignItems": "center", "gap": "0.5rem" },
      dangerouslySetInnerHTML: { __html: "<span>\u{1F4E1}</span> Payment Observers (SMS & Gmail)" }
    }
  ), /* @__PURE__ */ import_react6.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "1.5rem" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm", style: { "marginBottom": "0" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F4F1} Android SMS Gateway"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20", id: "smsGatewayBadge" }, "STANDBY")), /* @__PURE__ */ import_react6.default.createElement("p", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed", style: { "marginBottom": "1rem" } }, "Native Android observer app captures credit SMS notifications in real-time from bank-linked handsets."), /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      style: { "background": "var(--bg-surface)", "border": "1px solid var(--border)", "borderRadius": "0.5rem", "padding": "1rem", "marginBottom": "1rem" }
    },
    /* @__PURE__ */ import_react6.default.createElement("div", { style: { "fontSize": "0.8rem", "fontWeight": "700", "color": "var(--text-muted)", "marginBottom": "0.4rem" } }, "Enrollment Secret:"),
    /* @__PURE__ */ import_react6.default.createElement("code", { id: "smsTokenVal", style: { "color": "var(--info)", "fontWeight": "700", "fontSize": "0.85rem" } }, "Loading..."),
    /* @__PURE__ */ import_react6.default.createElement(
      "button",
      {
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "fontSize": "0.7rem", "padding": "0.2rem 0.5rem", "marginLeft": "0.5rem" },
        onClick: (e) => {
          try {
            new Function("e", "copySmsToken()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F4CB} Copy"
    )
  ), /* @__PURE__ */ import_react6.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem" } }, /* @__PURE__ */ import_react6.default.createElement("a", { className: "btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", href: "/youpi-sms-gateway.apk", download: "youpi-sms-gateway.apk" }, "\u{1F4F2} Download Companion APK"), /* @__PURE__ */ import_react6.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "switchSection('developerHub', 'subTabAndroid')")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "Configure Pairing \u2197"))), /* @__PURE__ */ import_react6.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm", style: { "marginBottom": "0" } }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F4E7} Gmail Direct API"), /* @__PURE__ */ import_react6.default.createElement("span", { className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20", id: "gmailConfigBadge" }, "NOT CONFIGURED")), /* @__PURE__ */ import_react6.default.createElement("p", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed", style: { "marginBottom": "1rem" } }, "Direct Google Cloud OAuth poller reading transaction credit alerts directly from your merchant inbox."), /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      style: { "background": "var(--bg-surface)", "border": "1px solid var(--border)", "borderRadius": "0.5rem", "padding": "1rem", "marginBottom": "1rem" }
    },
    /* @__PURE__ */ import_react6.default.createElement("div", { style: { "fontSize": "0.8rem", "color": "var(--text-muted)", "lineHeight": "1.5" } }, "Dual-verification engine matches transactions across both SMS and Gmail channels for 100% fraud immunity.")
  ), /* @__PURE__ */ import_react6.default.createElement("button", { className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "switchSection('developerHub', 'subTabGmail')")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "Configure Gmail API \u2197")))));
}

// apps/merchant-admin/src/views/partials/SectionOperations.jsx
function SectionOperations() {
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement("div", { id: "sectionOperations" }, /* @__PURE__ */ import_react7.default.createElement(KpiSummary, null), /* @__PURE__ */ import_react7.default.createElement(SubViewLiveQueue, null), /* @__PURE__ */ import_react7.default.createElement(SubViewCounterDesk, null), /* @__PURE__ */ import_react7.default.createElement(SubViewTransactionsLedger, null), /* @__PURE__ */ import_react7.default.createElement(SubViewPaymentObservers, null)));
}

// apps/merchant-admin/src/views/partials/SectionStoreSettings.jsx
var import_react11 = __toESM(require_react(), 1);

// apps/merchant-admin/src/views/partials/store-settings/SubViewBrandCustomizer.jsx
var import_react8 = __toESM(require_react(), 1);
function SubViewBrandCustomizer() {
  return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("div", { id: "subViewStoreBrand" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F3A8} White-Label Branding & Visual Gateway Customizer"), /* @__PURE__ */ import_react8.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Customize every visual, textual, and brand asset of your customer checkout experience. Live reflection on smartphone mockup.")), /* @__PURE__ */ import_react8.default.createElement("span", { className: "badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" }, "100% White-Label Capable")), /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      style: { "display": "grid", "gridTemplateColumns": "minmax(0, 1.4fr) minmax(340px, 1fr)", "gap": "2rem", "alignItems": "start" }
    },
    /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("div", { className: "settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4" }, "\u{1F3F7}\uFE0F 1. Core Brand Identity & Title"), /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "1rem", "marginBottom": "1rem" } }, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Merchant Store / Business Name"), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "settingBusinessName",
        type: "text",
        placeholder: "e.g. YOUPI Store or MSPCARE",
        style: { "width": "100%" },
        onInput: (e) => {
          try {
            new Function("e", "updateLiveWhiteLabelPreview()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      }
    )), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Gateway Title / App Name"), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "settingAppName",
        type: "text",
        defaultValue: "YOUPI PG",
        placeholder: "e.g. YOUPI Pay",
        style: { "width": "100%" },
        onInput: (e) => {
          try {
            new Function("e", "updateLiveWhiteLabelPreview()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      }
    ))), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Brand Logo Image URL"), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "settingLogoUrl",
        type: "url",
        placeholder: "https://yourbrand.com/logo.png",
        style: { "width": "100%" },
        onInput: (e) => {
          try {
            new Function("e", "updateLiveWhiteLabelPreview()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      }
    ), /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: { "fontSize": "0.72rem", "color": "var(--text-muted)", "display": "block", "marginTop": "0.25rem" }
      },
      "Transparent PNG or SVG recommended. When left blank, your store initial letter is used."
    ))), /* @__PURE__ */ import_react8.default.createElement("div", { className: "settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4" }, "\u{1F3A8} 2. Visual Theme & Color Palette"), /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1.2fr 1fr", "gap": "1rem", "marginBottom": "1rem" } }, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Primary Brand Color (Hex)"), /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "alignItems": "center" } }, /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "settingColorPicker",
        type: "color",
        defaultValue: "#0b63e5",
        style: { "width": "44px", "height": "40px", "border": "none", "background": "transparent", "cursor": "pointer", "padding": "0" },
        onInput: (e) => {
          try {
            new Function("e", "syncColorPickerToText(e.currentTarget.value)")(e);
          } catch (err) {
            console.error(err);
          }
        }
      }
    ), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "settingPrimaryColor",
        type: "text",
        defaultValue: "#0b63e5",
        style: { "flex": "1", "fontFamily": "monospace", "fontWeight": "700" },
        onInput: (e) => {
          try {
            new Function("e", "syncTextColorToPicker(e.currentTarget.value)")(e);
          } catch (err) {
            console.error(err);
          }
        }
      }
    ))), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Header Styling Theme"), /* @__PURE__ */ import_react8.default.createElement("select", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", id: "settingHeaderTheme", style: { "width": "100%" }, onChange: (e) => {
      try {
        new Function("e", "updateLiveWhiteLabelPreview()")(e);
      } catch (err) {
        console.error(err);
      }
    } }, /* @__PURE__ */ import_react8.default.createElement("option", { value: "gradient" }, "Dynamic Gradient (Brand to Deep Accent)"), /* @__PURE__ */ import_react8.default.createElement("option", { value: "solid" }, "Solid Brand Color"), /* @__PURE__ */ import_react8.default.createElement("option", { value: "dark" }, "Obsidian Dark Navy (#0b1329)")))), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: { "fontSize": "0.75rem", "color": "var(--text-muted)", "fontWeight": "700", "display": "block", "marginBottom": "0.4rem" }
      },
      "Quick FinTech Brand Palettes:"
    ), /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "flexWrap": "wrap" } }, /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "padding": "0.3rem 0.65rem", "fontSize": "0.75rem" },
        onClick: (e) => {
          try {
            new Function("e", "applyQuickPalette('#0b63e5', 'gradient')")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F535} Sapphire Blue"
    ), /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "padding": "0.3rem 0.65rem", "fontSize": "0.75rem" },
        onClick: (e) => {
          try {
            new Function("e", "applyQuickPalette('#10b981', 'gradient')")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F7E2} Emerald Green"
    ), /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "padding": "0.3rem 0.65rem", "fontSize": "0.75rem" },
        onClick: (e) => {
          try {
            new Function("e", "applyQuickPalette('#8b5cf6', 'gradient')")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F7E3} Violet Purple"
    ), /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "padding": "0.3rem 0.65rem", "fontSize": "0.75rem" },
        onClick: (e) => {
          try {
            new Function("e", "applyQuickPalette('#f43f5e', 'gradient')")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F534} Rose Crimson"
    ), /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "padding": "0.3rem 0.65rem", "fontSize": "0.75rem" },
        onClick: (e) => {
          try {
            new Function("e", "applyQuickPalette('#d97706', 'gradient')")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F7E1} Amber Gold"
    ), /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "padding": "0.3rem 0.65rem", "fontSize": "0.75rem" },
        onClick: (e) => {
          try {
            new Function("e", "applyQuickPalette('#0f172a', 'dark')")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u26AB Obsidian Dark"
    )))), /* @__PURE__ */ import_react8.default.createElement("div", { className: "settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4" }, "\u{1F6E1}\uFE0F 3. Badges & Conversion Banners"), /* @__PURE__ */ import_react8.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", type: "hidden", id: "settingHideTrustBadge" }), /* @__PURE__ */ import_react8.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", type: "hidden", id: "settingTrustBadgeText" }), /* @__PURE__ */ import_react8.default.createElement("div", { style: { "marginBottom": "1rem", "paddingBottom": "1rem", "borderBottom": "1px dashed var(--border)" } }, /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.35rem" } }, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "fontSize": "0.82rem", "fontWeight": "700" } }, "Header Sub-banner Text"), /* @__PURE__ */ import_react8.default.createElement(
      "label",
      {
        style: { "fontSize": "0.78rem", "color": "var(--text-muted)", "display": "flex", "alignItems": "center", "gap": "0.35rem", "cursor": "pointer" }
      },
      /* @__PURE__ */ import_react8.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", type: "checkbox", id: "settingHideSubbanner", onChange: (e) => {
        try {
          new Function("e", "updateLiveWhiteLabelPreview()")(e);
        } catch (err) {
          console.error(err);
        }
      } }),
      /* @__PURE__ */ import_react8.default.createElement("span", null, "Hide Sub-banner")
    )), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "settingSubbannerText",
        type: "text",
        placeholder: "e.g. \u26A1 5-Second Instant UPI Activation",
        style: { "width": "100%" },
        onInput: (e) => {
          try {
            new Function("e", "updateLiveWhiteLabelPreview()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      }
    )), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(
      "label",
      {
        style: { "fontSize": "0.78rem", "color": "var(--text-muted)", "display": "flex", "alignItems": "center", "gap": "0.35rem", "cursor": "pointer" }
      },
      /* @__PURE__ */ import_react8.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", type: "checkbox", id: "settingHideTimeSavingBanner", onChange: (e) => {
        try {
          new Function("e", "updateLiveWhiteLabelPreview()")(e);
        } catch (err) {
          console.error(err);
        }
      } }),
      /* @__PURE__ */ import_react8.default.createElement("span", null, "Hide Psychological Time-Saving Banner")
    ))), /* @__PURE__ */ import_react8.default.createElement("div", { className: "settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4" }, "\u{1F6E1}\uFE0F 4. Guarantees & Conversion Notices"), /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "1rem" } }, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Sidebar Trust Notice"), /* @__PURE__ */ import_react8.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", id: "settingSidebarNotice", type: "text", placeholder: "e.g. Fast & Secure 256-Bit Encrypted Payments", style: { "width": "100%" }, onInput: (e) => {
      try {
        new Function("e", "updateLiveWhiteLabelPreview()")(e);
      } catch (err) {
        console.error(err);
      }
    } })), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Footer Guarantee Text"), /* @__PURE__ */ import_react8.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", id: "settingFooterGuarantee", type: "text", placeholder: "e.g. 100% Payment Protection Guaranteed", style: { "width": "100%" }, onInput: (e) => {
      try {
        new Function("e", "updateLiveWhiteLabelPreview()")(e);
      } catch (err) {
        console.error(err);
      }
    } })))), /* @__PURE__ */ import_react8.default.createElement("div", { className: "settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4" }, "\u{1F4DE} 5. Support & Legal Policies"), /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "1rem", "marginBottom": "1rem" } }, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Customer Support Email(s)"), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "settingSupportEmails",
        type: "text",
        placeholder: "support@brand.com, help@brand.com",
        style: { "width": "100%" }
      }
    )), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Customer Support Mobile(s)"), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "settingSupportMobiles",
        type: "text",
        placeholder: "+91 9876543210, +91 9123456789",
        style: { "width": "100%" }
      }
    ))), /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "1rem" } }, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Privacy Policy URL"), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "settingPrivacyPolicyUrl",
        type: "url",
        placeholder: "https://yourbrand.com/privacy-policy",
        style: { "width": "100%" }
      }
    )), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Terms of Service URL"), /* @__PURE__ */ import_react8.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "settingTermsUrl",
        type: "url",
        placeholder: "https://yourbrand.com/terms",
        style: { "width": "100%" }
      }
    )))), /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "padding": "0.85rem 1.75rem", "fontSize": "0.95rem", "width": "100%", "justifyContent": "center" },
        onClick: (e) => {
          try {
            new Function("e", "saveMerchantBrandingAndToggles()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F4BE} Save & Apply All White-Label Settings"
    )),
    /* @__PURE__ */ import_react8.default.createElement("div", { style: { "position": "sticky", "top": "130px" } }, /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.75rem" } }, /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        style: { "fontSize": "0.82rem", "fontWeight": "800", "textTransform": "uppercase", "color": "#94a3b8", "display": "flex", "alignItems": "center", "gap": "0.4rem" }
      },
      /* @__PURE__ */ import_react8.default.createElement(
        "span",
        {
          style: { "display": "inline-block", "width": "8px", "height": "8px", "borderRadius": "50%", "background": "#10b981" }
        }
      ),
      "Live Gateway Mockup Preview"
    ), /* @__PURE__ */ import_react8.default.createElement("span", { style: { "fontSize": "0.72rem", "color": "var(--text-muted)" } }, "Real-time reflection")), /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        style: { "width": "100%", "maxWidth": "380px", "margin": "0 auto", "background": "#ffffff", "borderRadius": "36px", "border": "9px solid #1e293b", "boxShadow": "0 25px 50px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1)", "overflow": "hidden", "position": "relative", "minHeight": "580px", "display": "flex", "flexDirection": "column" }
      },
      /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          style: { "background": "#0b0f19", "height": "24px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 16px", "color": "#ffffff", "fontSize": "10px", "fontWeight": "700" }
        },
        /* @__PURE__ */ import_react8.default.createElement("span", null, "9:41"),
        /* @__PURE__ */ import_react8.default.createElement("div", { style: { "width": "50px", "height": "4px", "background": "#334155", "borderRadius": "4px" } }),
        /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "flex", "gap": "4px", "alignItems": "center" } }, /* @__PURE__ */ import_react8.default.createElement("span", null, "5G"), /* @__PURE__ */ import_react8.default.createElement("span", null, "100%"))
      ),
      /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          id: "mockupHeader",
          style: { "background": "linear-gradient(180deg, #0b63e5 0%, #0747a6 100%)", "padding": "12px 14px 10px 14px", "color": "#ffffff", "transition": "background 0.2s ease" }
        },
        /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "justifyContent": "space-between", "marginBottom": "8px" } }, /* @__PURE__ */ import_react8.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "10px" } }, /* @__PURE__ */ import_react8.default.createElement(
          "div",
          {
            style: { "width": "36px", "height": "36px", "borderRadius": "50%", "background": "#ffffff", "display": "flex", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "boxShadow": "0 2px 5px rgba(0,0,0,0.15)", "flexShrink": "0" }
          },
          /* @__PURE__ */ import_react8.default.createElement("span", { id: "mockupAvatarLetter", style: { "fontWeight": "900", "color": "#0b63e5", "fontSize": "16px" } }, "M"),
          /* @__PURE__ */ import_react8.default.createElement(
            "img",
            {
              id: "mockupAvatarImg",
              alt: "Logo",
              style: { "display": "none", "width": "100%", "height": "100%", "objectFit": "contain" }
            }
          )
        ), /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(
          "div",
          {
            id: "mockupHeaderMerchantName",
            style: { "fontSize": "13.5px", "fontWeight": "800", "lineHeight": "1.2", "color": "#ffffff" }
          },
          "Merchant Checkout"
        ), /* @__PURE__ */ import_react8.default.createElement(
          "div",
          {
            id: "mockupTrustBadge",
            style: { "display": "inline-flex", "alignItems": "center", "gap": "3px", "marginTop": "2px" }
          },
          /* @__PURE__ */ import_react8.default.createElement("span", { style: { "fontSize": "11px" } }, "\u{1F6E1}\uFE0F"),
          /* @__PURE__ */ import_react8.default.createElement(
            "span",
            {
              id: "mockupTrustBadgeText",
              style: { "fontSize": "10px", "fontWeight": "700", "color": "rgba(255,255,255,0.92)" }
            },
            "YouPI PG Verified Business"
          )
        ))), /* @__PURE__ */ import_react8.default.createElement(
          "div",
          {
            style: { "width": "28px", "height": "28px", "borderRadius": "50%", "background": "rgba(255,255,255,0.18)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "12px" }
          },
          "\u{1F464}"
        )),
        /* @__PURE__ */ import_react8.default.createElement(
          "div",
          {
            id: "mockupSubbanner",
            style: { "background": "rgba(255,255,255,0.15)", "borderRadius": "6px", "padding": "4px 8px", "fontSize": "10.5px", "fontWeight": "700", "display": "flex", "alignItems": "center", "gap": "5px", "backdropFilter": "blur(4px)" }
          },
          /* @__PURE__ */ import_react8.default.createElement("span", null, "\u{1F6D2}"),
          /* @__PURE__ */ import_react8.default.createElement(
            "span",
            {
              id: "mockupSubbannerText",
              style: { "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }
            },
            "Verified & Protected by YOUPI PG"
          )
        )
      ),
      /* @__PURE__ */ import_react8.default.createElement("div", { style: { "padding": "12px", "background": "#f8fafc", "flex": "1", "display": "flex", "flexDirection": "column", "gap": "10px" } }, /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          id: "mockupTimeSavingBanner",
          style: { "background": "#f0fdf4", "border": "1px solid #86efac", "borderRadius": "8px", "padding": "7px 10px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "6px" }
        },
        /* @__PURE__ */ import_react8.default.createElement("div", { style: { "fontSize": "10px", "color": "#14532d", "fontWeight": "700", "lineHeight": "1.3" } }, "\u26A1 Skip wait: Instant billing counter checkout available"),
        /* @__PURE__ */ import_react8.default.createElement(
          "span",
          {
            style: { "background": "#10b981", "color": "#fff", "fontSize": "9px", "fontWeight": "800", "padding": "3px 7px", "borderRadius": "5px", "whiteSpace": "nowrap" }
          },
          "Switch"
        )
      ), /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          style: { "background": "#ffffff", "border": "1px solid #e2e8f0", "borderRadius": "10px", "padding": "10px", "display": "flex", "justifyContent": "space-between", "alignItems": "center" }
        },
        /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("div", { style: { "fontSize": "9.5px", "color": "#64748b", "fontWeight": "700", "textTransform": "uppercase" } }, "Order #ORD-78921"), /* @__PURE__ */ import_react8.default.createElement("div", { style: { "fontSize": "17px", "fontWeight": "900", "color": "#0f172a", "marginTop": "2px" } }, "\u20B91,500.00")),
        /* @__PURE__ */ import_react8.default.createElement(
          "span",
          {
            style: { "background": "#eff6ff", "color": "#2563eb", "fontSize": "10px", "fontWeight": "800", "padding": "3px 8px", "borderRadius": "6px" }
          },
          "Direct UPI"
        )
      ), /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          style: { "background": "#ffffff", "border": "1px solid #e2e8f0", "borderRadius": "10px", "padding": "12px", "textAlign": "center" }
        },
        /* @__PURE__ */ import_react8.default.createElement(
          "div",
          {
            style: { "width": "110px", "height": "110px", "margin": "0 auto 8px auto", "borderRadius": "8px", "border": "2px solid #0f172a", "padding": "4px", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#ffffff" }
          },
          /* @__PURE__ */ import_react8.default.createElement(
            "div",
            {
              style: { "width": "100%", "height": "100%", "background": "repeating-linear-gradient(45deg, #0f172a, #0f172a 6px, #ffffff 6px, #ffffff 12px)", "borderRadius": "4px", "opacity": "0.85" }
            }
          )
        ),
        /* @__PURE__ */ import_react8.default.createElement("div", { style: { "fontSize": "10px", "fontWeight": "700", "color": "#334155" } }, "Scan with any UPI App (GPay, PhonePe, Paytm)")
      )),
      /* @__PURE__ */ import_react8.default.createElement("div", { style: { "background": "#ffffff", "borderTop": "1px solid #e2e8f0", "padding": "10px 14px", "marginTop": "auto" } }, /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          style: { "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "5px", "fontSize": "10px", "fontWeight": "700", "color": "#0b63e5", "marginBottom": "5px" }
        },
        /* @__PURE__ */ import_react8.default.createElement("span", null, "\u{1F6E1}\uFE0F"),
        /* @__PURE__ */ import_react8.default.createElement("span", { id: "mockupFooterGuarantee" }, "100% Payment Protection by YOUPI PG")
      ), /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          id: "mockupLegalDisclaimer",
          style: { "fontSize": "9px", "color": "#64748b", "textAlign": "center", "marginBottom": "8px" }
        },
        "Secured by YOUPI PG & 256-Bit Bank Encryption \u2022 Privacy Notice"
      ), /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "background": "#0f172a", "borderRadius": "8px", "padding": "8px 12px", "color": "#ffffff" }
        },
        /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("div", { style: { "fontSize": "8.5px", "color": "#94a3b8", "fontWeight": "600" } }, "Total Payable"), /* @__PURE__ */ import_react8.default.createElement("div", { style: { "fontSize": "13px", "fontWeight": "800", "color": "#ffffff" } }, "\u20B91,500.00")),
        /* @__PURE__ */ import_react8.default.createElement(
          "span",
          {
            id: "mockupCtaButton",
            style: { "background": "#2563eb", "color": "#ffffff", "fontSize": "10.5px", "fontWeight": "800", "padding": "5px 12px", "borderRadius": "6px" }
          },
          "Continue \u203A"
        )
      )),
      /* @__PURE__ */ import_react8.default.createElement("div", { style: { "background": "#ffffff", "height": "14px", "display": "flex", "alignItems": "center", "justifyContent": "center" } }, /* @__PURE__ */ import_react8.default.createElement("div", { style: { "width": "90px", "height": "4px", "background": "#cbd5e1", "borderRadius": "4px" } }))
    ))
  ))));
}

// apps/merchant-admin/src/views/partials/store-settings/SubViewReceivingVpa.jsx
var import_react9 = __toESM(require_react(), 1);
function SubViewReceivingVpa() {
  return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("div", { id: "subViewStoreVpa", hidden: true }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u26A1 Receiving UPI Accounts & Multiple VPAs"), /* @__PURE__ */ import_react9.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Manage receiving VPAs. ", /* @__PURE__ */ import_react9.default.createElement("strong", null, "Only ONE VPA can be active at a time"), " for gateway payments. Activating a VPA automatically rotates and deactivates all others.")), /* @__PURE__ */ import_react9.default.createElement("span", { className: "badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20", id: "activeVpaModeBadge" }, "Active Gateway VPA")), /* @__PURE__ */ import_react9.default.createElement(
    "div",
    {
      id: "activeVpaCallout",
      style: { "background": "var(--bg-surface)", "border": "1px solid var(--border)", "borderRadius": "0.75rem", "padding": "1.25rem", "marginBottom": "1.5rem", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap", "gap": "1rem" }
    },
    /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("div", { style: { "fontSize": "0.75rem", "fontWeight": "800", "color": "var(--text-muted)", "textTransform": "uppercase" } }, "Currently Active Gateway VPA"), /* @__PURE__ */ import_react9.default.createElement(
      "div",
      {
        style: { "fontSize": "1.45rem", "fontWeight": "900", "color": "var(--primary)", "margin": "0.25rem 0" },
        id: "activeVpaIdDisplay"
      },
      "Loading active VPA..."
    ), /* @__PURE__ */ import_react9.default.createElement("div", { style: { "fontSize": "0.85rem", "color": "var(--text-muted)" }, id: "activeVpaPayeeDisplay" }, "Payee: -")),
    /* @__PURE__ */ import_react9.default.createElement("div", { style: { "textAlign": "right" } }, /* @__PURE__ */ import_react9.default.createElement("div", { style: { "fontSize": "0.75rem", "color": "var(--text-muted)", "marginBottom": "0.3rem" } }, "Checkout Mode"), /* @__PURE__ */ import_react9.default.createElement("div", { style: { "fontSize": "0.9rem", "fontWeight": "800", "color": "var(--success)" } }, "\u2713 Direct Dynamic UPI QR Gateway"))
  ), /* @__PURE__ */ import_react9.default.createElement("div", { className: "settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5" }, /* @__PURE__ */ import_react9.default.createElement("h4", { style: { "marginBottom": "0.85rem", "fontSize": "0.95rem", "color": "var(--text-heading)" } }, "\u2795 Add New Receiving UPI VPA"), /* @__PURE__ */ import_react9.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "1rem", "marginBottom": "1rem" } }, /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.3rem" } }, "UPI ID / VPA"), /* @__PURE__ */ import_react9.default.createElement(
    "input",
    {
      className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
      id: "newUpiVpa",
      type: "text",
      placeholder: "e.g. 9876543210@axl or merchant@okhdfcbank",
      style: { "width": "100%" }
    }
  )), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.3rem" } }, "Payee / Merchant Display Name"), /* @__PURE__ */ import_react9.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", id: "newUpiPayee", type: "text", placeholder: "e.g. YOUPI Store or Store Name", style: { "width": "100%" } }))), /* @__PURE__ */ import_react9.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap", "gap": "1rem" } }, /* @__PURE__ */ import_react9.default.createElement(
    "label",
    {
      style: { "display": "flex", "alignItems": "center", "gap": "0.5rem", "fontSize": "0.85rem", "fontWeight": "600", "cursor": "pointer" }
    },
    /* @__PURE__ */ import_react9.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", type: "checkbox", id: "newUpiActivateNow", defaultChecked: true, style: { "width": "16px", "height": "16px" } }),
    /* @__PURE__ */ import_react9.default.createElement("span", null, "Set as active VPA for customer checkout immediately")
  ), /* @__PURE__ */ import_react9.default.createElement("button", { className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "addNewUpiAccount()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u2795 Save & Add UPI Account"))), /* @__PURE__ */ import_react9.default.createElement("h4", { style: { "marginBottom": "0.75rem", "fontSize": "0.95rem", "color": "var(--text-heading)" } }, "\u{1F4CB} Saved Receiving UPI Accounts"), /* @__PURE__ */ import_react9.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react9.default.createElement("table", { className: "w-full border-collapse text-sm" }, /* @__PURE__ */ import_react9.default.createElement("thead", null, /* @__PURE__ */ import_react9.default.createElement("tr", null, /* @__PURE__ */ import_react9.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "UPI ID (VPA)"), /* @__PURE__ */ import_react9.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Payee Name"), /* @__PURE__ */ import_react9.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Gateway Status"), /* @__PURE__ */ import_react9.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Slot State"), /* @__PURE__ */ import_react9.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Created"), /* @__PURE__ */ import_react9.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Actions"))), /* @__PURE__ */ import_react9.default.createElement("tbody", { id: "upiAccountsTableBody" }, /* @__PURE__ */ import_react9.default.createElement("tr", null, /* @__PURE__ */ import_react9.default.createElement("td", { colSpan: "6", style: { "textAlign": "center", "color": "var(--text-muted)", "padding": "1.5rem" } }, "Loading UPI accounts..."))))))));
}

// apps/merchant-admin/src/views/partials/store-settings/SubViewSellingModes.jsx
var import_react10 = __toESM(require_react(), 1);
function SubViewSellingModes() {
  return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("div", { id: "subViewStoreModes", hidden: true }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F3EA} Store Selling Mode & Payment Modalities"), /* @__PURE__ */ import_react10.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Toggle between ", /* @__PURE__ */ import_react10.default.createElement("strong", null, "Online Selling Mode"), " (E-Commerce) or", /* @__PURE__ */ import_react10.default.createElement("strong", null, "Offline Selling Mode"), " (Physical till/POS desk). Reflects instantly on checkout.")), /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20", id: "currentSellingModeBadge" }, "ONLINE SELLING MODE")), /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "1rem", "marginBottom": "1.5rem" } }, /* @__PURE__ */ import_react10.default.createElement("div", { id: "cardModeOnline", onClick: (e) => {
    try {
      new Function("e", "setSellingMode('ONLINE', true)")(e);
    } catch (err) {
      console.error(err);
    }
  }, className: "selling-mode-card mode-selected-online" }, /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.5rem" } }, /* @__PURE__ */ import_react10.default.createElement("strong", { style: { "fontSize": "1rem", "color": "var(--text-heading)" } }, "\u{1F310} Online Selling Mode"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge badge-primary", id: "badgeOnlineActive" }, "ACTIVE")), /* @__PURE__ */ import_react10.default.createElement("p", { style: { "fontSize": "0.82rem", "color": "var(--text-muted)", "lineHeight": "1.45", "margin": "0" } }, "For websites and courier deliveries. Supports ", /* @__PURE__ */ import_react10.default.createElement("strong", null, "UPI QR"), " (always on) and optional", /* @__PURE__ */ import_react10.default.createElement("strong", null, "Cash on Delivery (COD)"), ".")), /* @__PURE__ */ import_react10.default.createElement("div", { id: "cardModeOffline", onClick: (e) => {
    try {
      new Function("e", "setSellingMode('OFFLINE', true)")(e);
    } catch (err) {
      console.error(err);
    }
  }, className: "selling-mode-card rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 cursor-pointer transition-all hover:border-slate-400" }, /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.5rem" } }, /* @__PURE__ */ import_react10.default.createElement("strong", { style: { "fontSize": "1rem", "color": "var(--text-heading)" } }, "\u{1F3EC} Offline Selling Mode"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge badge-warning inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20", id: "badgeOfflineActive", style: { "display": "none" } }, "ACTIVE")), /* @__PURE__ */ import_react10.default.createElement("p", { style: { "fontSize": "0.82rem", "color": "var(--text-muted)", "lineHeight": "1.45", "margin": "0" } }, "For retail stores and physical checkout desks. Supports ", /* @__PURE__ */ import_react10.default.createElement("strong", null, "UPI QR"), " (always on), configurable ", /* @__PURE__ */ import_react10.default.createElement("strong", null, "Cash"), ", and configurable ", /* @__PURE__ */ import_react10.default.createElement("strong", null, "Card POS"), "."))), /* @__PURE__ */ import_react10.default.createElement("div", { id: "panelOnlineMode", className: "settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5" }, /* @__PURE__ */ import_react10.default.createElement("div", { style: { "fontSize": "0.88rem", "fontWeight": "700", "color": "var(--info)", "marginBottom": "0.75rem" } }, "\u{1F310} Online Payment Options"), /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "flex", "flexDirection": "column", "gap": "1rem" } }, /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      style: { "display": "flex", "alignItems": "flex-start", "justifyContent": "space-between", "padding": "0.85rem", "background": "var(--bg-card)", "border": "1px solid var(--border)", "borderRadius": "0.5rem" }
    },
    /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.5rem", "marginBottom": "0.25rem" } }, /* @__PURE__ */ import_react10.default.createElement("strong", { style: { "fontSize": "0.9rem", "color": "var(--text-heading)" } }, "Digital UPI Payments (QR Code)"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20", style: { "fontSize": "0.72rem" } }, "Default \xB7 Always Enabled")), /* @__PURE__ */ import_react10.default.createElement("div", { style: { "fontSize": "0.8rem", "color": "var(--text-muted)" } }, "Direct QR code scan & pay via any UPI app (GPay, PhonePe, Paytm, CRED).")),
    /* @__PURE__ */ import_react10.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", type: "checkbox", checked: true, disabled: true, style: { "width": "20px", "height": "20px", "opacity": "0.85" } })
  ), /* @__PURE__ */ import_react10.default.createElement(
    "label",
    {
      style: { "display": "flex", "alignItems": "flex-start", "justifyContent": "space-between", "padding": "0.85rem", "background": "var(--bg-card)", "border": "1px solid var(--border)", "borderRadius": "0.5rem", "cursor": "pointer" }
    },
    /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.5rem", "marginBottom": "0.25rem" } }, /* @__PURE__ */ import_react10.default.createElement("strong", { style: { "fontSize": "0.9rem", "color": "var(--text-heading)" } }, "Cash on Delivery (COD)"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20", style: { "fontSize": "0.72rem" } }, "Doorstep Cash")), /* @__PURE__ */ import_react10.default.createElement("div", { style: { "fontSize": "0.8rem", "color": "var(--text-muted)" } }, "Customers confirm order with pre-purchase verification and pay cash upon package arrival.")),
    /* @__PURE__ */ import_react10.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", type: "checkbox", id: "toggleMethodCod", defaultChecked: true, style: { "width": "20px", "height": "20px", "cursor": "pointer" } })
  ))), /* @__PURE__ */ import_react10.default.createElement("div", { id: "panelOfflineMode", hidden: true, className: "settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5" }, /* @__PURE__ */ import_react10.default.createElement("div", { style: { "fontSize": "0.88rem", "fontWeight": "700", "color": "var(--warning)", "marginBottom": "0.75rem" } }, "\u{1F3EC} Offline Counter Payment Options"), /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "flex", "flexDirection": "column", "gap": "1rem" } }, /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      style: { "display": "flex", "alignItems": "flex-start", "justifyContent": "space-between", "padding": "0.85rem", "background": "var(--bg-card)", "border": "1px solid var(--border)", "borderRadius": "0.5rem" }
    },
    /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.5rem", "marginBottom": "0.25rem" } }, /* @__PURE__ */ import_react10.default.createElement("strong", { style: { "fontSize": "0.9rem", "color": "var(--text-heading)" } }, "Digital UPI Payments (QR Code)"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20", style: { "fontSize": "0.72rem" } }, "Default \xB7 Always Enabled")), /* @__PURE__ */ import_react10.default.createElement("div", { style: { "fontSize": "0.8rem", "color": "var(--text-muted)" } }, "Customer scans dynamic QR code on screen at billing counter.")),
    /* @__PURE__ */ import_react10.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", type: "checkbox", checked: true, disabled: true, style: { "width": "20px", "height": "20px", "opacity": "0.85" } })
  ), /* @__PURE__ */ import_react10.default.createElement(
    "label",
    {
      style: { "display": "flex", "alignItems": "flex-start", "justifyContent": "space-between", "padding": "0.85rem", "background": "var(--bg-card)", "border": "1px solid var(--border)", "borderRadius": "0.5rem", "cursor": "pointer" }
    },
    /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.5rem", "marginBottom": "0.25rem" } }, /* @__PURE__ */ import_react10.default.createElement("strong", { style: { "fontSize": "0.9rem", "color": "var(--text-heading)" } }, "Cash"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20", style: { "fontSize": "0.72rem" } }, "Billing Till")), /* @__PURE__ */ import_react10.default.createElement("div", { style: { "fontSize": "0.8rem", "color": "var(--text-muted)" } }, "Customer pays physical cash at till. Cashier verifies note and approves in Cashier Dock.")),
    /* @__PURE__ */ import_react10.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", type: "checkbox", id: "toggleMethodCash", defaultChecked: true, style: { "width": "20px", "height": "20px", "cursor": "pointer" } })
  ), /* @__PURE__ */ import_react10.default.createElement(
    "label",
    {
      style: { "display": "flex", "alignItems": "flex-start", "justifyContent": "space-between", "padding": "0.85rem", "background": "var(--bg-card)", "border": "1px solid var(--border)", "borderRadius": "0.5rem", "cursor": "pointer" }
    },
    /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.5rem", "marginBottom": "0.25rem" } }, /* @__PURE__ */ import_react10.default.createElement("strong", { style: { "fontSize": "0.9rem", "color": "var(--text-heading)" } }, "Card"), /* @__PURE__ */ import_react10.default.createElement("span", { className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20", style: { "fontSize": "0.72rem" } }, "Store POS Terminal")), /* @__PURE__ */ import_react10.default.createElement("div", { style: { "fontSize": "0.8rem", "color": "var(--text-muted)" } }, "Customer swipes or taps card on physical store POS machine.")),
    /* @__PURE__ */ import_react10.default.createElement("input", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", type: "checkbox", id: "toggleMethodCard", defaultChecked: true, style: { "width": "20px", "height": "20px", "cursor": "pointer" } })
  ))), /* @__PURE__ */ import_react10.default.createElement("div", { className: "settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5" }, /* @__PURE__ */ import_react10.default.createElement("div", { style: { "fontSize": "0.88rem", "fontWeight": "700", "color": "var(--text-heading)", "marginBottom": "1rem" } }, "\u{1F3EA} In-Store Till & POS Instructions"), /* @__PURE__ */ import_react10.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "1rem" } }, /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Cash at Till Counter Instructions"), /* @__PURE__ */ import_react10.default.createElement(
    "input",
    {
      className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
      id: "settingCounterInstructions",
      type: "text",
      placeholder: "e.g. Please proceed to Billing Counter and present this screen to Cashier",
      style: { "width": "100%" }
    }
  )), /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Card POS Counter Instructions"), /* @__PURE__ */ import_react10.default.createElement(
    "input",
    {
      className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
      id: "settingCardCounterInstructions",
      type: "text",
      placeholder: "e.g. Please swipe, insert, or tap your card on the store POS terminal.",
      style: { "width": "100%" }
    }
  )))), /* @__PURE__ */ import_react10.default.createElement(
    "button",
    {
      className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
      style: { "width": "100%", "padding": "0.75rem" },
      onClick: (e) => {
        try {
          new Function("e", "saveMerchantBrandingAndToggles()")(e);
        } catch (err) {
          console.error(err);
        }
      }
    },
    "\u{1F4BE} Save Selling Mode & Payment Modalities"
  ))));
}

// apps/merchant-admin/src/views/partials/SectionStoreSettings.jsx
function SectionStoreSettings() {
  return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("div", { id: "sectionStoreSettings", hidden: true }, /* @__PURE__ */ import_react11.default.createElement(SubViewBrandCustomizer, null), /* @__PURE__ */ import_react11.default.createElement(SubViewReceivingVpa, null), /* @__PURE__ */ import_react11.default.createElement(SubViewSellingModes, null)));
}

// apps/merchant-admin/src/views/partials/SectionDeveloperHub.jsx
var import_react18 = __toESM(require_react(), 1);

// apps/merchant-admin/src/views/partials/developer-hub/SubViewPaymentSimulator.jsx
var import_react12 = __toESM(require_react(), 1);
function SubViewPaymentSimulator() {
  return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement("div", { id: "subViewDevSimulator", hidden: true }, /* @__PURE__ */ import_react12.default.createElement(
    "div",
    {
      className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm",
      style: { "border": "2px solid #3b82f6", "background": "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(15,23,42,0.98) 100%)", "marginBottom": "1.5rem" }
    },
    /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap", "gap": "1rem" } }, /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.6rem", "marginBottom": "0.35rem" } }, /* @__PURE__ */ import_react12.default.createElement("span", { style: { "fontSize": "1.5rem" } }, "\u{1F3AE}"), /* @__PURE__ */ import_react12.default.createElement("h2", { style: { "margin": "0", "fontSize": "1.35rem", "color": "#ffffff", "fontWeight": "800" } }, "Developer Tools \u2192 Payment Simulator"), /* @__PURE__ */ import_react12.default.createElement(
      "span",
      {
        className: "badge",
        style: { "background": "#2563eb", "color": "#ffffff", "fontSize": "0.75rem", "padding": "0.25rem 0.65rem" }
      },
      "DEVELOPER TESTING ONLY"
    )), /* @__PURE__ */ import_react12.default.createElement(
      "p",
      {
        style: { "fontSize": "0.86rem", "color": "var(--text-muted)", "margin": "0.4rem 0 0 0", "maxWidth": "820px", "lineHeight": "1.5" }
      },
      "Simulate incoming bank SMS and Gmail payment notifications against real checkout sessions. The observation enters the ",
      /* @__PURE__ */ import_react12.default.createElement("strong", null, "REAL 6-stage verification engine"),
      " without shortcuts. The real engine decides whether it passes, fails, or triggers fraud detection."
    )), /* @__PURE__ */ import_react12.default.createElement(
      "div",
      {
        style: { "background": "#1e293b", "border": "1px solid #334155", "borderRadius": "8px", "padding": "0.75rem 1rem", "display": "flex", "alignItems": "center", "gap": "0.75rem" }
      },
      /* @__PURE__ */ import_react12.default.createElement("div", { style: { "fontSize": "0.8rem" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "color": "#94a3b8", "fontSize": "0.72rem", "textTransform": "uppercase" } }, "Test Mode Status"), /* @__PURE__ */ import_react12.default.createElement("strong", { id: "simTestModeStatus", style: { "color": "#f59e0b" } }, "Checking...")),
      /* @__PURE__ */ import_react12.default.createElement(
        "button",
        {
          id: "simBtnEnableTestMode",
          className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
          onClick: (e) => {
            try {
              new Function("e", "simQuickEnableTestMode()")(e);
            } catch (err) {
              console.error(err);
            }
          },
          style: { "fontSize": "0.78rem", "padding": "0.4rem 0.8rem", "background": "#f59e0b", "borderColor": "#d97706", "color": "#0f172a", "fontWeight": "700" }
        },
        "Enable Test Mode"
      )
    ))
  ), /* @__PURE__ */ import_react12.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm", style: { "border": "1px solid #334155", "background": "#0f172a", "marginBottom": "1.5rem" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(320px, 1fr))", "gap": "1.5rem" } }, /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.75rem" } }, /* @__PURE__ */ import_react12.default.createElement("strong", { style: { "color": "#ffffff", "fontSize": "0.95rem", "display": "flex", "alignItems": "center", "gap": "0.5rem" } }, /* @__PURE__ */ import_react12.default.createElement("span", null, "\u{1F464}"), " Target Customer"), /* @__PURE__ */ import_react12.default.createElement(
    "button",
    {
      className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
      onClick: (e) => {
        try {
          new Function("e", "simFetchCustomers()")(e);
        } catch (err) {
          console.error(err);
        }
      },
      style: { "fontSize": "0.72rem", "padding": "0.25rem 0.6rem" }
    },
    "\u21BB Reload"
  )), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "marginBottom": "0.75rem" } }, /* @__PURE__ */ import_react12.default.createElement(
    "input",
    {
      className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
      type: "text",
      id: "simCustomerSearchInput",
      placeholder: "Search customer (Name, Mobile, Email)...",
      onInput: (e) => {
        try {
          new Function("e", "simFilterCustomers(e.currentTarget.value)")(e);
        } catch (err) {
          console.error(err);
        }
      },
      style: { "width": "100%", "boxSizing": "border-box", "background": "#1e293b", "color": "#f8fafc", "border": "1px solid #475569", "padding": "0.5rem 0.75rem", "borderRadius": "6px", "fontSize": "0.84rem" }
    }
  )), /* @__PURE__ */ import_react12.default.createElement(
    "select",
    {
      className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
      id: "simCustomerSelect",
      size: "4",
      defaultValue: "",
      onChange: (e) => {
        try {
          new Function("e", "simSelectCustomer(e.currentTarget.value)")(e);
        } catch (err) {
          console.error(err);
        }
      },
      style: { "width": "100%", "boxSizing": "border-box", "background": "#020617", "color": "#f8fafc", "border": "1px solid #334155", "borderRadius": "6px", "padding": "0.5rem", "fontSize": "0.82rem", "minHeight": "110px" }
    },
    /* @__PURE__ */ import_react12.default.createElement("option", { value: "", disabled: true }, "Loading existing customers...")
  ), /* @__PURE__ */ import_react12.default.createElement(
    "div",
    {
      id: "simSelectedCustomerBox",
      style: { "marginTop": "0.75rem", "padding": "0.85rem", "borderRadius": "8px", "background": "#1e293b", "border": "1px solid #334155", "display": "none" }
    },
    /* @__PURE__ */ import_react12.default.createElement("div", { style: { "fontSize": "0.74rem", "color": "#94a3b8", "textTransform": "uppercase", "marginBottom": "0.25rem" } }, "Selected Customer"),
    /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "baseline" } }, /* @__PURE__ */ import_react12.default.createElement("strong", { id: "simCustName", style: { "color": "#ffffff", "fontSize": "1rem" } }, "-"), /* @__PURE__ */ import_react12.default.createElement("span", { id: "simCustPhone", style: { "color": "#38bdf8", "fontFamily": "monospace", "fontSize": "0.84rem" } }, "-")),
    /* @__PURE__ */ import_react12.default.createElement("div", { id: "simCustEmail", style: { "color": "#94a3b8", "fontSize": "0.8rem", "marginTop": "0.2rem" } }, "-")
  )), /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.75rem" } }, /* @__PURE__ */ import_react12.default.createElement("strong", { style: { "color": "#ffffff", "fontSize": "0.95rem", "display": "flex", "alignItems": "center", "gap": "0.5rem" } }, /* @__PURE__ */ import_react12.default.createElement("span", null, "\u{1F4B3}"), " Active Payment Sessions"), /* @__PURE__ */ import_react12.default.createElement(
    "button",
    {
      className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
      onClick: (e) => {
        try {
          new Function("e", "simReloadSessions()")(e);
        } catch (err) {
          console.error(err);
        }
      },
      style: { "fontSize": "0.72rem", "padding": "0.25rem 0.6rem" }
    },
    "\u21BB Refresh Sessions"
  )), /* @__PURE__ */ import_react12.default.createElement(
    "div",
    {
      id: "simSessionsList",
      style: { "minHeight": "160px", "maxHeight": "220px", "overflowY": "auto", "background": "#020617", "border": "1px solid #334155", "borderRadius": "6px", "padding": "0.5rem" }
    },
    /* @__PURE__ */ import_react12.default.createElement("div", { style: { "color": "#64748b", "fontSize": "0.82rem", "textAlign": "center", "padding": "2rem 1rem" } }, "Please select a customer on the left to inspect their active payment sessions.")
  ), /* @__PURE__ */ import_react12.default.createElement(
    "div",
    {
      id: "simTerminalNotice",
      style: { "display": "none", "marginTop": "0.75rem", "padding": "0.75rem 1rem", "borderRadius": "8px", "background": "rgba(239,68,68,0.15)", "border": "1px solid #ef4444", "color": "#fca5a5", "fontSize": "0.84rem", "fontWeight": "700" }
    },
    "\u26A0\uFE0F SESSION NO LONGER ACTIVE \u2014 Observation injection disabled for terminal sessions."
  ), /* @__PURE__ */ import_react12.default.createElement(
    "div",
    {
      id: "simSelectedSessionBar",
      style: { "display": "flex", "marginTop": "0.75rem", "padding": "0.75rem 1rem", "borderRadius": "8px", "background": "#1e293b", "border": "1px solid #3b82f6", "justifyContent": "space-between", "alignItems": "center" }
    },
    /* @__PURE__ */ import_react12.default.createElement("div", null, /* @__PURE__ */ import_react12.default.createElement("span", { style: { "fontSize": "0.72rem", "color": "#94a3b8", "textTransform": "uppercase" } }, "Target Session"), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.5rem", "marginTop": "0.15rem" } }, /* @__PURE__ */ import_react12.default.createElement(
      "strong",
      {
        id: "simSelectedSessionId",
        style: { "color": "#38bdf8", "fontFamily": "monospace", "fontSize": "0.84rem" }
      },
      "-"
    ), /* @__PURE__ */ import_react12.default.createElement("span", { id: "simSelectedSessionOrder", style: { "color": "#e2e8f0", "fontSize": "0.82rem" } }, "-"))),
    /* @__PURE__ */ import_react12.default.createElement("div", { style: { "textAlign": "right" } }, /* @__PURE__ */ import_react12.default.createElement("div", { id: "simSelectedSessionAmount", style: { "color": "#22c55e", "fontWeight": "800", "fontSize": "1.05rem" } }, "-"), /* @__PURE__ */ import_react12.default.createElement(
      "span",
      {
        id: "simSelectedSessionBadge",
        className: "badge",
        style: { "fontSize": "0.7rem", "padding": "0.2rem 0.5rem", "background": "#22c55e", "color": "#0f172a" }
      },
      "ACTIVE"
    ))
  )))), /* @__PURE__ */ import_react12.default.createElement(
    "div",
    {
      style: { "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(360px, 1fr))", "gap": "1.5rem", "marginBottom": "1.5rem" }
    },
    /* @__PURE__ */ import_react12.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm", style: { "border": "1px solid #3b82f6", "background": "#0b0f19" } }, /* @__PURE__ */ import_react12.default.createElement(
      "div",
      {
        style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "1rem", "borderBottom": "1px solid #1e293b", "paddingBottom": "0.75rem" }
      },
      /* @__PURE__ */ import_react12.default.createElement("strong", { style: { "color": "#60a5fa", "fontSize": "1.05rem", "display": "flex", "alignItems": "center", "gap": "0.5rem" } }, /* @__PURE__ */ import_react12.default.createElement("span", null, "\u{1F4F1}"), " SMS STREAM"),
      /* @__PURE__ */ import_react12.default.createElement("span", { style: { "fontSize": "0.74rem", "color": "#94a3b8" } }, "100% Customizable \xB7 Any String")
    ), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "marginBottom": "1rem" } }, /* @__PURE__ */ import_react12.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "color": "#94a3b8", "marginBottom": "0.35rem", "fontWeight": "600" } }, "Sender / Short Code"), /* @__PURE__ */ import_react12.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "text",
        id: "simSmsSender",
        defaultValue: "HDFCBK",
        placeholder: "e.g. HDFCBK, AXISBK, 8796266491, arbitrary string...",
        style: { "width": "100%", "boxSizing": "border-box", "background": "#1e293b", "color": "#f8fafc", "border": "1px solid #475569", "padding": "0.5rem 0.75rem", "borderRadius": "6px", "fontSize": "0.84rem", "fontFamily": "monospace" }
      }
    )), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "marginBottom": "1rem" } }, /* @__PURE__ */ import_react12.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "color": "#94a3b8", "marginBottom": "0.35rem", "fontWeight": "600" } }, "SMS Content (Free-Form Raw Text)"), /* @__PURE__ */ import_react12.default.createElement(
      "textarea",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "simSmsContent",
        rows: "4",
        placeholder: "e.g. A/C XX1234 credited with Rs 499.00 CR. Ref 123456789012",
        style: { "width": "100%", "boxSizing": "border-box", "background": "#020617", "color": "#f8fafc", "border": "1px solid #334155", "borderRadius": "6px", "padding": "0.75rem", "fontSize": "0.84rem", "fontFamily": "monospace", "resize": "vertical" }
      }
    ), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "fontSize": "0.72rem", "color": "#64748b", "marginTop": "0.25rem" } }, "Exact text preserved verbatim as", /* @__PURE__ */ import_react12.default.createElement("code", null, "raw"), ".")), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "marginBottom": "1.25rem" } }, /* @__PURE__ */ import_react12.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "color": "#94a3b8", "marginBottom": "0.35rem", "fontWeight": "600" } }, "Received Time"), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "marginBottom": "0.4rem" } }, /* @__PURE__ */ import_react12.default.createElement(
      "select",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "simSmsTimeType",
        onChange: (e) => {
          try {
            new Function("e", "simToggleTimeInput('SMS')")(e);
          } catch (err) {
            console.error(err);
          }
        },
        style: { "background": "#1e293b", "color": "#f8fafc", "border": "1px solid #475569", "padding": "0.4rem 0.65rem", "borderRadius": "6px", "fontSize": "0.82rem" }
      },
      /* @__PURE__ */ import_react12.default.createElement("option", { value: "CURRENT" }, "Current Server Time"),
      /* @__PURE__ */ import_react12.default.createElement("option", { value: "CUSTOM" }, "Custom Timestamp")
    )), /* @__PURE__ */ import_react12.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "text",
        id: "simSmsCustomTime",
        placeholder: "YYYY-MM-DDTHH:mm:ss.sssZ (e.g. 2026-10-04T11:45:21Z)",
        style: { "display": "none", "width": "100%", "boxSizing": "border-box", "background": "#1e293b", "color": "#f8fafc", "border": "1px solid #475569", "padding": "0.45rem 0.75rem", "borderRadius": "6px", "fontSize": "0.82rem", "fontFamily": "monospace" }
      }
    )), /* @__PURE__ */ import_react12.default.createElement(
      "button",
      {
        id: "simBtnPushSms",
        className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        onClick: (e) => {
          try {
            new Function("e", "simInjectObservation('SMS')")(e);
          } catch (err) {
            console.error(err);
          }
        },
        style: { "width": "100%", "background": "#2563eb", "borderColor": "#1d4ed8", "padding": "0.65rem", "fontSize": "0.92rem", "fontWeight": "800", "display": "flex", "justifyContent": "center", "alignItems": "center", "gap": "0.5rem" }
      },
      /* @__PURE__ */ import_react12.default.createElement("span", null, "\u{1F680}"),
      " PUSH SMS TO STREAM"
    )),
    /* @__PURE__ */ import_react12.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm", style: { "border": "1px solid #ec4899", "background": "#0b0f19" } }, /* @__PURE__ */ import_react12.default.createElement(
      "div",
      {
        style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "1rem", "borderBottom": "1px solid #1e293b", "paddingBottom": "0.75rem" }
      },
      /* @__PURE__ */ import_react12.default.createElement("strong", { style: { "color": "#f472b6", "fontSize": "1.05rem", "display": "flex", "alignItems": "center", "gap": "0.5rem" } }, /* @__PURE__ */ import_react12.default.createElement("span", null, "\u2709\uFE0F"), " GMAIL STREAM"),
      /* @__PURE__ */ import_react12.default.createElement("span", { style: { "fontSize": "0.74rem", "color": "#94a3b8" } }, "100% Customizable \xB7 Any String")
    ), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "marginBottom": "1rem" } }, /* @__PURE__ */ import_react12.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "color": "#94a3b8", "marginBottom": "0.35rem", "fontWeight": "600" } }, "Sender Email Address"), /* @__PURE__ */ import_react12.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "text",
        id: "simGmailSender",
        defaultValue: "notification@yourbank.bank.in",
        placeholder: "e.g. notification@yourbank.bank.in, test@gmail.com, arbitrary email...",
        style: { "width": "100%", "boxSizing": "border-box", "background": "#1e293b", "color": "#f8fafc", "border": "1px solid #475569", "padding": "0.5rem 0.75rem", "borderRadius": "6px", "fontSize": "0.84rem", "fontFamily": "monospace" }
      }
    )), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "marginBottom": "1rem" } }, /* @__PURE__ */ import_react12.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "color": "#94a3b8", "marginBottom": "0.35rem", "fontWeight": "600" } }, "Gmail Content (Free-Form Raw Text)"), /* @__PURE__ */ import_react12.default.createElement(
      "textarea",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "simGmailContent",
        rows: "4",
        placeholder: "e.g. Your account has been credited with \u20B9499.00 via UPI. Reference 123456789012.",
        style: { "width": "100%", "boxSizing": "border-box", "background": "#020617", "color": "#f8fafc", "border": "1px solid #334155", "borderRadius": "6px", "padding": "0.75rem", "fontSize": "0.84rem", "fontFamily": "monospace", "resize": "vertical" }
      }
    ), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "fontSize": "0.72rem", "color": "#64748b", "marginTop": "0.25rem" } }, "Exact text preserved verbatim as", /* @__PURE__ */ import_react12.default.createElement("code", null, "raw"), ".")), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "marginBottom": "1.25rem" } }, /* @__PURE__ */ import_react12.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "color": "#94a3b8", "marginBottom": "0.35rem", "fontWeight": "600" } }, "Received Time"), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "marginBottom": "0.4rem" } }, /* @__PURE__ */ import_react12.default.createElement(
      "select",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "simGmailTimeType",
        onChange: (e) => {
          try {
            new Function("e", "simToggleTimeInput('GMAIL')")(e);
          } catch (err) {
            console.error(err);
          }
        },
        style: { "background": "#1e293b", "color": "#f8fafc", "border": "1px solid #475569", "padding": "0.4rem 0.65rem", "borderRadius": "6px", "fontSize": "0.82rem" }
      },
      /* @__PURE__ */ import_react12.default.createElement("option", { value: "CURRENT" }, "Current Server Time"),
      /* @__PURE__ */ import_react12.default.createElement("option", { value: "CUSTOM" }, "Custom Timestamp")
    )), /* @__PURE__ */ import_react12.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "text",
        id: "simGmailCustomTime",
        placeholder: "YYYY-MM-DDTHH:mm:ss.sssZ (e.g. 2026-10-04T11:45:21Z)",
        style: { "display": "none", "width": "100%", "boxSizing": "border-box", "background": "#1e293b", "color": "#f8fafc", "border": "1px solid #475569", "padding": "0.45rem 0.75rem", "borderRadius": "6px", "fontSize": "0.82rem", "fontFamily": "monospace" }
      }
    )), /* @__PURE__ */ import_react12.default.createElement(
      "button",
      {
        id: "simBtnPushGmail",
        className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        onClick: (e) => {
          try {
            new Function("e", "simInjectObservation('GMAIL')")(e);
          } catch (err) {
            console.error(err);
          }
        },
        style: { "width": "100%", "background": "#db2777", "borderColor": "#be185d", "padding": "0.65rem", "fontSize": "0.92rem", "fontWeight": "800", "display": "flex", "justifyContent": "center", "alignItems": "center", "gap": "0.5rem" }
      },
      /* @__PURE__ */ import_react12.default.createElement("span", null, "\u{1F680}"),
      " PUSH GMAIL TO STREAM"
    ))
  ), /* @__PURE__ */ import_react12.default.createElement(
    "div",
    {
      id: "simResultInspectorCard",
      className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm",
      style: { "display": "none", "border": "1px solid #334155", "background": "#020617", "marginBottom": "1.5rem" }
    },
    /* @__PURE__ */ import_react12.default.createElement(
      "div",
      {
        style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "1rem", "flexWrap": "wrap", "gap": "0.5rem", "borderBottom": "1px solid #1e293b", "paddingBottom": "0.75rem" }
      },
      /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.75rem" } }, /* @__PURE__ */ import_react12.default.createElement("span", { style: { "fontSize": "1.3rem" } }, "\u{1F52C}"), /* @__PURE__ */ import_react12.default.createElement("h3", { style: { "margin": "0", "fontSize": "1.15rem", "color": "#ffffff", "fontWeight": "800" } }, "Processing Result Inspector"), /* @__PURE__ */ import_react12.default.createElement(
        "span",
        {
          id: "simResultStatusBadge",
          className: "badge",
          style: { "fontSize": "0.82rem", "padding": "0.3rem 0.75rem" }
        },
        "UNKNOWN"
      )),
      /* @__PURE__ */ import_react12.default.createElement("div", { id: "simResultMessageId", style: { "fontSize": "0.78rem", "color": "#94a3b8", "fontFamily": "monospace" } })
    ),
    /* @__PURE__ */ import_react12.default.createElement(
      "div",
      {
        style: { "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(160px, 1fr))", "gap": "0.75rem", "marginBottom": "1.25rem" }
      },
      /* @__PURE__ */ import_react12.default.createElement("div", { style: { "background": "#0f172a", "padding": "0.65rem 0.85rem", "borderRadius": "6px", "border": "1px solid #1e293b" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "fontSize": "0.7rem", "color": "#64748b", "textTransform": "uppercase" } }, "Target Session"), /* @__PURE__ */ import_react12.default.createElement(
        "div",
        {
          id: "simResTargetSession",
          style: { "fontWeight": "700", "color": "#f8fafc", "fontSize": "0.85rem", "fontFamily": "monospace" }
        },
        "None"
      )),
      /* @__PURE__ */ import_react12.default.createElement("div", { style: { "background": "#0f172a", "padding": "0.65rem 0.85rem", "borderRadius": "6px", "border": "1px solid #1e293b" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "fontSize": "0.7rem", "color": "#64748b", "textTransform": "uppercase" } }, "Source"), /* @__PURE__ */ import_react12.default.createElement("div", { id: "simResSource", style: { "fontWeight": "700", "color": "#f8fafc", "fontSize": "0.85rem" } }, "-")),
      /* @__PURE__ */ import_react12.default.createElement("div", { style: { "background": "#0f172a", "padding": "0.65rem 0.85rem", "borderRadius": "6px", "border": "1px solid #1e293b" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "fontSize": "0.7rem", "color": "#64748b", "textTransform": "uppercase" } }, "Amount"), /* @__PURE__ */ import_react12.default.createElement("div", { id: "simResAmount", style: { "fontWeight": "700", "color": "#38bdf8", "fontSize": "0.95rem" } }, "-")),
      /* @__PURE__ */ import_react12.default.createElement("div", { style: { "background": "#0f172a", "padding": "0.65rem 0.85rem", "borderRadius": "6px", "border": "1px solid #1e293b" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "fontSize": "0.7rem", "color": "#64748b", "textTransform": "uppercase" } }, "Reference / UTR"), /* @__PURE__ */ import_react12.default.createElement("div", { id: "simResRef", style: { "fontWeight": "700", "color": "#f8fafc", "fontSize": "0.82rem", "fontFamily": "monospace" } }, "-")),
      /* @__PURE__ */ import_react12.default.createElement("div", { style: { "background": "#0f172a", "padding": "0.65rem 0.85rem", "borderRadius": "6px", "border": "1px solid #1e293b" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "fontSize": "0.7rem", "color": "#64748b", "textTransform": "uppercase" } }, "Failing Reason"), /* @__PURE__ */ import_react12.default.createElement("div", { id: "simResReason", style: { "fontWeight": "700", "color": "#f87171", "fontSize": "0.82rem" } }, "None"))
    ),
    /* @__PURE__ */ import_react12.default.createElement(
      "div",
      {
        style: { "fontSize": "0.8rem", "fontWeight": "700", "color": "#94a3b8", "marginBottom": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.04em" }
      },
      "Pipeline Stage Inspection (Stages 1 \u2013 6)"
    ),
    /* @__PURE__ */ import_react12.default.createElement("div", { id: "simStagesContainer", style: { "display": "flex", "flexDirection": "column", "gap": "0.5rem", "marginBottom": "1rem" } }),
    /* @__PURE__ */ import_react12.default.createElement("div", { style: { "background": "#0f172a", "padding": "0.75rem 1rem", "borderRadius": "6px", "border": "1px solid #1e293b" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "fontSize": "0.72rem", "color": "#64748b", "textTransform": "uppercase", "marginBottom": "0.25rem" } }, "Exact Raw Payload (Preserved)"), /* @__PURE__ */ import_react12.default.createElement(
      "pre",
      {
        id: "simResRawText",
        style: { "margin": "0", "fontSize": "0.8rem", "color": "#cbd5e1", "fontFamily": "monospace", "whiteSpace": "pre-wrap", "wordBreak": "break-all" }
      }
    ))
  ), /* @__PURE__ */ import_react12.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm", style: { "border": "1px solid #1e293b", "background": "#0b0f19" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.85rem" } }, /* @__PURE__ */ import_react12.default.createElement("strong", { style: { "color": "#ffffff", "fontSize": "0.95rem", "display": "flex", "alignItems": "center", "gap": "0.5rem" } }, /* @__PURE__ */ import_react12.default.createElement("span", null, "\u{1F4DC}"), " Simulation History"), /* @__PURE__ */ import_react12.default.createElement(
    "button",
    {
      className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
      onClick: (e) => {
        try {
          new Function("e", "simFetchHistory()")(e);
        } catch (err) {
          console.error(err);
        }
      },
      style: { "fontSize": "0.74rem", "padding": "0.25rem 0.65rem" }
    },
    "\u21BB Refresh History"
  )), /* @__PURE__ */ import_react12.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react12.default.createElement("table", { style: { "width": "100%", "borderCollapse": "collapse", "fontSize": "0.82rem", "textAlign": "left" } }, /* @__PURE__ */ import_react12.default.createElement("thead", null, /* @__PURE__ */ import_react12.default.createElement(
    "tr",
    {
      style: { "borderBottom": "1px solid #334155", "color": "#94a3b8", "fontSize": "0.74rem", "textTransform": "uppercase" }
    },
    /* @__PURE__ */ import_react12.default.createElement("th", { style: { "padding": "0.6rem 0.75rem" } }, "Timestamp"),
    /* @__PURE__ */ import_react12.default.createElement("th", { style: { "padding": "0.6rem 0.75rem" } }, "Source"),
    /* @__PURE__ */ import_react12.default.createElement("th", { style: { "padding": "0.6rem 0.75rem" } }, "Sender"),
    /* @__PURE__ */ import_react12.default.createElement("th", { style: { "padding": "0.6rem 0.75rem" } }, "Session"),
    /* @__PURE__ */ import_react12.default.createElement("th", { style: { "padding": "0.6rem 0.75rem" } }, "Result"),
    /* @__PURE__ */ import_react12.default.createElement("th", { style: { "padding": "0.6rem 0.75rem" } }, "Message ID"),
    /* @__PURE__ */ import_react12.default.createElement("th", { style: { "padding": "0.6rem 0.75rem" } }, "Reason")
  )), /* @__PURE__ */ import_react12.default.createElement("tbody", { id: "simHistoryTableBody" }, /* @__PURE__ */ import_react12.default.createElement("tr", null, /* @__PURE__ */ import_react12.default.createElement("td", { colSpan: "7", style: { "padding": "1.5rem", "textAlign": "center", "color": "#64748b" } }, "Loading history..."))))))));
}

// apps/merchant-admin/src/views/partials/developer-hub/SubViewSystemSupervisor.jsx
var import_react13 = __toESM(require_react(), 1);
function SubViewSystemSupervisor() {
  return /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("div", { id: "subViewDevSupervisor" }, /* @__PURE__ */ import_react13.default.createElement(
    "div",
    {
      id: "modalEnableTestMode",
      style: { "display": "none", "position": "fixed", "inset": "0", "background": "rgba(0,0,0,0.8)", "zIndex": "999999", "alignItems": "center", "justifyContent": "center" }
    },
    /* @__PURE__ */ import_react13.default.createElement(
      "div",
      {
        style: { "maxWidth": "480px", "width": "92%", "background": "#0f172a", "border": "2px solid #f59e0b", "borderRadius": "12px", "padding": "1.75rem", "boxShadow": "0 25px 50px -12px rgba(0,0,0,0.9)" }
      },
      /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.75rem", "marginBottom": "1rem" } }, /* @__PURE__ */ import_react13.default.createElement("span", { style: { "fontSize": "1.8rem" } }, "\u26A0\uFE0F"), /* @__PURE__ */ import_react13.default.createElement("h3", { style: { "margin": "0", "fontSize": "1.25rem", "color": "#fbbf24", "fontWeight": "800" } }, "Enable Test Mode?")),
      /* @__PURE__ */ import_react13.default.createElement("p", { style: { "color": "#e2e8f0", "fontSize": "0.92rem", "lineHeight": "1.6", "marginBottom": "1.5rem" } }, "Test Mode disables automatic banning for 10 minutes and is intended only for development and testing."),
      /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "justifyContent": "flex-end", "gap": "0.75rem" } }, /* @__PURE__ */ import_react13.default.createElement(
        "button",
        {
          className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
          onClick: (e) => {
            try {
              new Function("e", "closeTestModeModal()")(e);
            } catch (err) {
              console.error(err);
            }
          },
          style: { "fontSize": "0.88rem", "padding": "0.55rem 1.1rem" }
        },
        "Cancel"
      ), /* @__PURE__ */ import_react13.default.createElement(
        "button",
        {
          className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
          onClick: (e) => {
            try {
              new Function("e", "confirmEnableTestMode()")(e);
            } catch (err) {
              console.error(err);
            }
          },
          style: { "background": "#f59e0b", "borderColor": "#d97706", "color": "#0f172a", "fontWeight": "800", "fontSize": "0.88rem", "padding": "0.55rem 1.25rem" }
        },
        "Enable Test Mode"
      ))
    )
  ), /* @__PURE__ */ import_react13.default.createElement(
    "div",
    {
      className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm",
      id: "cardDeveloperTestMode",
      style: { "border": "2px solid #f59e0b", "background": "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(15,23,42,0.96) 100%)", "marginBottom": "1.5rem" }
    },
    /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap", "gap": "1rem" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "flex": "1", "minWidth": "280px" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.6rem", "marginBottom": "0.35rem" } }, /* @__PURE__ */ import_react13.default.createElement("span", { style: { "fontSize": "1.35rem" } }, "\u{1F9EA}"), /* @__PURE__ */ import_react13.default.createElement("strong", { style: { "fontSize": "1.15rem", "color": "#ffffff" } }, "Developer Settings \u2192 Test Mode"), /* @__PURE__ */ import_react13.default.createElement(
      "span",
      {
        className: "badge",
        id: "testModeBadge",
        style: { "fontSize": "0.75rem", "padding": "0.25rem 0.65rem", "background": "#334155", "color": "#94a3b8" }
      },
      "[ OFF ] Test Mode"
    )), /* @__PURE__ */ import_react13.default.createElement(
      "p",
      {
        style: { "fontSize": "0.84rem", "color": "var(--text-muted)", "marginTop": "0.4rem", "maxWidth": "760px", "lineHeight": "1.5" }
      },
      "This mode exists ONLY for development, debugging, QA, and verification-engine testing. While active, ",
      /* @__PURE__ */ import_react13.default.createElement("strong", null, "AUTOMATIC BAN SYSTEM = DISABLED"),
      ". Automatically expires after 10 minutes (strictly enforced server-side)."
    ), /* @__PURE__ */ import_react13.default.createElement(
      "div",
      {
        style: { "display": "flex", "alignItems": "center", "gap": "0.75rem", "marginTop": "0.6rem", "fontSize": "0.78rem", "color": "#94a3b8", "flexWrap": "wrap" }
      },
      /* @__PURE__ */ import_react13.default.createElement("span", { id: "testModeBanStatusText" }, "\u{1F6E1}\uFE0F Automatic Ban System: ", /* @__PURE__ */ import_react13.default.createElement("strong", { style: { "color": "#22c55e" } }, "ENABLED (Normal)")),
      /* @__PURE__ */ import_react13.default.createElement("span", { id: "testModeCountdownWrap", style: { "display": "none", "color": "#fbbf24", "fontWeight": "700" } }, "\u23F1 Test Mode Enabled \xB7 Remaining time: ", /* @__PURE__ */ import_react13.default.createElement("span", { id: "testModeTimerVal" }, "10:00"))
    )), /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "1rem" } }, /* @__PURE__ */ import_react13.default.createElement(
      "label",
      {
        style: { "display": "flex", "alignItems": "center", "gap": "0.6rem", "cursor": "pointer", "background": "#1c1917", "padding": "0.6rem 1.1rem", "borderRadius": "0.5rem", "border": "1px solid #d97706" }
      },
      /* @__PURE__ */ import_react13.default.createElement(
        "input",
        {
          className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
          type: "checkbox",
          id: "toggleTestModeSwitch",
          onChange: (e) => {
            try {
              new Function("e", "handleTestModeToggle(e.currentTarget)")(e);
            } catch (err) {
              console.error(err);
            }
          },
          style: { "width": "20px", "height": "20px", "accentColor": "#f59e0b", "cursor": "pointer" }
        }
      ),
      /* @__PURE__ */ import_react13.default.createElement("span", { style: { "fontSize": "0.88rem", "fontWeight": "700", "color": "#fef3c7" }, id: "testModeLabelText" }, "Test Mode")
    ))),
    /* @__PURE__ */ import_react13.default.createElement(
      "div",
      {
        id: "testModeActiveBanner",
        style: { "display": "none", "marginTop": "1.25rem", "padding": "1rem", "borderRadius": "8px", "background": "rgba(245,158,11,0.14)", "border": "1px solid rgba(245,158,11,0.4)", "color": "#fef3c7" }
      },
      /* @__PURE__ */ import_react13.default.createElement(
        "div",
        {
          style: { "display": "flex", "alignItems": "center", "gap": "0.6rem", "fontWeight": "800", "fontSize": "0.95rem", "color": "#fbbf24", "marginBottom": "0.25rem" }
        },
        /* @__PURE__ */ import_react13.default.createElement("span", null, "\u26A0\uFE0F"),
        " TEST MODE ACTIVE"
      ),
      /* @__PURE__ */ import_react13.default.createElement("div", { style: { "fontSize": "0.84rem", "color": "#fed7aa", "lineHeight": "1.4" } }, "Automatic banning is temporarily disabled. This mode will automatically turn off after 10 minutes.")
    ),
    /* @__PURE__ */ import_react13.default.createElement(
      "div",
      {
        id: "sectionTestObservation",
        style: { "display": "none", "marginTop": "1.5rem", "paddingTop": "1.25rem", "borderTop": "1px solid rgba(245,158,11,0.25)" }
      },
      /* @__PURE__ */ import_react13.default.createElement(
        "div",
        {
          style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap", "gap": "0.75rem", "marginBottom": "1rem" }
        },
        /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement("h4", { style: { "margin": "0", "fontSize": "1.05rem", "color": "#ffffff", "display": "flex", "alignItems": "center", "gap": "0.5rem" } }, /* @__PURE__ */ import_react13.default.createElement("span", null, "\u{1F3AF}"), " Test Payment Observation"), /* @__PURE__ */ import_react13.default.createElement("span", { style: { "fontSize": "0.78rem", "color": "#94a3b8" } }, "Inject synthetic observations directly into the canonical 6-stage production verification flow.")),
        /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "flexWrap": "wrap" } }, /* @__PURE__ */ import_react13.default.createElement(
          "button",
          {
            className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
            onClick: (e) => {
              try {
                new Function("e", "generateFakeSmsTemplate()")(e);
              } catch (err) {
                console.error(err);
              }
            },
            style: { "fontSize": "0.8rem", "padding": "0.4rem 0.85rem", "borderColor": "#d97706", "color": "#fde68a" }
          },
          "\u{1F4F1} Create Fake SMS"
        ), /* @__PURE__ */ import_react13.default.createElement(
          "button",
          {
            className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
            onClick: (e) => {
              try {
                new Function("e", "generateFakeGmailTemplate()")(e);
              } catch (err) {
                console.error(err);
              }
            },
            style: { "fontSize": "0.8rem", "padding": "0.4rem 0.85rem", "borderColor": "#d97706", "color": "#fde68a" }
          },
          "\u2709\uFE0F Create Fake Gmail"
        ))
      ),
      /* @__PURE__ */ import_react13.default.createElement(
        "div",
        {
          style: { "background": "#0b0f19", "padding": "0.85rem", "borderRadius": "8px", "border": "1px solid #1e293b", "marginBottom": "1.25rem", "display": "flex", "alignItems": "center", "gap": "1rem", "flexWrap": "wrap" }
        },
        /* @__PURE__ */ import_react13.default.createElement("span", { style: { "fontSize": "0.82rem", "color": "#94a3b8", "fontWeight": "600" } }, "\u23F1 Test Timestamp Control:"),
        /* @__PURE__ */ import_react13.default.createElement(
          "select",
          {
            className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
            id: "selectTestTimestampControl",
            onChange: (e) => {
              try {
                new Function("e", "handleTestTimestampChange(e.currentTarget.value)")(e);
              } catch (err) {
                console.error(err);
              }
            },
            style: { "background": "#1e293b", "color": "#f8fafc", "border": "1px solid #475569", "padding": "0.35rem 0.75rem", "borderRadius": "6px", "fontSize": "0.82rem" }
          },
          /* @__PURE__ */ import_react13.default.createElement("option", { value: "CURRENT" }, "Current Server Timestamp (Normal)"),
          /* @__PURE__ */ import_react13.default.createElement("option", { value: "BEFORE_SESSION" }, "Message received before session creation (-5 mins)"),
          /* @__PURE__ */ import_react13.default.createElement("option", { value: "AFTER_EXPIRY" }, "Message received after session expiry (+30 mins)"),
          /* @__PURE__ */ import_react13.default.createElement("option", { value: "CUSTOM" }, "Custom ISO Timestamp")
        ),
        /* @__PURE__ */ import_react13.default.createElement(
          "input",
          {
            className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
            type: "text",
            id: "inputCustomTimestamp",
            placeholder: "YYYY-MM-DDTHH:mm:ss.sssZ",
            style: { "display": "none", "background": "#1e293b", "color": "#f8fafc", "border": "1px solid #475569", "padding": "0.35rem 0.75rem", "borderRadius": "6px", "fontSize": "0.82rem", "width": "220px" }
          }
        )
      ),
      /* @__PURE__ */ import_react13.default.createElement(
        "div",
        {
          style: { "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(320px, 1fr))", "gap": "1.25rem", "marginBottom": "1.5rem" }
        },
        /* @__PURE__ */ import_react13.default.createElement("div", { style: { "background": "#0b0f19", "border": "1px solid #334155", "borderRadius": "10px", "padding": "1.1rem" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.6rem" } }, /* @__PURE__ */ import_react13.default.createElement("strong", { style: { "color": "#60a5fa", "fontSize": "0.92rem", "display": "flex", "alignItems": "center", "gap": "0.4rem" } }, "\u{1F4F1} SMS Test Message"), /* @__PURE__ */ import_react13.default.createElement(
          "input",
          {
            className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
            type: "text",
            id: "inputTestSmsSender",
            placeholder: "Sender (e.g. VM-HDFCBK)",
            defaultValue: "VM-HDFCBK",
            style: { "background": "#1e293b", "color": "#cbd5e1", "border": "1px solid #334155", "fontSize": "0.75rem", "padding": "0.25rem 0.5rem", "borderRadius": "4px", "width": "130px" }
          }
        )), /* @__PURE__ */ import_react13.default.createElement(
          "textarea",
          {
            className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
            id: "inputTestSmsMessage",
            rows: "4",
            style: { "width": "100%", "boxSizing": "border-box", "background": "#020617", "color": "#f8fafc", "border": "1px solid #334155", "borderRadius": "6px", "padding": "0.75rem", "fontFamily": "monospace", "fontSize": "0.82rem", "resize": "vertical" },
            placeholder: "Enter custom SMS content here...\ne.g. A/C XX1234 credited by Rs 499.00 CR. Ref 123456789012."
          }
        ), /* @__PURE__ */ import_react13.default.createElement("div", { style: { "marginTop": "0.75rem", "display": "flex", "justifyContent": "space-between", "alignItems": "center" } }, /* @__PURE__ */ import_react13.default.createElement("span", { style: { "fontSize": "0.72rem", "color": "#64748b" } }, "Preserved verbatim as ", /* @__PURE__ */ import_react13.default.createElement("code", null, "raw")), /* @__PURE__ */ import_react13.default.createElement(
          "button",
          {
            className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
            id: "btnInjectSms",
            onClick: (e) => {
              try {
                new Function("e", "injectTestMessage('SMS')")(e);
              } catch (err) {
                console.error(err);
              }
            },
            style: { "background": "#2563eb", "borderColor": "#1d4ed8", "fontSize": "0.82rem", "padding": "0.45rem 1rem" }
          },
          "\u{1F680} Inject Test SMS"
        ))),
        /* @__PURE__ */ import_react13.default.createElement("div", { style: { "background": "#0b0f19", "border": "1px solid #334155", "borderRadius": "10px", "padding": "1.1rem" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.6rem" } }, /* @__PURE__ */ import_react13.default.createElement("strong", { style: { "color": "#f472b6", "fontSize": "0.92rem", "display": "flex", "alignItems": "center", "gap": "0.4rem" } }, "\u2709\uFE0F Gmail Test Message"), /* @__PURE__ */ import_react13.default.createElement(
          "input",
          {
            className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
            type: "text",
            id: "inputTestGmailSender",
            placeholder: "Sender (e.g. alerts@hdfc.bank.in)",
            defaultValue: "alerts@hdfc.bank.in",
            style: { "background": "#1e293b", "color": "#cbd5e1", "border": "1px solid #334155", "fontSize": "0.75rem", "padding": "0.25rem 0.5rem", "borderRadius": "4px", "width": "170px" }
          }
        )), /* @__PURE__ */ import_react13.default.createElement(
          "textarea",
          {
            className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
            id: "inputTestGmailMessage",
            rows: "4",
            style: { "width": "100%", "boxSizing": "border-box", "background": "#020617", "color": "#f8fafc", "border": "1px solid #334155", "borderRadius": "6px", "padding": "0.75rem", "fontFamily": "monospace", "fontSize": "0.82rem", "resize": "vertical" },
            placeholder: "Enter custom email content here...\ne.g. Dear Customer, your account has been credited with INR 499.00 via UPI. UPI Ref No: 123456789012."
          }
        ), /* @__PURE__ */ import_react13.default.createElement("div", { style: { "marginTop": "0.75rem", "display": "flex", "justifyContent": "space-between", "alignItems": "center" } }, /* @__PURE__ */ import_react13.default.createElement("span", { style: { "fontSize": "0.72rem", "color": "#64748b" } }, "Preserved verbatim as ", /* @__PURE__ */ import_react13.default.createElement("code", null, "raw")), /* @__PURE__ */ import_react13.default.createElement(
          "button",
          {
            className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
            id: "btnInjectGmail",
            onClick: (e) => {
              try {
                new Function("e", "injectTestMessage('GMAIL')")(e);
              } catch (err) {
                console.error(err);
              }
            },
            style: { "background": "#db2777", "borderColor": "#be185d", "fontSize": "0.82rem", "padding": "0.45rem 1rem" }
          },
          "\u{1F680} Inject Test Gmail"
        )))
      ),
      /* @__PURE__ */ import_react13.default.createElement(
        "div",
        {
          id: "testResultContainer",
          style: { "display": "none", "background": "#020617", "border": "1px solid #334155", "borderRadius": "10px", "padding": "1.25rem", "marginBottom": "1.5rem" }
        },
        /* @__PURE__ */ import_react13.default.createElement(
          "div",
          {
            style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "1rem", "flexWrap": "wrap", "gap": "0.5rem" }
          },
          /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.75rem" } }, /* @__PURE__ */ import_react13.default.createElement("h4", { style: { "margin": "0", "fontSize": "1rem", "color": "#ffffff" } }, "\u{1F52C} Complete Processing Result"), /* @__PURE__ */ import_react13.default.createElement(
            "span",
            {
              id: "testResultStatusBadge",
              className: "badge",
              style: { "fontSize": "0.8rem", "padding": "0.3rem 0.75rem" }
            },
            "UNKNOWN"
          )),
          /* @__PURE__ */ import_react13.default.createElement("div", { id: "testResultMeta", style: { "fontSize": "0.8rem", "color": "#94a3b8", "fontFamily": "monospace" } })
        ),
        /* @__PURE__ */ import_react13.default.createElement(
          "div",
          {
            style: { "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(130px, 1fr))", "gap": "0.75rem", "marginBottom": "1.25rem" }
          },
          /* @__PURE__ */ import_react13.default.createElement("div", { style: { "background": "#0f172a", "padding": "0.6rem 0.8rem", "borderRadius": "6px", "border": "1px solid #1e293b" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "fontSize": "0.7rem", "color": "#64748b", "textTransform": "uppercase" } }, "Source"), /* @__PURE__ */ import_react13.default.createElement("div", { id: "testResultSource", style: { "fontWeight": "700", "color": "#f8fafc", "fontSize": "0.9rem" } }, "-")),
          /* @__PURE__ */ import_react13.default.createElement("div", { style: { "background": "#0f172a", "padding": "0.6rem 0.8rem", "borderRadius": "6px", "border": "1px solid #1e293b" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "fontSize": "0.7rem", "color": "#64748b", "textTransform": "uppercase" } }, "Amount"), /* @__PURE__ */ import_react13.default.createElement("div", { id: "testResultAmount", style: { "fontWeight": "700", "color": "#38bdf8", "fontSize": "0.9rem" } }, "-")),
          /* @__PURE__ */ import_react13.default.createElement("div", { style: { "background": "#0f172a", "padding": "0.6rem 0.8rem", "borderRadius": "6px", "border": "1px solid #1e293b" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "fontSize": "0.7rem", "color": "#64748b", "textTransform": "uppercase" } }, "Reference / UTR"), /* @__PURE__ */ import_react13.default.createElement(
            "div",
            {
              id: "testResultRef",
              style: { "fontWeight": "700", "color": "#f8fafc", "fontSize": "0.85rem", "fontFamily": "monospace" }
            },
            "-"
          )),
          /* @__PURE__ */ import_react13.default.createElement("div", { style: { "background": "#0f172a", "padding": "0.6rem 0.8rem", "borderRadius": "6px", "border": "1px solid #1e293b" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "fontSize": "0.7rem", "color": "#64748b", "textTransform": "uppercase" } }, "Failing Reason"), /* @__PURE__ */ import_react13.default.createElement("div", { id: "testResultReason", style: { "fontWeight": "700", "color": "#f87171", "fontSize": "0.82rem" } }, "None"))
        ),
        /* @__PURE__ */ import_react13.default.createElement(
          "div",
          {
            style: { "fontSize": "0.8rem", "fontWeight": "700", "color": "#94a3b8", "marginBottom": "0.6rem", "textTransform": "uppercase" }
          },
          "Verification Pipeline Stage Inspection"
        ),
        /* @__PURE__ */ import_react13.default.createElement("div", { id: "testResultStagesList", style: { "display": "flex", "flexDirection": "column", "gap": "0.5rem" } })
      ),
      /* @__PURE__ */ import_react13.default.createElement("div", { style: { "background": "#0b0f19", "border": "1px solid #1e293b", "borderRadius": "10px", "padding": "1.1rem" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.75rem" } }, /* @__PURE__ */ import_react13.default.createElement("strong", { style: { "color": "#ffffff", "fontSize": "0.88rem", "display": "flex", "alignItems": "center", "gap": "0.4rem" } }, "\u{1F4DC} Test Mode Audit Log"), /* @__PURE__ */ import_react13.default.createElement(
        "button",
        {
          className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
          onClick: (e) => {
            try {
              new Function("e", "fetchTestModeAuditLog()")(e);
            } catch (err) {
              console.error(err);
            }
          },
          style: { "fontSize": "0.72rem", "padding": "0.25rem 0.6rem" }
        },
        "\u21BB Refresh Audit"
      )), /* @__PURE__ */ import_react13.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react13.default.createElement("table", { style: { "width": "100%", "borderCollapse": "collapse", "fontSize": "0.78rem", "textAlign": "left" } }, /* @__PURE__ */ import_react13.default.createElement("thead", null, /* @__PURE__ */ import_react13.default.createElement("tr", { style: { "borderBottom": "1px solid #334155", "color": "#64748b" } }, /* @__PURE__ */ import_react13.default.createElement("th", { style: { "padding": "0.4rem" } }, "Time"), /* @__PURE__ */ import_react13.default.createElement("th", { style: { "padding": "0.4rem" } }, "Action / Message ID"), /* @__PURE__ */ import_react13.default.createElement("th", { style: { "padding": "0.4rem" } }, "Source"), /* @__PURE__ */ import_react13.default.createElement("th", { style: { "padding": "0.4rem" } }, "Result"), /* @__PURE__ */ import_react13.default.createElement("th", { style: { "padding": "0.4rem" } }, "Raw Message"))), /* @__PURE__ */ import_react13.default.createElement("tbody", { id: "testAuditLogTableBody" }, /* @__PURE__ */ import_react13.default.createElement("tr", null, /* @__PURE__ */ import_react13.default.createElement("td", { colSpan: "5", style: { "padding": "1rem", "textAlign": "center", "color": "#64748b" } }, "Loading test audit records..."))))))
    )
  ), /* @__PURE__ */ import_react13.default.createElement(
    "div",
    {
      className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm",
      style: { "border": "2px solid #8b5cf6", "background": "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(15,23,42,0.98) 100%)", "marginBottom": "1.5rem" }
    },
    /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "flex-start", "flexWrap": "wrap", "gap": "1rem" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "flex": "1", "minWidth": "280px" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.6rem", "marginBottom": "0.35rem" } }, /* @__PURE__ */ import_react13.default.createElement("span", { style: { "fontSize": "1.35rem" } }, "\u{1F3AD}"), /* @__PURE__ */ import_react13.default.createElement("strong", { style: { "fontSize": "1.15rem", "color": "#ffffff" } }, "UPI Server Health: False Narrative Switch"), /* @__PURE__ */ import_react13.default.createElement(
      "span",
      {
        className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20",
        id: "falseNarrativeBadge",
        style: { "fontSize": "0.75rem", "padding": "0.25rem 0.65rem" }
      },
      "\u26AA OFF \xB7 REAL SERVER STATUS"
    )), /* @__PURE__ */ import_react13.default.createElement(
      "p",
      {
        style: { "fontSize": "0.84rem", "color": "var(--text-muted)", "marginTop": "0.4rem", "maxWidth": "760px", "lineHeight": "1.5" }
      },
      "Override the live observer status to test checkout portal behavior under different UPI server health scenarios: ",
      /* @__PURE__ */ import_react13.default.createElement("strong", null, "Green"),
      " (Healthy: Server Is Working), ",
      /* @__PURE__ */ import_react13.default.createElement("strong", null, "Yellow"),
      " (Degraded: Extra processing seconds), or ",
      /* @__PURE__ */ import_react13.default.createElement("strong", null, "Red"),
      " (Downtime: Server Facing Issues).",
      /* @__PURE__ */ import_react13.default.createElement("strong", null, "Automatically turns off after 10 minutes"),
      "."
    ), /* @__PURE__ */ import_react13.default.createElement(
      "div",
      {
        style: { "display": "flex", "alignItems": "center", "gap": "0.75rem", "marginTop": "0.6rem", "fontSize": "0.78rem", "color": "#94a3b8", "flexWrap": "wrap" }
      },
      /* @__PURE__ */ import_react13.default.createElement("span", null, "\u26A1 ", /* @__PURE__ */ import_react13.default.createElement("strong", null, "QR Code Invariant:"), " The dynamic UPI QR code always loads and displays whether servers are UP, BUSY, or DOWN."),
      /* @__PURE__ */ import_react13.default.createElement("span", { id: "falseNarrativeCountdownWrap", style: { "display": "none", "color": "#c084fc", "fontWeight": "700" } }, "\u23F1 Auto-expiry: ", /* @__PURE__ */ import_react13.default.createElement("span", { id: "falseNarrativeTimerVal" }, "10:00"))
    )), /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "flexDirection": "column", "gap": "0.5rem", "alignItems": "flex-end" } }, /* @__PURE__ */ import_react13.default.createElement(
      "div",
      {
        style: { "fontSize": "0.75rem", "fontWeight": "700", "color": "#c4b5fd", "textTransform": "uppercase", "letterSpacing": "0.04em" }
      },
      "Select Narrative to Test:"
    ), /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "gap": "6px", "flexWrap": "wrap" } }, /* @__PURE__ */ import_react13.default.createElement(
      "button",
      {
        type: "button",
        id: "btnNarrativeGreen",
        onClick: (e) => {
          try {
            new Function("e", "handleFalseNarrativeSelect('GREEN')")(e);
          } catch (err) {
            console.error(err);
          }
        },
        style: { "background": "#064e3b", "border": "1px solid #059669", "color": "#6ee7b7", "fontSize": "0.8rem", "fontWeight": "700", "padding": "6px 12px", "borderRadius": "6px", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "5px", "transition": "all 0.15s" }
      },
      "\u{1F7E2} Green"
    ), /* @__PURE__ */ import_react13.default.createElement(
      "button",
      {
        type: "button",
        id: "btnNarrativeYellow",
        onClick: (e) => {
          try {
            new Function("e", "handleFalseNarrativeSelect('YELLOW')")(e);
          } catch (err) {
            console.error(err);
          }
        },
        style: { "background": "#78350f", "border": "1px solid #d97706", "color": "#fde68a", "fontSize": "0.8rem", "fontWeight": "700", "padding": "6px 12px", "borderRadius": "6px", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "5px", "transition": "all 0.15s" }
      },
      "\u{1F7E1} Yellow"
    ), /* @__PURE__ */ import_react13.default.createElement(
      "button",
      {
        type: "button",
        id: "btnNarrativeRed",
        onClick: (e) => {
          try {
            new Function("e", "handleFalseNarrativeSelect('RED')")(e);
          } catch (err) {
            console.error(err);
          }
        },
        style: { "background": "#7f1d1d", "border": "1px solid #dc2626", "color": "#fca5a5", "fontSize": "0.8rem", "fontWeight": "700", "padding": "6px 12px", "borderRadius": "6px", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "5px", "transition": "all 0.15s" }
      },
      "\u{1F534} Red"
    ), /* @__PURE__ */ import_react13.default.createElement(
      "button",
      {
        type: "button",
        id: "btnNarrativeOff",
        onClick: (e) => {
          try {
            new Function("e", "handleFalseNarrativeSelect('OFF')")(e);
          } catch (err) {
            console.error(err);
          }
        },
        style: { "background": "#1e293b", "border": "1px solid #475569", "color": "#cbd5e1", "fontSize": "0.8rem", "fontWeight": "700", "padding": "6px 12px", "borderRadius": "6px", "cursor": "pointer", "display": "inline-flex", "alignItems": "center", "gap": "5px", "transition": "all 0.15s" }
      },
      "\u26AA Off (Live)"
    ))))
  ), /* @__PURE__ */ import_react13.default.createElement(
    "div",
    {
      className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm",
      style: { "border": "2px solid #38bdf8", "background": "linear-gradient(135deg, rgba(56,189,248,0.06) 0%, rgba(15,23,42,0.95) 100%)" }
    },
    /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "flexWrap": "wrap", "gap": "1rem" } }, /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.6rem" } }, /* @__PURE__ */ import_react13.default.createElement("span", { style: { "fontSize": "1.35rem" } }, "\u{1F6CD}\uFE0F"), /* @__PURE__ */ import_react13.default.createElement("strong", { style: { "fontSize": "1.15rem", "color": "#ffffff" } }, "YOUPI Showcase Store (Port 5000)"), /* @__PURE__ */ import_react13.default.createElement(
      "span",
      {
        className: "badge",
        id: "cardStoreBadge",
        style: { "fontSize": "0.8rem", "padding": "0.3rem 0.75rem" }
      },
      "CHECKING..."
    )), /* @__PURE__ */ import_react13.default.createElement(
      "p",
      {
        style: { "fontSize": "0.84rem", "color": "var(--text-muted)", "marginTop": "0.4rem", "maxWidth": "720px", "lineHeight": "1.5" }
      },
      "Toggle the public YOUPI Showcase Store on or off anytime. When disabled, the Node process is terminated and host port ",
      /* @__PURE__ */ import_react13.default.createElement("code", null, "5000"),
      " is freed. When enabled, it launches instantly."
    )), /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.75rem" } }, /* @__PURE__ */ import_react13.default.createElement(
      "a",
      {
        href: "http://localhost:5000",
        id: "btnOpenStoreLink",
        target: "_blank",
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "fontSize": "0.85rem", "padding": "0.6rem 1.1rem", "textDecoration": "none" }
      },
      "\u{1F310} Open Store (5000) \u2197"
    ), /* @__PURE__ */ import_react13.default.createElement(
      "button",
      {
        className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        id: "btnToggleYoupiStore",
        style: { "fontSize": "0.88rem", "padding": "0.65rem 1.4rem" },
        onClick: (e) => {
          try {
            new Function("e", "toggleYoupiStore()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u26A1 Toggle Port 5000"
    )))
  ), /* @__PURE__ */ import_react13.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F5A5}\uFE0F Managed Host Processes (Unified Control Center)"), /* @__PURE__ */ import_react13.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Native child process supervisor. Zero external container dependencies. Start, stop, or restart any gateway service independently.")), /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "alignItems": "center" } }, /* @__PURE__ */ import_react13.default.createElement("button", { className: "btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "startAllServices()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u25B6 Start All"), /* @__PURE__ */ import_react13.default.createElement("button", { className: "btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "stopAllServices()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u23F9 Stop All"), /* @__PURE__ */ import_react13.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "loadServices()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u{1F504} Refresh"))), /* @__PURE__ */ import_react13.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react13.default.createElement("table", { className: "w-full border-collapse text-sm" }, /* @__PURE__ */ import_react13.default.createElement("thead", null, /* @__PURE__ */ import_react13.default.createElement("tr", null, /* @__PURE__ */ import_react13.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Service Name & ID"), /* @__PURE__ */ import_react13.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Port"), /* @__PURE__ */ import_react13.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "PID"), /* @__PURE__ */ import_react13.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Status"), /* @__PURE__ */ import_react13.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Uptime"), /* @__PURE__ */ import_react13.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Process Controls"))), /* @__PURE__ */ import_react13.default.createElement("tbody", { id: "servicesTableBody" }, /* @__PURE__ */ import_react13.default.createElement("tr", null, /* @__PURE__ */ import_react13.default.createElement("td", { colSpan: "6", style: { "textAlign": "center", "color": "var(--text-muted)", "padding": "1.5rem" } }, "Loading managed processes...")))))), /* @__PURE__ */ import_react13.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F4DC} Real-Time Aggregate Terminal Console"), /* @__PURE__ */ import_react13.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Live SSE stdout/stderr broadcast stream from all active processes.")), /* @__PURE__ */ import_react13.default.createElement("div", { style: { "display": "flex", "gap": "0.6rem", "alignItems": "center" } }, /* @__PURE__ */ import_react13.default.createElement("select", { className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", id: "logServiceFilter", style: { "padding": "0.4rem 0.75rem", "fontSize": "0.78rem" }, onChange: (e) => {
    try {
      new Function("e", "filterLogs()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, /* @__PURE__ */ import_react13.default.createElement("option", { value: "ALL" }, "All Services"), /* @__PURE__ */ import_react13.default.createElement("option", { value: "payment-api" }, "payment-api (6100)"), /* @__PURE__ */ import_react13.default.createElement("option", { value: "checkout-portal" }, "checkout-portal (7000)"), /* @__PURE__ */ import_react13.default.createElement("option", { value: "merchant-admin" }, "merchant-admin (6001)"), /* @__PURE__ */ import_react13.default.createElement("option", { value: "coin-wallet-store" }, "coin-wallet-store (5000)"), /* @__PURE__ */ import_react13.default.createElement("option", { value: "sms-observer" }, "sms-observer (6002)"), /* @__PURE__ */ import_react13.default.createElement("option", { value: "gmail-observer" }, "gmail-observer (6003)")), /* @__PURE__ */ import_react13.default.createElement(
    "button",
    {
      className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
      style: { "padding": "0.4rem 0.75rem", "fontSize": "0.78rem" },
      onClick: (e) => {
        try {
          new Function("e", "clearLogsConsole()")(e);
        } catch (err) {
          console.error(err);
        }
      }
    },
    "Clear Console"
  ))), /* @__PURE__ */ import_react13.default.createElement("div", { className: "terminal-container rounded-xl border border-slate-800 bg-[#020617] p-4 h-[380px] overflow-y-auto font-mono text-xs text-cyan-300 leading-relaxed shadow-inner", id: "terminalLogWindow" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "log-line log-system" }, /* @__PURE__ */ import_react13.default.createElement("span", { className: "log-ts" }, "[Ready]"), " Unified Control Center operational. Awaiting log streams...")))));
}

// apps/merchant-admin/src/views/partials/developer-hub/SubViewCloudflareTunnel.jsx
var import_react14 = __toESM(require_react(), 1);
function SubViewCloudflareTunnel() {
  return /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement("div", { id: "subViewDevCloudflare", hidden: true }, /* @__PURE__ */ import_react14.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm", id: "cardCloudflareConfig" }, /* @__PURE__ */ import_react14.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react14.default.createElement("div", null, /* @__PURE__ */ import_react14.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u2601\uFE0F Cloudflare Tunnel Configuration"), /* @__PURE__ */ import_react14.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Single canonical production gateway routing. Enter your domain and prefix; all routes, local service ports, and dashboard mappings are system-derived.")), /* @__PURE__ */ import_react14.default.createElement("span", { className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20", id: "envModeDisplayBadge" }, "\u{1F4BB} LOCALHOST MODE")), /* @__PURE__ */ import_react14.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "1rem", "marginBottom": "1.5rem" } }, /* @__PURE__ */ import_react14.default.createElement(
    "div",
    {
      id: "btnEnvLocalhost",
      onClick: (e) => {
        try {
          new Function("e", "setEnvMode('localhost')")(e);
        } catch (err) {
          console.error(err);
        }
      },
      style: { "background": "#0f172a", "border": "2px solid #38bdf8", "borderRadius": "0.75rem", "padding": "1.2rem", "cursor": "pointer", "transition": "all 0.2s" }
    },
    /* @__PURE__ */ import_react14.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.4rem" } }, /* @__PURE__ */ import_react14.default.createElement("strong", { style: { "fontSize": "1rem", "color": "#f1f5f9" } }, "\u{1F4BB} Localhost Mode (Development)"), /* @__PURE__ */ import_react14.default.createElement("span", { className: "badge badge-primary", id: "badgeLocalhostActive" }, "ACTIVE")),
    /* @__PURE__ */ import_react14.default.createElement("p", { style: { "fontSize": "0.8rem", "color": "var(--text-muted)", "margin": "0", "lineHeight": "1.4" } }, "Routes API, Checkout, and Observers directly over local developer ports (", /* @__PURE__ */ import_react14.default.createElement("code", null, "7000"), ",", /* @__PURE__ */ import_react14.default.createElement("code", null, "6100"), ", ", /* @__PURE__ */ import_react14.default.createElement("code", null, "6001"), ", ", /* @__PURE__ */ import_react14.default.createElement("code", null, "6003"), ", ", /* @__PURE__ */ import_react14.default.createElement("code", null, "5000"), ").")
  ), /* @__PURE__ */ import_react14.default.createElement(
    "div",
    {
      id: "btnEnvProduction",
      onClick: (e) => {
        try {
          new Function("e", "setEnvMode('production')")(e);
        } catch (err) {
          console.error(err);
        }
      },
      style: { "background": "#0b1120", "border": "1px solid var(--border)", "borderRadius": "0.75rem", "padding": "1.2rem", "cursor": "pointer", "transition": "all 0.2s" }
    },
    /* @__PURE__ */ import_react14.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.4rem" } }, /* @__PURE__ */ import_react14.default.createElement("strong", { style: { "fontSize": "1rem", "color": "#f1f5f9" } }, "\u{1F30D} Production Mode (Cloudflare Tunnel)"), /* @__PURE__ */ import_react14.default.createElement("span", { className: "badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20", id: "badgeProductionActive", style: { "display": "none" } }, "ACTIVE")),
    /* @__PURE__ */ import_react14.default.createElement("p", { style: { "fontSize": "0.8rem", "color": "var(--text-muted)", "margin": "0", "lineHeight": "1.4" } }, "Authoritative production mode using deterministic Cloudflare public hostnames with SSL (", /* @__PURE__ */ import_react14.default.createElement("code", null, "https://"), ").")
  )), /* @__PURE__ */ import_react14.default.createElement(
    "div",
    {
      style: { "background": "#090d16", "border": "1px solid var(--border)", "borderRadius": "0.75rem", "padding": "1.25rem", "marginBottom": "1.5rem" }
    },
    /* @__PURE__ */ import_react14.default.createElement("div", { style: { "fontSize": "0.88rem", "fontWeight": "700", "color": "#38bdf8", "marginBottom": "0.75rem" } }, "\u2601\uFE0F Cloudflare Domain & Prefix Setup"),
    /* @__PURE__ */ import_react14.default.createElement(
      "div",
      {
        style: { "display": "grid", "gridTemplateColumns": "2fr 1fr 1.3fr", "gap": "1rem", "alignItems": "flex-end", "marginBottom": "1rem" }
      },
      /* @__PURE__ */ import_react14.default.createElement("div", null, /* @__PURE__ */ import_react14.default.createElement(
        "label",
        {
          style: { "display": "block", "fontSize": "0.8rem", "fontWeight": "700", "color": "var(--text-muted)", "marginBottom": "0.35rem" }
        },
        "1. Cloudflare Domain"
      ), /* @__PURE__ */ import_react14.default.createElement(
        "input",
        {
          className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
          id: "settingDomainTld",
          type: "text",
          placeholder: "example.com",
          defaultValue: "",
          onInput: (e) => {
            try {
              new Function("e", "updateCloudflarePreview()")(e);
            } catch (err) {
              console.error(err);
            }
          },
          style: { "width": "100%" }
        }
      )),
      /* @__PURE__ */ import_react14.default.createElement("div", null, /* @__PURE__ */ import_react14.default.createElement(
        "label",
        {
          style: { "display": "block", "fontSize": "0.8rem", "fontWeight": "700", "color": "var(--text-muted)", "marginBottom": "0.35rem" }
        },
        "2. Deployment Prefix"
      ), /* @__PURE__ */ import_react14.default.createElement(
        "input",
        {
          className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
          id: "settingDomainPrefix",
          type: "text",
          placeholder: "pay",
          defaultValue: "pay",
          onInput: (e) => {
            try {
              new Function("e", "updateCloudflarePreview()")(e);
            } catch (err) {
              console.error(err);
            }
          },
          style: { "width": "100%" }
        }
      )),
      /* @__PURE__ */ import_react14.default.createElement("div", null, /* @__PURE__ */ import_react14.default.createElement(
        "button",
        {
          className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
          style: { "width": "100%", "padding": "0.65rem", "justifyContent": "center" },
          onClick: (e) => {
            try {
              new Function("e", "saveDomainSettings()")(e);
            } catch (err) {
              console.error(err);
            }
          }
        },
        "\u{1F4BE} SAVE CONFIGURATION"
      ))
    )
  ), /* @__PURE__ */ import_react14.default.createElement("div", { style: { "marginBottom": "1.5rem" } }, /* @__PURE__ */ import_react14.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.75rem" } }, /* @__PURE__ */ import_react14.default.createElement("div", null, /* @__PURE__ */ import_react14.default.createElement("div", { style: { "fontSize": "0.95rem", "fontWeight": "800", "color": "#f1f5f9" } }, "\u{1F6E3}\uFE0F CLOUDFLARE TUNNEL ROUTES"), /* @__PURE__ */ import_react14.default.createElement("div", { style: { "fontSize": "0.78rem", "color": "var(--text-muted)" } }, "Exact routes to create in Cloudflare Dashboard. All ports and roles are system-defined.")), /* @__PURE__ */ import_react14.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", style: { "fontSize": "0.75rem" }, onClick: (e) => {
    try {
      new Function("e", "copyAllMappings()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u{1F4CB} COPY ALL MAPPINGS")), /* @__PURE__ */ import_react14.default.createElement("div", { id: "cloudflareRoutesContainer", style: { "display": "flex", "flexDirection": "column", "gap": "0.75rem" } })), /* @__PURE__ */ import_react14.default.createElement("div", { style: { "background": "#090d16", "border": "1px solid var(--border)", "borderRadius": "0.75rem", "padding": "1.25rem" } }, /* @__PURE__ */ import_react14.default.createElement("div", { style: { "fontSize": "0.88rem", "fontWeight": "700", "color": "#38bdf8", "marginBottom": "0.75rem" } }, "\u{1F4D6} EXACT CLOUDFLARE DASHBOARD INSTRUCTIONS"), /* @__PURE__ */ import_react14.default.createElement(
    "div",
    {
      style: { "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "0.4rem", "marginBottom": "1rem", "fontSize": "0.8rem", "fontFamily": "monospace", "background": "#020617", "padding": "0.75rem", "borderRadius": "0.5rem", "border": "1px solid #1e293b" }
    },
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#38bdf8", "fontWeight": "700" } }, "Cloudflare Dashboard"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#64748b" } }, "\u2193"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#38bdf8", "fontWeight": "700" } }, "Networking"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#64748b" } }, "\u2193"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#38bdf8", "fontWeight": "700" } }, "Tunnels"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#64748b" } }, "\u2193"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#38bdf8", "fontWeight": "700" } }, "Select YOUPI Tunnel"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#64748b" } }, "\u2193"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#38bdf8", "fontWeight": "700" } }, "Routes"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#64748b" } }, "\u2193"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#38bdf8", "fontWeight": "700" } }, "Add route"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#64748b" } }, "\u2193"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#38bdf8", "fontWeight": "700" } }, "Published application"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#64748b" } }, "\u2193"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#38bdf8", "fontWeight": "700" } }, "Enter Hostname"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#64748b" } }, "\u2193"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#38bdf8", "fontWeight": "700" } }, "Enter Service URL"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#64748b" } }, "\u2193"),
    /* @__PURE__ */ import_react14.default.createElement("span", { style: { "color": "#10b981", "fontWeight": "bold" } }, "Save")
  ), /* @__PURE__ */ import_react14.default.createElement("div", { style: { "fontSize": "0.82rem", "color": "var(--text-muted)", "lineHeight": "1.5" } }, /* @__PURE__ */ import_react14.default.createElement("p", { style: { "margin": "0 0 0.5rem 0" } }, "\u2022 ", /* @__PURE__ */ import_react14.default.createElement("strong", null, "Public Hostname:"), " The URL users and webhooks access from the internet."), /* @__PURE__ */ import_react14.default.createElement("p", { style: { "margin": "0 0 0.5rem 0" } }, "\u2022 ", /* @__PURE__ */ import_react14.default.createElement("strong", null, "Service URL:"), " The local service ", /* @__PURE__ */ import_react14.default.createElement("code", null, "cloudflared"), "forwards incoming traffic to on this host."), /* @__PURE__ */ import_react14.default.createElement("p", { style: { "margin": "0 0 0.5rem 0", "color": "#ef4444" } }, "\u2022 ", /* @__PURE__ */ import_react14.default.createElement("strong", null, "DO NOT EXPOSE:"), " SMS Observer (", /* @__PURE__ */ import_react14.default.createElement("code", null, "localhost:6002"), "), Control Center (", /* @__PURE__ */ import_react14.default.createElement("code", null, "localhost:8090"), "), and internal database endpoints must NEVER be published to Cloudflare."), /* @__PURE__ */ import_react14.default.createElement("p", { style: { "margin": "0" } }, "\u2022 Android SMS observer connects to ", /* @__PURE__ */ import_react14.default.createElement("strong", null, "Payment API"), "(", /* @__PURE__ */ import_react14.default.createElement("code", null, "pay-api.example.com"), " / ", /* @__PURE__ */ import_react14.default.createElement("code", null, "6100"), "), not directly to internal observer ports."))))));
}

// apps/merchant-admin/src/views/partials/developer-hub/SubViewWebhooksSecrets.jsx
var import_react15 = __toESM(require_react(), 1);
function SubViewWebhooksSecrets() {
  return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("div", { id: "subViewDevWebhooks", hidden: true }, /* @__PURE__ */ import_react15.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react15.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react15.default.createElement("div", null, /* @__PURE__ */ import_react15.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u26A1 Webhook Endpoints & Cryptographic Secrets"), /* @__PURE__ */ import_react15.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Configure where real-time signed payment status events are dispatched via HMAC-SHA256."))), /* @__PURE__ */ import_react15.default.createElement("div", { style: { "display": "flex", "flexDirection": "column", "gap": "1.25rem" } }, /* @__PURE__ */ import_react15.default.createElement("div", null, /* @__PURE__ */ import_react15.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Webhook Destination URL"), /* @__PURE__ */ import_react15.default.createElement(
    "input",
    {
      className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
      id: "settingWebhookUrl",
      type: "text",
      placeholder: "https://yourstore.com/api/payment/webhook",
      style: { "width": "100%" }
    }
  ), /* @__PURE__ */ import_react15.default.createElement("span", { style: { "fontSize": "0.72rem", "color": "var(--text-muted)", "display": "block", "marginTop": "0.25rem" } }, "Server endpoint to receive instant signed transaction status notifications.")), /* @__PURE__ */ import_react15.default.createElement("div", null, /* @__PURE__ */ import_react15.default.createElement("label", { style: { "display": "block", "fontSize": "0.82rem", "fontWeight": "700", "marginBottom": "0.35rem" } }, "Webhook Secret (HMAC-SHA256 Signing)"), /* @__PURE__ */ import_react15.default.createElement(
    "input",
    {
      className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
      id: "settingWebhookSecret",
      type: "text",
      readOnly: true,
      style: { "width": "100%", "color": "#94a3b8", "fontFamily": "monospace" }
    }
  )), /* @__PURE__ */ import_react15.default.createElement(
    "button",
    {
      className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
      style: { "width": "auto", "alignSelf": "flex-start" },
      onClick: (e) => {
        try {
          new Function("e", "saveMerchantBrandingAndToggles()")(e);
        } catch (err) {
          console.error(err);
        }
      }
    },
    "\u{1F4BE} Save Webhook Settings"
  )))));
}

// apps/merchant-admin/src/views/partials/developer-hub/SubViewAndroidGateway.jsx
var import_react16 = __toESM(require_react(), 1);
function SubViewAndroidGateway() {
  return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement("div", { id: "subViewDevAndroid", hidden: true }, /* @__PURE__ */ import_react16.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react16.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react16.default.createElement("div", null, /* @__PURE__ */ import_react16.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F4F1} Android SMS Companion App & Device Pairing"), /* @__PURE__ */ import_react16.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Install the APK on your bank-linked phone and scan the pairing QR code to auto-forward incoming bank credit SMS.")), /* @__PURE__ */ import_react16.default.createElement("span", { className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20", id: "smsDevBadge" }, "STANDBY")), /* @__PURE__ */ import_react16.default.createElement(
    "div",
    {
      style: { "background": "#090d16", "border": "1px solid var(--border)", "borderRadius": "0.75rem", "padding": "1.25rem", "textAlign": "center", "marginBottom": "1.5rem" }
    },
    /* @__PURE__ */ import_react16.default.createElement("div", { style: { "fontSize": "0.85rem", "fontWeight": "800", "color": "#cbd5e1", "marginBottom": "0.75rem" } }, "1. Scan to Pair Phone"),
    /* @__PURE__ */ import_react16.default.createElement(
      "div",
      {
        id: "smsPairQrBox",
        style: { "width": "240px", "height": "240px", "margin": "0 auto", "background": "#ffffff", "borderRadius": "0.75rem", "padding": "12px", "display": "flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "0 4px 16px rgba(0,0,0,0.5)" }
      },
      "Loading Pairing QR..."
    ),
    /* @__PURE__ */ import_react16.default.createElement("div", { style: { "fontSize": "0.8rem", "color": "#94a3b8", "margin": "0.75rem 0" } }, "Enrollment Secret: ", /* @__PURE__ */ import_react16.default.createElement("code", { id: "smsTokenVal2", style: { "color": "#38bdf8", "fontWeight": "700" } }, "Loading..."), /* @__PURE__ */ import_react16.default.createElement(
      "button",
      {
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "fontSize": "0.7rem", "padding": "0.2rem 0.5rem", "marginLeft": "0.5rem" },
        onClick: (e) => {
          try {
            new Function("e", "copySmsToken()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F4CB} Copy"
    )),
    /* @__PURE__ */ import_react16.default.createElement("div", { style: { "display": "flex", "justifyContent": "center", "gap": "0.5rem" } }, /* @__PURE__ */ import_react16.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
      try {
        new Function("e", "fetchSmsPairQr()")(e);
      } catch (err) {
        console.error(err);
      }
    } }, "\u{1F504} Refresh QR"), /* @__PURE__ */ import_react16.default.createElement("a", { className: "btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", href: "/youpi-sms-gateway.apk", download: "youpi-sms-gateway.apk" }, "\u{1F4F2} Download Android APK"))
  ), /* @__PURE__ */ import_react16.default.createElement("div", { style: { "marginBottom": "1.5rem" } }, /* @__PURE__ */ import_react16.default.createElement("div", { style: { "fontSize": "0.88rem", "fontWeight": "700", "color": "#f1f5f9", "marginBottom": "0.5rem" } }, "Paired Mobile Observers"), /* @__PURE__ */ import_react16.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react16.default.createElement("table", { className: "w-full border-collapse text-sm" }, /* @__PURE__ */ import_react16.default.createElement("thead", null, /* @__PURE__ */ import_react16.default.createElement("tr", null, /* @__PURE__ */ import_react16.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Device Name"), /* @__PURE__ */ import_react16.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Device ID"), /* @__PURE__ */ import_react16.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Paired At"), /* @__PURE__ */ import_react16.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Action"))), /* @__PURE__ */ import_react16.default.createElement("tbody", { id: "smsDevicesTableBody" }, /* @__PURE__ */ import_react16.default.createElement("tr", null, /* @__PURE__ */ import_react16.default.createElement("td", { colSpan: "4", style: { "textAlign": "center", "color": "var(--text-muted)", "padding": "1rem" } }, "No devices paired yet. Scan QR above to pair.")))))), /* @__PURE__ */ import_react16.default.createElement("div", { style: { "background": "#090d16", "border": "1px solid var(--border)", "borderRadius": "0.5rem", "padding": "1rem" } }, /* @__PURE__ */ import_react16.default.createElement("div", { style: { "fontSize": "0.85rem", "fontWeight": "700", "color": "#38bdf8", "marginBottom": "0.5rem" } }, "\u{1F9EA} Test Bank SMS Parser"), /* @__PURE__ */ import_react16.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "marginBottom": "0.5rem", "flexWrap": "wrap" } }, /* @__PURE__ */ import_react16.default.createElement(
    "input",
    {
      className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
      type: "text",
      id: "testSmsSender",
      defaultValue: "HDFCBK",
      placeholder: "Sender (e.g. HDFCBK)",
      style: { "width": "120px" }
    }
  ), /* @__PURE__ */ import_react16.default.createElement(
    "input",
    {
      className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
      type: "text",
      id: "testSmsBody",
      defaultValue: "Dear Customer, A/C *1234 credited by Rs 500.00 on 30-Sep-26 by UPI/9212339720/REF987654321 - HDFC Bank",
      placeholder: "SMS Body",
      style: { "flex": "1", "minWidth": "240px" }
    }
  ), /* @__PURE__ */ import_react16.default.createElement("button", { className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "sendTestBankSms()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "Dispatch")), /* @__PURE__ */ import_react16.default.createElement("div", { id: "testSmsResult", style: { "fontSize": "0.78rem", "color": "#94a3b8" } })))));
}

// apps/merchant-admin/src/views/partials/developer-hub/SubViewGmailWhatsAppProtocols.jsx
var import_react17 = __toESM(require_react(), 1);
function SubViewGmailWhatsAppProtocols() {
  return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement("div", { id: "subViewDevProtocols", hidden: true }, /* @__PURE__ */ import_react17.default.createElement("div", { style: { "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "1.5rem" } }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm", id: "gmailObserverCard" }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F4E7} Google Account & Gmail Direct API"), /* @__PURE__ */ import_react17.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Official Google OAuth 2.0 automated observation for real-time UPI credit notifications.")), /* @__PURE__ */ import_react17.default.createElement("span", { className: "badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20", id: "gmailConfigBadge2" }, "NOT CONFIGURED")), /* @__PURE__ */ import_react17.default.createElement(
    "div",
    {
      id: "gmailConnectHeroBox",
      style: { "background": "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(15,23,42,0.6))", "border": "1px solid rgba(59,130,246,0.3)", "borderRadius": "0.75rem", "padding": "1.25rem", "marginBottom": "1.25rem", "display": "flex", "flexDirection": "column", "gap": "0.75rem" }
    },
    /* @__PURE__ */ import_react17.default.createElement(
      "div",
      {
        style: { "display": "flex", "justifyContent": "space-between", "alignItems": "flex-start", "flexWrap": "wrap", "gap": "0.75rem" }
      },
      /* @__PURE__ */ import_react17.default.createElement("div", { style: { "flex": "1", "minWidth": "260px" } }, /* @__PURE__ */ import_react17.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.5rem", "marginBottom": "0.25rem" } }, /* @__PURE__ */ import_react17.default.createElement(
        "span",
        {
          id: "gmailHeroStatusDot",
          style: { "width": "10px", "height": "10px", "borderRadius": "50%", "background": "#ef4444", "display": "inline-block" }
        }
      ), /* @__PURE__ */ import_react17.default.createElement("strong", { id: "gmailHeroStatusTitle", style: { "fontSize": "0.95rem", "color": "#fff" } }, "Google Account Disconnected")), /* @__PURE__ */ import_react17.default.createElement("div", { id: "gmailHeroStatusDesc", style: { "fontSize": "0.82rem", "color": "var(--text-muted)", "lineHeight": "1.4" } }, "Connect your bank-registered Google account with one click. When you click authorize, YouPI PG handles the full OAuth flow, acquires persistent offline credentials, and activates 1-second UPI credit polling.")),
      /* @__PURE__ */ import_react17.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "alignItems": "center" } }, /* @__PURE__ */ import_react17.default.createElement(
        "button",
        {
          type: "button",
          id: "btnGooglePrimaryAuth",
          className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
          onClick: (e) => {
            try {
              new Function("e", "startAutomatedGoogleAuth()")(e);
            } catch (err) {
              console.error(err);
            }
          },
          style: { "display": "inline-flex", "alignItems": "center", "gap": "0.6rem", "padding": "0.65rem 1.25rem", "fontSize": "0.9rem", "fontWeight": "700", "background": "#2563eb", "color": "#fff", "border": "none", "borderRadius": "0.5rem", "cursor": "pointer", "boxShadow": "0 4px 14px rgba(37,99,235,0.4)" }
        },
        /* @__PURE__ */ import_react17.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24" }, /* @__PURE__ */ import_react17.default.createElement(
          "path",
          {
            fill: "#ffffff",
            d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          }
        ), /* @__PURE__ */ import_react17.default.createElement(
          "path",
          {
            fill: "#ffffff",
            d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          }
        ), /* @__PURE__ */ import_react17.default.createElement(
          "path",
          {
            fill: "#ffffff",
            d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          }
        ), /* @__PURE__ */ import_react17.default.createElement(
          "path",
          {
            fill: "#ffffff",
            d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          }
        )),
        /* @__PURE__ */ import_react17.default.createElement("span", { id: "btnGooglePrimaryAuthLabel" }, "Connect with Google (One-Click)")
      ), /* @__PURE__ */ import_react17.default.createElement(
        "button",
        {
          type: "button",
          id: "btnGoogleDisconnect",
          className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
          onClick: (e) => {
            try {
              new Function("e", "disconnectGmailAccount()")(e);
            } catch (err) {
              console.error(err);
            }
          },
          style: { "display": "none", "fontSize": "0.8rem", "padding": "0.65rem 0.9rem", "color": "#f87171", "borderColor": "#7f1d1d" }
        },
        "\u274C Disconnect"
      ))
    ),
    /* @__PURE__ */ import_react17.default.createElement(
      "div",
      {
        id: "gmailAuthInProgressBanner",
        style: { "display": "none", "background": "rgba(59,130,246,0.15)", "border": "1px solid #3b82f6", "borderRadius": "0.4rem", "padding": "0.6rem 0.85rem", "fontSize": "0.82rem", "color": "#93c5fd", "alignItems": "center", "gap": "0.5rem" }
      },
      /* @__PURE__ */ import_react17.default.createElement(
        "span",
        {
          className: "spinner",
          style: { "width": "14px", "height": "14px", "border": "2px solid #3b82f6", "borderTopColor": "transparent", "borderRadius": "50%", "display": "inline-block", "animation": "spin 1s linear infinite" }
        }
      ),
      /* @__PURE__ */ import_react17.default.createElement("span", null, "Google Authorization Window Active. Select your account and grant permissions to complete automatic setup...")
    )
  ), /* @__PURE__ */ import_react17.default.createElement(
    "div",
    {
      style: { "background": "#090d16", "border": "1px solid #1e293b", "borderRadius": "0.5rem", "padding": "0.85rem", "marginBottom": "1rem", "fontSize": "0.8rem", "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "0.6rem" }
    },
    /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement("span", { style: { "color": "#64748b" } }, "OAuth Status:"), " ", /* @__PURE__ */ import_react17.default.createElement(
      "strong",
      {
        id: "gmailOAuthStatusText",
        style: { "color": "#f87171" }
      },
      "DISCONNECTED"
    )),
    /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement("span", { style: { "color": "#64748b" } }, "Token Status:"), " ", /* @__PURE__ */ import_react17.default.createElement(
      "strong",
      {
        id: "gmailTokenStatusText",
        style: { "color": "#64748b" }
      },
      "NOT CONFIGURED"
    )),
    /* @__PURE__ */ import_react17.default.createElement("div", { style: { "gridColumn": "span 2", "display": "flex", "alignItems": "center", "gap": "0.4rem" } }, /* @__PURE__ */ import_react17.default.createElement("span", { style: { "color": "#64748b" } }, "Connected Account:"), /* @__PURE__ */ import_react17.default.createElement("strong", { id: "gmailConnectedAccountText", style: { "color": "#38bdf8", "fontFamily": "monospace" } }, "No account authorized")),
    /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement("span", { style: { "color": "#64748b" } }, "Last Successful Poll:"), " ", /* @__PURE__ */ import_react17.default.createElement(
      "span",
      {
        id: "gmailLastPollText",
        style: { "color": "#94a3b8" }
      },
      "Never"
    )),
    /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement("span", { style: { "color": "#64748b" } }, "Observer Pipeline:"), " ", /* @__PURE__ */ import_react17.default.createElement(
      "span",
      {
        id: "gmailLastSentText",
        style: { "color": "#94a3b8" }
      },
      "Standby"
    ))
  ), /* @__PURE__ */ import_react17.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "flexWrap": "wrap", "marginBottom": "0.75rem" } }, /* @__PURE__ */ import_react17.default.createElement("button", { type: "button", className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "testGmailConnection()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u{1F511} Test Live Connection"), /* @__PURE__ */ import_react17.default.createElement("button", { type: "button", className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "startAutomatedGoogleAuth()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u{1F504} Re-authorize Account"), /* @__PURE__ */ import_react17.default.createElement("button", { type: "button", className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "openGmailGuideModal()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u{1F4D6} Setup Guide")), /* @__PURE__ */ import_react17.default.createElement(
    "div",
    {
      id: "gmailTestResultBox",
      style: { "display": "none", "padding": "0.85rem", "borderRadius": "0.5rem", "fontSize": "0.82rem", "marginBottom": "1rem" }
    }
  ), /* @__PURE__ */ import_react17.default.createElement(
    "details",
    {
      style: { "background": "rgba(15,23,42,0.4)", "border": "1px solid #1e293b", "borderRadius": "0.5rem", "padding": "0.6rem 0.85rem" }
    },
    /* @__PURE__ */ import_react17.default.createElement("summary", { style: { "cursor": "pointer", "fontSize": "0.78rem", "fontWeight": "700", "color": "#94a3b8", "userSelect": "none" } }, "\u2699\uFE0F Advanced OAuth Credentials & Manual Override (Optional)"),
    /* @__PURE__ */ import_react17.default.createElement("div", { style: { "display": "flex", "flexDirection": "column", "gap": "0.75rem", "marginTop": "0.85rem" } }, /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement(
      "label",
      {
        style: { "display": "block", "fontSize": "0.75rem", "fontWeight": "700", "color": "var(--text-muted)", "marginBottom": "0.2rem" }
      },
      "Google OAuth Client ID"
    ), /* @__PURE__ */ import_react17.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "text",
        id: "gmailClientIdInput",
        placeholder: "your-client-id.apps.googleusercontent.com",
        style: { "width": "100%", "fontFamily": "monospace", "fontSize": "0.8rem" }
      }
    )), /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.2rem" } }, /* @__PURE__ */ import_react17.default.createElement("label", { style: { "fontSize": "0.75rem", "fontWeight": "700", "color": "var(--text-muted)" } }, "Google OAuth Client Secret"), /* @__PURE__ */ import_react17.default.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "fontSize": "0.68rem", "padding": "0.1rem 0.4rem" },
        onClick: (e) => {
          try {
            new Function("e", "toggleSecretVisibility()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F441}\uFE0F Show/Hide"
    )), /* @__PURE__ */ import_react17.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "password",
        id: "gmailClientSecretInput",
        placeholder: "your-google-client-secret",
        style: { "width": "100%", "fontFamily": "monospace", "fontSize": "0.8rem" }
      }
    )), /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement("div", { style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "0.2rem" } }, /* @__PURE__ */ import_react17.default.createElement("label", { style: { "fontSize": "0.75rem", "fontWeight": "700", "color": "var(--text-muted)" } }, "Exact Authorized Redirect URI"), /* @__PURE__ */ import_react17.default.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "fontSize": "0.68rem", "padding": "0.1rem 0.4rem" },
        onClick: (e) => {
          try {
            new Function("e", "copyGmailRedirectUri()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F4CB} Copy"
    )), /* @__PURE__ */ import_react17.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "text",
        id: "gmailRedirectUriInput",
        readOnly: true,
        style: { "width": "100%", "fontFamily": "monospace", "fontSize": "0.8rem", "background": "#020617", "color": "#38bdf8" }
      }
    )), /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement(
      "label",
      {
        style: { "display": "block", "fontSize": "0.75rem", "fontWeight": "700", "color": "var(--text-muted)", "marginBottom": "0.2rem" }
      },
      "Google Refresh Token"
    ), /* @__PURE__ */ import_react17.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "password",
        id: "gmailRefreshTokenInput",
        placeholder: "your-google-refresh-token",
        style: { "width": "100%", "fontFamily": "monospace", "fontSize": "0.8rem" }
      }
    )), /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement(
      "button",
      {
        type: "button",
        className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "fontSize": "0.8rem", "padding": "0.4rem 0.8rem" },
        onClick: (e) => {
          try {
            new Function("e", "saveGmailCredentials()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "\u{1F4BE} Save Manual Credentials"
    )))
  )), /* @__PURE__ */ import_react17.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react17.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F4AC} WhatsApp Berry Protocol"), /* @__PURE__ */ import_react17.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Automated customer login OTP delivery at checkout.")), /* @__PURE__ */ import_react17.default.createElement("span", { className: "badge badge-warning inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20", id: "waHeaderBadge" }, "CHECKING...")), /* @__PURE__ */ import_react17.default.createElement(
    "div",
    {
      style: { "background": "#090d16", "border": "1px solid var(--border)", "borderRadius": "0.75rem", "padding": "1rem", "marginBottom": "1rem" }
    },
    /* @__PURE__ */ import_react17.default.createElement("div", { id: "waLiveStatusDisplay" }, /* @__PURE__ */ import_react17.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.5rem", "marginBottom": "0.35rem" } }, /* @__PURE__ */ import_react17.default.createElement("span", { id: "waDotIndicator", style: { "color": "#fbbf24" } }, "\u25CF"), /* @__PURE__ */ import_react17.default.createElement("strong", { id: "waStateTitle", style: { "color": "#fff" } }, "Pairing Standby")), /* @__PURE__ */ import_react17.default.createElement("div", { id: "waPhoneDisplay", style: { "fontSize": "0.85rem", "color": "#94a3b8", "fontFamily": "monospace" } }, "Phone Number: Not Linked"))
  ), /* @__PURE__ */ import_react17.default.createElement(
    "div",
    {
      id: "waQrBox",
      style: { "background": "#ffffff", "borderRadius": "0.75rem", "padding": "1rem", "display": "inline-block", "margin": "0 auto 1rem auto", "textAlign": "center" }
    },
    /* @__PURE__ */ import_react17.default.createElement(
      "div",
      {
        id: "waQrPlaceholder",
        style: { "width": "240px", "height": "240px", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#0f172a", "fontSize": "0.85rem", "textAlign": "center", "padding": "1rem" }
      },
      'Click "Connect / Refresh QR" to pair device'
    ),
    /* @__PURE__ */ import_react17.default.createElement("img", { id: "waQrImg", src: "", alt: "WhatsApp Pairing QR", style: { "width": "240px", "height": "240px", "display": "none", "imageRendering": "pixelated" }, onError: (e) => {
      try {
        new Function("e", "e.currentTarget.style.display='none'; if(document.getElementById('waQrPlaceholder')){ document.getElementById('waQrPlaceholder').style.display='flex'; document.getElementById('waQrPlaceholder').innerText='QR preview unavailable. Click Refresh QR.'; }")(e);
      } catch (err) {
        console.error(err);
      }
    } })
  ), /* @__PURE__ */ import_react17.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "flexWrap": "wrap" } }, /* @__PURE__ */ import_react17.default.createElement("button", { className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", id: "btnWaConnect", onClick: (e) => {
    try {
      new Function("e", "reconnectWhatsApp()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u26A1 Connect / Refresh QR"), /* @__PURE__ */ import_react17.default.createElement(
    "button",
    {
      className: "btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
      id: "btnWaDisconnect",
      onClick: (e) => {
        try {
          new Function("e", "disconnectWhatsApp()")(e);
        } catch (err) {
          console.error(err);
        }
      },
      style: { "display": "none" }
    },
    "\u{1F50C} Disconnect"
  ), /* @__PURE__ */ import_react17.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "fetchWhatsAppStatus(true)")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u{1F504} Check Status"))))));
}

// apps/merchant-admin/src/views/partials/SectionDeveloperHub.jsx
function SectionDeveloperHub() {
  return /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement("div", { id: "sectionDeveloperHub", hidden: true }, /* @__PURE__ */ import_react18.default.createElement(SubViewPaymentSimulator, null), /* @__PURE__ */ import_react18.default.createElement(SubViewSystemSupervisor, null), /* @__PURE__ */ import_react18.default.createElement(SubViewCloudflareTunnel, null), /* @__PURE__ */ import_react18.default.createElement(SubViewWebhooksSecrets, null), /* @__PURE__ */ import_react18.default.createElement(SubViewAndroidGateway, null), /* @__PURE__ */ import_react18.default.createElement(SubViewGmailWhatsAppProtocols, null)));
}

// apps/merchant-admin/src/views/partials/SectionSecurity.jsx
var import_react22 = __toESM(require_react(), 1);

// apps/merchant-admin/src/views/partials/security/SubViewBannedUsers.jsx
var import_react19 = __toESM(require_react(), 1);
function SubViewBannedUsers() {
  return /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement("div", { id: "subViewSecBanned" }, /* @__PURE__ */ import_react19.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react19.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3", style: { "flexWrap": "wrap", "gap": "1rem" } }, /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F6AB} Banned Customer Identities"), /* @__PURE__ */ import_react19.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Server-enforced access blocking. Positive identification of fraudulent payment injection or manual administrative bans.")), /* @__PURE__ */ import_react19.default.createElement("div", { style: { "display": "flex", "gap": "0.5rem", "flexWrap": "wrap", "alignItems": "center" } }, /* @__PURE__ */ import_react19.default.createElement(
    "input",
    {
      className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
      type: "text",
      id: "bannedSearchInput",
      placeholder: "Search by name, email, or phone...",
      style: { "width": "240px", "fontSize": "0.82rem", "padding": "0.45rem 0.75rem" },
      onInput: (e) => {
        try {
          new Function("e", "filterBannedUsers(e.currentTarget.value)")(e);
        } catch (err) {
          console.error(err);
        }
      }
    }
  ), /* @__PURE__ */ import_react19.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "fetchBannedUsers()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u{1F504} Refresh"), /* @__PURE__ */ import_react19.default.createElement("button", { className: "btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "openManualBanModal()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u2795 Ban User"))), /* @__PURE__ */ import_react19.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react19.default.createElement("table", { className: "w-full border-collapse text-sm" }, /* @__PURE__ */ import_react19.default.createElement("thead", null, /* @__PURE__ */ import_react19.default.createElement("tr", null, /* @__PURE__ */ import_react19.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Name"), /* @__PURE__ */ import_react19.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Email"), /* @__PURE__ */ import_react19.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Phone"), /* @__PURE__ */ import_react19.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Ban Status"), /* @__PURE__ */ import_react19.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Ban Timestamp"), /* @__PURE__ */ import_react19.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Ban Reason"), /* @__PURE__ */ import_react19.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Payment Session"), /* @__PURE__ */ import_react19.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Last Device"), /* @__PURE__ */ import_react19.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Source"), /* @__PURE__ */ import_react19.default.createElement("th", { style: { "textAlign": "right" } }, "Actions"))), /* @__PURE__ */ import_react19.default.createElement("tbody", { id: "bannedUsersTableBody" }, /* @__PURE__ */ import_react19.default.createElement("tr", null, /* @__PURE__ */ import_react19.default.createElement("td", { colSpan: "10", style: { "textAlign": "center", "color": "var(--text-muted)", "padding": "2rem" } }, "Loading banned users..."))))))));
}

// apps/merchant-admin/src/views/partials/security/SubViewSecurityEvents.jsx
var import_react20 = __toESM(require_react(), 1);
function SubViewSecurityEvents() {
  return /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, /* @__PURE__ */ import_react20.default.createElement("div", { id: "subViewSecEvents", hidden: true }, /* @__PURE__ */ import_react20.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react20.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react20.default.createElement("div", null, /* @__PURE__ */ import_react20.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F6A8} Security & Forensic Events Log"), /* @__PURE__ */ import_react20.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Real-time immutable security event records preserved with exact raw evidence verbatim.")), /* @__PURE__ */ import_react20.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "fetchSecurityEvents()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u{1F504} Refresh")), /* @__PURE__ */ import_react20.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react20.default.createElement("table", { className: "w-full border-collapse text-sm" }, /* @__PURE__ */ import_react20.default.createElement("thead", null, /* @__PURE__ */ import_react20.default.createElement("tr", null, /* @__PURE__ */ import_react20.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Timestamp"), /* @__PURE__ */ import_react20.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Event Type"), /* @__PURE__ */ import_react20.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Customer"), /* @__PURE__ */ import_react20.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Source"), /* @__PURE__ */ import_react20.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Sender"), /* @__PURE__ */ import_react20.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Fraud Reason"), /* @__PURE__ */ import_react20.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Raw Evidence (Verbatim)"), /* @__PURE__ */ import_react20.default.createElement("th", { style: { "textAlign": "right" } }, "Action"))), /* @__PURE__ */ import_react20.default.createElement("tbody", { id: "securityEventsTableBody" }, /* @__PURE__ */ import_react20.default.createElement("tr", null, /* @__PURE__ */ import_react20.default.createElement("td", { colSpan: "8", style: { "textAlign": "center", "color": "var(--text-muted)", "padding": "2rem" } }, "Loading security events..."))))))));
}

// apps/merchant-admin/src/views/partials/security/SubViewBanHistory.jsx
var import_react21 = __toESM(require_react(), 1);
function SubViewBanHistory() {
  return /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, /* @__PURE__ */ import_react21.default.createElement("div", { id: "subViewSecHistory", hidden: true }, /* @__PURE__ */ import_react21.default.createElement("div", { className: "card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" }, /* @__PURE__ */ import_react21.default.createElement("div", { className: "card-header flex items-center justify-between mb-5 flex-wrap gap-3" }, /* @__PURE__ */ import_react21.default.createElement("div", null, /* @__PURE__ */ import_react21.default.createElement("div", { className: "card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5" }, "\u{1F4DC} Ban & Unban History Audit Trail"), /* @__PURE__ */ import_react21.default.createElement("div", { className: "card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" }, "Historical chronological audit trail of all automatic bans, unbans, manual bans, and re-bans.")), /* @__PURE__ */ import_react21.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "fetchSecurityHistory()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "\u{1F504} Refresh")), /* @__PURE__ */ import_react21.default.createElement("div", { style: { "overflowX": "auto" } }, /* @__PURE__ */ import_react21.default.createElement("table", { className: "w-full border-collapse text-sm" }, /* @__PURE__ */ import_react21.default.createElement("thead", null, /* @__PURE__ */ import_react21.default.createElement("tr", null, /* @__PURE__ */ import_react21.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Timestamp"), /* @__PURE__ */ import_react21.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Action"), /* @__PURE__ */ import_react21.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Actor"), /* @__PURE__ */ import_react21.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Customer Identity"), /* @__PURE__ */ import_react21.default.createElement("th", { className: "text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400" }, "Details & Transitions"))), /* @__PURE__ */ import_react21.default.createElement("tbody", { id: "securityHistoryTableBody" }, /* @__PURE__ */ import_react21.default.createElement("tr", null, /* @__PURE__ */ import_react21.default.createElement("td", { colSpan: "5", style: { "textAlign": "center", "color": "var(--text-muted)", "padding": "2rem" } }, "Loading ban history..."))))))));
}

// apps/merchant-admin/src/views/partials/SectionSecurity.jsx
function SectionSecurity() {
  return /* @__PURE__ */ import_react22.default.createElement(import_react22.default.Fragment, null, /* @__PURE__ */ import_react22.default.createElement("div", { id: "sectionSecurity", hidden: true }, /* @__PURE__ */ import_react22.default.createElement(SubViewBannedUsers, null), /* @__PURE__ */ import_react22.default.createElement(SubViewSecurityEvents, null), /* @__PURE__ */ import_react22.default.createElement(SubViewBanHistory, null)));
}

// apps/merchant-admin/src/views/partials/Modals.jsx
var import_react27 = __toESM(require_react(), 1);

// apps/merchant-admin/src/views/partials/modals/GmailGuideModal.jsx
var import_react23 = __toESM(require_react(), 1);
function GmailGuideModal() {
  return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement("div", { id: "gmailGuideModal", className: "modal-overlay fixed inset-0 [&:not([hidden])]:flex items-center justify-center p-4 z-[10000] backdrop-blur-sm bg-black/75", hidden: true }, /* @__PURE__ */ import_react23.default.createElement("div", { className: "modal-box max-w-lg w-full rounded-2xl p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl", style: { "maxWidth": "720px", "maxHeight": "85vh", "overflowY": "auto" } }, /* @__PURE__ */ import_react23.default.createElement(
    "div",
    {
      style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "1rem", "borderBottom": "1px solid #1e293b", "paddingBottom": "0.75rem" }
    },
    /* @__PURE__ */ import_react23.default.createElement("h3", { style: { "color": "#fff", "margin": "0", "fontSize": "1.15rem" } }, "\u{1F4D6} Official Gmail API & Refresh Token Guide"),
    /* @__PURE__ */ import_react23.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", style: { "padding": "0.25rem 0.5rem" }, onClick: (e) => {
      try {
        new Function("e", "closeGmailGuideModal()")(e);
      } catch (err) {
        console.error(err);
      }
    } }, "\u2715")
  ), /* @__PURE__ */ import_react23.default.createElement("div", { style: { "fontSize": "0.82rem", "color": "#cbd5e1", "lineHeight": "1.6" } }, /* @__PURE__ */ import_react23.default.createElement(
    "div",
    {
      style: { "background": "#0f172a", "border": "1px solid #1e293b", "borderRadius": "0.5rem", "padding": "0.75rem 1rem", "marginBottom": "1rem" }
    },
    /* @__PURE__ */ import_react23.default.createElement("strong", { style: { "color": "#38bdf8", "display": "block", "fontSize": "0.9rem", "marginBottom": "0.25rem" } }, "\u26A1 How to get your Google Refresh Token (Choose either method):"),
    /* @__PURE__ */ import_react23.default.createElement("span", { style: { "color": "#94a3b8", "fontSize": "0.78rem" } }, "Both methods work 100% reliably. Method 1 is automated 1-click; Method 2 uses Google's official OAuth Playground.")
  ), /* @__PURE__ */ import_react23.default.createElement(
    "div",
    {
      style: { "border": "1px solid #334155", "borderRadius": "0.5rem", "padding": "0.85rem", "marginBottom": "1rem", "background": "#0b1120" }
    },
    /* @__PURE__ */ import_react23.default.createElement("h4", { style: { "color": "#34d399", "margin": "0 0 0.5rem 0", "fontSize": "0.95rem" } }, "Method 1: Direct 1-Click Authorize (Automatic)"),
    /* @__PURE__ */ import_react23.default.createElement("ol", { style: { "paddingLeft": "1.25rem", "display": "flex", "flexDirection": "column", "gap": "0.35rem", "margin": "0" } }, /* @__PURE__ */ import_react23.default.createElement("li", null, "In ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Google Cloud Console"), " > ", /* @__PURE__ */ import_react23.default.createElement("em", null, "Credentials"), ", add this exact redirect URI:", /* @__PURE__ */ import_react23.default.createElement(
      "code",
      {
        style: { "color": "#38bdf8", "display": "block", "margin": "0.2rem 0", "background": "#020617", "padding": "2px 6px", "borderRadius": "4px" },
        id: "guideProdUri"
      },
      "https://your-domain.com/oauth/callback"
    )), /* @__PURE__ */ import_react23.default.createElement("li", null, "Under ", /* @__PURE__ */ import_react23.default.createElement("em", null, "OAuth consent screen"), " > ", /* @__PURE__ */ import_react23.default.createElement("em", null, "Test users"), ", ensure your personal Gmail address is added."), /* @__PURE__ */ import_react23.default.createElement("li", null, "In YOUPI Admin Panel, enter your ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Client ID"), " and ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Client Secret"), ", then click ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "\u{1F4BE} Save Credentials"), "."), /* @__PURE__ */ import_react23.default.createElement("li", null, "Click the ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "\u{1F517} Authorize OAuth"), " button. A Google sign-in window will open."), /* @__PURE__ */ import_react23.default.createElement("li", null, "Log into your Gmail account, grant read-only permissions, and complete consent."), /* @__PURE__ */ import_react23.default.createElement("li", null, "YOUPI will automatically capture and save the offline refresh token into your database!"))
  ), /* @__PURE__ */ import_react23.default.createElement(
    "div",
    {
      style: { "border": "1px solid #334155", "borderRadius": "0.5rem", "padding": "0.85rem", "marginBottom": "1rem", "background": "#0b1120" }
    },
    /* @__PURE__ */ import_react23.default.createElement("h4", { style: { "color": "#38bdf8", "margin": "0 0 0.5rem 0", "fontSize": "0.95rem" } }, "Method 2: Google OAuth 2.0 Playground (Manual \u2014 60 Seconds)"),
    /* @__PURE__ */ import_react23.default.createElement("ol", { style: { "paddingLeft": "1.25rem", "display": "flex", "flexDirection": "column", "gap": "0.35rem", "margin": "0" } }, /* @__PURE__ */ import_react23.default.createElement("li", null, "Open ", /* @__PURE__ */ import_react23.default.createElement(
      "a",
      {
        href: "https://developers.google.com/oauthplayground",
        target: "_blank",
        style: { "color": "#38bdf8", "textDecoration": "underline" }
      },
      "Google OAuth 2.0 Playground (developers.google.com/oauthplayground)"
    ), " in a new tab."), /* @__PURE__ */ import_react23.default.createElement("li", null, "Click the ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "\u2699\uFE0F Gear Icon (OAuth 2.0 configuration)"), " at the top right of the page."), /* @__PURE__ */ import_react23.default.createElement("li", null, "Check the box: ", /* @__PURE__ */ import_react23.default.createElement("strong", null, '"Use your own OAuth credentials"'), "."), /* @__PURE__ */ import_react23.default.createElement("li", null, "Paste your ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "OAuth Client ID"), " and ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "OAuth Client Secret"), " into the fields that appear."), /* @__PURE__ */ import_react23.default.createElement("li", null, "In the main left pane under ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Step 1: Select & authorize APIs"), ":", /* @__PURE__ */ import_react23.default.createElement("div", { style: { "margin": "0.25rem 0" } }, "Scroll to ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Gmail API v1"), " and check", /* @__PURE__ */ import_react23.default.createElement("code", null, "https://www.googleapis.com/auth/gmail.readOnly"), " (or type it in the text box).")), /* @__PURE__ */ import_react23.default.createElement("li", null, "Click the blue button: ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Authorize APIs"), ". Sign in to your Google account and click", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Allow"), "."), /* @__PURE__ */ import_react23.default.createElement("li", null, "Under ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Step 2: Exchange authorization code for tokens"), ":", /* @__PURE__ */ import_react23.default.createElement("div", { style: { "margin": "0.25rem 0" } }, "Click the blue button: ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Exchange authorization code for tokens"), ".")), /* @__PURE__ */ import_react23.default.createElement("li", null, "Look at the response pane on the right: copy the ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Refresh token"), " (starts with", /* @__PURE__ */ import_react23.default.createElement("code", null, "1//..."), ")."), /* @__PURE__ */ import_react23.default.createElement("li", null, "Paste the refresh token into the ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "Google Refresh Token (Offline Access)"), " box in YOUPI and click ", /* @__PURE__ */ import_react23.default.createElement("strong", null, "\u{1F4BE} Save Credentials"), "!"))
  ), /* @__PURE__ */ import_react23.default.createElement(
    "div",
    {
      style: { "background": "rgba(245,158,11,0.1)", "border": "1px solid #d97706", "borderRadius": "0.5rem", "padding": "0.75rem", "fontSize": "0.75rem", "color": "#fde68a" }
    },
    /* @__PURE__ */ import_react23.default.createElement("strong", null, "\u26A0\uFE0F Google Cloud Console Setup Note:"),
    /* @__PURE__ */ import_react23.default.createElement("br", null),
    "Make sure the ",
    /* @__PURE__ */ import_react23.default.createElement("strong", null, "Gmail API"),
    " is enabled in ",
    /* @__PURE__ */ import_react23.default.createElement("em", null, "APIs & Services > Library"),
    ' and the OAuth consent screen publishing status is set to "Testing" with your Gmail added as a Test User.'
  )), /* @__PURE__ */ import_react23.default.createElement("div", { style: { "marginTop": "1.25rem", "textAlign": "right" } }, /* @__PURE__ */ import_react23.default.createElement("button", { className: "btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
    try {
      new Function("e", "closeGmailGuideModal()")(e);
    } catch (err) {
      console.error(err);
    }
  } }, "Got It")))));
}

// apps/merchant-admin/src/views/partials/modals/BanDetailsModal.jsx
var import_react24 = __toESM(require_react(), 1);
function BanDetailsModal() {
  return /* @__PURE__ */ import_react24.default.createElement(import_react24.default.Fragment, null, /* @__PURE__ */ import_react24.default.createElement("div", { id: "banDetailsModal", className: "modal-overlay fixed inset-0 [&:not([hidden])]:flex items-center justify-center p-4 z-[10000] backdrop-blur-sm bg-black/75", hidden: true }, /* @__PURE__ */ import_react24.default.createElement(
    "div",
    {
      className: "modal-box max-w-lg w-full rounded-2xl p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl",
      style: { "maxWidth": "850px", "maxHeight": "90vh", "overflowY": "auto", "background": "#0f172a", "border": "1px solid #334155", "borderRadius": "12px", "padding": "1.75rem", "boxShadow": "0 25px 50px -12px rgba(0,0,0,0.7)" }
    },
    /* @__PURE__ */ import_react24.default.createElement(
      "div",
      {
        style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "1.25rem", "borderBottom": "1px solid #1e293b", "paddingBottom": "1rem" }
      },
      /* @__PURE__ */ import_react24.default.createElement("div", { style: { "display": "flex", "alignItems": "center", "gap": "0.6rem" } }, /* @__PURE__ */ import_react24.default.createElement("span", { style: { "fontSize": "1.5rem" } }, "\u{1F6A8}"), /* @__PURE__ */ import_react24.default.createElement("div", null, /* @__PURE__ */ import_react24.default.createElement("h3", { style: { "color": "#f87171", "margin": "0", "fontSize": "1.25rem", "fontWeight": "800", "letterSpacing": "-0.02em" } }, "Forensic Security & Ban Evidence Dossier"), /* @__PURE__ */ import_react24.default.createElement("div", { style: { "color": "#94a3b8", "fontSize": "0.78rem" } }, "Immutable tamper-proof record of fraudulent payment injection attempt"))),
      /* @__PURE__ */ import_react24.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", style: { "padding": "0.35rem 0.65rem" }, onClick: (e) => {
        try {
          new Function("e", "closeBanDetailsModal()")(e);
        } catch (err) {
          console.error(err);
        }
      } }, "\u2715")
    ),
    /* @__PURE__ */ import_react24.default.createElement("div", { id: "banDetailsModalBody" }, /* @__PURE__ */ import_react24.default.createElement("div", { style: { "textAlign": "center", "padding": "2rem", "color": "#94a3b8" } }, "Loading ban evidence...")),
    /* @__PURE__ */ import_react24.default.createElement(
      "div",
      {
        style: { "marginTop": "1.5rem", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "borderTop": "1px solid #1e293b", "paddingTop": "1rem" }
      },
      /* @__PURE__ */ import_react24.default.createElement("div", { style: { "fontSize": "0.75rem", "color": "#64748b" } }, "Security Engine v2 \u2022 YOUPI PG"),
      /* @__PURE__ */ import_react24.default.createElement("div", { style: { "display": "flex", "gap": "0.75rem" } }, /* @__PURE__ */ import_react24.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
        try {
          new Function("e", "closeBanDetailsModal()")(e);
        } catch (err) {
          console.error(err);
        }
      } }, "Close"), /* @__PURE__ */ import_react24.default.createElement(
        "button",
        {
          id: "btnModalUnbanTrigger",
          className: "btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
          style: { "background": "#059669", "borderColor": "#059669", "fontWeight": "700" },
          onClick: (e) => {
            try {
              new Function("e", "handleModalUnbanClick()")(e);
            } catch (err) {
              console.error(err);
            }
          }
        },
        "\u{1F513} Unban Customer"
      ))
    )
  )));
}

// apps/merchant-admin/src/views/partials/modals/UnbanConfirmModal.jsx
var import_react25 = __toESM(require_react(), 1);
function UnbanConfirmModal() {
  return /* @__PURE__ */ import_react25.default.createElement(import_react25.default.Fragment, null, /* @__PURE__ */ import_react25.default.createElement("div", { id: "unbanConfirmModal", className: "modal-overlay fixed inset-0 [&:not([hidden])]:flex items-center justify-center p-4 z-[10000] backdrop-blur-sm bg-black/75", hidden: true }, /* @__PURE__ */ import_react25.default.createElement(
    "div",
    {
      className: "modal-box max-w-lg w-full rounded-2xl p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl",
      style: { "maxWidth": "540px", "background": "#0f172a", "border": "1px solid #334155", "borderRadius": "12px", "padding": "1.75rem" }
    },
    /* @__PURE__ */ import_react25.default.createElement(
      "div",
      {
        style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "1rem", "borderBottom": "1px solid #1e293b", "paddingBottom": "0.75rem" }
      },
      /* @__PURE__ */ import_react25.default.createElement("h3", { style: { "color": "#34d399", "margin": "0", "display": "flex", "alignItems": "center", "gap": "0.5rem", "fontSize": "1.15rem" } }, /* @__PURE__ */ import_react25.default.createElement("span", null, "\u{1F513}"), " Restore Customer Access (Unban)"),
      /* @__PURE__ */ import_react25.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", style: { "padding": "0.25rem 0.5rem" }, onClick: (e) => {
        try {
          new Function("e", "closeUnbanModal()")(e);
        } catch (err) {
          console.error(err);
        }
      } }, "\u2715")
    ),
    /* @__PURE__ */ import_react25.default.createElement("p", { style: { "fontSize": "0.88rem", "color": "#cbd5e1", "lineHeight": "1.6", "marginBottom": "1.25rem" } }, "Are you sure you want to unban customer ", /* @__PURE__ */ import_react25.default.createElement("strong", { id: "unbanCustName", style: { "color": "#ffffff" } }), " (", /* @__PURE__ */ import_react25.default.createElement(
      "span",
      {
        id: "unbanCustPhone",
        style: { "color": "#38bdf8", "fontFamily": "monospace" }
      }
    ), ")?", /* @__PURE__ */ import_react25.default.createElement("br", null), /* @__PURE__ */ import_react25.default.createElement("span", { style: { "color": "#94a3b8", "fontSize": "0.8rem", "display": "block", "marginTop": "0.4rem" } }, "This will restore their status to ", /* @__PURE__ */ import_react25.default.createElement("strong", { style: { "color": "#34d399" } }, "ACTIVE"), " and immediately restore their ability to initiate payments on the gateway.")),
    /* @__PURE__ */ import_react25.default.createElement("div", { style: { "marginBottom": "1.25rem" } }, /* @__PURE__ */ import_react25.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "fontWeight": "700", "color": "#e2e8f0", "marginBottom": "0.4rem" } }, "Mandatory Reason for Unbanning ", /* @__PURE__ */ import_react25.default.createElement("span", { style: { "color": "#f87171" } }, "*")), /* @__PURE__ */ import_react25.default.createElement(
      "select",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all form-control",
        id: "unbanReasonSelect",
        style: { "width": "100%", "marginBottom": "0.5rem", "background": "#020617", "border": "1px solid #334155", "color": "#f8fafc", "borderRadius": "6px", "padding": "0.55rem", "fontSize": "0.85rem" },
        onChange: (e) => {
          try {
            new Function("e", "handleUnbanReasonChange()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      /* @__PURE__ */ import_react25.default.createElement("option", { value: "Customer verified via phone call" }, "Customer verified via phone call"),
      /* @__PURE__ */ import_react25.default.createElement("option", { value: "False positive investigated" }, "False positive investigated"),
      /* @__PURE__ */ import_react25.default.createElement("option", { value: "Testing override" }, "Testing override"),
      /* @__PURE__ */ import_react25.default.createElement("option", { value: "Dispute resolved with merchant" }, "Dispute resolved with merchant"),
      /* @__PURE__ */ import_react25.default.createElement("option", { value: "OTHER" }, "Other custom reason...")
    ), /* @__PURE__ */ import_react25.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "text",
        id: "unbanReasonCustom",
        placeholder: "Specify mandatory custom unban reason...",
        style: { "width": "100%", "display": "none", "background": "#020617", "border": "1px solid #334155", "color": "#f8fafc", "borderRadius": "6px", "padding": "0.55rem", "fontSize": "0.85rem" }
      }
    )),
    /* @__PURE__ */ import_react25.default.createElement(
      "div",
      {
        style: { "display": "flex", "justifyContent": "flex-end", "gap": "0.75rem", "marginTop": "1.5rem", "borderTop": "1px solid #1e293b", "paddingTop": "1rem" }
      },
      /* @__PURE__ */ import_react25.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
        try {
          new Function("e", "closeUnbanModal()")(e);
        } catch (err) {
          console.error(err);
        }
      } }, "Cancel"),
      /* @__PURE__ */ import_react25.default.createElement(
        "button",
        {
          id: "btnConfirmUnbanAction",
          className: "btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
          style: { "background": "#059669", "borderColor": "#059669", "fontWeight": "700" },
          onClick: (e) => {
            try {
              new Function("e", "executeUnbanCustomer()")(e);
            } catch (err) {
              console.error(err);
            }
          }
        },
        "Confirm Unban"
      )
    )
  )));
}

// apps/merchant-admin/src/views/partials/modals/ManualBanModal.jsx
var import_react26 = __toESM(require_react(), 1);
function ManualBanModal() {
  return /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, /* @__PURE__ */ import_react26.default.createElement("div", { id: "manualBanModal", className: "modal-overlay fixed inset-0 [&:not([hidden])]:flex items-center justify-center p-4 z-[10000] backdrop-blur-sm bg-black/75", hidden: true }, /* @__PURE__ */ import_react26.default.createElement(
    "div",
    {
      className: "modal-box max-w-lg w-full rounded-2xl p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl",
      style: { "maxWidth": "560px", "background": "#0f172a", "border": "1px solid #334155", "borderRadius": "12px", "padding": "1.75rem" }
    },
    /* @__PURE__ */ import_react26.default.createElement(
      "div",
      {
        style: { "display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "1rem", "borderBottom": "1px solid #1e293b", "paddingBottom": "0.75rem" }
      },
      /* @__PURE__ */ import_react26.default.createElement("h3", { style: { "color": "#f87171", "margin": "0", "display": "flex", "alignItems": "center", "gap": "0.5rem", "fontSize": "1.15rem" } }, /* @__PURE__ */ import_react26.default.createElement("span", null, "\u{1F6AB}"), " Manually Ban Abusive Customer"),
      /* @__PURE__ */ import_react26.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", style: { "padding": "0.25rem 0.5rem" }, onClick: (e) => {
        try {
          new Function("e", "closeManualBanModal()")(e);
        } catch (err) {
          console.error(err);
        }
      } }, "\u2715")
    ),
    /* @__PURE__ */ import_react26.default.createElement("div", { style: { "marginBottom": "1rem" } }, /* @__PURE__ */ import_react26.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "fontWeight": "700", "color": "#e2e8f0", "marginBottom": "0.4rem" } }, "Select Customer ", /* @__PURE__ */ import_react26.default.createElement("span", { style: { "color": "#f87171" } }, "*")), /* @__PURE__ */ import_react26.default.createElement(
      "select",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "manualBanCustomerSelect",
        style: { "width": "100%", "background": "#020617", "border": "1px solid #334155", "color": "#f8fafc", "borderRadius": "6px", "padding": "0.55rem", "fontSize": "0.85rem" },
        onChange: (e) => {
          try {
            new Function("e", "handleManualBanCustomerChange()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      /* @__PURE__ */ import_react26.default.createElement("option", { value: "" }, "-- Choose Existing Customer --")
    )),
    /* @__PURE__ */ import_react26.default.createElement("div", { id: "manualBanCustomInputs", style: { "marginBottom": "1rem" } }, /* @__PURE__ */ import_react26.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "fontWeight": "700", "color": "#e2e8f0", "marginBottom": "0.4rem" } }, "Or Enter Customer ID / Phone / Email"), /* @__PURE__ */ import_react26.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "text",
        id: "manualBanCustomerIdInput",
        placeholder: "Customer UUID, mobile (+91...), or email",
        style: { "width": "100%", "background": "#020617", "border": "1px solid #334155", "color": "#f8fafc", "borderRadius": "6px", "padding": "0.55rem", "fontSize": "0.85rem" }
      }
    )),
    /* @__PURE__ */ import_react26.default.createElement("div", { style: { "marginBottom": "1rem" } }, /* @__PURE__ */ import_react26.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "fontWeight": "700", "color": "#e2e8f0", "marginBottom": "0.4rem" } }, "Mandatory Reason ", /* @__PURE__ */ import_react26.default.createElement("span", { style: { "color": "#f87171" } }, "*")), /* @__PURE__ */ import_react26.default.createElement(
      "input",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        type: "text",
        id: "manualBanReasonInput",
        defaultValue: "MANUAL_BAN",
        placeholder: "e.g. Abusive behavior, chargeback dispute, manual fraud notice",
        style: { "width": "100%", "background": "#020617", "border": "1px solid #334155", "color": "#f8fafc", "borderRadius": "6px", "padding": "0.55rem", "fontSize": "0.85rem" }
      }
    )),
    /* @__PURE__ */ import_react26.default.createElement("div", { style: { "marginBottom": "1.25rem" } }, /* @__PURE__ */ import_react26.default.createElement("label", { style: { "display": "block", "fontSize": "0.8rem", "fontWeight": "700", "color": "#e2e8f0", "marginBottom": "0.4rem" } }, "Optional Notes / Investigation Details"), /* @__PURE__ */ import_react26.default.createElement(
      "textarea",
      {
        className: "rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
        id: "manualBanNotesInput",
        rows: "3",
        placeholder: "Additional merchant operator notes, reference ticket, etc.",
        style: { "width": "100%", "background": "#020617", "border": "1px solid #334155", "color": "#f8fafc", "borderRadius": "6px", "padding": "0.55rem", "fontSize": "0.85rem", "resize": "vertical" }
      }
    )),
    /* @__PURE__ */ import_react26.default.createElement("div", { style: { "display": "flex", "justifyContent": "flex-end", "gap": "0.75rem", "borderTop": "1px solid #1e293b", "paddingTop": "1rem" } }, /* @__PURE__ */ import_react26.default.createElement("button", { className: "btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", onClick: (e) => {
      try {
        new Function("e", "closeManualBanModal()")(e);
      } catch (err) {
        console.error(err);
      }
    } }, "Cancel"), /* @__PURE__ */ import_react26.default.createElement(
      "button",
      {
        className: "btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed",
        style: { "background": "#dc2626", "borderColor": "#dc2626", "fontWeight": "700" },
        onClick: (e) => {
          try {
            new Function("e", "executeManualBan()")(e);
          } catch (err) {
            console.error(err);
          }
        }
      },
      "Confirm Ban"
    ))
  )));
}

// apps/merchant-admin/src/views/partials/Modals.jsx
function Modals() {
  return /* @__PURE__ */ import_react27.default.createElement(import_react27.default.Fragment, null, /* @__PURE__ */ import_react27.default.createElement(GmailGuideModal, null), /* @__PURE__ */ import_react27.default.createElement(BanDetailsModal, null), /* @__PURE__ */ import_react27.default.createElement(UnbanConfirmModal, null), /* @__PURE__ */ import_react27.default.createElement(ManualBanModal, null), /* @__PURE__ */ import_react27.default.createElement("div", { id: "cashierFloatingDock", className: "cashier-floating-dock fixed bottom-6 right-6 z-[100000] flex flex-row-reverse flex-wrap-reverse gap-3 max-w-[calc(100vw-48px)] pointer-events-none" }));
}

// apps/merchant-admin/src/views/App.jsx
function App() {
  return /* @__PURE__ */ import_react28.default.createElement(import_react28.default.Fragment, null, /* @__PURE__ */ import_react28.default.createElement(Header, null), /* @__PURE__ */ import_react28.default.createElement("main", { className: "p-6 max-w-[1480px] w-full mx-auto flex-1" }, /* @__PURE__ */ import_react28.default.createElement(SectionOperations, null), /* @__PURE__ */ import_react28.default.createElement(SectionStoreSettings, null), /* @__PURE__ */ import_react28.default.createElement(SectionDeveloperHub, null), /* @__PURE__ */ import_react28.default.createElement(SectionSecurity, null)), /* @__PURE__ */ import_react28.default.createElement(Modals, null));
}
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
