import axios from "axios";

const dataService = (props) => {
  const defaultParam = {
    seed: 1,
    page: 20,
    results: 50,
  };
  const dataAra = [];
  const getData = () => {
    return dataAra;
  };
  const options = {
    method: "GET",
    url: "https://randomuser.me/api",
    params: {
      results: defaultParam.results,
      seed: defaultParam.seed,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results);
      data = [...dataAra, response.data.results];
    })
    .catch(function (error) {
      console.error(error);
     
    });
};

export default dataService;
