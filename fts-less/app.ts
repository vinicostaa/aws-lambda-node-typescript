module.exports.handler = async (event: any) => {
  var message: string = "Hello Less";
  console.log(message);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
      input: event
    })
  };
};
