export const fetchTopRatedMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODRjYmI2OTJmY2M3MmIxMDIwZmU5OGM5ODc2OGE5MyIsIm5iZiI6MTc5MDk0ODM5NC42MDYwMDAyLCJzdWIiOiI2YWJmYjQyYWZiZjAwYjdiYTYxN2U5MTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CQrhEotN5l9lo1c7NEEkKxdYxSPLtlvjXBEVmr59m2E",
    },
  };

  const response = await fetch(url, options);

  console.log("res ", response.ok);

  if (!response.ok) {
    throw new Error("failed to fetch movies");
  }

  const json = await response.json();
  console.log("json :", JSON.stringify(json, null, 2));
  return json.results;
};
