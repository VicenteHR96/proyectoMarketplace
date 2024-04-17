import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="cont-gallery">
        <Gallery></Gallery>
      </div>
    </>
  );
};

export default Home;
