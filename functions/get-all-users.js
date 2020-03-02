const sendQuery = require("./helpers/send-query");

const GET_ALL_USERS = `
  query {
    allUsernames {
      data {
        _id
        text
      }
    }
  }
`;

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_USERS);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ usernames: data.allUsernames.data })
  };
};