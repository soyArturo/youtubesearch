import axios from "axios";

const KEY = "AIzaSyAlirIDNiJwmd0nOAJ5SZdlsxeX_PWkV-A";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
