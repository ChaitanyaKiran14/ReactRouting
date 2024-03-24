import Cookies from 'js-cookie';

const API_URL = 'https://dummyjson.com';

class AuthService {
  async login(username, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    console.log(data)
    console.log(data.token)

    if (response.ok) {
      Cookies.set('token', data.token); // Store the JWT token in a cookie
      return true;
    }

    return false;
  }

  logout() {
    Cookies.remove('token'); // Remove the JWT token from the cookie
  }

  isAuthenticated() {
    const token = Cookies.get('token'); // Get the JWT token from the cookie
    return token !== undefined;
  }
}

export default new AuthService();