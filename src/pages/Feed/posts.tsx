import { Card, Container, InstagramLink } from "./Feed";
import post1 from "../../img/feed/post1.jpg";
import post2 from "../../img/feed/post2.jpg";
import post3 from "../../img/feed/post3.jpg";
import post4 from "../../img/feed/post4.jpg";
import post5 from "../../img/feed/post5.jpg";
import post6 from "../../img/feed/post6.jpg";
import post7 from "../../img/feed/post7.jpg";
import post8 from "../../img/feed/post8.jpg";
import post9 from "../../img/feed/post9.jpg";
import post10 from "../../img/feed/post10.jpg";
import post11 from "../../img/feed/post11.jpg";
import post12 from "../../img/feed/post12.jpg";

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
      image: post4,
    },
    {
      id: 5,
      link: "https://www.instagram.com/p/Cwn1efNRgU5/",
      image: post5,
    },
    {
      id: 6,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post6,
    },
    {
      id: 7,
      link: "https://www.instagram.com/p/Cwn1efNRgU5/",
      image: post7,
    },
    {
      id: 8,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post8,
    },
    {
      id: 9,
      link: "https://www.instagram.com/p/Cwn1efNRgU5/",
      image: post9,
    },
    {
      id: 10,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post10,
    },
    {
      id: 11,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post11,
    },
    {
      id: 12,
      link: "https://www.instagram.com/p/CwVuDNdRs7m/",
      image: post12,
    },
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
