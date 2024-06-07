import {
  Hero,
  PopularProducts,
  Superquality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections/index";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <Hero />
    <PopularProducts />
    <Superquality />
    <Services />
    <SpecialOffer />
    <CustomerReviews />
    <Subscribe />
    <Footer />
  </main>
);

export default App;
