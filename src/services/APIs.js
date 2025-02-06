//export const BASE_URL = "http://localhost:4000/api/v1/"
export const BASE_URL="https://backend-vulcanzy.onrender.com/api/v1/"
// AUTH ENDPOINTS
export const authEndpoints = {
  SIGNUP_API: BASE_URL + "auth/google/callback",
  LOGIN_API: BASE_URL + "auth/google/callback",
}

export const userEndpoints={
  REGISTER_API:(eventId)=>`${BASE_URL}user/register/${eventId}`,
  EVENTS_API:BASE_URL+"event/getAllEvents",
  UPDATE:BASE_URL+"user/editUser",
  GET_USER_API:BASE_URL+"user/getUser",
  LOGOUT_API:BASE_URL+"auth/logout"
}

