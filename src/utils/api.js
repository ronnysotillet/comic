
async function callApi(endpoint, options = {}) {
  try {   
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

const api = {
  callApi: callApi,
};

export default api;

