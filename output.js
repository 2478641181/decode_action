//Mon Jul 28 2025 09:38:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const JD_COOKIE = process.env.JD_COOKIE || "",
  COUPON_ID = process.env.COUPON_ID || "38RbzVgLNjFbTjLjG7BSP1cBovRw",
  KEY_MINUTES = [0, 10, 20, 30, 40, 50],
  WINDOW_SIZE = 2,
  INIT_INTERVAL = 1000,
  MAX_INTERVAL = 10000,
  INTERVAL_INCREMENT = 1000,
  KEY_WINDOW_RANDOM_MIN = 5000,
  KEY_WINDOW_RANDOM_MAX = 40000,
  MIN_RANDOM_INTERVAL = 30000,
  MAX_RANDOM_INTERVAL = 90000,
  MAX_DAILY_REQUESTS = 1500,
  SAFE_INTERVAL = 1500,
  HISTORY_DAYS = 7,
  STATUS_CHECK_INTERVAL = 10000,
  API_URL = "https://api.m.jd.com/api",
  ORIGIN_HEADER = "https://laputa.jd.com",
  HISTORY_FILE_PATH = "/ql/data/scripts/jd_health_history.json",
  fs = require("fs"),
  axios = require("axios"),
  moment = require("moment"),
  loadHistory = () => {
    try {
      if (fs.existsSync(HISTORY_FILE_PATH)) {
        const _0x9d53cd = fs.readFileSync(HISTORY_FILE_PATH, "utf8");
        return JSON.parse(_0x9d53cd);
      }
    } catch (_0x1ba11c) {
      console.log("读取历史数据失败:", _0x1ba11c.message);
    }
    return {
      successTimes: [],
      lastUpdated: 0,
      dailyStats: {}
    };
  },
  saveHistory = _0x1d02d6 => {
    try {
      fs.writeFileSync(HISTORY_FILE_PATH, JSON.stringify(_0x1d02d6), "utf8");
    } catch (_0x5b0ff8) {
      console.log("保存历史数据失败:", _0x5b0ff8.message);
    }
  },
  addSuccessTime = () => {
    const _0x3b1ccf = loadHistory(),
      _0x2a8784 = new Date(),
      _0x118d0d = moment(_0x2a8784).format("YYYY-MM-DD");
    !_0x3b1ccf.dailyStats[_0x118d0d] && (_0x3b1ccf.dailyStats[_0x118d0d] = {
      successTimes: [],
      requestCount: 0
    });
    const _0x3df242 = _0x2a8784.getHours() + ":" + _0x2a8784.getMinutes().toString().padStart(2, "0");
    _0x3b1ccf.dailyStats[_0x118d0d].successTimes.push(_0x3df242);
    _0x3b1ccf.successTimes.push({
      time: _0x3df242,
      date: _0x118d0d
    });
    _0x3b1ccf.lastUpdated = Date.now();
    saveHistory(_0x3b1ccf);
    console.log("📝 记录成功时间: " + _0x3df242);
  };
let state = {
  dailyRequests: 0,
  lastRequestTime: 0,
  status: "monitoring",
  currentInterval: MIN_RANDOM_INTERVAL,
  inKeyWindow: false,
  success: false,
  message: "",
  lastError: "",
  intervalMultiplier: 1,
  lastMinute: -1,
  mode: "fixed",
  windowStartTime: 0,
  currentDate: "",
  lastNotificationTime: 0,
  lastStatusCheck: 0
};
const safeRequest = async () => {
    const _0x282344 = Date.now(),
      _0x3d0390 = _0x282344 - state.lastRequestTime;
    if (_0x3d0390 < SAFE_INTERVAL) {
      const _0x1a495e = SAFE_INTERVAL - _0x3d0390;
      console.log("🛡️ 风控保护: 等待" + formatTime(_0x1a495e));
      await new Promise(_0x519294 => setTimeout(_0x519294, _0x1a495e));
    }
    if (state.dailyRequests >= MAX_DAILY_REQUESTS) {
      console.log("🛑 达到每日请求上限");
      state.message = "达到每日请求上限";
      return {
        error: "daily_limit"
      };
    }
    state.dailyRequests++;
    state.lastRequestTime = _0x282344;
    const _0x57b1e0 = loadHistory(),
      _0x31353d = moment(_0x282344).format("YYYY-MM-DD");
    _0x57b1e0.dailyStats[_0x31353d] && (_0x57b1e0.dailyStats[_0x31353d].requestCount++, saveHistory(_0x57b1e0));
    try {
      const _0x685735 = await axios.get(API_URL, {
        params: {
          functionId: "mb2capp_sports_exchangeHealthCoins",
          body: JSON.stringify({
            encryptAssignmentId: COUPON_ID
          }),
          appid: "laputa",
          client: "m"
        },
        headers: {
          Cookie: JD_COOKIE,
          "User-Agent": "jdapp",
          Origin: ORIGIN_HEADER,
          Connection: "keep-alive"
        },
        timeout: 2500
      });
      return {
        data: _0x685735.data
      };
    } catch (_0x1f243f) {
      return {
        error: _0x1f243f.message
      };
    }
  },
  processResult = _0x497c6a => {
    if (_0x497c6a.error) {
      if (_0x497c6a.error === "daily_limit") {
        state.status = "stopped";
        return false;
      }
      console.log("⚠️ 请求错误: " + _0x497c6a.error);
      state.lastError = _0x497c6a.error;
      return true;
    }
    try {
      const _0x38b18f = _0x497c6a.data;
      if (_0x38b18f.success) {
        state.status = "success";
        state.message = _0x38b18f.msg || "兑换成功";
        console.log("🎉 兑换成功! " + state.message + " | 请求次数: " + state.dailyRequests);
        addSuccessTime();
        return false;
      }
      if (_0x38b18f.code === "209501") {
        state.message = _0x38b18f.msg || "步数不足";
        console.log("⛔ " + state.message + " | 请求次数: " + state.dailyRequests);
        return true;
      }
      if (_0x38b18f.code === "21103") {
        state.message = _0x38b18f.msg || "库存不足";
        console.log("🔄 " + state.message + " | 请求次数: " + state.dailyRequests);
        return true;
      }
      state.message = _0x38b18f.msg || "未知响应: " + _0x38b18f.code;
      console.log("❓ " + state.message + " | 请求次数: " + state.dailyRequests);
    } catch (_0xb543ad) {
      if (/(成功|抢到了|太棒了|恭喜|已抢到)/i.test(JSON.stringify(_0x497c6a.data))) {
        state.status = "success";
        state.message = "兑换成功";
        console.log("🎉 兑换成功! | 请求次数: " + state.dailyRequests);
        addSuccessTime();
        return false;
      }
      if (/(步数不足|209501)/i.test(JSON.stringify(_0x497c6a.data))) {
        state.message = "步数不足";
        console.log("⛔ " + state.message + " | 请求次数: " + state.dailyRequests);
        return true;
      }
      if (/(库存不足|21103)/i.test(JSON.stringify(_0x497c6a.data))) {
        state.message = "库存不足";
        console.log("🔄 " + state.message + " | 请求次数: " + state.dailyRequests);
        return true;
      }
      state.message = "未知响应";
      console.log("❓ " + state.message + ": " + JSON.stringify(_0x497c6a.data).substring(0, 50) + "... | 请求次数: " + state.dailyRequests);
    }
    return true;
  },
  isInKeyWindow = () => {
    const _0x34c156 = new Date(),
      _0x1ad75a = _0x34c156.getMinutes();
    for (const _0xf5b55a of KEY_MINUTES) {
      if (Math.abs(_0x1ad75a - _0xf5b55a) <= WINDOW_SIZE) {
        return true;
      }
    }
    return false;
  },
  updateMonitoringState = () => {
    const _0x21e770 = new Date(),
      _0x20d148 = _0x21e770.getMinutes();
    if (_0x20d148 === state.lastMinute) {
      return;
    }
    state.lastMinute = _0x20d148;
    const _0x1ecc80 = isInKeyWindow();
    if (_0x1ecc80 && !state.inKeyWindow) {
      console.log("🚀 进入关键时间窗口 | 请求次数: " + state.dailyRequests);
      state.inKeyWindow = true;
      state.windowStartTime = Date.now();
      state.currentInterval = INIT_INTERVAL;
      state.intervalMultiplier = 1;
      state.mode = "fixed";
      sendNotification("🚀 监控窗口开始", "兑换监控已启动", "开始时间: " + formatTime(Date.now()) + "\n请求次数: " + state.dailyRequests);
    } else {
      !_0x1ecc80 && state.inKeyWindow && (console.log("🐢 离开关键时间窗口 | 请求次数: " + state.dailyRequests), state.inKeyWindow = false, state.mode = "random", state.currentInterval = generateRandomInterval(MIN_RANDOM_INTERVAL, MAX_RANDOM_INTERVAL));
    }
  },
  executeDeceleratingRequest = async () => {
    while (state.inKeyWindow && state.mode === "fixed") {
      try {
        const _0x53f80a = await safeRequest(),
          _0x4cdd9b = processResult(_0x53f80a);
        if (!_0x4cdd9b) {
          state.status === "success" && sendNotification("✅ 兑换成功", state.message, "请求次数: " + state.dailyRequests);
          state.status = "monitoring";
          state.success = false;
          state.message = "";
          return;
        }
        const _0xc3b46d = Math.min(INIT_INTERVAL + state.intervalMultiplier * INTERVAL_INCREMENT, MAX_INTERVAL);
        console.log("🐢 减速请求: 间隔增加至 " + formatTime(_0xc3b46d) + " | 请求次数: " + state.dailyRequests);
        state.currentInterval = _0xc3b46d;
        state.intervalMultiplier++;
        if (_0xc3b46d >= MAX_INTERVAL) {
          console.log("🔄 切换到随机模式 | 请求次数: " + state.dailyRequests);
          state.mode = "random";
          state.currentInterval = generateRandomInterval(KEY_WINDOW_RANDOM_MIN, KEY_WINDOW_RANDOM_MAX);
          return;
        }
        await waitWithInterrupt(state.currentInterval);
      } catch (_0x920b2b) {
        console.log("⚠️ 请求异常: " + _0x920b2b.message + " | 请求次数: " + state.dailyRequests);
        state.lastError = _0x920b2b.message;
        sendNotification("⚠️ 请求异常", _0x920b2b.message, "请查看日志\n请求次数: " + state.dailyRequests);
      }
    }
  },
  waitWithInterrupt = async _0x5c0703 => {
    const _0x9567c2 = Date.now(),
      _0x5a899c = _0x9567c2 + _0x5c0703;
    console.log("⏳ 等待 " + formatTime(_0x5c0703) + "... | 请求次数: " + state.dailyRequests);
    while (Date.now() < _0x5a899c) {
      const _0x6d0f65 = _0x5a899c - Date.now(),
        _0x27e69a = Math.min(_0x6d0f65, STATUS_CHECK_INTERVAL);
      await new Promise(_0x509112 => setTimeout(_0x509112, _0x27e69a));
      updateMonitoringState();
      if (state.inKeyWindow && state.mode === "fixed") {
        console.log("🚨 中断等待，进入关键窗口 | 请求次数: " + state.dailyRequests);
        return;
      }
    }
  },
  formatTime = _0x405b52 => {
    if (_0x405b52 < 1000) {
      return _0x405b52 + "ms";
    }
    const _0x3705eb = _0x405b52 / 1000;
    if (_0x3705eb < 60) {
      return _0x3705eb.toFixed(1) + "秒";
    }
    const _0x5f5491 = _0x3705eb / 60;
    if (_0x5f5491 < 60) {
      return _0x5f5491.toFixed(1) + "分钟";
    }
    const _0x133d89 = _0x5f5491 / 60;
    return _0x133d89.toFixed(1) + "小时";
  },
  sendNotification = (_0x376f5b, _0x4ee974, _0x4d6b47) => {
    const _0x51d32a = Date.now();
    if (_0x51d32a - state.lastNotificationTime < 60000) {
      console.log("⏳ 跳过通知: " + _0x376f5b + " - " + _0x4ee974 + " | 请求次数: " + state.dailyRequests);
      return;
    }
    try {
      require("./sendNotify").sendNotify(_0x376f5b, _0x4ee974 + "\n" + _0x4d6b47);
    } catch (_0x3887b7) {
      console.log("发送通知失败:", _0x3887b7.message);
    }
    state.lastNotificationTime = _0x51d32a;
    console.log("📢 发送通知: " + _0x376f5b + " - " + _0x4ee974 + " | 请求次数: " + state.dailyRequests);
  },
  generateRandomInterval = (_0x1698d2, _0x5810e6) => {
    const _0x2bf74c = Math.floor(Math.random() * (_0x5810e6 - _0x1698d2 + 1)) + _0x1698d2;
    console.log("🎲 随机间隔: " + formatTime(_0x2bf74c) + " | 请求次数: " + state.dailyRequests);
    return _0x2bf74c;
  },
  checkDailyReset = () => {
    const _0xb728e1 = new Date(),
      _0x440baf = moment(_0xb728e1).format("YYYY-MM-DD");
    if (_0x440baf !== state.currentDate) {
      console.log("🔄 新的一天开始: " + _0x440baf + " | 请求次数: " + state.dailyRequests);
      const _0x5a914f = loadHistory(),
        _0x3734de = state.currentDate;
      _0x3734de && !_0x5a914f.dailyStats[_0x3734de] && (_0x5a914f.dailyStats[_0x3734de] = {
        successTimes: [],
        requestCount: state.dailyRequests
      }, saveHistory(_0x5a914f));
      state.dailyRequests = 0;
      state.currentDate = _0x440baf;
      cleanupHistory();
    }
  },
  cleanupHistory = () => {
    const _0xe45e1a = loadHistory(),
      _0x1412e2 = new Date(),
      _0x26483c = [];
    for (let _0x2822c4 = 0; _0x2822c4 < HISTORY_DAYS; _0x2822c4++) {
      const _0x112a4b = moment(_0x1412e2).subtract(_0x2822c4, "days").format("YYYY-MM-DD");
      _0x26483c.push(_0x112a4b);
    }
    Object.keys(_0xe45e1a.dailyStats).forEach(_0x183054 => {
      !_0x26483c.includes(_0x183054) && delete _0xe45e1a.dailyStats[_0x183054];
    });
    _0xe45e1a.successTimes = _0xe45e1a.successTimes.filter(_0x5de48d => _0x26483c.includes(_0x5de48d.date));
    saveHistory(_0xe45e1a);
    console.log("🧹 清理历史数据，保留最近" + HISTORY_DAYS + "天 | 请求次数: " + state.dailyRequests);
  },
  monitoringLoop = async () => {
    while (true) {
      checkDailyReset();
      updateMonitoringState();
      if (state.inKeyWindow && state.mode === "fixed") {
        await executeDeceleratingRequest();
      } else {
        try {
          const _0x5aafc2 = await safeRequest(),
            _0x30cce7 = processResult(_0x5aafc2);
          !_0x30cce7 && (state.status === "success" && sendNotification("✅ 兑换成功", state.message, "请求次数: " + state.dailyRequests), state.status = "monitoring", state.success = false, state.message = "");
        } catch (_0x468503) {
          console.log("⚠️ 请求异常: " + _0x468503.message + " | 请求次数: " + state.dailyRequests);
          state.lastError = _0x468503.message;
          sendNotification("⚠️ 请求异常", _0x468503.message, "请查看日志\n请求次数: " + state.dailyRequests);
        }
        state.inKeyWindow ? state.currentInterval = generateRandomInterval(KEY_WINDOW_RANDOM_MIN, KEY_WINDOW_RANDOM_MAX) : state.currentInterval = generateRandomInterval(MIN_RANDOM_INTERVAL, MAX_RANDOM_INTERVAL);
        await waitWithInterrupt(state.currentInterval);
      }
    }
  },
  init = async () => {
    console.log("🚀 启动京东健康智能窗口监控");
    cleanupHistory();
    const _0x40aec8 = new Date(),
      _0x201391 = moment(_0x40aec8).format("YYYY-MM-DD");
    state = {
      dailyRequests: 0,
      lastRequestTime: 0,
      status: "monitoring",
      inKeyWindow: isInKeyWindow(),
      currentInterval: isInKeyWindow() ? INIT_INTERVAL : MIN_RANDOM_INTERVAL,
      success: false,
      message: "",
      lastError: "",
      intervalMultiplier: 1,
      lastMinute: -1,
      mode: "fixed",
      windowStartTime: 0,
      currentDate: _0x201391,
      lastNotificationTime: 0,
      lastStatusCheck: 0
    };
    console.log(state.inKeyWindow ? "🚀 初始关键窗口减速监控 | 请求次数: " + state.dailyRequests : "🌿 初始常规监控 | 请求次数: " + state.dailyRequests);
    sendNotification("🔐 Cookie验证", "验证通过", "开始监控兑换");
    await monitoringLoop();
  };
init();