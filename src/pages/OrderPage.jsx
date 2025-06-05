import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import OrderFormSection from '../components/sections/OrderFormSection';

const OrderPage = () => {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get('service');
  const selectedPackage = searchParams.get('package');

  useEffect(() => {
    // পেজ লোড হওয়ার সময় স্ক্রল পজিশন রিসেট করা
    window.scrollTo(0, 0);
    
    // পেজ টাইটেল আপডেট করা
    document.title = 'অর্ডার করুন - মামুনুর রহমান';
  }, []);

  // সার্ভিস নাম পাওয়ার ফাংশন
  const getServiceName = (serviceId) => {
    const services = {
      'document-design': 'ডকুমেন্ট ডিজাইন সার্ভিস',
      'video-editing': 'ভিডিও এডিটিং সার্ভিস',
      'form-design': 'কাস্টম ফর্ম/ডেটাবেইস ডিজাইন',
      'consultancy': 'আইডিয়া কনসালটেন্সি',
      'recharge': 'মোবাইল রিচার্জ',
      'brilliant-connect': 'Brilliant Connect',
      'sonido-global': 'Sonido Global',
      'sim-roaming': 'সিম রোমিং',
    };
    
    return services[serviceId] || serviceId;
  };

  return (
    <>
      {/* হেডার সেকশন */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">অর্ডার করুন</h1>
            <p className="text-lg text-foreground/80 mb-8">
              আপনার প্রয়োজনীয় সার্ভিস অর্ডার করতে নিচের ফর্মটি পূরণ করুন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
            </p>
            {selectedService && selectedPackage && (
              <div className="bg-primary/10 p-4 rounded-lg inline-block">
                <p className="font-medium">
                  আপনি <span className="text-primary">{getServiceName(selectedService)}</span> এর{' '}
                  <span className="text-primary">{selectedPackage}</span> প্যাকেজ নির্বাচন করেছেন।
                </p>
              </div>
            )}
            {selectedService && !selectedPackage && (
              <div className="bg-primary/10 p-4 rounded-lg inline-block">
                <p className="font-medium">
                  আপনি <span className="text-primary">{getServiceName(selectedService)}</span> সার্ভিস নির্বাচন করেছেন।
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* অর্ডার ফর্ম */}
      <OrderFormSection />
    </>
  );
};

export default OrderPage;

