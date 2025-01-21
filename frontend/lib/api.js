const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

async function request(endpoint, options = {}) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("boomai-token") : null;

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw { status: res.status, ...error };
  }

  return res.json();
}

export const api = {
  // Auth
  register: (data) =>
    request("/auth/register", { method: "POST", body: JSON.stringify(data) }),
  login: (data) =>
    request("/auth/login", { method: "POST", body: JSON.stringify(data) }),
  logout: () => request("/auth/logout", { method: "POST" }),
  getUser: () => request("/auth/user"),

  // Blog
  getBlogs: (page = 1) => request(`/blog?page=${page}`),
  getBlog: (slug) => request(`/blog/${slug}`),

  // Plans
  getPlans: () => request("/plans"),

  // Contact
  sendContact: (data) =>
    request("/contact", { method: "POST", body: JSON.stringify(data) }),

  // User Settings
  getProfile: () => request("/user/profile"),
  updateProfile: (data) =>
    request("/user/profile", { method: "PUT", body: JSON.stringify(data) }),
  updatePassword: (data) =>
    request("/user/password", { method: "PUT", body: JSON.stringify(data) }),
  updateAppearance: (data) =>
    request("/user/appearance", { method: "PUT", body: JSON.stringify(data) }),
};
