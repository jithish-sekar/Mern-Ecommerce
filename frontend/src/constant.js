export let baseUrl = "http://localhost:3000/";

if (process.env.NODE_ENV === "production") {
  baseUrl = "http://newwebsite.com/";
}
