export const fetchJson = (url, option) => fetch(url, option)
  .then(response => {
    if (response.status < 400) {
      return response.json().then;
    }
    throw response;
  });