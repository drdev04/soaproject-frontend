import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:9192",
});

/*  Esta función añade una nueva sala a la BD */
export async function addRoom(photo, roomType, roomPrice) {
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("roomType", roomType);
  formData.append("roomPrice", roomPrice);

  const response = await api.post("/rooms/add/new-room", formData);
  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
}

/* Esta función obtiene todos los tipos de habitaciones de la BD */
export async function getRoomTypes() {
  try {
    const response = await api.get("/rooms/room-types");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching rooms types");
  }
}
