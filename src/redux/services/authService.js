import axios from "axios";

const API = axios.create({
  //   baseURL: "https://your-api.com/api", // 🔹 замени на свой бекенд
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

export const authService = {
  /**
   * Вход в систему
   * @param {Object} credentials { email, password }
   * @returns {Promise<{ token: string, user: { name: string, avatar?: string } }>}
   */
  async signIn(credentials) {
    const { data } = await API.post("/auth/login", credentials);

    // data должен возвращать что-то вроде:
    // { token: "xxx", user: { name: "John Doe", avatar: "..." } }

    return data;
  },

  /**
   * Выход из системы
   * @returns {Promise<boolean>}
   */
  async signOut() {
    await API.post("/auth/logout");
    return true;
  },
};
