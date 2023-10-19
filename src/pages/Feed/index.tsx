import React from "react";
import { Card, Container, InstagramLink } from "./Feed";
import post1 from "../../img/feed/post1.jpg";
import post2 from "../../img/feed/post2.jpg";
import post3 from "../../img/feed/post3.jpg";

const InstagramCards = () => {
  const instagramPosts = [
    {
      id: 1,
      link: "https://www.instagram.com/p/Cwn1efNRgU5/",
      image: post1,
    },
    {
      id: 2,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post2,
    },
    {
      id: 3,
      link: "https://www.instagram.com/p/Cvrv0LorWCE/",
      image: post3,
    },
    {
      id: 4,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post2,
    },
    {
      id: 5,
      link: "https://www.instagram.com/p/Cwn1efNRgU5/",
      image: post1,
    },
    {
      id: 6,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post2,
    },
    {
      id: 7,
      link: "https://www.instagram.com/p/Cwn1efNRgU5/",
      image: post1,
    },
    {
      id: 8,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post2,
    },
    {
      id: 9,
      link: "https://www.instagram.com/p/Cwn1efNRgU5/",
      image: post1,
    },
    {
      id: 10,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post2,
    },
    {
      id: 11,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post2,
    },
    {
      id: 12,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post2,
    },
    // Adicione mais posts aqui
  ];

  return (
    <Container>
      {instagramPosts.map((post) => (
        <InstagramLink
          key={post.id}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <img src={post.image} alt={`Post ${post.id}`} />
          </Card>
        </InstagramLink>
      ))}
    </Container>
  );
};

export default InstagramCards;
