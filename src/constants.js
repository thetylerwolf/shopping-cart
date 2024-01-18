const localAPIUrl = process.env.REACT_APP_LOCAL_API_URL;
const prodAPIUrl = process.env.REACT_APP_PROD_API_URL;

export const backendURL =
  process.env.NODE_ENV === "development" ? localAPIUrl : prodAPIUrl;

console.log(process.env.NODE_ENV, process.env, backendURL);
