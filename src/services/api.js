import axios from "axios";

const api = axios.create({
  baseURL: "https://mw.sumicity.net.br/api",
  headers: {
    "Authorization-user": 'vinicius.okaeda@youcast.tv.br:1639595810037:18746cd49932cd6c3a3648c89bd92eebb19c037a'
  },
});


export default api;