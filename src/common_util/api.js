export const fetchApi = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5c7354a7b6fe9bec0973e1496f6c7bb6
    `;
  const response = await fetch(url).then((res) => res.json());
  console.log(response);
  if (response?.message) {
    alert(response?.message);
    return false;
  }
  return response;
};
