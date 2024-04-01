import Navbar from "../../components/navbar/navbar";
import HeroImage from "../../components/hero-image/hero-image";
import blogSVG from "../../assets/blog.svg";
import BlogPhotos from "../../containers/blog/blog-photos/blog-photos";
import "./blog-styles.css";

export default function Blog() {
  return (
    <>
      <Navbar />
      <HeroImage svg={blogSVG} alt="blog" />

      <article className="blog-photo">
        <article className="blog__article">
          <h2 className="blog__title">photos</h2>
          <BlogPhotos />
        </article>
      </article>

      <article>
        <h2>blog</h2>
      </article>
      <article>
        <h2>users</h2>
      </article>
    </>
  );
}
