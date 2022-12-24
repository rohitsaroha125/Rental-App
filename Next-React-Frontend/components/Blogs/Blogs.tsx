import tw from "tailwind-styled-components";
import styled from "styled-components";
import RedLabel from "../UI/RedLabel";
import SectionTitle from "../UI/SectionTitle";
import { BlogType } from "../../models/Blog";
import Blog1Img from "../../public/assets/images/blog1.webp";
import Blog2Img from "../../public/assets/images/blog2.jpg";
import Blog3Img from "../../public/assets/images/blog3.webp";
import BlogCard from "./BlogCard";

const blogsData: BlogType[] = [
  {
    id: 1,
    thumbnail: Blog1Img,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "7 March 2022",
  },
  {
    id: 2,
    thumbnail: Blog2Img,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "7 March 2022",
  },
  {
    id: 3,
    thumbnail: Blog3Img,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "7 March 2022",
  },
];

const Container = tw.div`
    w-full
    py-20
    flex
    flex-col
    justify-center
    items-center
`;

const BlogContainer = tw.div`
    mt-10
    w-3/5
    grid
    grid-cols-3
    gap-6
`;

const Blogs = () => {
  return (
    <Container>
      <RedLabel center={true}>Our News</RedLabel>
      <SectionTitle center={true}>Latest Blog & Event</SectionTitle>
      <BlogContainer>
        {blogsData.map((blog: BlogType) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </BlogContainer>
    </Container>
  );
};

export default Blogs;
