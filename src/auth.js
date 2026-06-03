const AUTH_SESSION_KEY = 'huge_company_user';

export function getAuthUser() {
  try {
    const user = localStorage.getItem(AUTH_SESSION_KEY);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

export function setAuthUser(user) {
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(user));
  window.dispatchEvent(new Event('huge-auth-change'));
}

export function clearAuthUser() {
  localStorage.removeItem(AUTH_SESSION_KEY);
  window.dispatchEvent(new Event('huge-auth-change'));
}
