import { APIconnector } from "../APIconnector";
import { userEndpoints } from "../APIs";
import toast from "react-hot-toast";
const {REGISTER_API,EVENTS_API,UPDATE,GET_USER_API,LOGOUT_API,REG_EVENTS}=userEndpoints

export async function register(eventId, token) {
    const toastId = toast.loading("Please wait...");
    
    try {
      const response = await APIconnector("POST", REGISTER_API(eventId) ,null ,{ Authorization: `Bearer ${token}`});
  
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
  
      toast.success("Successfully registered for the event!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Could not register for the event");
    } finally {
      toast.dismiss(toastId);
    }
  }


export const fetchEvents = async () => {
  const toastId = toast.loading("Please Wait...");

  try {
    const response = await APIconnector("GET", EVENTS_API);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    
    toast.success("Successfully loaded the Events");
    return response.data.data; // Assuming API returns `events` array
  } catch (e) {
    toast.error("Could Not load the event");
    return []; // Return empty array on failure
  } finally {
    toast.dismiss(toastId);
  }
};

export async function updateUser(userData,token,navigate){
  const toastId=toast.loading("Updating Profile.....")

  try{
    const response=await APIconnector("PUT",UPDATE,userData,{
      Authorization:`Bearer ${token}`
    });
    if(!response.data.status){
      throw new Error(response.data.message)
    }
    toast.success("Profile updated successfully!");
    navigate('/')
    return response.data.message
  }catch(e){
    toast.error(e.response?.data?.message||"Failed to update Profile")
  }finally{
    toast.dismiss(toastId)
  }
}

export async function getUser(token) {
  try {
    const response = await APIconnector("GET", GET_USER_API, null, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.status) {
      throw new Error(response.data.message);
    }    
    return response.data.message; // Returns user data
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to fetch user details");
    return null;
  }
}


export async function logout(navigate) {
  const toastId = toast.loading("Logging out...");
  try {
    const response = await APIconnector("GET", LOGOUT_API, null, {
      credentials: "include",
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate("/login");
  } catch (error) {
    toast.error(error.response?.data?.message || "Logout failed!");
  } finally {
    toast.dismiss(toastId);
  }
}


export async function getRegisteredEvents(token) {
  const toastId = toast.loading("Fetching your registered events...");

  try {
    const response = await APIconnector("GET", REG_EVENTS, null, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Registered events fetched successfully!");
    return response.data.data; // Returning the list of registered events
  } catch (error) {
    toast.error(error.response?.data?.message || "Could not fetch registered events");
    return []; // Return an empty array in case of an error
  } finally {
    toast.dismiss(toastId);
  }
}
