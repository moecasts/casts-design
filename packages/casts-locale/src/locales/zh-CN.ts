import { zhCN as dateFnsZhCN } from 'date-fns/locale';

export const zhCN = {
  dialog: {
    confirm: '确认',
    cancel: '取消',
  },

  form: {
    errorMessage: {
      date: '{name}不是合法的日期',
      url: '{name}不是合法的 url 地址',
      email: '{name}不是合法的邮件地址',
      required: '{name}是必填项',
      max: '{name}长度不能超过 {validate} 个字',
      min: '{name}长度不能少于 {validate} 个字',
      len: '{name}长度必须是 {validate}',
      enum: '{name}只能是{validate}等',
      idcard: '请输入正确的{name}',
      telnumber: '{name}不是合法的电话号码',
      pattern: '{name}格式不正确',
      validator: '{name}不符合要求',
      boolean: '{name}不是合法的布尔类型',
      number: '{name}不是合法的数字类型',
    },
  },

  pagination: {
    perPage: '{pageSize} 条 / 页',
    goto: '跳至',
    page: '页',
  },

  empty: {
    description: '暂无数据',
  },

  input: {
    placeholder: '请输入',
  },

  select: {
    placeholder: '请选择',
  },

  calendar: {
    today: '今天',
  },

  datePicker: {
    placeholder: {
      date: '请选择日期',
    },
  },

  // third-party library locales
  dateFns: dateFnsZhCN,
};
