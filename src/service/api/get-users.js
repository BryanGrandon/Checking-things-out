import { fetchData } from "../fetchData";

const url = "https://jsonplaceholder.typicode.com/users";
const getUsers = fetchData(url);

export default getUsers;
