exports.handler = async function(event, context) {
  const {identity, user} = context.clientContext;
  if (identity || process.env.CONTEXT == 'dev') {
    return {
      statusCode: 200,
      body: process.env.FIREBASE_API_JSON
    }
  } else {
    return {
      statusCode: 403,
      body: 'Access Denied'
    }
  }
}
