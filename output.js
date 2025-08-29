//Fri Aug 29 2025 07:02:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x5576dc = require("crypto"),
  _0x3880cb = require("zlib"),
  {
    setTimeout: _0x4b83e8
  } = require("timers/promises"),
  {
    execSync: _0x453336
  } = require("child_process"),
  _0x2cb92c = require("fs"),
  _0x452cac = require("path"),
  {
    createRequire: _0x1d6d2d
  } = require("module"),
  _0x474fae = _0x452cac.join(__dirname, ".xf_modules");
!_0x2cb92c.existsSync(_0x474fae) && _0x2cb92c.mkdirSync(_0x474fae, {
  "recursive": true
});
const _0x2510b0 = _0x452cac.join(_0x474fae, "package.json");
!_0x2cb92c.existsSync(_0x2510b0) && _0x2cb92c.writeFileSync(_0x2510b0, "{\"name\":\"xf-local-modules\",\"private\":true}");
const _0x5352e8 = _0x1d6d2d(_0x2510b0);
let _0x5990a3 = null,
  _0x3d4659 = null,
  _0x578c82 = null,
  _0x67f965 = null;
function _0x38f99f(_0x1a433b, _0x464d49 = "") {
  try {
    const _0x168bad = _0x464d49 ? _0x1a433b + "@" + _0x464d49 : _0x1a433b;
    console.log("📦 正在安装 " + _0x168bad + " (隔离目录)");
    const _0x440b73 = "npm install --legacy-peer-deps --no-audit --no-fund --save --prefix \"" + _0x474fae + "\" " + _0x168bad + " --registry=https://registry.npmmirror.com";
    return _0x453336(_0x440b73, {
      "stdio": "inherit"
    }), console.log("✅ " + _0x168bad + " 安装成功"), true;
  } catch (_0x51854e) {
    return console.log("❌ " + _0x1a433b + " 安装失败: " + _0x51854e.message), false;
  }
}
function _0xe104e1(_0x4e98ca, _0x3e611f = true, _0x4e7b34 = "") {
  try {
    const _0x2bf8c2 = _0x5352e8(_0x4e98ca);
    return _0x2bf8c2.default || _0x2bf8c2;
  } catch (_0x595374) {
    if (_0x595374.code === "ERR_MODULE_NOT_FOUND" || _0x595374.code === "MODULE_NOT_FOUND") {
      if (_0x3e611f) {
        console.log("⚠️ 检测到 " + _0x4e98ca + " 未安装 (本地)");
        if (_0x38f99f(_0x4e98ca, _0x4e7b34)) {
          try {
            const _0x5cb6a0 = _0x5352e8(_0x4e98ca);
            return _0x5cb6a0.default || _0x5cb6a0;
          } catch (_0x4aa901) {
            return console.log("❌ " + _0x4e98ca + " 加载失败: " + _0x4aa901.message), null;
          }
        }
      }
    } else {
      if (_0x595374.code === "ERR_REQUIRE_ESM") {
        return console.log("⚠️ 检测到 " + _0x4e98ca + " 模块为ESM版本，可能不兼容"), null;
      } else console.log("❌ " + _0x4e98ca + " 加载失败: " + _0x595374.message);
    }
    return null;
  }
}
try {
  const _0x435b3f = _0xe104e1("p-limit", true, "6.1.0");
  _0x67f965 = _0x435b3f;
} catch (_0x7345e1) {
  console.log("⚠️ p-limit模块加载失败，将使用顺序执行模式");
  _0x67f965 = null;
}
try {
  const _0xb34b6 = _0xe104e1("axios", true, "^1.6.0");
  _0x5990a3 = _0xb34b6;
} catch (_0x639a97) {
  console.log("⚠️ axios模块加载失败");
  _0x5990a3 = null;
}
try {
  const _0x26b69c = _0xe104e1("socks-proxy-agent", true, "^7.0.0");
  _0x26b69c ? (_0x578c82 = _0x26b69c.SocksProxyAgent, _0x3d4659 = _0x26b69c.SocksProxyAgent || _0x26b69c.default || _0x26b69c) : (_0x578c82 = null, _0x3d4659 = null);
} catch (_0x20c92b) {
  console.log("⚠️ socks-proxy-agent模块加载失败，代理功能将不可用");
  _0x578c82 = null;
  _0x3d4659 = null;
}
const _0x1e5701 = "喜番",
  _0x479218 = "3.0.0",
  _0x3ff992 = "xifan",
  _0x27c7b6 = true,
  _0x1c2d5a = false;
function _0x4a290d() {
  const _0x258239 = new Date(),
    _0x259c3a = _0x11f7db => String(_0x11f7db).padStart(2, "0");
  return _0x259c3a(_0x258239.getHours()) + ":" + _0x259c3a(_0x258239.getMinutes()) + ":" + _0x259c3a(_0x258239.getSeconds());
}
const _0xc6f91a = String(process.env.LOG_STYLE || "classic").toLowerCase();
function _0x39b623(_0x4bfff2, _0xdeffe7, _0x2f7b35) {
  const _0x477315 = "\x1B[90m" + _0x4a290d() + "[0m",
    _0x8d75f8 = "\x1B[36m" + _0xdeffe7 + "[0m";
  if (_0xc6f91a === "emoji") {
    if (_0x4bfff2 === "info") return console.log("ℹ️ " + _0x477315 + " [" + _0xdeffe7 + "] " + _0x2f7b35);
    if (_0x4bfff2 === "warn") return console.log("⚠️ " + _0x477315 + " [" + _0xdeffe7 + "] " + _0x2f7b35);
    if (_0x4bfff2 === "error") return console.log("❌ " + _0x477315 + " [" + _0xdeffe7 + "] " + _0x2f7b35);
  }
  let _0x5ed628 = "INFO",
    _0x1ece2e = "[32m";
  if (_0x4bfff2 === "warn") {
    _0x5ed628 = "WARN";
    _0x1ece2e = "[33m";
  }
  _0x4bfff2 === "error" && (_0x5ed628 = "ERROR", _0x1ece2e = "[31m");
  console.log(_0x477315 + " " + _0x1ece2e + "[" + _0x5ed628 + "]" + "[0m" + " " + _0x8d75f8 + " - " + _0x2f7b35);
}
function _0x508260(_0x4fdf51, _0x5d36a5) {
  _0x39b623("info", _0x4fdf51, _0x5d36a5);
}
function _0x11783c(_0x30f29f, _0x1457b6) {
  _0x39b623("warn", _0x30f29f, _0x1457b6);
}
function _0x1b487b(_0x15c86f, _0x32f18c) {
  _0x39b623("error", _0x15c86f, _0x32f18c);
}
async function _0x288822(_0x570b04) {
  try {
    const _0x24232b = String(process.env.heihao || "").trim() === "1";
    if (_0x24232b) return;
    return await _0x4b83e8(_0x570b04);
  } catch {
    return await _0x4b83e8(_0x570b04);
  }
}
async function _0x1cd31c({
  queueId: _0x4b3196,
  httpClient: _0x538254,
  baseUrl: _0x5b58bc,
  headers: _0x43d3,
  maxWaitMs = 60000,
  pollIntervalMs = 3000
}) {
  const _0x427cfa = Date.now();
  let _0x4593fd = 0;
  while (Date.now() - _0x427cfa <= maxWaitMs) {
    _0x4593fd++;
    const _0x46f636 = Date.now() - _0x427cfa;
    try {
      const _0x5e0cba = _0x5b58bc + "?queue_id=" + encodeURIComponent(_0x4b3196),
        _0x2531a5 = await _0x538254.get(_0x5e0cba, {
          "headers": _0x43d3,
          "timeout": 5000
        });
      if (_0x2531a5.status === 200) {
        const _0x467b3f = _0x2531a5.data,
          _0x400b09 = _0x467b3f?.["success"],
          _0xed1c25 = _0x467b3f?.["data"]?.["message"] || _0x467b3f?.["message"],
          _0x1e9305 = _0x467b3f?.["status"];
        if (_0xed1c25 && _0x400b09 && (_0x1e9305 === "processed" || _0x1e9305 === "completed")) {
          return _0xed1c25;
        }
        if (_0x1e9305 === "pending" && _0x400b09) {
          const _0x3fccd4 = _0x467b3f?.["estimated_wait_time"];
          let _0x5b2c85 = Number(_0x467b3f?.["retry_after_ms"]);
          !_0x5b2c85 && _0x3fccd4 && (_0x5b2c85 = Math.min(Math.max(Number(_0x3fccd4) * 1000, 2000), 30000));
          const _0x2554ca = _0x5b2c85 || Math.max(pollIntervalMs, 2000),
            _0x214e67 = Math.min(_0x2554ca, Math.max(0, maxWaitMs - (Date.now() - _0x427cfa)));
          _0x214e67 > 0 && (await _0x288822(_0x214e67));
          continue;
        }
        if (_0x400b09 === false) {
          const _0x1b12d8 = _0x467b3f?.["message"] || "队列处理失败";
          return _0x1b487b("签名", _0x1b12d8), null;
        }
      }
    } catch (_0x3890ed) {
      const _0x5ab7e2 = _0x3890ed?.["response"]?.["status"],
        _0x5b6bb0 = _0x3890ed?.["response"]?.["data"];
      if (_0x5ab7e2 === 429) {
        const _0x291241 = Number(_0x5b6bb0?.["retry_after_ms"]) || pollIntervalMs;
        await _0x288822(_0x291241);
      } else {
        if (_0x5ab7e2 === 400 && _0x5b6bb0) {
          try {
            const _0x90de7f = typeof _0x5b6bb0 === "string" ? JSON.parse(_0x5b6bb0) : _0x5b6bb0,
              _0x5e6252 = "队列查询失败: " + _0x90de7f.message;
            console.log("❌ " + _0x5e6252);
            _0x1b487b("签名", _0x5e6252);
          } catch {
            const _0x2377d6 = "队列查询失败: HTTP " + _0x5ab7e2;
            console.log("❌ " + _0x2377d6);
            _0x1b487b("签名", _0x2377d6);
          }
          return null;
        } else {
          await _0x288822(pollIntervalMs);
        }
      }
    }
  }
  return _0x1b487b("签名", "队列处理超时"), null;
}
function _0x1422f3() {
  const _0x3f84ad = process.version,
    _0xc4fd2b = parseInt(_0x3f84ad.slice(1).split(".")[0]);
  if (_0xc4fd2b < 16) throw new Error("Node.js版本过低，当前版本: " + _0x3f84ad + "，需要16.0.0或更高版本");
  console.log("📋 Node.js版本: " + _0x3f84ad);
  const _0x55a0bb = [{
      "name": "crypto",
      "module": _0x5576dc,
      "required": true
    }, {
      "name": "zlib",
      "module": _0x3880cb,
      "required": true
    }, {
      "name": "timers/promises",
      "module": {
        "setTimeout": _0x288822
      },
      "required": true
    }],
    _0x26b635 = [{
      "name": "axios",
      "module": _0x5990a3,
      "required": true,
      "fallback": null
    }, {
      "name": "socks-proxy-agent",
      "module": _0x3d4659,
      "required": false,
      "fallback": null
    }, {
      "name": "p-limit",
      "module": _0x67f965,
      "required": false,
      "fallback": "顺序执行模式"
    }];
  console.log("🔍 检查核心模块...");
  for (const {
    name: _0x11a5de,
    module: _0x5a0c93,
    required: _0x3efdae
  } of _0x55a0bb) {
    if (!_0x5a0c93) {
      if (_0x3efdae) {
        throw new Error("核心模块 [" + _0x11a5de + "] 加载失败，这是系统必需模块");
      } else console.log("⚠️ 核心模块 [" + _0x11a5de + "] 不可用");
    } else console.log("✅ 核心模块 [" + _0x11a5de + "] 正常");
  }
  console.log("🔍 检查外部依赖模块...");
  for (const {
    name: _0x36de9c,
    module: _0x25dc87,
    required: _0x127a2b,
    fallback: _0x196bd3
  } of _0x26b635) {
    if (!_0x25dc87) {
      if (_0x127a2b) throw new Error("必需模块 [" + _0x36de9c + "] 加载失败，请检查是否正确安装");else console.log("⚠️ 可选模块 [" + _0x36de9c + "] 不可用，将使用" + _0x196bd3);
    } else console.log("✅ 外部模块 [" + _0x36de9c + "] 正常");
  }
  if (typeof _0x5576dc.createCipheriv !== "function") {
    throw new Error("crypto模块功能异常，无法创建加密器");
  }
  if (typeof _0x3880cb.gzipSync !== "function") {
    throw new Error("zlib模块功能异常，无法进行gzip压缩");
  }
  if (_0x5990a3 && typeof _0x5990a3.create !== "function") {
    if (typeof _0x5990a3 === "function") {} else throw new Error("axios模块功能异常，无法创建HTTP客户端");
  }
  _0x578c82 && typeof _0x578c82 !== "function" && console.log("⚠️ socks-proxy-agent模块功能异常，代理功能将不可用");
  _0x67f965 && typeof _0x67f965 !== "function" && console.log("⚠️ p-limit模块功能异常，将使用顺序执行模式");
}
function _0x5e2ba0(_0x58333b) {
  let _0x10f258 = _0x58333b,
    _0x551c97 = _0x10f258.trim();
  const _0x4cbb0f = [],
    _0x3eb5f6 = [];
  if (!_0x551c97.includes("@")) return _0x4cbb0f.push("缺少必要的分隔符 @"), {
    "isValid": false,
    "fixed": null,
    "errors": _0x4cbb0f,
    "warnings": _0x3eb5f6
  };
  const _0x3f27ae = _0x551c97.split("@");
  if (_0x3f27ae.length < 5) return _0x4cbb0f.push("账号信息不完整，需要至少5个部分，当前只有" + _0x3f27ae.length + "个部分"), {
    "isValid": false,
    "fixed": null,
    "errors": _0x4cbb0f,
    "warnings": _0x3eb5f6
  };
  _0x3f27ae.length > 6 && _0x3eb5f6.push("账号信息包含过多部分(" + _0x3f27ae.length + "个)，可能包含多余信息");
  const [_0x338ae5, _0x310532, _0x5c5ff3, _0x2b538c, _0x2820b2, _0x3ee04d] = _0x3f27ae;
  if (!_0x338ae5 || _0x338ae5.trim().length === 0) {
    _0x4cbb0f.push("第1部分(备注名)不能为空");
  } else {
    if (_0x338ae5.length > 50) {
      _0x3eb5f6.push("第1部分(备注名)过长，建议不超过50字符");
    }
  }
  if (!_0x310532 || _0x310532.trim().length === 0) _0x4cbb0f.push("第2部分(Cookie)不能为空");else {
    if (!_0x310532.includes("userId=")) _0x4cbb0f.push("第2部分(Cookie)缺少userId信息");else _0x310532.length < 20 && _0x3eb5f6.push("第2部分(Cookie)长度异常，可能不完整");
  }
  if (!_0x5c5ff3 || _0x5c5ff3.trim().length === 0) _0x4cbb0f.push("第3部分(message)不能为空");else _0x5c5ff3.length < 10 && _0x3eb5f6.push("第3部分(message)长度异常，可能不完整");
  if (!_0x2b538c || _0x2b538c.trim().length === 0) _0x4cbb0f.push("第4部分(SystemUa)不能为空");else _0x2b538c.length < 10 && _0x3eb5f6.push("第4部分(SystemUa)长度异常，可能不完整");
  if (!_0x2820b2 || _0x2820b2.trim().length === 0) {
    _0x4cbb0f.push("第5部分(BrowserUa)不能为空");
  } else _0x2820b2.length < 10 && _0x3eb5f6.push("第5部分(BrowserUa)长度异常，可能不完整");
  if (_0x3ee04d && _0x3ee04d.trim().length > 0) {
    if (!_0x3ee04d.includes("|") && !_0x3ee04d.includes("#")) {
      _0x3eb5f6.push("第6部分(代理信息)格式可能不正确，应使用 | 或 # 分隔");
    }
  }
  let _0x39c4d0 = false;
  if (_0x4cbb0f.length === 0) {
    const _0x3f0fe2 = _0x3f27ae.map(_0x351b14 => _0x351b14.trim()),
      _0x67949f = _0x3f0fe2.join("@");
    _0x67949f !== _0x10f258 && (_0x551c97 = _0x67949f, _0x39c4d0 = true, _0x3eb5f6.push("已自动清理各部分的前后空格"));
  }
  return {
    "isValid": _0x4cbb0f.length === 0,
    "fixed": _0x39c4d0 ? _0x551c97 : null,
    "errors": _0x4cbb0f,
    "warnings": _0x3eb5f6
  };
}
function _0x44a0e9() {
  const _0x53bd9d = [{
    "name": _0x3ff992,
    "value": process.env[_0x3ff992],
    "description": "账号配置信息"
  }, {
    "name": "xfkm",
    "value": process.env.xfkm,
    "description": "卡密验证信息"
  }];
  for (const {
    name: _0x462e1f,
    value: _0x1b3d7b,
    description: _0xb4d2c7
  } of _0x53bd9d) {
    if (!_0x1b3d7b || !_0x1b3d7b.trim()) {
      throw new Error("环境变量 [" + _0x462e1f + "] 未设置或为空，" + _0xb4d2c7 + "缺失");
    }
  }
  const _0x3a1085 = process.env[_0x3ff992],
    _0x3afee3 = _0x5e2ba0(_0x3a1085);
  if (!_0x3afee3.isValid) {
    console.log("❌ xifan环境变量格式错误:");
    _0x3afee3.errors.forEach(_0x4d5490 => console.log("   - " + _0x4d5490));
    if (_0x3afee3.fixed) {
      console.log("💡 已自动修复格式，修复后的格式:");
      console.log("   " + _0x3afee3.fixed);
      console.log("💡 请更新环境变量为修复后的格式");
    }
    throw new Error("环境变量 [" + _0x3ff992 + "] 格式错误，共" + _0x3afee3.errors.length + "个错误");
  }
  _0x3afee3.warnings.length > 0 && (console.log("⚠️ xifan环境变量格式警告:"), _0x3afee3.warnings.forEach(_0x2d486d => console.log("   - " + _0x2d486d)));
  _0x3afee3.fixed && (console.log("✅ xifan环境变量格式已自动修复"), console.log("   原始格式: " + _0x3a1085), console.log("   修复格式: " + _0x3afee3.fixed));
  const _0x525251 = process.env.xfkm;
  if (_0x525251.length < 5) {
    throw new Error("环境变量 [xfkm] 长度异常，卡密信息可能不完整");
  }
  if (_0x525251.includes(" ") || _0x525251.includes("\n") || _0x525251.includes("\t")) {
    throw new Error("环境变量 [xfkm] 包含无效字符，请检查是否有多余的空格或换行符");
  }
  !/^[a-zA-Z0-9_-]+$/.test(_0x525251) && console.log("⚠️ xfkm环境变量包含特殊字符，可能影响使用");
}
function _0xd0fb0c() {
  return new Promise((_0x110e25, _0x1d9e30) => {
    if (!_0x5990a3) {
      _0x1d9e30(new Error("axios模块不可用，无法进行网络连接测试"));
      return;
    }
    const _0x47ba95 = setTimeout(() => {
      _0x1d9e30(new Error("网络连接测试超时，请检查网络状态"));
    }, 10000);
    _0x5990a3.get("http://www.baidu.com", {
      "timeout": 5000
    }).then(() => {
      clearTimeout(_0x47ba95);
      _0x110e25(true);
    }).catch(_0x34eb2c => {
      clearTimeout(_0x47ba95);
      if (_0x34eb2c.code === "ECONNREFUSED") _0x1d9e30(new Error("网络连接被拒绝，请检查防火墙设置"));else {
        if (_0x34eb2c.code === "ENOTFOUND") {
          _0x1d9e30(new Error("DNS解析失败，请检查网络配置"));
        } else _0x34eb2c.code === "ETIMEDOUT" ? _0x1d9e30(new Error("网络连接超时，请检查网络速度")) : _0x1d9e30(new Error("网络连接异常: " + _0x34eb2c.message));
      }
    });
  });
}
function _0x1cac01() {
  const _0x513f8d = require("os"),
    _0x5adcba = _0x513f8d.totalmem(),
    _0x2f8502 = _0x513f8d.freemem(),
    _0x3bb6d6 = ((_0x5adcba - _0x2f8502) / _0x5adcba * 100).toFixed(1);
  if (_0x2f8502 < 104857600) {
    throw new Error("系统内存不足，可用内存: " + (_0x2f8502 / 1024 / 1024).toFixed(1) + "MB，建议至少保留100MB可用内存");
  }
  if (_0x3bb6d6 > 95) throw new Error("系统内存使用率过高: " + _0x3bb6d6 + "%，建议释放一些内存后重试");
  const _0x257ebd = _0x513f8d.platform();
  if (_0x257ebd !== "win32" && _0x257ebd !== "linux" && _0x257ebd !== "darwin") throw new Error("不支持的操作系统平台: " + _0x257ebd + "，仅支持Windows、Linux和macOS");
  const _0x2d1fe9 = _0x513f8d.cpus();
  if (_0x2d1fe9.length < 1) {
    throw new Error("无法获取CPU信息，系统可能异常");
  }
}
function _0x4b855c() {
  return new Promise((_0x3e9514, _0xbd1c92) => {
    if (!_0x5990a3) {
      _0xbd1c92(new Error("axios模块不可用"));
      return;
    }
    const _0x192963 = setTimeout(() => {
      _0xbd1c92(new Error("签名服务器连接测试超时"));
    }, 15000);
    _0x5990a3.get("http://125.77.163.37:18888/jk.php", {
      "timeout": 10000
    }).then(_0x387b42 => {
      clearTimeout(_0x192963);
      if (_0x387b42.status === 200) try {
        const _0x1c01ee = _0x387b42.data;
        if (Array.isArray(_0x1c01ee) && _0x1c01ee.length > 0) {
          const _0x1ccc75 = _0x1c01ee.some(_0x54711c => _0x54711c.name === "sig1" && Array.isArray(_0x54711c.interfaces)),
            _0x58e7c4 = _0x1c01ee.some(_0x40ad17 => _0x40ad17.name === "sig3" && Array.isArray(_0x40ad17.interfaces));
          if (!_0x1ccc75) {}
          if (!_0x58e7c4) {}
          _0x3e9514(true);
        } else _0xbd1c92(new Error("签名服务器返回数据格式异常，接口列表为空"));
      } catch (_0x55a3fc) {
        _0xbd1c92(new Error("签名服务器返回数据解析失败: " + _0x55a3fc.message));
      } else _0xbd1c92(new Error("签名服务器响应异常，状态码: " + _0x387b42.status));
    }).catch(_0x1262e6 => {
      clearTimeout(_0x192963);
      if (_0x1262e6.response) _0xbd1c92(new Error("签名服务器响应错误，状态码: " + _0x1262e6.response.status));else {
        if (_0x1262e6.code === "ECONNREFUSED") {
          _0xbd1c92(new Error("签名服务器连接被拒绝，请检查服务器状态"));
        } else {
          if (_0x1262e6.code === "ENOTFOUND") _0xbd1c92(new Error("签名服务器地址解析失败，请检查网络配置"));else _0x1262e6.code === "ETIMEDOUT" ? _0xbd1c92(new Error("签名服务器连接超时，请检查网络速度")) : _0xbd1c92(new Error("签名服务器连接异常: " + _0x1262e6.message));
        }
      }
    });
  });
}
async function _0x3b5b5e() {
  console.log("🔍 开始系统环境检查...\n");
  try {
    console.log("📦 检查依赖模块...");
    _0x1422f3();
    console.log("✅ 依赖模块检查通过\n");
    console.log("🌍 检查环境变量...");
    _0x44a0e9();
    console.log("✅ 环境变量检查通过\n");
    console.log("💾 检查系统资源...");
    _0x1cac01();
    console.log("✅ 系统资源检查通过\n");
    console.log("🌐 检查网络连接...");
    await _0xd0fb0c();
    console.log("✅ 网络连接检查通过\n");
    console.log("🎉 所有系统检查完成，环境正常！\n");
    return true;
  } catch (_0x200fe8) {
    console.log("❌ 系统检查失败: " + _0x200fe8.message + "\n");
    console.log("📊 当前模块状态:");
    console.log("   - axios: " + (_0x5990a3 ? "✅ 可用" : "❌ 不可用"));
    console.log("   - socks-proxy-agent: " + (_0x3d4659 ? "✅ 可用" : "❌ 不可用"));
    console.log("   - p-limit: " + (_0x67f965 ? "✅ 可用" : "❌ 不可用"));
    if (_0x200fe8.message.includes("依赖模块")) console.log("💡 解决方案：程序已尝试自动安装依赖包，如果仍有问题请手动运行 npm install\n");else {
      if (_0x200fe8.message.includes("环境变量")) console.log("💡 解决方案：请在青龙面板中正确设置环境变量\n");else {
        if (_0x200fe8.message.includes("网络连接")) console.log("💡 解决方案：请检查网络连接和防火墙设置\n");else {
          if (_0x200fe8.message.includes("签名服务器")) console.log("💡 解决方案：请检查签名服务器状态或联系管理员\n");else {
            if (_0x200fe8.message.includes("系统资源")) {
              console.log("💡 解决方案：请释放系统资源或重启系统\n");
            } else {
              if (_0x200fe8.message.includes("Node.js版本")) console.log("💡 解决方案：请升级Node.js到16.0.0或更高版本\n");else {
                if (_0x200fe8.message.includes("axios模块不可用")) console.log("💡 解决方案：程序已尝试自动安装axios模块，如果仍有问题请手动运行 npm install axios\n");else _0x200fe8.message.includes("HTTP客户端创建失败") && console.log("💡 解决方案：程序已尝试自动安装依赖，如果仍有问题请检查网络连接或手动安装\n");
              }
            }
          }
        }
      }
    }
    return console.log("💡 请根据以上错误信息进行相应修复后重新运行\n"), false;
  }
}
function _0x47fa5e(_0x5533c0) {
  if (!_0x5533c0 || _0x5533c0.length <= 10) return _0x5533c0 || "";
  return "" + _0x5533c0.slice(0, 5) + "*".repeat(Math.max(0, _0x5533c0.length - 10)) + _0x5533c0.slice(-5);
}
function _0x26c2cd(_0x47e806, _0x75944f = 3, _0x506579 = 3) {
  if (!_0x47e806) return "";
  if (_0x47e806.length <= _0x75944f + _0x506579) return "*".repeat(Math.max(3, _0x47e806.length));
  return _0x47e806.slice(0, _0x75944f) + "***" + _0x47e806.slice(-_0x506579);
}
function _0x15366d(_0x1c4bd9) {
  return _0x3880cb.gzipSync(_0x1c4bd9).toString("base64");
}
function _0x4a0785(_0x31bda2) {
  const _0x10cc28 = _0x3880cb.gunzipSync(_0x31bda2);
  return Buffer.from(_0x10cc28).toString("base64");
}
function _0x57bd03(_0x352dbc) {
  const _0x2c5bbf = Buffer.from("GWL8jXHLnzp63QDH", "utf8"),
    _0x1cde50 = Buffer.from(_0x352dbc, "base64"),
    _0x571a06 = _0x5576dc.createCipheriv("aes-128-ecb", _0x2c5bbf, null);
  _0x571a06.setAutoPadding(true);
  const _0x1cb98d = Buffer.concat([_0x571a06.update(_0x1cde50), _0x571a06.final()]);
  return _0x1cb98d.toString("base64");
}
function _0x1fa87a(_0x580a20) {
  const _0xf49627 = Buffer.from("GWL8jXHLnzp63QDH", "utf8"),
    _0x4e501c = Buffer.from(_0x580a20, "base64"),
    _0x5bda11 = _0x5576dc.createDecipheriv("aes-128-ecb", _0xf49627, null);
  _0x5bda11.setAutoPadding(true);
  const _0x182395 = Buffer.concat([_0x5bda11.update(_0x4e501c), _0x5bda11.final()]);
  return _0x182395;
}
function _0x52e52d(_0x227622) {
  const _0x3cb13f = _0x1fa87a(_0x227622);
  if (_0x3cb13f.length >= 2 && _0x3cb13f[0] === 31 && _0x3cb13f[1] === 139) {
    const _0x200ffd = _0x3880cb.gunzipSync(_0x3cb13f).toString("utf8");
    return JSON.parse(_0x200ffd);
  }
  try {
    const _0x4ad7cd = Buffer.from(_0x3cb13f.toString("utf8"), "base64");
    if (_0x4ad7cd.length >= 2 && _0x4ad7cd[0] === 31 && _0x4ad7cd[1] === 139) {
      const _0x171dda = _0x3880cb.gunzipSync(_0x4ad7cd).toString("utf8");
      return JSON.parse(_0x171dda);
    }
  } catch {}
  return JSON.parse(_0x3cb13f.toString("utf8"));
}
function _0x173600(_0x39677c) {
  const _0x37e69b = _0x52e52d(_0x39677c);
  _0x37e69b.timestamp = String(Math.round(Date.now()));
  const _0x30b37b = JSON.stringify(_0x37e69b),
    _0x51b3df = _0x15366d(Buffer.from(_0x30b37b, "utf8"));
  return _0x57bd03(_0x51b3df);
}
function _0x121648(_0x41ec7d, _0x19af05) {
  const _0xa84834 = _0x52e52d(_0x41ec7d),
    _0x464c23 = String(Math.round(Date.now()));
  "inspireHomeParam" in _0xa84834 && delete _0xa84834.inspireHomeParam;
  _0xa84834.timestamp = _0x464c23;
  _0xa84834.inspireEventReportParam = _0x19af05;
  const _0x5bfb88 = JSON.stringify(_0xa84834),
    _0x5e5bf5 = _0x15366d(Buffer.from(_0x5bfb88, "utf8"));
  return _0x57bd03(_0x5e5bf5);
}
function _0x112957(_0xe21706, _0x5b9af7, _0x53d995, _0x266739) {
  const _0xeb8bbb = _0x52e52d(_0xe21706),
    _0x4af9a4 = String(Math.round(Date.now()));
  if ("inspireHomeParam" in _0xeb8bbb) {
    delete _0xeb8bbb.inspireHomeParam;
  }
  _0xeb8bbb.timestamp = _0x4af9a4;
  _0xeb8bbb.inspireTaskReportParam = {
    "neoInfos": [{
      "extParam": {
        "taskType": 1,
        "llsId": "0",
        "taskToken": _0x53d995
      },
      "idempotentId": _0x266739
    }],
    "continuousTimes": 0,
    "taskId": _0x5b9af7
  };
  const _0x383ce6 = JSON.stringify(_0xeb8bbb),
    _0x40e8ce = _0x15366d(Buffer.from(_0x383ce6, "utf8"));
  return _0x57bd03(_0x40e8ce);
}
function _0x41df33(_0x459fa0, _0x539442) {
  const _0x1ed6ef = _0x52e52d(_0x459fa0),
    _0x13964a = String(Math.round(Date.now()));
  _0x1ed6ef.sensorEventInfoList = [{
    "sensorType": 1,
    "timestamp": _0x13964a,
    "values": [-0.6101697683334351 + _0xcf73e0(0, 5), -0.8641080856323242 + _0xcf73e0(0, 5), 10.127023696899414 + _0xcf73e0(0, 5)]
  }, {
    "sensorType": 4,
    "timestamp": _0x13964a,
    "values": [0.0007635590736754239 + _0xcf73e0(0, 5), 0.0009162708884105086 + _0xcf73e0(0, 5), -0.00007635590736754239 + _0xcf73e0(0, 5)]
  }, {
    "sensorType": 9,
    "timestamp": _0x13964a,
    "values": [-0.5920952558517456 + _0xcf73e0(0, 5), -0.829244077205658 + _0xcf73e0(0, 5), 9.753571510314941 + _0xcf73e0(0, 5)]
  }];
  _0x1ed6ef.timestamp = _0x13964a;
  _0x1ed6ef.impInfo = [{
    "posId": _0x539442,
    "entryScene": _0x539442,
    "adNum": 1,
    "adStyle": 2,
    "screenOrientation": 1
  }];
  const _0x591c0d = JSON.stringify(_0x1ed6ef),
    _0x339824 = _0x15366d(Buffer.from(_0x591c0d, "utf8"));
  return _0x57bd03(_0x339824);
}
function _0x7465d0(_0x14f286, _0x47087d, _0x2f8e40, _0x2031cb, _0x283fb0, _0x93ad4b, _0x2ec734, _0x1c130f, _0xe08365, _0x257028 = 0) {
  const _0x1b5f2c = _0x52e52d(_0x14f286),
    _0x17bad0 = String(Math.round(Date.now()));
  _0x1b5f2c.sensorEventInfoList = [{
    "sensorType": 1,
    "timestamp": _0x17bad0,
    "values": [-0.6101697683334351 + _0xcf73e0(0, 5), -0.8641080856323242 + _0xcf73e0(0, 5), 10.127023696899414 + _0xcf73e0(0, 5)]
  }, {
    "sensorType": 4,
    "timestamp": _0x17bad0,
    "values": [0.0007635590736754239 + _0xcf73e0(0, 5), 0.0009162708884105086 + _0xcf73e0(0, 5), -0.00007635590736754239 + _0xcf73e0(0, 5)]
  }, {
    "sensorType": 9,
    "timestamp": _0x17bad0,
    "values": [-0.5920952558517456 + _0xcf73e0(0, 5), -0.829244077205658 + _0xcf73e0(0, 5), 9.753571510314941 + _0xcf73e0(0, 5)]
  }];
  _0x1b5f2c.timestamp = _0x17bad0;
  _0x1b5f2c.inspireTaskReportParam = {
    "posId": _0x47087d,
    "ecpm": _0x2f8e40,
    "neoInfos": [{
      "extParam": {
        "taskType": 1,
        "llsId": _0x2031cb,
        "creativeId": _0x283fb0,
        "taskToken": _0x93ad4b
      },
      "idempotentId": _0x2ec734
    }],
    "taskSessionId": _0x1c130f,
    "continuousTimes": _0x257028,
    "taskId": _0xe08365
  };
  const _0x167bfb = JSON.stringify(_0x1b5f2c),
    _0x5e6499 = _0x15366d(Buffer.from(_0x167bfb, "utf8"));
  return _0x57bd03(_0x5e6499);
}
function _0xcf73e0(_0x3cc58b, _0x30e6ce) {
  return Math.floor(Math.random() * (_0x30e6ce - _0x3cc58b + 1)) + _0x3cc58b;
}
function _0x2731bb(_0x3adacd) {
  const _0x54c2d4 = (_0x101248 = {}) => {
    if (!_0x5990a3) return null;
    if (typeof _0x5990a3.create === "function") return _0x5990a3.create(_0x101248);
    return _0x5990a3;
  };
  if (!_0x3adacd) return _0x54c2d4();
  if (!_0x578c82) return console.log("⚠️ 代理功能不可用，将使用直连模式"), _0x54c2d4();
  try {
    const _0x17eab0 = new _0x578c82(_0x3adacd);
    return _0x54c2d4({
      "httpAgent": _0x17eab0,
      "httpsAgent": _0x17eab0
    });
  } catch (_0x5e898a) {
    return console.log("⚠️ 代理创建失败，将使用直连模式"), _0x54c2d4();
  }
}
let _0x384db3 = {
    "sig1": [],
    "sig3": []
  },
  _0x470869 = false,
  _0x211416 = null;
async function _0x160687() {
  if (_0x470869) return;
  if (_0x211416) return _0x211416;
  if (!_0x5990a3) {
    console.log("❌ axios模块不可用，无法加载签名接口");
    _0x470869 = true;
    return;
  }
  return _0x211416 = (async () => {
    try {
      const _0x5729f9 = await _0x5990a3.get("http://125.77.163.37:18888/jk.php", {
          "timeout": 20000
        }),
        _0x3037c0 = Array.isArray(_0x5729f9.data) ? _0x5729f9.data : [],
        _0x185d26 = _0x3037c0.find(_0x10b79b => _0x10b79b && _0x10b79b.name === "sig1"),
        _0x184343 = _0x3037c0.find(_0x5e68d7 => _0x5e68d7 && _0x5e68d7.name === "sig3");
      _0x384db3.sig1 = (_0x185d26?.["interfaces"] || []).map(_0x2634ad => _0x2634ad.url).filter(Boolean);
      _0x384db3.sig3 = (_0x184343?.["interfaces"] || []).map(_0xa6e71b => _0xa6e71b.url).filter(Boolean);
    } catch (_0x1609f4) {}
    _0x470869 = true;
  })(), _0x211416;
}
function _0x101400(_0x3c753c) {
  const _0x39bccc = _0x384db3[_0x3c753c] || [];
  if (!_0x39bccc.length) return null;
  const _0x22b152 = _0x39bccc[Math.floor(Math.random() * _0x39bccc.length)];
  return _0x22b152.startsWith("http") ? _0x22b152 : "http://" + _0x22b152;
}
function _0xc6b54d(_0x11a0e5, _0x4cb4ce) {
  const _0x37eab8 = process.env.xfkm || "";
  try {
    const _0x1a857c = new URL(_0x11a0e5.startsWith("http") ? _0x11a0e5 : "http://" + _0x11a0e5);
    return _0x1a857c.searchParams.set("xfkm", _0x37eab8), _0x1a857c.searchParams.set("user", _0x4cb4ce || ""), _0x1a857c.toString();
  } catch {
    return _0x11a0e5;
  }
}
async function _0x5c9061(_0x4187cc, _0x13be24, _0x1ee02b, _0x18ca19 = {}) {
  let _0x2d5f05 = 0;
  const _0x5e005e = _0x18ca19.async === true,
    _0x4efa65 = typeof _0x18ca19.maxWaitMs === "number" ? _0x18ca19.maxWaitMs : 60000,
    _0x4851e5 = typeof _0x18ca19.pollIntervalMs === "number" ? _0x18ca19.pollIntervalMs : 3000,
    _0x2105e6 = Date.now();
  while (_0x2d5f05 <= 8 && (_0x5e005e || Date.now() - _0x2105e6 <= _0x4efa65)) {
    try {
      const [_0x183c1e, _0xa5ae49 = ""] = _0x4187cc.split("&&", 2),
        _0x1eb091 = "http://154.12.60.33:2424/proxy.php",
        _0x1b61bc = await _0x13be24.post(_0x1eb091, JSON.stringify({
          "req_str": _0x183c1e + "&&" + _0xa5ae49
        }), {
          "headers": {
            "Content-Type": "application/json",
            "X-Card-Key": process.env.xfkm || "",
            "X-Target-Alias": "xf_sig3"
          },
          "timeout": 30000
        });
      if (_0x1b61bc.status === 200) {
        const _0x436879 = _0x1b61bc.data,
          _0x2d6470 = _0x436879?.["success"],
          _0x5994de = _0x436879?.["data"]?.["message"] || _0x436879?.["message"],
          _0x15ee32 = _0x436879?.["status"];
        if (_0x5994de && _0x2d6470 && (_0x15ee32 === "processed" || _0x15ee32 === "completed")) return _0x5994de;
        if ((_0x15ee32 === "queued" || _0x436879?.["queue_id"]) && _0x2d6470) {
          const _0x109623 = _0x436879?.["queue_id"];
          if (_0x5e005e) {
            return {
              "queued": true,
              "queue_id": _0x109623,
              "estimated_wait_time": _0x436879?.["estimated_wait_time"],
              "queue_length": _0x436879?.["queue_length"],
              "effective_rate_limit": _0x436879?.["effective_rate_limit"]
            };
          }
          if (_0x436879?.["estimated_wait_time"] && Number(_0x436879?.["estimated_wait_time"]) > 0) {
            const _0x39c1cd = Math.min(Math.max(Number(_0x436879?.["estimated_wait_time"]) * 1000, 2000), 30000);
            await _0x288822(_0x39c1cd);
          }
          const _0x36ff89 = await _0x1cd31c({
            "queueId": _0x109623,
            "httpClient": _0x13be24,
            "baseUrl": _0x1eb091,
            "headers": {
              "X-Card-Key": process.env.xfkm || ""
            },
            "maxWaitMs": Math.max(0, _0x4efa65 - (Date.now() - _0x2105e6)),
            "pollIntervalMs": _0x4851e5
          });
          if (_0x36ff89) {
            return _0x36ff89;
          }
          let _0x4672e3 = Number(_0x436879?.["retry_after_ms"]);
          !_0x4672e3 && _0x436879?.["estimated_wait_time"] && (_0x4672e3 = Math.min(Math.max(Number(_0x436879?.["estimated_wait_time"]) * 1000, 2000), 30000));
          const _0x4ebf7d = _0x4672e3 || Math.max(_0x4851e5, 2000),
            _0x5bf7f2 = Math.min(Math.max(0, _0x4ebf7d), Math.max(0, _0x4efa65 - (Date.now() - _0x2105e6)));
          _0x5bf7f2 > 0 && (await _0x288822(_0x5bf7f2));
          _0x2d5f05 += 1;
          continue;
        }
        if (_0x2d6470 === false) {
          return _0x1b487b("签名", _0x436879?.["message"]), null;
        }
      }
    } catch (_0x41f884) {
      const _0x1b4de3 = _0x41f884?.["response"]?.["status"],
        _0x4bc796 = _0x41f884?.["response"]?.["data"];
      if (_0x1b4de3 === 400 && _0x4bc796) {
        try {
          const _0x1b123f = typeof _0x4bc796 === "string" ? JSON.parse(_0x4bc796) : _0x4bc796;
          _0x1b487b("签名", "Sig3验证失败: " + _0x1b123f.message);
        } catch {
          _0x1b487b("签名", "Sig3验证失败: HTTP " + _0x1b4de3 + " - " + (typeof _0x4bc796 === "string" ? _0x4bc796 : JSON.stringify(_0x4bc796)));
        }
      } else {
        if (_0x1b4de3 === 429) {
          let _0x246d1c = Number(_0x4bc796?.["retry_after_ms"]);
          !_0x246d1c && (_0x246d1c = 3000);
          const _0x2cceb9 = _0x4efa65 - (Date.now() - _0x2105e6);
          if (!_0x5e005e && _0x2cceb9 <= 0) break;
          const _0x4b1ab1 = Math.min(_0x246d1c, _0x5e005e ? _0x246d1c : Math.max(0, _0x2cceb9));
          console.log("⚠️ 频率限制 (429)，服务器建议等待: " + _0x246d1c + "ms，实际等待: " + _0x4b1ab1 + "ms");
          await _0x288822(_0x4b1ab1);
        } else _0x1b487b("签名", _0x1b4de3 ? "网络错误" : "网络错误"), _0x1b487b("签名", _0x41f884), await _0x288822(3000);
      }
    }
    _0x2d5f05 += 1;
  }
  return _0x1b487b("签名", "签名失败"), null;
}
async function _0x53b70b(_0x27a3b8, _0x3c0b88, _0x969b42, _0x3f097f = {}) {
  let _0x3e1d85 = 0;
  const _0x594625 = _0x3f097f.async === true,
    _0x158545 = typeof _0x3f097f.maxWaitMs === "number" ? _0x3f097f.maxWaitMs : 60000,
    _0x1f8d2b = typeof _0x3f097f.pollIntervalMs === "number" ? _0x3f097f.pollIntervalMs : 3000,
    _0x443f44 = Date.now();
  while (_0x3e1d85 <= 8 && (_0x594625 || Date.now() - _0x443f44 <= _0x158545)) {
    try {
      const [_0x3df9be, _0x2b0848 = ""] = _0x27a3b8.split("&&", 2),
        _0x485446 = "http://154.12.60.33:2424/proxy.php",
        _0x3edfc6 = await _0x3c0b88.post(_0x485446, JSON.stringify({
          "req_str": _0x3df9be + "&&" + _0x2b0848
        }), {
          "headers": {
            "Content-Type": "application/json",
            "X-Card-Key": process.env.xfkm || "",
            "X-Target-Alias": "xf_sig1"
          },
          "timeout": 30000
        });
      if (_0x3edfc6.status === 200) {
        const _0x1d3af5 = _0x3edfc6.data,
          _0x2719f1 = _0x1d3af5?.["success"],
          _0x235036 = _0x1d3af5?.["data"]?.["message"] || _0x1d3af5?.["message"],
          _0x1b5e97 = _0x1d3af5?.["status"];
        if (_0x235036 && _0x2719f1 && (_0x1b5e97 === "processed" || _0x1b5e97 === "completed")) return _0x235036;
        if ((_0x1b5e97 === "queued" || _0x1d3af5?.["queue_id"]) && _0x2719f1) {
          const _0x10f6c3 = _0x1d3af5?.["queue_id"];
          if (_0x594625) return {
            "queued": true,
            "queue_id": _0x10f6c3,
            "estimated_wait_time": _0x1d3af5?.["estimated_wait_time"],
            "queue_length": _0x1d3af5?.["queue_length"],
            "effective_rate_limit": _0x1d3af5?.["effective_rate_limit"]
          };
          if (_0x1d3af5?.["estimated_wait_time"] && Number(_0x1d3af5?.["estimated_wait_time"]) > 0) {
            const _0x4bc03c = Math.min(Math.max(Number(_0x1d3af5?.["estimated_wait_time"]) * 1000, 2000), 30000);
            await _0x288822(_0x4bc03c);
          }
          const _0x4fc6f3 = await _0x1cd31c({
            "queueId": _0x10f6c3,
            "httpClient": _0x3c0b88,
            "baseUrl": _0x485446,
            "headers": {
              "X-Card-Key": process.env.xfkm || ""
            },
            "maxWaitMs": Math.max(0, _0x158545 - (Date.now() - _0x443f44)),
            "pollIntervalMs": _0x1f8d2b
          });
          if (_0x4fc6f3) return _0x4fc6f3;
          let _0x564da2 = Number(_0x1d3af5?.["retry_after_ms"]);
          if (!_0x564da2 && _0x1d3af5?.["estimated_wait_time"]) {
            _0x564da2 = Math.min(Math.max(Number(_0x1d3af5?.["estimated_wait_time"]) * 1000, 2000), 30000);
          }
          const _0x3154dc = _0x564da2 || Math.max(_0x1f8d2b, 2000),
            _0x2e3a06 = Math.min(Math.max(0, _0x3154dc), Math.max(0, _0x158545 - (Date.now() - _0x443f44)));
          _0x2e3a06 > 0 && (await _0x288822(_0x2e3a06));
          _0x3e1d85 += 1;
          continue;
        }
        if (_0x2719f1 === false) return _0x1b487b("签名", _0x1d3af5?.["message"]), null;
      }
    } catch (_0x36f9ea) {
      const _0x3352ee = _0x36f9ea?.["response"]?.["status"],
        _0x548153 = _0x36f9ea?.["response"]?.["data"];
      if (_0x3352ee === 400 && _0x548153) {
        try {
          const _0xff81d6 = typeof _0x548153 === "string" ? JSON.parse(_0x548153) : _0x548153;
          _0x1b487b("签名", "Sig1验证失败: " + _0xff81d6.message);
        } catch {
          _0x1b487b("签名", "Sig1验证失败: HTTP " + _0x3352ee + " - " + (typeof _0x548153 === "string" ? _0x548153 : JSON.stringify(_0x548153)));
        }
      } else {
        if (_0x3352ee === 429) {
          let _0x285c65 = Number(_0x548153?.["retry_after_ms"]);
          !_0x285c65 && (_0x285c65 = 3000);
          const _0x4d403a = _0x158545 - (Date.now() - _0x443f44);
          if (!_0x594625 && _0x4d403a <= 0) break;
          const _0x162ea5 = Math.min(_0x285c65, _0x594625 ? _0x285c65 : Math.max(0, _0x4d403a));
          console.log("⚠️ 频率限制 (429)，服务器建议等待: " + _0x285c65 + "ms，实际等待: " + _0x162ea5 + "ms");
          await _0x288822(_0x162ea5);
        } else _0x1b487b("签名", _0x3352ee ? "获取Sig1失败重试" : "获取Sig1失败重试"), await _0x288822(3000);
      }
    }
    _0x3e1d85 += 1;
  }
  return _0x1b487b("签名", "签名失败"), null;
}
class _0x3fa9c9 {
  constructor(_0x31e0b2) {
    const _0x545afd = _0x31e0b2.split("@");
    this.remark = _0x545afd[0];
    this.cookie = _0x545afd[1];
    this.message = _0x545afd[2];
    this.systemUa = _0x545afd[3];
    this.browserUa = _0x545afd[4];
    if (_0x545afd.length === 6) {
      const _0x436490 = _0x545afd[5];
      let _0xf68264, _0x234761, _0x220062, _0x2542fa;
      try {
        if (_0x436490.includes("|")) {
          const _0x170c9d = _0x436490.split("|");
          [_0xf68264, _0x234761, _0x220062, _0x2542fa] = _0x170c9d;
        } else {
          if (_0x436490.includes("#")) {
            const _0x3024e9 = _0x436490.split("#");
            [_0xf68264, _0x234761, _0x220062, _0x2542fa] = _0x3024e9;
          } else {
            _0x1b487b(this.remark, "SOCKS5 代理格式不正确，请按要求填写");
          }
        }
        this.proxyUrl = "socks5h://" + _0x220062 + ":" + _0x2542fa + "@" + _0xf68264 + ":" + _0x234761;
        _0x508260(this.remark, "代理: " + _0x47fa5e(_0xf68264));
        this.httpClient = _0x2731bb(this.proxyUrl);
      } catch (_0x45388f) {
        _0x1b487b(this.remark, "SOCKS5 代理解析失败，请检查格式");
        this.httpClient = _0x5990a3 ? _0x5990a3.create() : null;
      }
    } else this.proxyUrl = null, this.httpClient = _0x5990a3 ? _0x5990a3.create() : null, _0x508260(this.remark, "未配置代理。多账号请确保一号一代理。");
    this.userAgent = this.systemUa + "-ksad-android-3.3.55.2";
    const _0x49b22a = /userId=([^;]+)/.exec(this.cookie || "");
    if (_0x49b22a) this.userId = _0x49b22a[1];else throw new Error("请检查Cookie格式");
    if (!this.httpClient) {
      throw new Error("HTTP客户端创建失败，请检查axios模块是否正确安装");
    }
    this.adLoopCount = 0;
    this.boxAdLoopCount = 0;
    this.presentAmount = 0;
    this.maxGold = parseInt(process.env.MAXgol || "1500000", 10);
  }
  ["log"](_0x26f631, _0x54e905 = "info") {
    if (_0x54e905 === "info") _0x508260(this.remark, _0x26f631);else {
      if (_0x54e905 === "error") _0x1b487b(this.remark, _0x26f631);else _0x54e905 === "warning" ? _0x11783c(this.remark, _0x26f631) : _0x508260(this.remark, _0x26f631);
    }
  }
  ["getTimesDelay"]() {
    const _0x5eda58 = String(process.env.Times || "18,25").trim();
    let _0x3755e4 = 18,
      _0x4537b5 = 25;
    try {
      if (_0x5eda58.includes(",")) {
        const _0x30db11 = _0x5eda58.split(",");
        if (_0x30db11.length === 2) {
          const _0x1a6b48 = parseInt(_0x30db11[0].trim(), 10),
            _0x31d599 = parseInt(_0x30db11[1].trim(), 10);
          !isNaN(_0x1a6b48) && !isNaN(_0x31d599) && _0x1a6b48 > 0 && _0x31d599 >= _0x1a6b48 ? (_0x3755e4 = _0x1a6b48, _0x4537b5 = _0x31d599) : this.log("Times环境变量格式错误，使用默认值: " + _0x3755e4 + "-" + _0x4537b5 + "秒");
        } else this.log("Times环境变量格式错误，使用默认值: " + _0x3755e4 + "-" + _0x4537b5 + "秒");
      } else {
        const _0x38d95c = parseInt(_0x5eda58, 10);
        !isNaN(_0x38d95c) && _0x38d95c > 0 ? (_0x3755e4 = 15, _0x4537b5 = _0x38d95c) : this.log("Times环境变量格式错误，使用默认值: " + _0x3755e4 + "-" + _0x4537b5 + "秒");
      }
    } catch (_0x2fa1f0) {
      this.log("Times环境变量解析失败，使用默认值: " + _0x3755e4 + "-" + _0x4537b5 + "秒");
    }
    return _0xcf73e0(_0x3755e4, _0x4537b5);
  }
  async ["checkSock5"]() {
    if (!this.proxyUrl) return {
      "available": true
    };
    try {
      const _0x1133ce = Date.now();
      await this.httpClient.get("http://www.baidu.com", {
        "timeout": 10000
      });
      const _0x3da6b7 = (Date.now() - _0x1133ce) / 1000;
      return {
        "available": true,
        "response_time": Number(_0x3da6b7.toFixed(2)),
        "error": null
      };
    } catch (_0x556eb1) {
      return {
        "available": false,
        "response_time": null,
        "error": String(_0x556eb1)
      };
    }
  }
  async ["User_info"](_0x4f897e = true) {
    const _0x31b501 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/home",
      _0xdd0556 = _0x173600(this.message);
    let _0x21bc4b = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0xdd0556
    });
    _0x21bc4b = _0x21bc4b.replaceAll("/", "\\/");
    const _0x50f71d = {
        "User-Agent": this.userAgent,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await _0x5c9061("/rest/e/tube/inspire/home&&" + _0x21bc4b, this.httpClient, this.userId),
        "Ks-Encoding": "2",
        "BrowserUa": this.browserUa,
        "SystemUa": this.systemUa,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.cookie
      },
      _0x2e9c22 = await this.httpClient.post(_0x31b501, _0x21bc4b, {
        "headers": _0x50f71d
      }),
      _0x181f19 = _0x2e9c22.data;
    if (_0x181f19?.["result"] === 1) {
      const _0x24f8a6 = _0x52e52d(_0x181f19.data),
        _0xc3d38 = _0x24f8a6.accountInfoV2?.["coinAccount"]?.["amount"],
        _0x20a9e5 = _0x24f8a6.accountInfoV2?.["cashAccount"]?.["amountDisplay"];
      if (Number(_0xc3d38 || 0) >= this.maxGold) return this.log("金币达到阈值(" + this.maxGold + ")，停止执行", "warning"), false;
      _0x4f897e && this.log("余额: 金币=" + _0xc3d38 + " (≈" + Number(_0xc3d38 || 0) / 30000 + ") | 现金=" + _0x20a9e5);
      const _0x49e1f9 = _0x24f8a6.watchTubeTaskInfo?.["tasks"] || [];
      this.watchTubeTask = _0x49e1f9[0];
      if (!_0x24f8a6.dailyTaskInfo) return this.log("Cookie 失效，请重新抓取"), false;
      const _0x213c88 = _0x24f8a6.dailyTaskInfo?.["tasks"] || [];
      for (const _0x2286ca of _0x213c88) {
        if (_0x2286ca.id === 6002) {
          if (_0x4f897e) await this.SignIn(_0x2286ca);
        }
        if (_0x2286ca.id === 6005) {
          this.adData = _0x2286ca;
        }
      }
      return true;
    }
    return this.log("用户信息获取失败: " + JSON.stringify(_0x181f19)), false;
  }
  async ["Treasure_Box"]() {
    const _0x2fe60b = "https://tube.e.kuaishou.com/rest/e/tube/inspire/treasureBox",
      _0x3b1fe1 = _0x173600(this.message);
    let _0x577234 = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x3b1fe1
    });
    _0x577234 = _0x577234.replaceAll("/", "\\/");
    const _0x18f803 = {
        "User-Agent": this.userAgent,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await _0x5c9061("/rest/e/tube/inspire/treasureBox&&" + _0x577234, this.httpClient, this.userId),
        "Ks-Encoding": "2",
        "BrowserUa": this.browserUa,
        "SystemUa": this.systemUa,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.cookie
      },
      _0x4492f0 = await this.httpClient.post(_0x2fe60b, _0x577234, {
        "headers": _0x18f803
      }),
      _0x3fa163 = _0x4492f0.data;
    if (_0x3fa163?.["result"] === 1) {
      const _0x558797 = _0x52e52d(_0x3fa163.data);
      this.BoxAdInfo = _0x558797?.["popupInfo"]?.["buttonInfo"]?.["linkUrl"];
      const _0x467e3b = _0x558797.id,
        _0x5047cc = _0x558797.taskToken,
        _0x2be59f = _0x558797?.["popupInfo"]?.["stages"] || [];
      let _0x7abc92 = "";
      for (const _0x5d501d of _0x2be59f) {
        if (_0x5d501d.status === 13) {
          _0x7abc92 = _0x5d501d.stageIndex;
          break;
        } else {
          if (_0x5d501d.status === 10) {
            const _0x4f9d79 = Math.floor((_0x5d501d.countdown || 0) / 1000 / 60),
              _0x51fdf1 = _0x5d501d.subtitle;
            this.log("宝箱" + _0x51fdf1 + "，预计剩余 " + _0x4f9d79 + " 分钟");
          }
        }
      }
      if (_0x7abc92 !== "") {
        const _0x1e6526 = await this.Task_Report(_0x467e3b, _0x5047cc, _0x7abc92);
        _0x1e6526?.["taskFinished"] && this.log("宝箱开启成功，本次获得 " + _0x1e6526.amount + " 金币");
      }
    } else {
      this.log("宝箱信息拉取失败: " + JSON.stringify(_0x3fa163));
    }
  }
  async ["Event_Report"](_0x5d9ee2) {
    const _0x19f0d9 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/event/report",
      _0x463f26 = _0x121648(this.message, _0x5d9ee2);
    let _0x55f723 = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x463f26
    });
    _0x55f723 = _0x55f723.replaceAll("/", "\\/");
    const _0x1ecdf6 = {
        "User-Agent": this.userAgent,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await _0x5c9061("/rest/e/tube/inspire/event/report&&" + _0x55f723, this.httpClient, this.userId),
        "Ks-Encoding": "2",
        "BrowserUa": this.browserUa,
        "SystemUa": this.systemUa,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.cookie
      },
      _0x23e954 = await this.httpClient.post(_0x19f0d9, _0x55f723, {
        "headers": _0x1ecdf6
      });
    return _0x23e954.data;
  }
  async ["Task_Report"](_0x2ea62e, _0x266224, _0x88a26a) {
    const _0x18ae9d = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
      _0x48d699 = _0x112957(this.message, _0x2ea62e, _0x266224, _0x88a26a);
    let _0x5d03dd = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x48d699
    });
    _0x5d03dd = _0x5d03dd.replaceAll("/", "\\/");
    const _0x5bf9a8 = {
        "User-Agent": this.userAgent,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await _0x5c9061("/rest/e/tube/inspire/task/report&&" + _0x5d03dd, this.httpClient, this.userId),
        "Ks-Encoding": "2",
        "BrowserUa": this.browserUa,
        "SystemUa": this.systemUa,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.cookie
      },
      _0x40471b = await this.httpClient.post(_0x18ae9d, _0x5d03dd, {
        "headers": _0x5bf9a8
      }),
      _0x488ce0 = _0x40471b.data;
    if (_0x488ce0?.["result"] === 1) return _0x52e52d(_0x488ce0.data);
    return this.log("任务上报未通过"), null;
  }
  async ["SignIn"](_0x220bae) {
    const _0x1bfb8b = _0x220bae.popupInfo,
      _0x1fdaf1 = _0x1bfb8b.taskId,
      _0x23107b = _0x1bfb8b.taskToken,
      _0x730909 = _0x1bfb8b.stages || [];
    let _0x5ed3cb = null;
    for (const _0x3deb80 of _0x730909) {
      if (_0x3deb80.title === "今天") {
        _0x5ed3cb = _0x3deb80;
        break;
      }
    }
    if (!_0x5ed3cb) {
      this.log("今日已签到");
      return;
    }
    const _0x532a92 = _0x5ed3cb.stageIndex;
    if (_0x5ed3cb.status === 10) {
      this.log("进行签到");
      const _0x4a08e3 = await this.Task_Report(_0x1fdaf1, _0x23107b, _0x532a92);
      _0x4a08e3?.["statusCode"] === 1003 && this.log(_0x4a08e3.errorMessage);
    }
  }
  async ["GetAd"](_0x528155) {
    const _0x4038b5 = "https://open.e.kuaishou.com/rest/e/v3/open/univ",
      _0x54e2dd = _0x41df33(this.message, _0x528155);
    let _0x57f692 = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x54e2dd
    });
    _0x57f692 = _0x57f692.replaceAll("/", "\\/");
    const _0x326040 = {
        "User-Agent": this.userAgent,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig1": await _0x53b70b("/rest/e/v3/open/univ&&" + _0x57f692, this.httpClient, this.userId),
        "Ks-Encoding": "2",
        "BrowserUa": this.browserUa,
        "SystemUa": this.systemUa,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.cookie
      },
      _0x5a7314 = await this.httpClient.post(_0x4038b5, _0x57f692, {
        "headers": _0x326040
      }),
      _0x155274 = _0x5a7314.data;
    if (_0x155274?.["result"] === 1) {
      const _0x503391 = _0x52e52d(_0x155274.impAdInfo);
      return _0x503391;
    }
    return [];
  }
  async ["Upload_Video_Time"]() {
    const _0x391359 = Date.now(),
      _0x427152 = {
        "eventType": "WATCH_TUBE",
        "eventTime": _0x391359,
        "data": "{\"tubeId\":\"3412489\",\"episodeNumber\":1,\"photoId\":\"77298100\",\"watchTime\":30}"
      },
      _0x5cfe8f = await this.Event_Report(_0x427152);
    _0x5cfe8f?.["result"] === 1 && this.log("时长上报完成");
  }
  async ["watchTube"]() {
    const _0x12e870 = this.watchTubeTask?.["taskStatus"];
    if (_0x12e870 === 13) {
      const _0x1b070f = await this.Task_Report(this.watchTubeTask.id, this.watchTubeTask.extParam.taskToken, this.watchTubeTask.process);
      _0x1b070f?.["taskFinished"] && this.log("任务完成，领取 " + _0x1b070f.amount + " 金币");
    } else _0x12e870 === 10 && (this.log(this.watchTubeTask?.["subtitle"] || "继续观看以解锁奖励"), await this.Upload_Video_Time());
  }
  async ["WatchAD"]() {
    if (!this.adData) return this.log("今日广告任务已完成"), false;
    const _0x362a24 = this.adData.extParam.taskToken,
      _0x9658d8 = this.adData.id;
    let _0x4f8c13 = this.adData.buttonInfo.linkUrl;
    while (_0x4f8c13.length % 4 !== 0) _0x4f8c13 += "=";
    const _0x11ec0f = JSON.parse(Buffer.from(_0x4f8c13, "base64").toString("utf8")),
      _0x5e75e0 = _0x11ec0f.posId,
      _0x18a2c2 = await this.GetAd(_0x5e75e0);
    let _0x8d92d3, _0xaa8fa3, _0x5054fb, _0x1e8f39;
    if (_0x18a2c2.length >= 1) {
      const _0x390d69 = _0x18a2c2[0];
      _0x8d92d3 = _0x390d69.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
      _0xaa8fa3 = _0x390d69.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
      try {
        const _0x2fab0a = JSON.parse(_0x390d69.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
        _0x5054fb = _0x2fab0a.transId;
        _0x1e8f39 = String(_0x5054fb || "").split("_");
      } catch (_0x4b3947) {
        this.log("广告回调信息解析失败: " + _0x4b3947.message + "，使用默认值");
        const _0x3eb9fa = Date.now();
        _0x8d92d3 = _0x8d92d3 || 148407627585 + _0xcf73e0(0, 1000000);
        _0xaa8fa3 = _0xaa8fa3 || _0xcf73e0(400, 50400);
        _0x5054fb = "2008597857549383489_" + _0x8d92d3 + "_" + _0x3eb9fa;
        _0x1e8f39 = _0x5054fb.split("_");
      }
    } else {
      const _0x243a5c = Date.now();
      _0x8d92d3 = 148407627585 + _0xcf73e0(0, 1000000);
      _0xaa8fa3 = _0xcf73e0(400, 50400);
      _0x5054fb = "2008597857549383489_" + _0x8d92d3 + "_" + _0x243a5c;
      _0x1e8f39 = _0x5054fb.split("_");
    }
    const _0x110cda = _0x7465d0(this.message, _0x5e75e0, _0xaa8fa3, _0x1e8f39[0], _0x8d92d3, _0x362a24, _0x1e8f39[0] + "_" + _0x1e8f39[1], _0x1e8f39[2], _0x9658d8);
    await _0x288822(_0xcf73e0(16, 32) * 1000);
    const _0x5eea41 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let _0x49adee = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x110cda
    });
    _0x49adee = _0x49adee.replaceAll("/", "\\/");
    const _0x52cdac = {
        "User-Agent": this.userAgent,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await _0x5c9061("/rest/e/tube/inspire/task/report&&" + _0x49adee, this.httpClient, this.userId),
        "Ks-Encoding": "2",
        "BrowserUa": this.browserUa,
        "SystemUa": this.systemUa,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.cookie
      },
      _0x50e264 = await this.httpClient.post(_0x5eea41, _0x49adee, {
        "headers": _0x52cdac
      }),
      _0x16b1b7 = _0x50e264.data;
    if (_0x16b1b7?.["result"] === 1) {
      const _0x6b8541 = _0x52e52d(_0x16b1b7.data);
      if (_0x6b8541?.["taskFinished"]) {
        this.log("广告完成，获得 " + _0x6b8541.amount + " 金币");
        if (_0x6b8541.amount === 50) return this.log("此号疑似黑号"), false;
        _0x6b8541.amount < 100 && this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
        if (_0x6b8541.popUp && _0x6b8541.popUp.id === "continuousWatchAdPopup") {
          const _0x54a1f0 = _0x6b8541.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
          let _0x5928df = _0x54a1f0;
          while (_0x5928df.length % 4 !== 0) _0x5928df += "=";
          const _0x14f3f1 = JSON.parse(Buffer.from(_0x5928df, "base64").toString("utf8")),
            _0x4ed784 = _0x14f3f1.extParams,
            _0x3f0132 = _0x14f3f1.posId,
            _0x502355 = _0x14f3f1.businessId;
          await _0x288822(_0xcf73e0(2, 6) * 1000);
          this.adLoopCount = 0;
          await this.MoreWatchAD(_0x4ed784, _0x3f0132, _0x502355);
        }
        return true;
      } else {
        return this.log("广告上报失败（A）"), false;
      }
    } else return this.log("广告上报失败（B）"), false;
  }
  async ["MoreWatchAD"](_0x5c5f30, _0x58abe2, _0x347af1) {
    this.adLoopCount += 1;
    const _0x36e877 = await this.GetAd(_0x58abe2);
    let _0x3dbb6c, _0x24f5e6, _0xb40972, _0x24ba35;
    if (_0x36e877.length >= 1) {
      const _0x426905 = _0x36e877[0];
      _0x3dbb6c = _0x426905.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
      _0x24f5e6 = _0x426905.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
      try {
        const _0xd91ef2 = JSON.parse(_0x426905.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
        _0xb40972 = _0xd91ef2.transId;
        _0x24ba35 = String(_0xb40972 || "").split("_");
      } catch (_0x52b40c) {
        this.log("广告回调信息解析失败: " + _0x52b40c.message + "，使用默认值");
        const _0x59d048 = Date.now();
        _0x3dbb6c = _0x3dbb6c || 148407627585 + _0xcf73e0(0, 1000000);
        _0x24f5e6 = _0x24f5e6 || _0xcf73e0(400, 50400);
        _0xb40972 = "2008597857549383489_" + _0x3dbb6c + "_" + _0x59d048;
        _0x24ba35 = _0xb40972.split("_");
      }
    } else {
      const _0x11b3ea = Date.now();
      _0x3dbb6c = 148407627585 + _0xcf73e0(0, 1000000);
      _0x24f5e6 = _0xcf73e0(400, 50400);
      _0xb40972 = "2008597857549383489_" + _0x3dbb6c + "_" + _0x11b3ea;
      _0x24ba35 = _0xb40972.split("_");
    }
    const _0x1eddca = _0x7465d0(this.message, _0x58abe2, _0x24f5e6, _0x24ba35[0], _0x3dbb6c, _0x5c5f30, _0x24ba35[0] + "_" + _0x24ba35[1], _0x24ba35[2], _0x347af1, this.adLoopCount);
    await _0x288822(_0xcf73e0(18, 30) * 1000);
    const _0x5b90e0 = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let _0x478ede = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x1eddca
    });
    _0x478ede = _0x478ede.replaceAll("/", "\\/");
    const _0x3e643d = {
        "User-Agent": this.userAgent,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await _0x5c9061("/rest/e/tube/inspire/task/report&&" + _0x478ede, this.httpClient, this.userId),
        "Ks-Encoding": "2",
        "BrowserUa": this.browserUa,
        "SystemUa": this.systemUa,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.cookie
      },
      _0x1fc130 = await this.httpClient.post(_0x5b90e0, _0x478ede, {
        "headers": _0x3e643d
      }),
      _0x2f9141 = _0x1fc130.data;
    if (_0x2f9141?.["result"] === 1) {
      const _0x24a4e8 = _0x52e52d(_0x2f9141.data);
      if (_0x24a4e8?.["taskFinished"]) {
        if (_0x24a4e8.amount === 50) {
          return this.log("此号疑似黑号"), false;
        }
        _0x24a4e8.amount < 100 && this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
        this.log("嵌套广告第 " + this.adLoopCount + " 次完成，获得 " + _0x24a4e8.amount + " 金币");
        if (_0x24a4e8.popUp && _0x24a4e8.popUp.id === "continuousWatchAdPopup") {
          const _0xaa4e5c = _0x24a4e8.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
          let _0x1dc8b5 = _0xaa4e5c;
          while (_0x1dc8b5.length % 4 !== 0) _0x1dc8b5 += "=";
          const _0x290673 = JSON.parse(Buffer.from(_0x1dc8b5, "base64").toString("utf8")),
            _0x55fa8a = _0x290673.extParams,
            _0x22695d = _0x290673.posId,
            _0x290054 = _0x290673.businessId;
          await _0x288822(_0xcf73e0(2, 6) * 1000);
          await this.MoreWatchAD(_0x55fa8a, _0x22695d, _0x290054);
        } else {
          this.log("嵌套广告累计次数：" + this.adLoopCount);
          this.adLoopCount = 0;
        }
        return true;
      } else {
        this.log("广告上报失败（A）");
      }
    } else {
      this.log("广告上报失败（B）");
    }
    return true;
  }
  async ["BoxAd"]() {
    this.boxAdLoopCount = 0;
    let _0x43c579 = this.BoxAdInfo || "";
    if (!_0x43c579 || _0x43c579.trim() === "") {
      this.log("宝箱广告信息为空，跳过宝箱广告任务");
      return;
    }
    try {
      while (_0x43c579.length % 4 !== 0) _0x43c579 += "=";
      const _0x776ad8 = JSON.parse(Buffer.from(_0x43c579, "base64").toString("utf8"));
      if (!_0x776ad8 || !_0x776ad8.businessId || !_0x776ad8.extParams || !_0x776ad8.posId) {
        this.log("宝箱广告数据结构无效，跳过宝箱广告任务");
        return;
      }
      const _0x2c24fa = _0x776ad8.businessId,
        _0x3edef = _0x776ad8.extParams,
        _0x1d2d1b = _0x776ad8.posId;
      await this.WatchBoxAd(_0x3edef, _0x1d2d1b, _0x2c24fa);
    } catch (_0x556170) {
      this.log("宝箱广告数据解析失败: " + _0x556170.message + "，跳过宝箱广告任务");
      return;
    }
  }
  async ["WatchBoxAd"](_0x4604f8, _0x46a722, _0x588906) {
    this.boxAdLoopCount += 1;
    if (!(await this.User_info(false))) {
      return this.log("账号金币已达上限，停止执行"), false;
    }
    const _0x1ab389 = await this.GetAd(_0x46a722);
    let _0x20632e, _0x19e3b7, _0xb57621, _0x62f762;
    if (_0x1ab389.length >= 1) {
      const _0x42a609 = _0x1ab389[0];
      _0x20632e = _0x42a609.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
      _0x19e3b7 = _0x42a609.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
      try {
        const _0x16984a = JSON.parse(_0x42a609.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
        _0xb57621 = _0x16984a.transId;
        _0x62f762 = String(_0xb57621 || "").split("_");
      } catch (_0x2fde5b) {
        this.log("广告回调信息解析失败: " + _0x2fde5b.message + "，使用默认值");
        const _0x12c725 = Date.now();
        _0x20632e = _0x20632e || 148407627585 + _0xcf73e0(0, 1000000);
        _0x19e3b7 = _0x19e3b7 || _0xcf73e0(400, 50400);
        _0xb57621 = "2008597857549383489_" + _0x20632e + "_" + _0x12c725;
        _0x62f762 = _0xb57621.split("_");
      }
    } else {
      const _0x38cf2d = Date.now();
      _0x20632e = 148407627585 + _0xcf73e0(0, 1000000);
      _0x19e3b7 = _0xcf73e0(400, 50400);
      _0xb57621 = "2008597857549383489_" + _0x20632e + "_" + _0x38cf2d;
      _0x62f762 = _0xb57621.split("_");
    }
    const _0x12d208 = _0x7465d0(this.message, _0x46a722, _0x19e3b7, _0x62f762[0], _0x20632e, _0x4604f8, _0x62f762[0] + "_" + _0x62f762[1], _0x62f762[2], _0x588906, this.boxAdLoopCount);
    await _0x288822(_0xcf73e0(18, 30) * 1000);
    const _0x28924d = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let _0xb05164 = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": _0x12d208
    });
    _0xb05164 = _0xb05164.replaceAll("/", "\\/");
    const _0x441e38 = {
        "User-Agent": this.userAgent,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await _0x5c9061("/rest/e/tube/inspire/task/report&&" + _0xb05164, this.httpClient, this.userId),
        "Ks-Encoding": "2",
        "BrowserUa": this.browserUa,
        "SystemUa": this.systemUa,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.cookie
      },
      _0x1555d4 = await this.httpClient.post(_0x28924d, _0xb05164, {
        "headers": _0x441e38
      }),
      _0x12f642 = _0x1555d4.data;
    if (_0x12f642?.["result"] === 1) {
      try {
        const _0x47dd1d = _0x52e52d(_0x12f642.data);
        if (_0x47dd1d?.["taskFinished"]) {
          if (_0x47dd1d.amount === 50) return this.log("此号疑似黑号"), false;
          _0x47dd1d.amount < 100 && this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
          this.log("宝箱广告第 " + this.boxAdLoopCount + " 次完成，获得 " + _0x47dd1d.amount + " 金币");
          if (_0x47dd1d.popUp && _0x47dd1d.popUp.id === "continuousWatchAdPopup") {
            const _0x5e033a = _0x47dd1d.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
            if (_0x5e033a && _0x5e033a.trim() !== "") try {
              let _0x5985c8 = _0x5e033a;
              while (_0x5985c8.length % 4 !== 0) _0x5985c8 += "=";
              const _0x543282 = JSON.parse(Buffer.from(_0x5985c8, "base64").toString("utf8"));
              if (_0x543282 && _0x543282.extParams && _0x543282.posId && _0x543282.businessId) {
                const _0x2e7ea8 = _0x543282.extParams,
                  _0x4b1cf8 = _0x543282.posId,
                  _0x4286af = _0x543282.businessId;
                await _0x288822(_0xcf73e0(2, 6) * 1000);
                const _0x39583d = await this.WatchBoxAd(_0x2e7ea8, _0x4b1cf8, _0x4286af);
                if (!_0x39583d) return false;
              } else this.log("嵌套广告数据结构无效，停止嵌套广告");
            } catch (_0x43c5ca) {
              this.log("嵌套广告数据解析失败: " + _0x43c5ca.message + "，停止嵌套广告");
            } else this.log("嵌套广告链接为空，停止嵌套广告");
          } else this.log("本次共执行[" + this.boxAdLoopCount + "]次宝箱广告"), this.boxAdLoopCount = 0;
          return true;
        } else this.log("广告上报失败（A）");
      } catch (_0x1f6009) {
        return this.log("广告响应解析失败: " + _0x1f6009.message), false;
      }
    } else this.log("广告上报失败（B）");
    return true;
  }
  async ["main"]() {
    this.log("开始检查账号信息");
    await this.User_info();
    const _0x1f8da2 = String(process.env.baoxiang || "1").trim();
    if (_0x1f8da2 === "1") {
      this.log("宝箱功能已启用，开始开启宝箱");
      await this.Treasure_Box();
    } else this.log("宝箱功能已禁用，跳过宝箱开启");
    await _0x288822(_0xcf73e0(3, 6) * 1000);
    this.log("开始循环看广告");
    while (true) {
      if (!(await this.User_info(false))) return;
      const _0x6960a7 = await this.WatchAD();
      if (!_0x6960a7) break;
      const _0x25320b = this.getTimesDelay();
      this.log("普通广告完成，等待 " + _0x25320b + " 秒后继续");
      await _0x288822(_0x25320b * 1000);
      process.stdout.write("[1A[2K");
    }
    this.log("开始执行宝箱广告");
    await this.BoxAd();
    const _0x384fbb = this.getTimesDelay();
    this.log("宝箱广告完成，等待 " + _0x384fbb + " 秒后继续");
    await _0x288822(_0x384fbb * 1000);
    await this.watchTube();
  }
}
async function _0x375e53() {
  const _0x5f3d9b = await _0x3b5b5e();
  if (!_0x5f3d9b) {
    console.log("❌ 系统环境检查未通过，程序终止运行");
    return;
  }
  const _0x37a109 = process.env[_0x3ff992];
  if (!_0x37a109) {
    console.warn("请先设置环境变量[" + _0x3ff992 + "]");
    return;
  }
  const _0x6308c3 = process.env.xfkm;
  if (!_0x6308c3 || !_0x6308c3.trim()) {
    console.error("未检测到环境变量[xfkm]，请先在青龙面板设置 xfkm 后再运行。");
    return;
  }
  if (_0x27c7b6) {
    if (_0x5990a3) {
      try {
        const _0x25af54 = await _0x5990a3.get("http://154.12.60.33:2424/release/xf/300gg.php", {
          "timeout": 10000
        });
        let _0x29d27b = _0x25af54?.["data"] ?? "";
        if (Buffer.isBuffer(_0x29d27b)) _0x29d27b = _0x29d27b.toString("utf8");
        _0x29d27b = String(_0x29d27b).trim();
        _0x29d27b && _0x29d27b !== "0" && console.log(_0x29d27b, "\n");
      } catch (_0x15cd18) {}
    } else console.log("⚠️ axios模块不可用，无法获取公告信息");
  }
  const _0x428f49 = await _0x5990a3.get("http://154.12.60.33:2424/card_status.php?card_key=" + _0x6308c3, {
    "timeout": 10000
  });
  if (_0x428f49.data.success) {
    if (_0x428f49.data.card_info.status === "valid") console.log(_0x428f49.data.card_info.status_message, "剩余请求次数：", _0x428f49.data.card_info.remaining_times, "过期时间：", _0x428f49.data.card_info.expiry_date, "\n");else {
      console.log(_0x428f49.data.card_info.status_message, " 终止运行");
      return;
    }
  } else {
    console.log("验证卡密状态失败，请检查卡密是否有效");
    return;
  }
  if (_0x1c2d5a) {
    const _0x871d2e = _0xcf73e0(10, 60);
    console.log("已启用随机延时：" + _0x871d2e + " 秒");
    await _0x288822(_0x871d2e * 1000);
  }
  const _0x97531e = _0x34b1a6(_0x37a109);
  console.log("账号数量：" + _0x97531e.length);
  console.log("▶ 开始运行：" + _0x1e5701 + " " + _0x479218);
  const _0x4ef361 = Date.now(),
    _0xead253 = parseInt(process.env.maxth || "1", 10);
  if (_0x67f965) {
    const _0xbc8679 = _0x67f965(Math.max(1, _0xead253));
    await Promise.all(_0x97531e.map((_0x4e6772, _0x171a42) => _0xbc8679(async () => {
      try {
        const _0x19671c = new _0x3fa9c9(_0x4e6772),
          _0x175bbb = await _0x19671c.checkSock5();
        !_0x175bbb.available ? _0x19671c.log("代理不可用 错误信息: [" + _0x175bbb.error + "]", "error") : _0x175bbb.response_time != null && _0x19671c.log("代理可用 响应时间: [" + _0x175bbb.response_time + "秒]");
        await _0x19671c.main();
      } catch (_0xa318b8) {
        console.error("账号" + (_0x171a42 + 1) + "执行错误:", _0xa318b8);
      }
    })));
  } else {
    console.log("⚠️ 并发控制不可用，将使用顺序执行模式");
    console.log("💡 如需并发执行，请降级p-limit版本：npm install p-limit@6.1.0");
    for (let _0x13bdfc = 0; _0x13bdfc < _0x97531e.length; _0x13bdfc++) {
      try {
        const _0x146dad = new _0x3fa9c9(_0x97531e[_0x13bdfc]),
          _0x19711d = await _0x146dad.checkSock5();
        if (!_0x19711d.available) {
          _0x146dad.log("代理不可用 错误信息: [" + _0x19711d.error + "]", "error");
        } else _0x19711d.response_time != null && _0x146dad.log("代理可用 响应时间: [" + _0x19711d.response_time + "秒]");
        await _0x146dad.main();
      } catch (_0x591cfd) {
        console.error("账号" + (_0x13bdfc + 1) + "执行错误:", _0x591cfd);
      }
    }
  }
  const _0x3b437a = (Date.now() - _0x4ef361) / 1000;
  console.log("\n■ 运行结束：" + _0x1e5701);
  console.log("⏱ 总耗时：" + _0x3b437a.toFixed(2) + " 秒");
}
function _0x34b1a6(_0x1a3cc4) {
  if (_0x1a3cc4.includes("\n")) {
    return _0x1a3cc4.split("\n").filter(Boolean);
  }
  if (_0x1a3cc4.includes("&")) {
    return _0x1a3cc4.split("&").filter(Boolean);
  }
  return [_0x1a3cc4];
}
require.main === module && _0x375e53().catch(_0x21f946 => {
  console.error(_0x21f946);
  process.exit(1);
});