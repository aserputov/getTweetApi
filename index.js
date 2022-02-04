var axios = require("axios");

var config = {
  method: "get",
  url: "https://api.twitter.com/2/tweets/1456335161377927175?tweet.fields=created_at,attachments&expansions=author_id",
  headers: {
    Authorization: "Bearer Code HERE ",
    Cookie: "guest_id=v1%3A164401173817947613",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
