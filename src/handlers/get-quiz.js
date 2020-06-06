/**
 * A Lambda function that return a quiz by id.
 */
exports.getQuizHandler = async (event, context, callback) => {
  const id = event.pathParameters.id;
  console.log("Path parameter: ", id);
  callback(null, { statusCode: 200, body: `Path id: ${id}` });
  return id;
};
