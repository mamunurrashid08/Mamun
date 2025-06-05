import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  useEffect(() => {
    // পেজ লোড হওয়ার সময় স্ক্রল পজিশন রিসেট করা
    window.scrollTo(0, 0);
    
    // পেজ টাইটেল আপডেট করা
    document.title = 'পেজ পাওয়া যায়নি - মামুনুর রহমান';
  }, []);

  return (
    <section className="section bg-background min-h-[80vh] flex items-center">
      <div className="container">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl font-bold mb-4">পেজ পাওয়া যায়নি</h2>
          <p className="text-foreground/70 mb-8">
            আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। পেজটি সরানো হয়েছে, নাম পরিবর্তন করা হয়েছে, বা অস্থায়ীভাবে অনুপলব্ধ।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary flex items-center justify-center">
              <Home size={18} className="mr-2" />
              <span>হোম পেজে যান</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center justify-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              <span>আগের পেজে ফিরুন</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

