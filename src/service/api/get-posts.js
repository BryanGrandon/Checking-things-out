import { fetchData } from "../fetchData";

const url = "https://jsonplaceholder.typicode.com/posts";
const getPosts = fetchData(url);

export default getPosts;
