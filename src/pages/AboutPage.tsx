import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-card rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-card-foreground mb-6 text-center">About Our Store</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              className="w-full h-96 object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Store"
            />
          </div>
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div className="text-muted-foreground mb-6">
              <p className="mb-4">
                Welcome to our online store, your one-stop shop for high-quality products designed for everyday life and
                adventure. We specialize in offering a curated selection of clothing, accessories, and gear, including our
                popular backpacks like the Fjallraven Foldsack No. 1, perfect for work, travel, or outdoor exploration.
              </p>
              <p className="mb-4">
                Our mission is to provide durable, stylish, and functional products that meet the needs of our diverse
                customers. Whether you're looking for men's or women's clothing, tech accessories, or everyday essentials, we
                strive to deliver exceptional quality and value.
              </p>
              <p>
                Founded with a passion for great design and customer satisfaction, we are committed to making your shopping
                experience seamless and enjoyable. Browse our collection, add your favorites to the cart, and discover why our
                customers keep coming back!
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link to="/react-task/products">
                <button className="bg-destructive text-white font-medium py-2 px-6 rounded hover:bg-destructive/80 transition duration-300">
                  Back to Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;