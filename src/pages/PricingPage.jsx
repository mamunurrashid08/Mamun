import { useEffect } from 'react';
import PricingSection from '../components/sections/PricingSection';

const PricingPage = () => {
  useEffect(() => {
    // পেজ লোড হওয়ার সময় স্ক্রল পজিশন রিসেট করা
    window.scrollTo(0, 0);
    
    // পেজ টাইটেল আপডেট করা
    document.title = 'মূল্য তালিকা - মামুনুর রহমান';
  }, []);

  return (
    <>
      {/* হেডার সেকশন */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">মূল্য তালিকা</h1>
            <p className="text-lg text-foreground/80 mb-8">
              আমার সার্ভিসগুলোর মূল্য তালিকা নিচে দেওয়া আছে। প্রতিটি সার্ভিসের জন্য বিভিন্ন প্যাকেজ রয়েছে। আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন।
            </p>
          </div>
        </div>
      </section>

      {/* প্রাইসিং সেকশন */}
      <PricingSection />
    </>
  );
};

export default PricingPage;

