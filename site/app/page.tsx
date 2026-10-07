import Banner from "./Component/Banner";
import Banner2 from "./Component/Banner2";
import Header from "./Component/Header";
import BannerButtons from "./Component/BannerButtons"

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Banner2 />
      <BannerButtons />
    </>
  );
}
