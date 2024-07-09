class IntuitClient {
  constructor() {
    this.baseUrl = "http://localhost:8080/api";
  }

  async fetchData() {
    return this.fetchDataWithMethod('GET', '/intuit/get/all');
  }

  async createIntuitPlayer(IntuitData) {
    return this.fetchDataWithMethod('POST', '/intuit/create', IntuitData);
  }

  async updateIntuitPlayer(IntuitData) {
    return this.fetchDataWithMethod('PUT', `/intuit/update`, IntuitData);
  }

  async deleteIntuitPlayer(IntuitId) {
    return this.fetchDataWithMethod('DELETE', `/intuit/delete/${IntuitId}`);
  }


  async validUser(userData) {
    return this.fetchDataWithMethod('POST', '/user/validUser', userData);
  }

  async getUser(userData) {
    return this.fetchDataWithMethod('POST', '/user/get', userData);
  }

  async signUp(userData) {
    return this.fetchDataWithMethod('POST', '/user/signup', userData);
  }

  async updateUser(userData) {
    return this.fetchDataWithMethod('POST', '/user/update', userData);
  }

  async signIn(userData) {
    return this.fetchDataWithMethod('POST', '/user/signin', userData);
  }


  async fetchDataWithMethod(method, endpoint, bodyData) {
    const url = this.baseUrl + endpoint;
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        mode: 'cors',
        credentials: 'include'
      },
    };
  
    if (bodyData) {
      options.body = JSON.stringify(bodyData);
    }
  
    try {
      const response = await fetch(url, options);
      console.log('Response Status:',  response.status);
  
      // Check if the response status is in the range of 200-299 (successful responses)
      
  
      // Attempt to parse the response as JSON
      const text = await response.text();
      let jsonData;
  
      try {
        jsonData = JSON.parse(text);
      } catch (e) {
        console.log('Invalid json data', jsonData);
        jsonData = response;
      }
  
      return jsonData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}

export default IntuitClient;
