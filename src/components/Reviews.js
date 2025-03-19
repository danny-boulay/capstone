import React from "react";
import { Card, CardContent, Typography, Avatar, Box, Rating } from "@mui/material";

const reviews = [
  {
    rating: 4.5,
    title: "Delicious",
    body: "Greek salad was delicious and the feta cheese was so good!",
    reviewer: "Alicia Jones",
    date: "February 24 2025",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    rating: 4,
    title: "Good food",
    body: "The bruschetta was good, but the lemon dessert was a bit too sweet.",
    reviewer: "Jerry Simons",
    date: "February 18 2025",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    rating: 5,
    title: "Incredible!",
    body: "One of the best restaurants I've been to! Food and service were outstanding.",
    reviewer: "Chelsea Baker",
    date: "February 15 2025",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

/*
Seul component utilisant la librairie MUI
*/
const Reviews = () => {
    return (
      <section className="Reviews" aria-labelledby="reviews-header">
        <div className="EmptyContainer"></div> {/* Container gauche */}
        <div className="ReviewsContainer">
          <div className="ReviewsHeader">
            <h2>Our customers love us!</h2>
          </div>
          <div className="ReviewsCards"> {/* Conteneur flex-row des Cards */}
            {reviews.map((review, index) => (
              <article key={index} className="ReviewCard" aria-label={`Review by ${review.reviewer}`} > {/* Unité individuelle */}
                <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 3, p: 2 }}>
                  <CardContent>
                    <Rating value={review.rating} precision={0.5} readOnly aria-label={`Rating: ${review.rating} stars`} />
                    <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: "'Markazi Text', sans-serif" }}>
                      {review.title}
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', fontFamily: "'Karla', sans-serif" }}>
                      {review.body}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Avatar src={review.avatar} alt={`Avatar of ${review.reviewer}`} sx={{ width: 32, height: 32, mr: 1 }} />
                      <Box>
                        <Typography sx={{ fontSize: '1rem', fontFamily: "'Karla', sans-serif" }}>
                          {review.reviewer}
                        </Typography>
                        <Typography sx={{ fontSize: '1rem', fontFamily: "'Karla', sans-serif" }}>
                          {review.date}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
        <div className="EmptyContainer"></div> {/* Container droit */}
      </section>
    );
  };

  export default Reviews;