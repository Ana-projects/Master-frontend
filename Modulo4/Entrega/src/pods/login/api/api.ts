export const login = (
  username: string,
  password: string
): Promise<{ username: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "test") {
        resolve({ username });
      } else {
        reject(new Error("User / password not valid, psst... admin / test"));
      }
    }, 500);
  });
};
