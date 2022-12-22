import tw from "tailwind-styled-components";
import Image from "next/image";
import { BlogType } from "../../models/Blog";

const Container = tw.div`
  flex
  flex-col
  cursor-pointer
`;

const BlogContentContainer = tw.div`
  py-4
  px-2
`;

const BlogTitle = tw.h4`
  text-lg
  font-bold
  text-black
  leading-6
  mb-2
`;

const BlogDescription = tw.p`
  text-black
  text-sm
  mb-4
`;

const ReadMoreLink = tw.p`
  text-red-500
  text-sm
  font-bold
`;

const BlogCard: React.FC<{ blog: BlogType }> = (props) => {
  return (
    <Container>
      <Image
        src={props.blog.thumbnail}
        alt="Blog 1"
        style={{ borderRadius: "4px", height: "175px", objectFit: "cover" }}
      />
      <BlogContentContainer>
        <BlogTitle>{props.blog.title}</BlogTitle>
        <BlogDescription>{props.blog.description}</BlogDescription>
        <ReadMoreLink>Read More</ReadMoreLink>
      </BlogContentContainer>
    </Container>
  );
};

export default BlogCard;
