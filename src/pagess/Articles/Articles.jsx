import { useParams } from "react-router-dom";
import { useArticle } from "../../Context/ArticlesContext";
import Navbar from "../../Componant/Header";
import "./articles.css";

const Articles = () => {
  const { articleId } = useParams();
  const { data } = useArticle();

  const articlesData = data.find((item) => item.id === parseInt(articleId));

  return (
    <main>
      <Navbar />
      <div className="container-news flex-column justify-center">
        <h2 className="title">{articlesData?.title.rendered}</h2>
        <section className="author-detail flex-column">
          <p>
            written by :-
            <strong>{articlesData?.parsely.meta.author[0].name}</strong>
          </p>
          <p>
            updated :- <strong className="date">{articlesData?.date}</strong>
          </p>
        </section>
        <section className="artilcle-img-contain">
          <img
            src={articlesData?.jetpack_featured_media_url}
            className="article-img2"
            alt="logo"
          />
        </section>
        <section className="content">
          <p
            dangerouslySetInnerHTML={{ __html: articlesData?.content.rendered }}
          ></p>
        </section>
      </div>
    </main>
  );
};

export default Articles;
