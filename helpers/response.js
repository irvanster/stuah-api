const sendResponds = (res, status, message='Operation successful', data=[], code=200) => {
    return res.status(code).json({
      status: status,
      code: code,
      data: data,
      message: message
    });
  };
  
  module.exports = sendResponds;