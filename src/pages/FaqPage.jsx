import { useEffect } from 'react';
import FaqSection from '../components/sections/FaqSection';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  useEffect(() => {
    // পেজ লোড হওয়ার সময় স্ক্রল পজিশন রিসেট করা
    window.scrollTo(0, 0);
    
    // পেজ টাইটেল আপডেট করা
    document.title = 'সাধারণ প্রশ্ন - মামুনুর রহমান';
  }, []);

  return (
    <>
      {/* হেডার সেকশন */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">সাধারণ প্রশ্ন</h1>
            <p className="text-lg text-foreground/80 mb-8">
              আমার সার্ভিস সম্পর্কে সাধারণত যেসব প্রশ্ন করা হয় সেগুলোর উত্তর এখানে দেওয়া আছে।
            </p>
          </div>
        </div>
      </section>

      {/* FAQ সেকশন */}
      <FaqSection />

      {/* অতিরিক্ত সাহায্য সেকশন */}
      <section className="section bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">আরও সাহায্য প্রয়োজন?</h2>
            <p className="text-foreground/80 mb-8">
              আপনার প্রশ্নের উত্তর এখানে না পেলে আমার সাথে সরাসরি যোগাযোগ করুন। আমি আপনাকে সাহায্য করতে সর্বদা প্রস্তুত।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                যোগাযোগ করুন
              </Link>
              <a
                href="https://wa.me/8801712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp এ মেসেজ করুন
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;

