var serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

var baseGet = function(url, data, callback) {
  var baseURL = "https://api.spotify.com/v1";
  var specifiedData = {type: 'track,artist', market: 'US'};
  var queryString = serialize(_(data).assign(specifiedData).value());
  var reqURL = `${baseURL}${url}?${queryString}`;

  console.log(`will GET this url ${reqURL}`);

  fetch(reqURL, {method: 'GET'}).then(callback);
  var request = new Request(reqURL, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });

  fetch(request).then(callback);
};

baseGet("/search", {q: 'muse'}, function(response) {
  response.json().then(function(j) {
    console.log(j);
  });
});


