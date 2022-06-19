'use strict'


const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  

  
  const errorHandler = (error, req, res, next) => {

    const statusCode = error.statusCode || 500 //=== 200 ? 500 : res.statusCode;

    res.status(statusCode);
    if (process.env.NODE_ENV === 'production'){
        res.json({
            message: error.message,
            data: error.data
          });
    }
    res.json({
      message: error.message,
      data: error.data,
      stack: error.stack,
    });

    // console.log(error);
    // const status = error.statusCode || 500;
    // const message = error.message;
    // const data = error.data;
    // res.status(status).json({ message: message, data: data });

    console.error(error.stack);

  };
  
  module.exports = {
    notFound,
    errorHandler,
  };