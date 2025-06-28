import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import Features from "@/components/Features";
import DeliveryInfo from "@/components/DeliveryInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PopularProducts />
      <Features />
      <DeliveryInfo />
      <Footer />
    </div>
  );
};

export default Index;
