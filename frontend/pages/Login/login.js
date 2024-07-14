const requestUrl = "";
fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => {
    // do something with the data the API has returned
  });
