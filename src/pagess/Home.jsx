import { useArticle } from "../Context/ArticlesContext";
import "./home.css";
import Navbar from "../Componant/Header";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useArticle();

  return (
    <main className="main-contain flex-column gap-1r">
      <Navbar />
      <h1 className="align-center decoration-underline">Latest News</h1>
      {data.map((i) => (
        <Link to={`/article/${i.id}`}>
          <div className="artilcle-container flex flex-justify-center gap-1r">
            <section className="artilcle-img-contain">
              <img
                src={i.jetpack_featured_media_url}
                className="article-img"
                alt="logo"
              />
            </section>
            <section className="heading-detail flex-column gap-1r link-color">
              <h3 className="title-heading">{i.title.rendered}</h3>
              <div className="details flex gap-1r">
                <p>
                  By -<strong>{i.parsely.meta.author[0].name}</strong>
                </p>
                <p className="date">updated- {i.date}</p>
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: i.excerpt.rendered.replace("[&hellip;]", "..."),
                }}
              ></p>
            </section>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Home;
