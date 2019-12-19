import menuList from "../router/menuConfig";
import history from "./history";

/**
 * @menuList 菜单树
 * 获取路由列表
 */
export function GetRouteList() {
  let list = [];
  let _loop = data => {
    data.forEach(el => {
      list.push(el);
      el.children && _loop(el.children);
    });
  };
  _loop(menuList);
  return list;
}

/**
 * setStorage 存储
 * getStorage 取到
 * removeStorage 移除
 */
export const Storage = {
  setItem: (name, val) => {
    if (typeof val === "object") {
      val = JSON.stringify(val);
    }
    localStorage.setItem(name, val);
  },

  getItem: val => {
    let value = localStorage.getItem(val);
    if (value) {
      if (value.indexOf("{") !== -1) {
        return JSON.parse(value);
      } else {
        return value;
      }
    } else {
      return null;
    }
  },
  removeItem: val => {
    localStorage.removeItem(val);
  },
  clear: () => {
    localStorage.clear();
  }
};

/**
 * 返回上一页
 */
export function GoBack() {
  history.go(-1);
}

/**
 * 将时间转成时间戳  xxxx-xx-xx
 */
export function Timestamp(data) {
  let Time = new Date(data);
  return Time.getTime();
}

/**
 * 获取当前时间戳
 *
 */
export function GetTimestamp() {
  let timestamp = new Date().getTime();
  return timestamp;
}

/**
 * 获取当前时间显示问候语
 *
 */
export function GetTimeSlot() {
  let now = new Date(),
    hour = now.getHours();
  if (hour < 12) {
    return "上午好！";
  } else if (hour < 17) {
    return "下午好！";
  } else if (hour < 22) {
    return "晚上好！";
  }
}

/**
 * 获取星期
 */
export function GetWeek(type) {
  let strDate = "";
  let today = new Date();
  let func = item => {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  };
  let YYYY = today.getFullYear();
  let MM = func(today.getMonth() + 1);
  let DD = func(today.getDate());
  let n_day = today.getDay();
  switch (n_day) {
    case 0:
      strDate = "星期日";
      break;
    case 1:
      strDate = "星期一";
      break;
    case 2:
      strDate = "星期二";
      break;
    case 3:
      strDate = "星期三";
      break;
    case 4:
      strDate = "星期四";
      break;
    case 5:
      strDate = "星期五";
      break;
    case 6:
      strDate = "星期六";
      break;
    case 7:
      strDate = "星期日";
      break;
    default:
      break;
  }
  if (type) {
    return strDate;
  } else {
    return YYYY + "年" + MM + "月" + DD + "日 " + strDate;
  }
}

/**
 * 时间格式化
 * YYYY-MM-DD hh:mm:ss
 */
export function FormatDate(obj, type) {
  let func = item => {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  };
  let date = new Date();
  if (obj) {
    date = new Date(obj);
  }
  let YYYY = date.getFullYear();
  let MM = func(date.getMonth() + 1);
  let DD = func(date.getDate());
  let hh = func(date.getHours());
  let mm = func(date.getMinutes());
  let ss = func(date.getSeconds());
  if (type === "year") {
    return YYYY;
  } else if (type === "month") {
    return YYYY + "-" + MM;
  } else if (type === "date") {
    return YYYY + "-" + MM + "-" + DD;
  }
  return YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
}
