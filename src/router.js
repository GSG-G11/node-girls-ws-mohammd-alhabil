const handelPuplic = require("./handelPuplic");
const handelPost = require("./handelPost");

const router = (request, response) => {
  const endpoint = request.url;
  const method = request.method;
  if (endpoint === "/") {
    handelPuplic("/public/index.html", response);
  } else if (endpoint.includes("public")) {
    handelPuplic(endpoint, response);
  } else if (endpoint == "/posts") {
    handelPuplic("src/posts.json", response);
  } else if (endpoint == "/create-post" && method === "POST") {
    handelPost(request, response);
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
};

module.exports = router;