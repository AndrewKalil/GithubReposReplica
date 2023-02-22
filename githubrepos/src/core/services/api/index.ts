import axios from "axios";

export class Api {
  _endpoint: string;
  _axios;

  constructor(endpoint: string, baseUrl: string, accessToken?: string) {
    this._endpoint = endpoint;
    this._axios = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
      },
    });
  }

  get = async <T>(method_endpoint?: string) => {
    return await this._axios.get<T[]>(this._endpoint + method_endpoint);
  };
}
