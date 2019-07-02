
const ResponseEnum = {
  SUCCESS: 0,
  PARAMETER_ERROR: 400,
  NOT_LOGGED_IN: 401,
  SERVER_ERROR: 500,
  properties: {
    0: { code: 0, message: 'ok' },
    400: { code: 400, message: '参数错误' },
    401: { code: 401, message: '未登录' },
    500: { code: 500, message: '蹦沙卡拉卡' },
  }
}


const success = (data) => {
  return ({
    code: ResponseEnum.SUCCESS,
    data: data || null,
    message: ResponseEnum.properties[ResponseEnum.SUCCESS].message,
  })
}

const fail = (resEnum, errorDes) => {
  const my = ResponseEnum.properties[ResponseEnum[resEnum]];
  return ({
    code: my.code,
    data: null,
    message: errorDes || my.message,
  })
}

module.exports = {
  success,
  fail,
}