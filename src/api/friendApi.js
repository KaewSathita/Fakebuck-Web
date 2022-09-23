import axios from "axios";

export const deleteFriend = friendId => axios.delete(`/friends/${friendId}`);