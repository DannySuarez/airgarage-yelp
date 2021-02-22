import React from "react";
import { Container, Typography, Link, Box } from "@material-ui/core";
export const Results = (props) => {
  const { rating, review_count, name, url, image_url, location, score } = props;
  return (
    <Container style={{ marginTop: "10px" }}>
      <Box>
        {image_url && (
          <img height="150px" width="150px" alt={name} src={image_url} />
        )}
      </Box>
      <Typography>Name: {name}</Typography>
      <Typography>Score: {score.toFixed(2)}</Typography>
      <Typography>Rating: {rating}</Typography>
      <Typography>Reviews: {review_count}</Typography>
      <Typography>
        {" "}
        Address:{" "}
        {`${location.display_address[0]} ${location.display_address[1]}`}
      </Typography>
      <Link href={url}>View more details on Yelp</Link>
    </Container>
  );
};
