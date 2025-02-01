import { APIconnector } from "../APIconnector";
import { userEndpoints } from "../APIs";
import toast from "react-hot-toast";
const {REGISTER_API,EVENTS_API}=userEndpoints

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
