//Mon Jul 28 2025 09:35:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const JD_COOKIE = process.env.JD_COOKIE || "",
  COUPON_IDS = process.env.COUPON_IDS ? process.env.COUPON_IDS.split("\n") : ["38RbzVgLNjFbTjLjG7BSP1cBovRw", "39CSwRz4FXzdNErVc8sNbQEtDr43", "4P7uUisQVZJR4dJj4wTxgdSwDU9K", "mmoa3PbRSzKSPSrYzFAj1g6rxWa"],
  _0x249e13 = {
    "38RbzVgLNjFbTjLjG7BSP1cBovRw": "40元券",
    "39CSwRz4FXzdNErVc8sNbQEtDr43": "50元券",
    "4P7uUisQVZJR4dJj4wTxgdSwDU9K": "100元券",
    mmoa3PbRSzKSPSrYzFAj1g6rxWa: "30元券"
  };
const KEY_MINUTES = [0, 10, 20, 30, 40, 50],
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
  COUPON_CHANGE_PROB = 0.3;
const API_URL = "https://api.m.jd.com/api",
  ORIGIN_HEADER = "https://laputa.jd.com",
  HISTORY_FILE_PATH = "/ql/data/scripts/jd_health_history.json",
  fs = require("fs"),
  axios = require("axios"),
  moment = require("moment"),
  getCouponDescription = _0xde0c60 => {
    return _0x249e13[_0xde0c60] || _0xde0c60.substring(0, 6) + "...券";
  },
  loadHistory = () => {
    try {
      if (fs.existsSync(HISTORY_FILE_PATH)) {
        const _0x239912 = fs.readFileSync(HISTORY_FILE_PATH, "utf8");
        return JSON.parse(_0x239912);
      }
    } catch (_0x5b5643) {
      console.log("读取历史数据失败:", _0x5b5643.message);
    }
    const _0xaeacf0 = {
      successTimes: [],
      lastUpdated: 0,
      dailyStats: {}
    };
    return _0xaeacf0;
  },
  saveHistory = _0x1bf9e7 => {
    try {
      fs.writeFileSync(HISTORY_FILE_PATH, JSON.stringify(_0x1bf9e7), "utf8");
    } catch (_0x4f6630) {
      console.log("保存历史数据失败:", _0x4f6630.message);
    }
  },
  addSuccessTime = _0xdda993 => {
    const _0x4e4036 = loadHistory(),
      _0x1fe799 = new Date(),
      _0x17de98 = moment(_0x1fe799).format("YYYY-MM-DD"),
      _0x437b73 = getCouponDescription(_0xdda993);
    if (!_0x4e4036.dailyStats[_0x17de98]) {
      const _0x2aa86f = {
        successTimes: [],
        requestCount: 0
      };
      _0x4e4036.dailyStats[_0x17de98] = _0x2aa86f;
    }
    const _0x339e22 = _0x1fe799.getHours() + ":" + _0x1fe799.getMinutes().toString().padStart(2, "0");
    _0x4e4036.dailyStats[_0x17de98].successTimes.push(_0x339e22 + " (" + _0x437b73 + ")");
    const _0x294185 = {
      time: _0x339e22,
      date: _0x17de98,
      couponId: _0xdda993
    };
    _0x4e4036.successTimes.push(_0x294185);
    _0x4e4036.lastUpdated = Date.now();
    saveHistory(_0x4e4036);
    console.log("📝 记录成功时间: " + _0x339e22 + " (" + _0x437b73 + ")");
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
  lastStatusCheck: 0,
  currentCouponId: COUPON_IDS[0] || "",
  currentCouponDesc: getCouponDescription(COUPON_IDS[0] || "")
};
const safeRequest = async () => {
    const _0x3d74ac = Date.now(),
      _0xcab026 = _0x3d74ac - state.lastRequestTime;
    if (_0xcab026 < SAFE_INTERVAL) {
      const _0x482d52 = SAFE_INTERVAL - _0xcab026;
      console.log("🛡️ 风控保护: 等待" + formatTime(_0x482d52));
      await new Promise(_0x5058a7 => setTimeout(_0x5058a7, _0x482d52));
    }
    if (state.dailyRequests >= MAX_DAILY_REQUESTS) {
      console.log("🛑 达到每日请求上限");
      state.message = "达到每日请求上限";
      const _0x35d9e8 = {
        error: "daily_limit"
      };
      return _0x35d9e8;
    }
    state.dailyRequests++;
    state.lastRequestTime = _0x3d74ac;
    const _0x4638f5 = loadHistory(),
      _0x39288d = moment(_0x3d74ac).format("YYYY-MM-DD");
    if (_0x4638f5.dailyStats[_0x39288d]) {
      _0x4638f5.dailyStats[_0x39288d].requestCount++;
      saveHistory(_0x4638f5);
    }
    try {
      const _0x435bdd = {
        encryptAssignmentId: state.currentCouponId
      };
      const _0x3077ec = await axios.get(API_URL, {
          params: {
            functionId: "mb2capp_sports_exchangeHealthCoins",
            body: JSON.stringify(_0x435bdd),
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
        }),
        _0x11fe47 = {
          data: _0x3077ec.data,
          couponId: state.currentCouponId,
          couponDesc: state.currentCouponDesc
        };
      return _0x11fe47;
    } catch (_0x5e6941) {
      const _0x4c1a81 = {
        error: _0x5e6941.message,
        couponId: state.currentCouponId,
        couponDesc: state.currentCouponDesc
      };
      return _0x4c1a81;
    }
  },
  processResult = _0x596915 => {
    if (_0x596915.error) {
      if (_0x596915.error === "daily_limit") {
        state.status = "stopped";
        return false;
      }
      console.log("⚠️ 请求错误: " + _0x596915.error + " | 券: " + _0x596915.couponDesc);
      state.lastError = _0x596915.error;
      return true;
    }
    try {
      const _0x5d1c14 = _0x596915.data;
      if (_0x5d1c14.success) {
        state.status = "success";
        state.message = _0x5d1c14.msg || "兑换成功";
        console.log("🎉 兑换成功! " + state.message + " | 券: " + _0x596915.couponDesc + " | 请求次数: " + state.dailyRequests);
        addSuccessTime(_0x596915.couponId);
        return false;
      }
      if (_0x5d1c14.code === "209501") {
        state.message = _0x5d1c14.msg || "步数不足";
        console.log("⛔ " + state.message + " | 券: " + _0x596915.couponDesc + " | 请求次数: " + state.dailyRequests);
        return true;
      }
      if (_0x5d1c14.code === "21103") {
        state.message = _0x5d1c14.msg || "库存不足";
        console.log("🔄 " + state.message + " | 券: " + _0x596915.couponDesc + " | 请求次数: " + state.dailyRequests);
        return true;
      }
      state.message = _0x5d1c14.msg || "未知响应: " + _0x5d1c14.code;
      console.log("❓ " + state.message + " | 券: " + _0x596915.couponDesc + " | 请求次数: " + state.dailyRequests);
    } catch (_0x158f14) {
      if (/(成功|抢到了|太棒了|恭喜|已抢到)/i.test(JSON.stringify(_0x596915.data))) {
        state.status = "success";
        state.message = "兑换成功";
        console.log("🎉 兑换成功! | 券: " + _0x596915.couponDesc + " | 请求次数: " + state.dailyRequests);
        addSuccessTime(_0x596915.couponId);
        return false;
      }
      if (/(步数不足|209501)/i.test(JSON.stringify(_0x596915.data))) {
        state.message = "步数不足";
        console.log("⛔ " + state.message + " | 券: " + _0x596915.couponDesc + " | 请求次数: " + state.dailyRequests);
        return true;
      }
      if (/(库存不足|21103)/i.test(JSON.stringify(_0x596915.data))) {
        state.message = "库存不足";
        console.log("🔄 " + state.message + " | 券: " + _0x596915.couponDesc + " | 请求次数: " + state.dailyRequests);
        return true;
      }
      state.message = "未知响应";
      console.log("❓ " + state.message + ": " + JSON.stringify(_0x596915.data).substring(0, 50) + "... | 券: " + _0x596915.couponDesc + " | 请求次数: " + state.dailyRequests);
    }
    return true;
  },
  isInKeyWindow = () => {
    const _0x3f3037 = new Date(),
      _0x3e645f = _0x3f3037.getMinutes();
    for (const _0x1eb322 of KEY_MINUTES) {
      if (Math.abs(_0x3e645f - _0x1eb322) <= WINDOW_SIZE) {
        return true;
      }
    }
    return false;
  },
  updateMonitoringState = () => {
    const _0x1db773 = new Date();
    const _0x5723b2 = _0x1db773.getMinutes();
    if (_0x5723b2 === state.lastMinute) {
      return;
    }
    state.lastMinute = _0x5723b2;
    const _0x14813f = isInKeyWindow();
    if (_0x14813f && !state.inKeyWindow) {
      console.log("🚀 进入关键时间窗口 | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
      state.inKeyWindow = true;
      state.windowStartTime = Date.now();
      state.currentInterval = INIT_INTERVAL;
      state.intervalMultiplier = 1;
      state.mode = "fixed";
      sendNotification("🚀 监控窗口开始", "兑换监控已启动", "开始时间: " + formatTime(Date.now()) + "\n券: " + state.currentCouponDesc + "\n请求次数: " + state.dailyRequests);
    } else {
      !_0x14813f && state.inKeyWindow && (console.log("🐢 离开关键时间窗口 | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests), state.inKeyWindow = false, state.mode = "random", state.currentInterval = generateRandomInterval(MIN_RANDOM_INTERVAL, MAX_RANDOM_INTERVAL));
    }
  },
  getRandomCouponId = () => {
    const _0x314dd0 = Math.floor(Math.random() * COUPON_IDS.length);
    return COUPON_IDS[_0x314dd0];
  },
  updateCouponId = () => {
    if (COUPON_IDS.length <= 1) {
      return;
    }
    const _0x2e50b9 = state.inKeyWindow ? COUPON_CHANGE_PROB : 0.5;
    if (Math.random() < _0x2e50b9) {
      const _0x2e5c8a = getRandomCouponId();
      if (_0x2e5c8a !== state.currentCouponId) {
        const _0x19f438 = getCouponDescription(_0x2e5c8a);
        console.log("🔄 更换券: " + state.currentCouponDesc + " -> " + _0x19f438 + " | 请求次数: " + state.dailyRequests);
        state.currentCouponId = _0x2e5c8a;
        state.currentCouponDesc = _0x19f438;
      }
    }
  },
  executeDeceleratingRequest = async () => {
    while (state.inKeyWindow && state.mode === "fixed") {
      try {
        updateCouponId();
        const _0x2c3a92 = await safeRequest(),
          _0x377ce7 = processResult(_0x2c3a92);
        if (!_0x377ce7) {
          state.status === "success" && sendNotification("✅ 兑换成功", state.message, "券: " + _0x2c3a92.couponDesc + "\n请求次数: " + state.dailyRequests);
          state.status = "monitoring";
          state.success = false;
          state.message = "";
          return;
        }
        const _0xf06a75 = Math.min(INIT_INTERVAL + state.intervalMultiplier * INTERVAL_INCREMENT, MAX_INTERVAL);
        console.log("🐢 减速请求: 间隔增加至 " + formatTime(_0xf06a75) + " | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
        state.currentInterval = _0xf06a75;
        state.intervalMultiplier++;
        if (_0xf06a75 >= MAX_INTERVAL) {
          console.log("🔄 切换到随机模式 | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
          state.mode = "random";
          state.currentInterval = generateRandomInterval(KEY_WINDOW_RANDOM_MIN, KEY_WINDOW_RANDOM_MAX);
          return;
        }
        await waitWithInterrupt(state.currentInterval);
      } catch (_0x1a4d2d) {
        console.log("⚠️ 请求异常: " + _0x1a4d2d.message + " | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
        state.lastError = _0x1a4d2d.message;
        sendNotification("⚠️ 请求异常", _0x1a4d2d.message, "请查看日志\n券: " + state.currentCouponDesc + "\n请求次数: " + state.dailyRequests);
      }
    }
  },
  waitWithInterrupt = async _0x2fbb32 => {
    const _0xe1e485 = Date.now(),
      _0x494dfc = _0xe1e485 + _0x2fbb32;
    console.log("⏳ 等待 " + formatTime(_0x2fbb32) + "... | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
    while (Date.now() < _0x494dfc) {
      const _0x59e34d = _0x494dfc - Date.now(),
        _0x17a72b = Math.min(_0x59e34d, STATUS_CHECK_INTERVAL);
      await new Promise(_0x1d9b4c => setTimeout(_0x1d9b4c, _0x17a72b));
      updateMonitoringState();
      if (state.inKeyWindow && state.mode === "fixed") {
        console.log("🚨 中断等待，进入关键窗口 | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
        return;
      }
    }
  },
  formatTime = _0x504609 => {
    if (_0x504609 < 1000) {
      return _0x504609 + "ms";
    }
    const _0x25e725 = _0x504609 / 1000;
    if (_0x25e725 < 60) {
      return _0x25e725.toFixed(1) + "秒";
    }
    const _0x2fe72a = _0x25e725 / 60;
    if (_0x2fe72a < 60) {
      return _0x2fe72a.toFixed(1) + "分钟";
    }
    const _0x3e5f1a = _0x2fe72a / 60;
    return _0x3e5f1a.toFixed(1) + "小时";
  },
  sendNotification = (_0x36c11f, _0x19bb38, _0x220757) => {
    const _0x557d2c = Date.now();
    if (_0x557d2c - state.lastNotificationTime < 60000) {
      console.log("⏳ 跳过通知: " + _0x36c11f + " - " + _0x19bb38 + " | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
      return;
    }
    try {
      require("./sendNotify").sendNotify(_0x36c11f, _0x19bb38 + "\n" + _0x220757);
    } catch (_0x63d8bb) {
      console.log("发送通知失败:", _0x63d8bb.message);
    }
    state.lastNotificationTime = _0x557d2c;
    console.log("📢 发送通知: " + _0x36c11f + " - " + _0x19bb38 + " | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
  },
  generateRandomInterval = (_0x52e544, _0xc7cbb0) => {
    const _0x3fe583 = Math.floor(Math.random() * (_0xc7cbb0 - _0x52e544 + 1)) + _0x52e544;
    console.log("🎲 随机间隔: " + formatTime(_0x3fe583) + " | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
    return _0x3fe583;
  },
  checkDailyReset = () => {
    const _0x16ecda = new Date(),
      _0xb797dc = moment(_0x16ecda).format("YYYY-MM-DD");
    if (_0xb797dc !== state.currentDate) {
      console.log("🔄 新的一天开始: " + _0xb797dc + " | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
      const _0x14772b = loadHistory(),
        _0x339d39 = state.currentDate;
      if (_0x339d39 && !_0x14772b.dailyStats[_0x339d39]) {
        const _0x3f598b = {
          successTimes: [],
          requestCount: state.dailyRequests
        };
        _0x14772b.dailyStats[_0x339d39] = _0x3f598b;
        saveHistory(_0x14772b);
      }
      state.dailyRequests = 0;
      state.currentDate = _0xb797dc;
      state.currentCouponId = getRandomCouponId();
      state.currentCouponDesc = getCouponDescription(state.currentCouponId);
      cleanupHistory();
    }
  },
  cleanupHistory = () => {
    const _0x1c9825 = loadHistory(),
      _0x1157c7 = new Date(),
      _0x2a223d = [];
    for (let _0x4d65f3 = 0; _0x4d65f3 < HISTORY_DAYS; _0x4d65f3++) {
      const _0x106ed8 = moment(_0x1157c7).subtract(_0x4d65f3, "days").format("YYYY-MM-DD");
      _0x2a223d.push(_0x106ed8);
    }
    Object.keys(_0x1c9825.dailyStats).forEach(_0x56fbbb => {
      !_0x2a223d.includes(_0x56fbbb) && delete _0x1c9825.dailyStats[_0x56fbbb];
    });
    _0x1c9825.successTimes = _0x1c9825.successTimes.filter(_0x504d08 => _0x2a223d.includes(_0x504d08.date));
    saveHistory(_0x1c9825);
    console.log("🧹 清理历史数据，保留最近" + HISTORY_DAYS + "天 | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
  },
  monitoringLoop = async () => {
    while (true) {
      checkDailyReset();
      updateMonitoringState();
      if (state.inKeyWindow && state.mode === "fixed") {
        await executeDeceleratingRequest();
      } else {
        updateCouponId();
        try {
          const _0x24f6c2 = await safeRequest(),
            _0x393f2d = processResult(_0x24f6c2);
          !_0x393f2d && (state.status === "success" && sendNotification("✅ 兑换成功", state.message, "券: " + _0x24f6c2.couponDesc + "\n请求次数: " + state.dailyRequests), state.status = "monitoring", state.success = false, state.message = "");
        } catch (_0x5c0b50) {
          console.log("⚠️ 请求异常: " + _0x5c0b50.message + " | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
          state.lastError = _0x5c0b50.message;
          sendNotification("⚠️ 请求异常", _0x5c0b50.message, "请查看日志\n券: " + state.currentCouponDesc + "\n请求次数: " + state.dailyRequests);
        }
        state.inKeyWindow ? state.currentInterval = generateRandomInterval(KEY_WINDOW_RANDOM_MIN, KEY_WINDOW_RANDOM_MAX) : state.currentInterval = generateRandomInterval(MIN_RANDOM_INTERVAL, MAX_RANDOM_INTERVAL);
        await waitWithInterrupt(state.currentInterval);
      }
    }
  },
  init = async () => {
    console.log("🚀 启动京东健康智能窗口监控");
    cleanupHistory();
    const _0x204b10 = new Date(),
      _0x33aeee = moment(_0x204b10).format("YYYY-MM-DD");
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
      currentDate: _0x33aeee,
      lastNotificationTime: 0,
      lastStatusCheck: 0,
      currentCouponId: getRandomCouponId(),
      currentCouponDesc: getCouponDescription(state.currentCouponId)
    };
    console.log(state.inKeyWindow ? "🚀 初始关键窗口减速监控 | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests : "🌿 初始常规监控 | 券: " + state.currentCouponDesc + " | 请求次数: " + state.dailyRequests);
    sendNotification("🔐 Cookie验证", "验证通过", "开始监控兑换\n可用券数: " + COUPON_IDS.length + "\n当前券: " + state.currentCouponDesc);
    await monitoringLoop();
  };
init();