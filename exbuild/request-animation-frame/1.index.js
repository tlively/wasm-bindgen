(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: run, __wbindgen_cb_drop, __wbg_instanceof_Window_d64060d13377409b, __wbg_document_bcf9d67bc56e8c6d, __wbg_requestAnimationFrame_96f88ce2d311332e, __wbg_body_6209a4fe12ca8a07, __wbg_settextContent_97d8f9b380385bde, __wbindgen_object_drop_ref, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbg_newnoargs_bfddd41728ab0b9c, __wbg_call_20c04382b27a4486, __wbg_globalThis_8379563d70fab135, __wbg_self_944d201f31e01c91, __wbg_window_993fd51731b86960, __wbg_global_073eb4249a3a8c12, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_closure_wrapper164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"run\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_cb_drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_d64060d13377409b\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_Window_d64060d13377409b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_bcf9d67bc56e8c6d\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_document_bcf9d67bc56e8c6d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_requestAnimationFrame_96f88ce2d311332e\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_requestAnimationFrame_96f88ce2d311332e\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_body_6209a4fe12ca8a07\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_body_6209a4fe12ca8a07\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_settextContent_97d8f9b380385bde\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_settextContent_97d8f9b380385bde\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_clone_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_bfddd41728ab0b9c\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_newnoargs_bfddd41728ab0b9c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_20c04382b27a4486\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_20c04382b27a4486\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_8379563d70fab135\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_globalThis_8379563d70fab135\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_944d201f31e01c91\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_944d201f31e01c91\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_993fd51731b86960\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_window_993fd51731b86960\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_073eb4249a3a8c12\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_global_073eb4249a3a8c12\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_debug_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_rethrow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper164\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper164\"]; });\n\n\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/*! exports provided: run, __wbindgen_cb_drop, __wbg_instanceof_Window_d64060d13377409b, __wbg_document_bcf9d67bc56e8c6d, __wbg_requestAnimationFrame_96f88ce2d311332e, __wbg_body_6209a4fe12ca8a07, __wbg_settextContent_97d8f9b380385bde, __wbindgen_object_drop_ref, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbg_newnoargs_bfddd41728ab0b9c, __wbg_call_20c04382b27a4486, __wbg_globalThis_8379563d70fab135, __wbg_self_944d201f31e01c91, __wbg_window_993fd51731b86960, __wbg_global_073eb4249a3a8c12, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_closure_wrapper164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextEncoder, module, TextDecoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_d64060d13377409b\", function() { return __wbg_instanceof_Window_d64060d13377409b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_document_bcf9d67bc56e8c6d\", function() { return __wbg_document_bcf9d67bc56e8c6d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_requestAnimationFrame_96f88ce2d311332e\", function() { return __wbg_requestAnimationFrame_96f88ce2d311332e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_body_6209a4fe12ca8a07\", function() { return __wbg_body_6209a4fe12ca8a07; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_settextContent_97d8f9b380385bde\", function() { return __wbg_settextContent_97d8f9b380385bde; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_bfddd41728ab0b9c\", function() { return __wbg_newnoargs_bfddd41728ab0b9c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_20c04382b27a4486\", function() { return __wbg_call_20c04382b27a4486; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_8379563d70fab135\", function() { return __wbg_globalThis_8379563d70fab135; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_944d201f31e01c91\", function() { return __wbg_self_944d201f31e01c91; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_993fd51731b86960\", function() { return __wbg_window_993fd51731b86960; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_073eb4249a3a8c12\", function() { return __wbg_global_073eb4249a3a8c12; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper164\", function() { return __wbindgen_closure_wrapper164; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction makeMutClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1 };\n    const real = (...args) => {\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return f(a, state.b, ...args);\n        } finally {\n            if (--state.cnt === 0) _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_2\"].get(dtor)(a, state.b);\n            else state.a = a;\n        }\n    };\n    real.original = state;\n    return real;\n}\n\nfunction logError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            let error = (function () {\n                try {\n                    return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n                } catch(_) {\n                    return \"<failed to stringify thrown value>\";\n                }\n            }());\n            console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n            throw e;\n        }\n    };\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\nfunction __wbg_adapter_16(arg0, arg1) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hccbf5506da5bcaed\"](arg0, arg1);\n}\n\n/**\n*/\nfunction run() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nconst __wbindgen_cb_drop = function(arg0) {\n    const obj = takeObject(arg0).original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return true;\n    }\n    var ret = false;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbg_instanceof_Window_d64060d13377409b = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof Window;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_document_bcf9d67bc56e8c6d = logError(function(arg0) {\n    var ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_requestAnimationFrame_96f88ce2d311332e = handleError(function(arg0, arg1) {\n    var ret = getObject(arg0).requestAnimationFrame(getObject(arg1));\n    _assertNum(ret);\n    return ret;\n});\n\nconst __wbg_body_6209a4fe12ca8a07 = logError(function(arg0) {\n    var ret = getObject(arg0).body;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n});\n\nconst __wbg_settextContent_97d8f9b380385bde = logError(function(arg0, arg1, arg2) {\n    getObject(arg0).textContent = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);\n});\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbg_newnoargs_bfddd41728ab0b9c = logError(function(arg0, arg1) {\n    var ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_call_20c04382b27a4486 = handleError(function(arg0, arg1) {\n    var ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_globalThis_8379563d70fab135 = handleError(function() {\n    var ret = globalThis.globalThis;\n    return addHeapObject(ret);\n});\n\nconst __wbg_self_944d201f31e01c91 = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_window_993fd51731b86960 = handleError(function() {\n    var ret = window.window;\n    return addHeapObject(ret);\n});\n\nconst __wbg_global_073eb4249a3a8c12 = handleError(function() {\n    var ret = global.global;\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_debug_string = function(arg0, arg1) {\n    var ret = debugString(getObject(arg1));\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\nconst __wbindgen_closure_wrapper164 = logError(function(arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 3, __wbg_adapter_16);\n    return addHeapObject(ret);\n});\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, run, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hccbf5506da5bcaed, __wbindgen_exn_store, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);