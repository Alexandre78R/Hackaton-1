import { useEffect } from "react";

function Countries() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    fetch("https://api.pexels.com/v1/search?query=italy+landscape", {
      method: "GET",
      headers: {
        Authorization:
          "iIfRlpf2VgvkZoPJAe7LrQLwDIqNz3s6rvpKyUIwQzh1FFGOnzUqu5ECU",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setPictures(response);
      })
      .catch((err) => console.error(err));
  }, []);
  return <div>Countries</div>;
}

export default Countries;
