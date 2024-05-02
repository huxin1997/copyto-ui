class ApiClient {

  constructor() {
    this.baseUrl = '/api';
  }

  async create(data) {
    const response = await fetch(`${this.baseUrl}/clipboards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async findByToken(token) {
    const response = await fetch(`${this.baseUrl}/clipboards/token/${token}`);
    return response.json();
  }



}


export default ApiClient;