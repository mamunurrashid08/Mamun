import { useEffect } from 'react';
import ContactSection from '../components/sections/ContactSection';

const ContactPage = () => {
  useEffect(() => {
    // পেজ লোড হওয়ার সময় স্ক্রল পজিশন রিসেট করা
    window.scrollTo(0, 0);
    
    // পেজ টাইটেল আপডেট করা
    document.title = 'যোগাযোগ - মামুনুর রহমান';
  }, []);

  return (
    <>
      {/* হেডার সেকশন */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">যোগাযোগ করুন</h1>
            <p className="text-lg text-foreground/80 mb-8">
              আপনার যেকোনো প্রশ্ন বা প্রয়োজনে আমার সাথে যোগাযোগ করুন। আমি সর্বদা আপনাকে সাহায্য করতে প্রস্তুত।
            </p>
          </div>
        </div>
      </section>

      {/* কন্টাক্ট সেকশন */}
      <ContactSection />
    </>
  );
};

export default ContactPage;

