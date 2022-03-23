import axios from "axios";


const api2 = axios.create({
  baseURL: "https://mw.yplay.com.br/api",
  headers: {
    "Authorization-user": 'alvinobarboza@gmail.com:1639572098400:1c32e1cffbca679a8223a1dc33eddb820b29121a'
  },
});

export default api2;