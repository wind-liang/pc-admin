export const login = (body) => {
  return $post("/api/login", body);
};
