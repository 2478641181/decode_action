//Mon Mar 02 2026 19:10:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("华住会"),
  axios = require("axios"),
  {
    wrapper
  } = require("axios-cookiejar-support"),
  tough = require("tough-cookie"),
  {
    sendNotify
  } = require("./sendNotify"),
  SyncRequest = require("sync-request");
let notifyStr = "";
var userToken = undefined;
(async () => {
  checkVersion("hzh.js", "d38299a342fca399b7bf2c16656e5c49");
  const _0x208b4f = process.env.hzh_url;
  if (!_0x208b4f) {
    logAndNotify("请设置 hzh_url");
    return;
  }
  let _0x3fd686 = _0x208b4f.split("\n");
  for (let _0x16d988 = 0; _0x16d988 < _0x3fd686.length; _0x16d988++) {
    const _0x4e9d02 = _0x3fd686[_0x16d988],
      _0x659404 = _0x4e9d02.match(/miniUuid=(\d+)/);
    if (_0x659404) {
      const _0x9cb128 = _0x659404[1];
      if (_0x9cb128) {
        logAndNotify("🧐" + _0x9cb128 + "🧐");
      }
    }
    let _0x391ea7 = getInstance();
    userToken = undefined;
    userToken = getParameterByName(_0x4e9d02, "sk");
    const _0x484d71 = await _0x391ea7.get(_0x4e9d02);
    if (_0x484d71.status !== 200) {
      logAndNotify("账号【" + (_0x16d988 + 1) + "】 url失效");
      continue;
    }
    let _0x484228 = undefined;
    try {
      _0x484228 = await _0x391ea7.get("https://appgw.huazhu.com/game/sign_header");
    } catch (_0x417f93) {
      logAndNotify("账号【" + (_0x16d988 + 1) + "】 url失效☹ 【" + _0x417f93.message + "】");
      continue;
    }
    if (_0x484228.data.code !== 200) {
      logAndNotify("账号【" + (_0x16d988 + 1) + "】 签到信息获取失败");
      continue;
    }
    if (_0x484228.data.content.signToday) {
      logAndNotify("账号【" + (_0x16d988 + 1) + "】 今日已签到");
    } else {
      const _0x1a2065 = await _0x391ea7.get("https://appgw.huazhu.com/game/sign_in?date=" + Math.floor(Date.now() / 1000));
      if (_0x1a2065.data.code !== 200) {
        logAndNotify("账号【" + (_0x16d988 + 1) + "】 签到失败");
        continue;
      }
      logAndNotify("账号【" + (_0x16d988 + 1) + "】 签到成功 获取积分【" + _0x1a2065.data.content.point + "】");
    }
    const _0x163c6e = await _0x391ea7.get("https://appgw.huazhu.com/game/sign_header");
    if (_0x163c6e.data.code !== 200) {
      logAndNotify("账号【" + (_0x16d988 + 1) + "】 获取积分失败");
      continue;
    }
    logAndNotify("账号【" + (_0x16d988 + 1) + "】 查询到总积分【" + _0x163c6e.data.content.memberPoint + "】");
  }
})().catch(_0x531322 => {
  logAndNotify(_0x531322);
}).finally(() => {
  sendNotify("华住会", notifyStr);
  $.done();
});
function logAndNotify(_0x31cac0) {
  $.log(_0x31cac0);
  notifyStr += _0x31cac0;
  notifyStr += "\n";
}
function getParameterByName(_0x393ccc, _0x4ebb4d) {
  const _0x5540ff = decodeURIComponent(_0x393ccc),
    _0x2b8769 = new RegExp("[?&]" + _0x4ebb4d + "=([^&#]*)"),
    _0xeb760f = _0x2b8769.exec(_0x5540ff);
  return _0xeb760f ? _0xeb760f[1] : null;
}
function getInstance() {
  const _0x1ca2a6 = new tough.CookieJar();
  return wrapper(axios.create({
    jar: _0x1ca2a6,
    withCredentials: true,
    maxRedirects: 5
  }));
}
function Env(_0x48dc5e, _0x587c40) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0xea1617 {
    constructor(_0xd8a4bc) {
      this.env = _0xd8a4bc;
    }
    send(_0x39a5ce, _0x540776 = "GET") {
      _0x39a5ce = "string" == typeof _0x39a5ce ? {
        url: _0x39a5ce
      } : _0x39a5ce;
      let _0x2adee2 = this.get;
      "POST" === _0x540776 && (_0x2adee2 = this.post);
      return new Promise((_0x3e904c, _0x49d79a) => {
        _0x2adee2.call(this, _0x39a5ce, (_0x4f2641, _0x37dd32, _0x49e323) => {
          _0x4f2641 ? _0x49d79a(_0x4f2641) : _0x3e904c(_0x37dd32);
        });
      });
    }
    get(_0x3f7a13) {
      return this.send.call(this.env, _0x3f7a13);
    }
    post(_0xb91ac4) {
      return this.send.call(this.env, _0xb91ac4, "POST");
    }
  }
  return new class {
    constructor(_0x353d0c, _0xb8fe0c) {
      this.name = _0x353d0c;
      this.http = new _0xea1617(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xb8fe0c);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x3e6dbc, _0x1cec19 = null) {
      try {
        return JSON.parse(_0x3e6dbc);
      } catch {
        return _0x1cec19;
      }
    }
    toStr(_0x25ebdc, _0x7c620d = null) {
      try {
        return JSON.stringify(_0x25ebdc);
      } catch {
        return _0x7c620d;
      }
    }
    getjson(_0x56c086, _0x1f88ce) {
      let _0x3ea528 = _0x1f88ce;
      const _0xe9bcac = this.getdata(_0x56c086);
      if (_0xe9bcac) {
        try {
          _0x3ea528 = JSON.parse(this.getdata(_0x56c086));
        } catch {}
      }
      return _0x3ea528;
    }
    setjson(_0x31cc5f, _0x180632) {
      try {
        return this.setdata(JSON.stringify(_0x31cc5f), _0x180632);
      } catch {
        return !1;
      }
    }
    getScript(_0x1ecb22) {
      return new Promise(_0x27b86f => {
        this.get({
          url: _0x1ecb22
        }, (_0x173f17, _0x4e4859, _0x4b32b5) => _0x27b86f(_0x4b32b5));
      });
    }
    runScript(_0x4000af, _0x1d1c63) {
      return new Promise(_0x23f1af => {
        let _0x18fc3d = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x18fc3d = _0x18fc3d ? _0x18fc3d.replace(/\n/g, "").trim() : _0x18fc3d;
        let _0x1be5fc = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x1be5fc = _0x1be5fc ? 1 * _0x1be5fc : 20;
        _0x1be5fc = _0x1d1c63 && _0x1d1c63.timeout ? _0x1d1c63.timeout : _0x1be5fc;
        const [_0x23ccc9, _0x2b2d05] = _0x18fc3d.split("@"),
          _0xccedbe = {
            url: "http://" + _0x2b2d05 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x4000af,
              mock_type: "cron",
              timeout: _0x1be5fc
            },
            headers: {
              "X-Key": _0x23ccc9,
              Accept: "*/*"
            }
          };
        this.post(_0xccedbe, (_0xb613f2, _0x4258be, _0x2e3a1e) => _0x23f1af(_0x2e3a1e));
      }).catch(_0x5e7dc4 => this.logErr(_0x5e7dc4));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x509b5d = this.path.resolve(this.dataFile),
          _0x1040c1 = this.path.resolve(process.cwd(), this.dataFile),
          _0x345a96 = this.fs.existsSync(_0x509b5d),
          _0x483df5 = !_0x345a96 && this.fs.existsSync(_0x1040c1);
        if (!_0x345a96 && !_0x483df5) {
          return {};
        }
        {
          const _0x351fa7 = _0x345a96 ? _0x509b5d : _0x1040c1;
          try {
            return JSON.parse(this.fs.readFileSync(_0x351fa7));
          } catch (_0x2c44a2) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x249f34 = this.path.resolve(this.dataFile),
          _0x6ea6e = this.path.resolve(process.cwd(), this.dataFile),
          _0x29340e = this.fs.existsSync(_0x249f34),
          _0x33d964 = !_0x29340e && this.fs.existsSync(_0x6ea6e),
          _0x15ff1c = JSON.stringify(this.data);
        _0x29340e ? this.fs.writeFileSync(_0x249f34, _0x15ff1c) : _0x33d964 ? this.fs.writeFileSync(_0x6ea6e, _0x15ff1c) : this.fs.writeFileSync(_0x249f34, _0x15ff1c);
      }
    }
    lodash_get(_0x276e81, _0x31c71e, _0x39d384) {
      const _0x2f54cf = _0x31c71e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x323d45 = _0x276e81;
      for (const _0x581064 of _0x2f54cf) if (_0x323d45 = Object(_0x323d45)[_0x581064], void 0 === _0x323d45) {
        return _0x39d384;
      }
      return _0x323d45;
    }
    lodash_set(_0x15868d, _0xbf1a3, _0x285f09) {
      return Object(_0x15868d) !== _0x15868d ? _0x15868d : (Array.isArray(_0xbf1a3) || (_0xbf1a3 = _0xbf1a3.toString().match(/[^.[\]]+/g) || []), _0xbf1a3.slice(0, -1).reduce((_0x32ab7c, _0x44a461, _0x23d249) => Object(_0x32ab7c[_0x44a461]) === _0x32ab7c[_0x44a461] ? _0x32ab7c[_0x44a461] : _0x32ab7c[_0x44a461] = Math.abs(_0xbf1a3[_0x23d249 + 1]) >> 0 == +_0xbf1a3[_0x23d249 + 1] ? [] : {}, _0x15868d)[_0xbf1a3[_0xbf1a3.length - 1]] = _0x285f09, _0x15868d);
    }
    getdata(_0x4b7ed0) {
      let _0x4940cd = this.getval(_0x4b7ed0);
      if (/^@/.test(_0x4b7ed0)) {
        const [, _0x120a61, _0x2dd7e0] = /^@(.*?)\.(.*?)$/.exec(_0x4b7ed0),
          _0x2db1b3 = _0x120a61 ? this.getval(_0x120a61) : "";
        if (_0x2db1b3) {
          try {
            const _0x15233f = JSON.parse(_0x2db1b3);
            _0x4940cd = _0x15233f ? this.lodash_get(_0x15233f, _0x2dd7e0, "") : _0x4940cd;
          } catch (_0x51d12f) {
            _0x4940cd = "";
          }
        }
      }
      return _0x4940cd;
    }
    setdata(_0x265d26, _0x5dbb4f) {
      let _0x571f55 = !1;
      if (/^@/.test(_0x5dbb4f)) {
        const [, _0x11add8, _0x79a181] = /^@(.*?)\.(.*?)$/.exec(_0x5dbb4f),
          _0x34b317 = this.getval(_0x11add8),
          _0x2bfcfb = _0x11add8 ? "null" === _0x34b317 ? null : _0x34b317 || "{}" : "{}";
        try {
          const _0x79d9b2 = JSON.parse(_0x2bfcfb);
          this.lodash_set(_0x79d9b2, _0x79a181, _0x265d26);
          _0x571f55 = this.setval(JSON.stringify(_0x79d9b2), _0x11add8);
        } catch (_0x1be555) {
          const _0x4ba4a4 = {};
          this.lodash_set(_0x4ba4a4, _0x79a181, _0x265d26);
          _0x571f55 = this.setval(JSON.stringify(_0x4ba4a4), _0x11add8);
        }
      } else {
        _0x571f55 = this.setval(_0x265d26, _0x5dbb4f);
      }
      return _0x571f55;
    }
    getval(_0x4afeaf) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4afeaf) : this.isQuanX() ? $prefs.valueForKey(_0x4afeaf) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4afeaf]) : this.data && this.data[_0x4afeaf] || null;
    }
    setval(_0x1d966b, _0x4f64bd) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x1d966b, _0x4f64bd) : this.isQuanX() ? $prefs.setValueForKey(_0x1d966b, _0x4f64bd) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4f64bd] = _0x1d966b, this.writedata(), !0) : this.data && this.data[_0x4f64bd] || null;
    }
    initGotEnv(_0xcc98bf) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0xcc98bf && (_0xcc98bf.headers = _0xcc98bf.headers ? _0xcc98bf.headers : {}, void 0 === _0xcc98bf.headers.Cookie && void 0 === _0xcc98bf.cookieJar && (_0xcc98bf.cookieJar = this.ckjar));
    }
    get(_0x1e5353, _0x2fc861 = () => {}) {
      _0x1e5353.headers && (delete _0x1e5353.headers["Content-Type"], delete _0x1e5353.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x1e5353.headers = _0x1e5353.headers || {}, Object.assign(_0x1e5353.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x1e5353, (_0x2e0f52, _0x502315, _0x32ee05) => {
        !_0x2e0f52 && _0x502315 && (_0x502315.body = _0x32ee05, _0x502315.statusCode = _0x502315.status);
        _0x2fc861(_0x2e0f52, _0x502315, _0x32ee05);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x1e5353.opts = _0x1e5353.opts || {}, Object.assign(_0x1e5353.opts, {
        hints: !1
      })), $task.fetch(_0x1e5353).then(_0x479384 => {
        const {
          statusCode: _0x5cadda,
          statusCode: _0x3e1b5e,
          headers: _0x1580d3,
          body: _0x5e3949
        } = _0x479384;
        _0x2fc861(null, {
          status: _0x5cadda,
          statusCode: _0x3e1b5e,
          headers: _0x1580d3,
          body: _0x5e3949
        }, _0x5e3949);
      }, _0x550919 => _0x2fc861(_0x550919))) : this.isNode() && (this.initGotEnv(_0x1e5353), this.got(_0x1e5353).on("redirect", (_0x5873a9, _0x306c67) => {
        try {
          if (_0x5873a9.headers["set-cookie"]) {
            const _0x2e6860 = _0x5873a9.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x2e6860 && this.ckjar.setCookieSync(_0x2e6860, null);
            _0x306c67.cookieJar = this.ckjar;
          }
        } catch (_0x585b37) {
          this.logErr(_0x585b37);
        }
      }).then(_0x7b0fc2 => {
        const {
          statusCode: _0x32b7a1,
          statusCode: _0x346691,
          headers: _0x3130bf,
          body: _0x2bcf65
        } = _0x7b0fc2;
        _0x2fc861(null, {
          status: _0x32b7a1,
          statusCode: _0x346691,
          headers: _0x3130bf,
          body: _0x2bcf65
        }, _0x2bcf65);
      }, _0x257646 => {
        const {
          message: _0x50b6d2,
          response: _0x17647c
        } = _0x257646;
        _0x2fc861(_0x50b6d2, _0x17647c, _0x17647c && _0x17647c.body);
      }));
    }
    post(_0x521b35, _0x46f42c = () => {}) {
      if (_0x521b35.body && _0x521b35.headers && !_0x521b35.headers["Content-Type"] && (_0x521b35.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x521b35.headers && delete _0x521b35.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x521b35.headers = _0x521b35.headers || {}, Object.assign(_0x521b35.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x521b35, (_0x187eac, _0x13ff47, _0xe3a364) => {
          !_0x187eac && _0x13ff47 && (_0x13ff47.body = _0xe3a364, _0x13ff47.statusCode = _0x13ff47.status);
          _0x46f42c(_0x187eac, _0x13ff47, _0xe3a364);
        });
      } else {
        if (this.isQuanX()) {
          _0x521b35.method = "POST";
          this.isNeedRewrite && (_0x521b35.opts = _0x521b35.opts || {}, Object.assign(_0x521b35.opts, {
            hints: !1
          }));
          $task.fetch(_0x521b35).then(_0x3fa84f => {
            const {
              statusCode: _0x2d2200,
              statusCode: _0x16a452,
              headers: _0x373062,
              body: _0x465b1b
            } = _0x3fa84f;
            _0x46f42c(null, {
              status: _0x2d2200,
              statusCode: _0x16a452,
              headers: _0x373062,
              body: _0x465b1b
            }, _0x465b1b);
          }, _0x28a2d9 => _0x46f42c(_0x28a2d9));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x521b35);
            const {
              url: _0x57cb40,
              ..._0x5ed4
            } = _0x521b35;
            this.got.post(_0x57cb40, _0x5ed4).then(_0x4794e9 => {
              const {
                statusCode: _0x22d70e,
                statusCode: _0x48edb8,
                headers: _0x320fb5,
                body: _0x563f90
              } = _0x4794e9;
              _0x46f42c(null, {
                status: _0x22d70e,
                statusCode: _0x48edb8,
                headers: _0x320fb5,
                body: _0x563f90
              }, _0x563f90);
            }, _0x669006 => {
              const {
                message: _0x43d605,
                response: _0x28437b
              } = _0x669006;
              _0x46f42c(_0x43d605, _0x28437b, _0x28437b && _0x28437b.body);
            });
          }
        }
      }
    }
    time(_0x1ea83b, _0x27d3c0 = null) {
      const _0x415a94 = _0x27d3c0 ? new Date(_0x27d3c0) : new Date();
      let _0x4b39dd = {
        "M+": _0x415a94.getMonth() + 1,
        "d+": _0x415a94.getDate(),
        "H+": _0x415a94.getHours(),
        "m+": _0x415a94.getMinutes(),
        "s+": _0x415a94.getSeconds(),
        "q+": Math.floor((_0x415a94.getMonth() + 3) / 3),
        S: _0x415a94.getMilliseconds()
      };
      /(y+)/.test(_0x1ea83b) && (_0x1ea83b = _0x1ea83b.replace(RegExp.$1, (_0x415a94.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4d2997 in _0x4b39dd) new RegExp("(" + _0x4d2997 + ")").test(_0x1ea83b) && (_0x1ea83b = _0x1ea83b.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4b39dd[_0x4d2997] : ("00" + _0x4b39dd[_0x4d2997]).substr(("" + _0x4b39dd[_0x4d2997]).length)));
      return _0x1ea83b;
    }
    msg(_0x5455ec = _0x48dc5e, _0x5eedd = "", _0x57783a = "", _0x1d79fc) {
      const _0x259249 = _0x255b36 => {
        if (!_0x255b36) {
          return _0x255b36;
        }
        if ("string" == typeof _0x255b36) {
          return this.isLoon() ? _0x255b36 : this.isQuanX() ? {
            "open-url": _0x255b36
          } : this.isSurge() ? {
            url: _0x255b36
          } : void 0;
        }
        if ("object" == typeof _0x255b36) {
          if (this.isLoon()) {
            let _0x3871e0 = _0x255b36.openUrl || _0x255b36.url || _0x255b36["open-url"],
              _0x333a51 = _0x255b36.mediaUrl || _0x255b36["media-url"];
            return {
              openUrl: _0x3871e0,
              mediaUrl: _0x333a51
            };
          }
          if (this.isQuanX()) {
            let _0x3042f1 = _0x255b36["open-url"] || _0x255b36.url || _0x255b36.openUrl,
              _0x5e89d2 = _0x255b36["media-url"] || _0x255b36.mediaUrl;
            return {
              "open-url": _0x3042f1,
              "media-url": _0x5e89d2
            };
          }
          if (this.isSurge()) {
            let _0x9622d3 = _0x255b36.url || _0x255b36.openUrl || _0x255b36["open-url"];
            return {
              url: _0x9622d3
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x5455ec, _0x5eedd, _0x57783a, _0x259249(_0x1d79fc)) : this.isQuanX() && $notify(_0x5455ec, _0x5eedd, _0x57783a, _0x259249(_0x1d79fc))), !this.isMuteLog) {
        let _0xa4091 = ["", "==============📣系统通知📣=============="];
        _0xa4091.push(_0x5455ec);
        _0x5eedd && _0xa4091.push(_0x5eedd);
        _0x57783a && _0xa4091.push(_0x57783a);
        console.log(_0xa4091.join("\n"));
        this.logs = this.logs.concat(_0xa4091);
      }
    }
    log(..._0x201220) {
      _0x201220.length > 0 && (this.logs = [...this.logs, ..._0x201220]);
      console.log(_0x201220.join(this.logSeparator));
    }
    logErr(_0x4b9452, _0x4c30a2) {
      const _0x54807a = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x54807a ? this.log("", "❗️" + this.name + ", 错误!", _0x4b9452.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x4b9452);
    }
    wait(_0x2cf465) {
      return new Promise(_0x44582c => setTimeout(_0x44582c, _0x2cf465));
    }
    done(_0x352d6e = {}) {
      const _0x7d56ec = new Date().getTime(),
        _0x39073f = (_0x7d56ec - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x39073f + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x352d6e);
    }
  }(_0x48dc5e, _0x587c40);
}
function checkVersion(_0x2f069d, _0x397da1) {
  try {
    logAndNotify("文件md5：" + _0x397da1);
    const _0x305a42 = SyncRequest("GET", "https://bus.yxrong.cn/api/update/check?fileName=" + _0x2f069d + "&fileMd5=" + _0x397da1),
      _0x580d48 = JSON.parse(_0x305a42.getBody("utf8"));
    _0x580d48.code === 301 ? process.exit(0) : logAndNotify(_0x580d48.data);
  } catch (_0x2794fd) {
    logAndNotify("版本检查失败:", _0x2794fd);
  }
}