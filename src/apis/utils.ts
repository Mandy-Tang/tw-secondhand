export const fetchJson = (url, option?, contentType = true) => {
  let myHeaders = new Headers();
  if (option) {
    myHeaders.append('sessionToken', localStorage.getItem('sessionToken'));
    if (contentType) {
      myHeaders.append('Content-Type', 'application/json');
    }
    option.headers = myHeaders;
  }
  return fetch(url, option)
    .then(response => {
      if (response.status < 400) {
        return response.json();
      }
      throw response;
    })
};
