import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Video, Database, Lightbulb, ArrowRight, CheckCircle, Smartphone, Globe, Phone, CreditCard } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    // পেজ লোড হওয়ার সময় স্ক্রল পজিশন রিসেট করা
    window.scrollTo(0, 0);
    
    // পেজ টাইটেল আপডেট করা
    document.title = 'সার্ভিস - মামুনুর রহমান';
  }, []);

  const services = [
    {
      id: 'document-design',
      title: 'ডকুমেন্ট ডিজাইন সার্ভিস',
      description: 'পেশাদার ডকুমেন্ট ডিজাইন, রিপোর্ট, প্রেজেন্টেশন, সিভি, রেজুমে, লেটারহেড ইত্যাদি তৈরি করা হয়।',
      icon: <FileText size={48} className="text-primary" />,
      features: [
        'পেশাদার ডকুমেন্ট ডিজাইন',
        'রিপোর্ট এবং প্রেজেন্টেশন',
        'সিভি এবং রেজুমে',
        'লেটারহেড এবং বিজনেস কার্ড',
        'ব্রোশার এবং ফ্লায়ার',
        'প্রপোজাল এবং কোটেশন',
      ],
      process: [
        'প্রয়োজনীয় তথ্য সংগ্রহ',
        'ডিজাইন কনসেপ্ট তৈরি',
        'প্রাথমিক ডিজাইন প্রস্তুত',
        'ক্লায়েন্টের ফিডব্যাক',
        'ফাইনাল ডিজাইন ডেলিভারি',
      ],
      deliverables: [
        'হাই রেজোলিউশন PDF',
        'এডিটেবল ফাইল (Word/PowerPoint)',
        'প্রিন্ট রেডি ফাইল',
      ],
    },
    {
      id: 'video-editing',
      title: 'ভিডিও এডিটিং সার্ভিস',
      description: 'পেশাদার ভিডিও এডিটিং, কালার গ্রেডিং, ভিজুয়াল ইফেক্টস, অডিও মিক্সিং ইত্যাদি সার্ভিস প্রদান করা হয়।',
      icon: <Video size={48} className="text-primary" />,
      features: [
        'পেশাদার ভিডিও এডিটিং',
        'কালার গ্রেডিং',
        'ভিজুয়াল ইফেক্টস',
        'অডিও মিক্সিং',
        'মোশন গ্রাফিক্স',
        'ইন্ট্রো এবং আউট্রো অ্যানিমেশন',
      ],
      process: [
        'রো ফুটেজ সংগ্রহ',
        'ভিডিও এডিটিং প্ল্যান',
        'রাফ কাট তৈরি',
        'ক্লায়েন্টের ফিডব্যাক',
        'ফাইনাল এডিট এবং রেন্ডারিং',
      ],
      deliverables: [
        'হাই রেজোলিউশন ভিডিও ফাইল',
        'বিভিন্ন ফরম্যাটে ভিডিও (MP4, MOV)',
        'বিভিন্ন রেজোলিউশনে ভিডিও (1080p, 720p)',
      ],
    },
    {
      id: 'recharge',
      title: 'মোবাইল রিচার্জ',
      description: 'সকল অপারেটরের মোবাইল রিচার্জ সার্ভিস। দ্রুত এবং নিরাপদ রিচার্জ সেবা।',
      icon: <CreditCard size={48} className="text-primary" />,
      features: [
        'সকল অপারেটরের রিচার্জ সুবিধা',
        'দ্রুত এবং নিরাপদ রিচার্জ',
        'অনলাইন পেমেন্ট সিস্টেম',
        'রিচার্জ কনফার্মেশন SMS',
        '২৪/৭ কাস্টমার সাপোর্ট',
        'বিশেষ অফার এবং ডিসকাউন্ট',
      ],
      process: [
        'অপারেটর নির্বাচন করুন',
        'মোবাইল নম্বর দিন',
        'রিচার্জ পরিমাণ নির্বাচন করুন',
        'পেমেন্ট সম্পন্ন করুন',
        'রিচার্জ কনফার্মেশন পান',
      ],
      deliverables: [
        'তাৎক্ষণিক রিচার্জ',
        'কনফার্মেশন SMS',
        'ইলেকট্রনিক রিসিট',
      ],
    },
    {
      id: 'brilliant-connect',
      title: 'Brilliant Connect',
      description: 'Brilliant Connect এর মাধ্যমে দেশ-বিদেশে কল করুন সাশ্রয়ী মূল্যে।',
      icon: <Phone size={48} className="text-primary" />,
      features: [
        'সাশ্রয়ী মূল্যে আন্তর্জাতিক কল',
        'উচ্চ মানের কল কোয়ালিটি',
        'অ্যাপ-টু-অ্যাপ ফ্রি কল',
        'অ্যাপ-টু-অ্যাপ ফ্রি ভিডিও কল',
        'কম ডাটা ব্যবহার',
        'সহজ রিচার্জ সিস্টেম',
      ],
      process: [
        'Brilliant Connect অ্যাপ ডাউনলোড করুন',
        'রেজিস্ট্রেশন করুন',
        'ব্যালেন্স রিচার্জ করুন',
        'কল করুন যেকোনো নম্বরে',
        'সাশ্রয়ী মূল্যে কল উপভোগ করুন',
      ],
      deliverables: [
        'Brilliant Connect অ্যাকাউন্ট',
        'আন্তর্জাতিক কলিং সুবিধা',
        'ব্যালেন্স রিচার্জ সুবিধা',
      ],
    },
    {
      id: 'sonido-global',
      title: 'Sonido Global',
      description: 'Sonido Global এর মাধ্যমে আন্তর্জাতিক কল সার্ভিস নিন সর্বনিম্ন রেটে।',
      icon: <Globe size={48} className="text-primary" />,
      features: [
        'সর্বনিম্ন রেটে আন্তর্জাতিক কল',
        'নিরাপদ এবং নির্ভরযোগ্য কল সার্ভিস',
        'মেসেজিং সুবিধা',
        'ক্রস-বর্ডার কমিউনিকেশন',
        'সহজ ব্যবহার',
        'বিভিন্ন প্যাকেজ অপশন',
      ],
      process: [
        'Sonido Global অ্যাপ ডাউনলোড করুন',
        'অ্যাকাউন্ট তৈরি করুন',
        'প্যাকেজ নির্বাচন করুন',
        'পেমেন্ট সম্পন্ন করুন',
        'আন্তর্জাতিক কল করুন',
      ],
      deliverables: [
        'Sonido Global অ্যাকাউন্ট',
        'আন্তর্জাতিক কলিং সুবিধা',
        'মেসেজিং সুবিধা',
      ],
    },
    {
      id: 'sim-roaming',
      title: 'সিম রোমিং',
      description: 'রবি, এয়ারটেল, গ্রামীণফোন, বাংলালিংক সিম রোমিং সার্ভিস।',
      icon: <Smartphone size={48} className="text-primary" />,
      features: [
        'বিদেশে বাংলাদেশি সিম ব্যবহার',
        'আন্তর্জাতিক রোমিং সুবিধা',
        'ডাটা রোমিং প্যাকেজ',
        'ভয়েস রোমিং প্যাকেজ',
        'বিভিন্ন দেশে কভারেজ',
        'সাশ্রয়ী মূল্যে রোমিং',
      ],
      process: [
        'অপারেটর নির্বাচন করুন (রবি/এয়ারটেল/গ্রামীণফোন/বাংলালিংক)',
        'রোমিং সার্ভিস অ্যাক্টিভেট করুন',
        'প্যাকেজ নির্বাচন করুন',
        'পেমেন্ট সম্পন্ন করুন',
        'বিদেশে রোমিং সুবিধা উপভোগ করুন',
      ],
      deliverables: [
        'রোমিং অ্যাক্টিভেশন',
        'রোমিং প্যাকেজ',
        'কাস্টমার সাপোর্ট',
      ],
    },
    {
      id: 'form-design',
      title: 'কাস্টম ফর্ম/ডেটাবেইস ডিজাইন',
      description: 'আপনার প্রয়োজন অনুযায়ী কাস্টম ফর্ম, ডেটাবেইস, স্প্রেডশীট ডিজাইন করা হয়।',
      icon: <Database size={48} className="text-primary" />,
      features: [
        'কাস্টম ফর্ম ডিজাইন',
        'ডেটাবেইস ডিজাইন',
        'স্প্রেডশীট অটোমেশন',
        'ডেটা ভ্যালিডেশন',
        'ডেটা এনালাইসিস',
        'রিপোর্ট জেনারেশন',
      ],
      process: [
        'প্রয়োজনীয়তা বিশ্লেষণ',
        'ডেটাবেইস স্ট্রাকচার ডিজাইন',
        'প্রোটোটাইপ তৈরি',
        'ক্লায়েন্টের ফিডব্যাক',
        'ফাইনাল ডেলিভারি এবং ইমপ্লিমেন্টেশন',
      ],
      deliverables: [
        'কাস্টম ফর্ম/ডেটাবেইস ফাইল',
        'ইউজার ম্যানুয়াল',
        'ইনস্টলেশন গাইড',
      ],
    },
    {
      id: 'consultancy',
      title: 'আইডিয়া কনসালটেন্সি',
      description: 'মোবাইল অ্যাপ/ওয়েব অ্যাপ সম্পর্কিত আইডিয়া, প্ল্যানিং এবং কনসালটেন্সি সার্ভিস প্রদান করা হয়।',
      icon: <Lightbulb size={48} className="text-primary" />,
      features: [
        'আইডিয়া ভ্যালিডেশন',
        'প্রজেক্ট প্ল্যানিং',
        'মার্কেট রিসার্চ',
        'কম্পিটিটিভ অ্যানালাইসিস',
        'বিজনেস মডেল ডেভেলপমেন্ট',
        'টেকনিক্যাল ফিজিবিলিটি স্টাডি',
      ],
      process: [
        'আইডিয়া ডিসকাশন',
        'মার্কেট রিসার্চ',
        'প্রজেক্ট প্ল্যান তৈরি',
        'ক্লায়েন্টের ফিডব্যাক',
        'ফাইনাল রিপোর্ট ডেলিভারি',
      ],
      deliverables: [
        'কনসালটেন্সি রিপোর্ট',
        'প্রজেক্ট প্ল্যান',
        'ফিজিবিলিটি স্টাডি',
      ],
    },
  ];

  return (
    <>
      {/* হেডার সেকশন */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">আমার সার্ভিসসমূহ</h1>
            <p className="text-lg text-foreground/80 mb-8">
              আপনার প্রয়োজনীয় সকল ডিজিটাল সার্ভিস একই জায়গায়। নিচের সার্ভিসগুলি থেকে আপনার প্রয়োজনীয় সার্ভিস বেছে নিন।
            </p>
          </div>
        </div>
      </section>

      {/* সার্ভিস লিস্ট */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-4">{service.description}</p>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  <span>বিস্তারিত দেখুন</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* বিস্তারিত সার্ভিস সেকশন */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="section bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-foreground/80 mb-6">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-3">ফিচার</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={18} className="text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={`/order?service=${service.id}`} className="btn-primary inline-block">
                  অর্ডার করুন
                </Link>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">কাজের প্রক্রিয়া</h3>
                  <ol className="space-y-4">
                    {service.process.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">ডেলিভারেবল</h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle size={18} className="text-primary mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* কল টু অ্যাকশন */}
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              আপনার প্রজেক্টে আমাকে নিয়োগ করুন
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              আপনার প্রয়োজনীয় ডিজিটাল সার্ভিস পেতে আজই আমার সাথে যোগাযোগ করুন। আমি আপনার প্রজেক্টকে সফল করতে সাহায্য করব।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-medium transition-all"
              >
                যোগাযোগ করুন
              </Link>
              <Link
                to="/order"
                className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all"
              >
                অর্ডার করুন
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

