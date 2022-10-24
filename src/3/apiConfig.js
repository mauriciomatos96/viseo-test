const apiConfig = {
  baseUrl: "https://genius.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "0ef97b76d6msh762ab53d2847675p1ace83jsnd77ef550901f",
    "X-RapidAPI-Host": "genius.p.rapidapi.com"
  },
  getSongDataUrl: (songId) => `${this.baseUrl}/songs/${songId}`
};

export default apiConfig;
