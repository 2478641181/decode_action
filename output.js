//Mon Jul 28 2025 09:32:43 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const JD_COOKIE = process.env.JD_COOKIE || "";
const COUPON_ID = process.env.COUPON_ID || "4P7uUisQVZJR4dJj4wTxgdSwDU9K",
  EXCHANGE_TIMES = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "20:03"],
  PRE_START_MS = 3375,
  POST_END_MS = 1600,
  REQ_INTERVAL = 1100,
  MAX_WAIT_MIN = 2;
const MAX_RETRY = 8,
  API_URL = "https://api.m.jd.com/api",
  TIME_API = "https://api.m.jd.com/client.action?functionId=queryMaterialProducts",
  ORIGIN_HEADER = "https://laputa.jd.com",
  axios = require("axios");
let timeOffset = 0;
const syncTime = async () => {
    return new Promise(_0x2ebcec => {
      const _0x1ff607 = Date.now(),
        _0x3de315 = {
          "User-Agent": "jdapp"
        };
      const _0x38b93a = {
        headers: _0x3de315,
        timeout: 1500
      };
      axios.get(TIME_API, _0x38b93a).then(_0x569a11 => {
        const _0x5ae543 = _0x569a11.headers.date || _0x569a11.headers.Date;
        if (!_0x5ae543) {
          console.log("⏱️ 未找到Date头");
          return _0x2ebcec(0);
        }
        try {
          const _0x3a4784 = new Date(_0x5ae543).getTime(),
            _0x2eed80 = Date.now(),
            _0x2aa62e = Math.max(1, Math.min((_0x2eed80 - _0x1ff607) / 2, 100));
          timeOffset = _0x3a4784 + _0x2aa62e - _0x2eed80;
          console.log("⏱️ 时间校准: " + (timeOffset > 0 ? "+" : "") + timeOffset + "ms");
          _0x2ebcec(timeOffset);
        } catch {
          console.log("⏱️ 时间解析失败");
          _0x2ebcec(0);
        }
      }).catch(_0x3b3aab => {
        console.log("⏱️ 时间同步失败");
        _0x2ebcec(0);
      });
    });
  },
  getJDTime = () => Date.now() + timeOffset,
  formatTime = _0xcc69aa => {
    const _0x53b649 = new Date(_0xcc69aa);
    const _0x1b5ed0 = _0x53b649.getMilliseconds().toString().padStart(3, "0");
    return _0x53b649.getHours().toString().padStart(2, "0") + ":" + _0x53b649.getMinutes().toString().padStart(2, "0") + ":" + _0x53b649.getSeconds().toString().padStart(2, "0") + "." + _0x1b5ed0;
  },
  _0x387022 = {
    encryptAssignmentId: COUPON_ID
  };
const REQUEST_URL = API_URL + "?functionId=mb2capp_sports_exchangeHealthCoins" + ("&body=" + encodeURIComponent(JSON.stringify(_0x387022))) + "&appid=laputa&client=m",
  sendRequest = async () => {
    const _0xf2303e = getJDTime();
    try {
      const _0x23e952 = {
        Cookie: JD_COOKIE,
        "User-Agent": "jdapp",
        Origin: ORIGIN_HEADER,
        Connection: "keep-alive"
      };
      const _0x30fabb = {
        headers: _0x23e952,
        timeout: 2500
      };
      const _0x45126b = await axios.get(REQUEST_URL, _0x30fabb),
        _0x12b884 = getJDTime() - _0xf2303e;
      console.log("📤 请求发送 @ " + formatTime(_0xf2303e) + " 延迟: " + _0x12b884 + "ms");
      const _0x565e89 = {
        data: _0x45126b.data,
        latency: _0x12b884,
        startTime: _0xf2303e
      };
      return _0x565e89;
    } catch (_0x42338f) {
      const _0x30a849 = getJDTime() - _0xf2303e;
      console.log("📤 请求发送 @ " + formatTime(_0xf2303e) + " 延迟: " + _0x30a849 + "ms 错误: " + _0x42338f.message);
      const _0x3f665f = {
        error: _0x42338f.message,
        latency: _0x30a849,
        startTime: _0xf2303e
      };
      return _0x3f665f;
    }
  };
const processResult = _0x168729 => {
    accountStatus.retryCount++;
    accountStatus.lastRequestTime = _0x168729.startTime;
    if (_0x168729.error) {
      console.log("⚠️ 请求错误: " + _0x168729.error + " | 延迟: " + _0x168729.latency + "ms");
      accountStatus.lastError = _0x168729.error;
      return accountStatus.retryCount < MAX_RETRY;
    }
    try {
      const _0x363dc3 = typeof _0x168729.data === "object" ? _0x168729.data : JSON.parse(_0x168729.data);
      if (_0x363dc3.success) {
        accountStatus.status = "success";
        accountStatus.message = _0x363dc3.msg || "兑换成功";
        console.log("🎉 兑换成功! " + accountStatus.message + " | 延迟: " + _0x168729.latency + "ms");
        return false;
      }
      if (_0x363dc3.code === "209501") {
        accountStatus.status = "no_balance";
        accountStatus.message = _0x363dc3.msg || "步数不足";
        console.log("⛔ 步数不足: " + accountStatus.message);
        return false;
      }
      if (_0x363dc3.code === "21103") {
        accountStatus.message = _0x363dc3.msg || "库存不足";
        console.log("🔄 库存不足，重试中... (" + accountStatus.retryCount + "/" + MAX_RETRY + ")");
        return accountStatus.retryCount < MAX_RETRY;
      }
      accountStatus.message = _0x363dc3.msg || "未知响应: " + _0x363dc3.code;
      console.log("❓ " + accountStatus.message);
    } catch (_0x311097) {
      const _0x100586 = typeof _0x168729.data === "string" ? _0x168729.data : JSON.stringify(_0x168729.data);
      if (/(成功|抢到了|太棒了|恭喜|已抢到)/i.test(_0x100586)) {
        accountStatus.status = "success";
        accountStatus.message = "兑换成功";
        console.log("🎉 兑换成功! | 延迟: " + _0x168729.latency + "ms");
        return false;
      }
      if (/(步数不足|209501)/i.test(_0x100586)) {
        accountStatus.status = "no_balance";
        accountStatus.message = "步数不足";
        console.log("⛔ 步数不足");
        return false;
      }
      if (/(库存不足|21103)/i.test(_0x100586)) {
        accountStatus.message = "库存不足";
        console.log("🔄 库存不足，重试中... (" + accountStatus.retryCount + "/" + MAX_RETRY + ")");
        return accountStatus.retryCount < MAX_RETRY;
      }
      accountStatus.message = "未知响应";
      console.log("❓ 未知响应: " + _0x100586.substring(0, 50) + "...");
    }
    return accountStatus.retryCount < MAX_RETRY;
  },
  _0x31402e = {
    valid: false,
    status: "pending",
    retryCount: 0,
    success: false,
    lastRequestTime: 0,
    message: "",
    lastError: ""
  };
let accountStatus = _0x31402e;
const validateCookie = async () => {
    try {
      console.log("🔍 发送Cookie验证请求...");
      const _0x28fcdd = await sendRequest();
      if (_0x28fcdd.error) {
        console.log("❌ Cookie验证失败: " + _0x28fcdd.error);
        accountStatus.lastError = _0x28fcdd.error;
        return false;
      }
      try {
        const _0x152b4a = typeof _0x28fcdd.data === "object" ? _0x28fcdd.data : JSON.parse(_0x28fcdd.data),
          _0x3e4375 = ["209501", "21103"].includes(_0x152b4a.code);
        accountStatus.message = _0x3e4375 ? "Cookie有效" : "Cookie无效";
        console.log("🔍 " + accountStatus.message + " (" + (_0x152b4a.code || "无code") + " - " + (_0x152b4a.msg || "无msg") + ")");
        return _0x3e4375;
      } catch {
        const _0x1ffdb4 = typeof _0x28fcdd.data === "string" ? _0x28fcdd.data : JSON.stringify(_0x28fcdd.data),
          _0x40d443 = /(成功|抢到了|太棒了|恭喜|已抢到)/i.test(_0x1ffdb4);
        accountStatus.message = _0x40d443 ? "Cookie有效" : "Cookie无效";
        console.log("🔍 " + accountStatus.message + " (" + _0x1ffdb4.substring(0, 50) + "...)");
        return _0x40d443;
      }
    } catch (_0x339c55) {
      console.log("❌ Cookie验证异常: " + _0x339c55.message);
      accountStatus.lastError = _0x339c55.message;
      return false;
    }
  },
  sendNotification = (_0x3d7c9c, _0x1ecbfb, _0x375b68) => {
    try {
      const _0x1f5125 = require("./sendNotify");
      _0x1f5125.sendNotify(_0x3d7c9c, _0x1ecbfb + "\n" + _0x375b68);
      console.log("📢 发送通知: " + _0x3d7c9c + " - " + _0x1ecbfb);
    } catch (_0xe8e252) {
      console.log("发送通知失败:", _0xe8e252.message);
    }
  },
  sendCookieNotification = _0x327105 => {
    const _0x2f3014 = Math.floor(_0x327105 / 60000),
      _0x356000 = Math.round(_0x327105 % 60000 / 1000),
      _0x10f027 = _0x2f3014 > 0 ? _0x2f3014 + "分" + _0x356000 + "秒" : _0x356000 + "秒";
    const _0xdc12ad = "验证结果: " + accountStatus.message + "\n" + ("距离兑换: " + _0x10f027);
    sendNotification("京东健康步数兑换", "Cookie验证完成", _0xdc12ad);
  },
  sendResultNotification = () => {
    let _0xd76049 = "兑换结果",
      _0xbb2744 = "";
    let _0x25e89c = "";
    switch (accountStatus.status) {
      case "success":
        _0xd76049 = "✅ 兑换成功";
        _0xbb2744 = accountStatus.message;
        _0x25e89c = "请求次数: " + accountStatus.retryCount;
        break;
      case "no_balance":
        _0xd76049 = "⛔ 兑换失败";
        _0xbb2744 = "步数不足";
        _0x25e89c = accountStatus.message;
        break;
      default:
        if (accountStatus.retryCount >= MAX_RETRY) {
          _0xd76049 = "⚠️ 兑换失败";
          _0xbb2744 = "达到最大尝试次数";
        } else {
          _0xd76049 = "🔄 兑换未完成";
          _0xbb2744 = "未完成兑换";
        }
        _0x25e89c = "尝试次数: " + accountStatus.retryCount + "\n";
        _0x25e89c += "最后状态: " + accountStatus.message + "\n";
        if (accountStatus.lastError) {
          _0x25e89c += "最后错误: " + accountStatus.lastError + "\n";
        }
    }
    sendNotification(_0xd76049, _0xbb2744, _0x25e89c);
  },
  executeExchange = async _0x5b605a => {
    const _0xbb10df = _0x5b605a - PRE_START_MS,
      _0x2fc7f5 = _0x5b605a + POST_END_MS;
    console.log("🚀 兑换时间窗口: " + formatTime(_0xbb10df) + " 到 " + formatTime(_0x2fc7f5));
    console.log("⏱️ 总时长: " + (_0x2fc7f5 - _0xbb10df) / 1000 + "秒");
    try {
      const _0x3f19f7 = {
        Cookie: JD_COOKIE,
        Origin: ORIGIN_HEADER
      };
      const _0x16c285 = {
        headers: _0x3f19f7
      };
      await axios.head(API_URL, _0x16c285);
    } catch (_0x2eb91f) {}
    const _0x4bb053 = {
      valid: true,
      status: "pending",
      retryCount: 0,
      success: false,
      lastRequestTime: 0,
      message: "",
      lastError: ""
    };
    accountStatus = _0x4bb053;
    const _0x121f20 = Math.max(0, _0xbb10df - getJDTime());
    if (_0x121f20 > 0) {
      console.log("⏳ 等待开始时间: " + _0x121f20 + "ms");
      await new Promise(_0x5e3852 => setTimeout(_0x5e3852, _0x121f20));
    }
    let _0x5c6284 = getJDTime();
    while (getJDTime() < _0x2fc7f5 && accountStatus.status === "pending" && accountStatus.retryCount < MAX_RETRY) {
      const _0x12c62c = getJDTime(),
        _0x4ceb5e = Math.max(0, _0x5c6284 - _0x12c62c);
      if (_0x4ceb5e > 0) {
        console.log("⏳ 等待 " + _0x4ceb5e + "ms 满足间隔要求");
        await new Promise(_0x421388 => setTimeout(_0x421388, _0x4ceb5e));
      }
      const _0x2859d9 = getJDTime();
      _0x5c6284 = _0x2859d9 + REQ_INTERVAL;
      try {
        const _0x303265 = await sendRequest();
        _0x303265.startTime = _0x2859d9;
        const _0x598acd = processResult(_0x303265);
        if (!_0x598acd) {
          break;
        }
      } catch (_0x2b1c5d) {
        console.log("⚠️ 请求异常: " + _0x2b1c5d.message);
        accountStatus.retryCount++;
        accountStatus.lastError = _0x2b1c5d.message;
      }
    }
    reportResult();
  },
  reportResult = () => {
    console.log("📊 兑换结果: " + (accountStatus.status || "未完成"));
    sendResultNotification();
  },
  main = async () => {
    try {
      console.log("🚀 脚本启动 - 京东健康步数兑换");
      console.log("🔍 验证Cookie有效性...");
      const _0x4cdfd9 = await validateCookie();
      if (!_0x4cdfd9) {
        console.log("❌ Cookie无效，结束脚本");
        sendNotification("京东健康", "Cookie无效", accountStatus.lastError || "请检查配置");
        return;
      }
      console.log("⏱️ 执行时间校准...");
      await syncTime();
      console.log("⏱️ 时间偏移: " + timeOffset + "ms");
      console.log("🔍 查找兑换时间...");
      const _0x30aa09 = getJDTime(),
        _0x4188d1 = new Date(_0x30aa09);
      let _0x38ce4b = null,
        _0x2efd2d = Infinity;
      for (const _0x51391d of EXCHANGE_TIMES) {
        const [_0x51a52d, _0x9e3a54] = _0x51391d.split(":").map(Number),
          _0x299c63 = new Date(_0x4188d1);
        _0x299c63.setHours(_0x51a52d, _0x9e3a54, 0, 0);
        _0x299c63 < _0x4188d1 && _0x299c63.setDate(_0x299c63.getDate() + 1);
        const _0xa391c3 = _0x299c63.getTime() - _0x30aa09;
        if (_0xa391c3 > 0 && _0xa391c3 < _0x2efd2d) {
          _0x38ce4b = _0x299c63.getTime();
          _0x2efd2d = _0xa391c3;
        }
      }
      if (!_0x38ce4b) {
        console.log("⛔ 未找到有效兑换时间");
        sendNotification("无兑换时间", "请检查时间配置", "");
        return;
      }
      console.log("🎯 目标时间: " + formatTime(_0x38ce4b));
      console.log("⏳ 距离兑换: " + (_0x38ce4b - _0x30aa09) / 1000 + "秒");
      const _0x42c021 = _0x38ce4b - _0x30aa09,
        _0x4e794d = MAX_WAIT_MIN * 60 * 1000;
      if (_0x42c021 > _0x4e794d) {
        console.log("⏳ 距离兑换时间还有 " + Math.round(_0x42c021 / 1000) + "秒，提前结束脚本");
        sendNotification("京东健康步数兑换", "等待下次兑换", "下次兑换时间: " + new Date(_0x38ce4b).toLocaleTimeString());
        return;
      }
      sendCookieNotification(_0x42c021);
      const _0x4d7971 = Math.max(0, _0x38ce4b - PRE_START_MS - _0x30aa09);
      if (_0x4d7971 > 0) {
        console.log("⏳ 等待 " + (_0x4d7971 / 1000).toFixed(1) + "秒...");
        await new Promise(_0x21505c => setTimeout(_0x21505c, _0x4d7971));
      }
      await executeExchange(_0x38ce4b);
    } catch (_0x4630c1) {
      console.error("💥 脚本异常: " + _0x4630c1);
      sendNotification("脚本异常", "执行过程中出错", _0x4630c1.message);
    }
  };
main();