export const yelpSearch = async (location) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx`,
  });

  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers,
  };

  const data = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=parking+lot&location=${location}`,
    requestOptions
  );

  const results = await data.json();
  const filterdResults = results.businesses.map(
    ({ id, rating, review_count, name, url, image_url, location }) => ({
      id,
      rating,
      review_count,
      name,
      url,
      image_url,
      location,
      score: (review_count * rating) / (review_count + 1),
    })
  );

  return filterdResults;
};
