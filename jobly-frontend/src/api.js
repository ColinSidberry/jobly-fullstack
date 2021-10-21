import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. 
   * input: handle - company handle as a string
   * output: { handle, name, description, numEmployees, logoUrl, jobs }
   *     where jobs is [{ id, title, salary, equity }, ...]
  */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies matching filerQuery. 
   *  input: filterQuery - string to filter for company names.
   *  output: [{ handle, name, description, numEmployees, logoUrl }, ...]
  */

  static async getCompanies(filterQuery) {
    const query = (filterQuery)
      ? { name: filterQuery }
      : {};
    let res = await this.request(`companies`, query);
    return res.companies;
  }

  /** Get all jobs matching filterQuery. 
   * input: filterQuery - string to filter for job titles.
   * output: [{ id, title, salary, equity, companyHandle, companyName }, ...]
  */

  static async getJobs(filterQuery) {
    const query = (filterQuery)
      ? { title: filterQuery }
      : {};
    let res = await this.request(`jobs`, query);
    return res.jobs;
  }

  ///AUTH FUNCTIONS

  /**Login user with {username, passsword}. Returns token. */
  static async login({ username, password }) {
    let res = await this.request(`token`, { username, password });
    this.token = res.token;
    console.log('token is: ', res.token);
    return res.token;
  }
  /**Register user with { username, password, firstName, lastName, email }.
   * Returns token. */
  static async register({ username, password, firstName, lastName, email }) {
    let res = await this.request(`register`, { username, password, firstName, lastName, email });
    this.token = res.token;
    console.log('token is: ', res.token);
    return res.token;
  }

  /**Logout user, update token, returns token */
  static async logout() {
    this.token = "";
    return this.token;
  }

}

export default JoblyApi;