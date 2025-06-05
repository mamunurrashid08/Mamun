import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const TestimonialsPage = () => {
  useEffect(() => {
    // পেজ লোড হওয়ার সময় স্ক্রল পজিশন রিসেট করা
    window.scrollTo(0, 0);
    
    // পেজ টাইটেল আপডেট করা
    document.title = 'ক্লায়েন্ট রিভিউ - মামুনুর রহমান';
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'রাকিব হাসান',
      position: 'ব্যবসায়ী',
      rating: 5,
      content:
        'মামুনুর রহমান আমার ব্যবসার জন্য একটি অসাধারণ ডকুমেন্ট ডিজাইন করে দিয়েছেন। তার কাজের মান এবং সময়মত ডেলিভারি দেওয়ার দক্ষতা অসাধারণ। আমি তার সার্ভিস সম্পর্কে অত্যন্ত সন্তুষ্ট।',
      service: 'ডকুমেন্ট ডিজাইন',
      date: 'মে ১৫, ২০২৫',
      image: null, // প্রোফাইল ইমেজ পরে যোগ করা হবে
    },
    {
      id: 2,
      name: 'সাবরিনা আক্তার',
      position: 'কনটেন্ট ক্রিয়েটর',
      rating: 5,
      content:
        'আমার ইউটিউব চ্যানেলের জন্য ভিডিও এডিটিং সার্ভিস নিয়েছিলাম। কাজের মান অসাধারণ এবং দ্রুত ডেলিভারি পেয়েছি। আমার চ্যানেলের দর্শক সংখ্যা বৃদ্ধি পেয়েছে। ধন্যবাদ মামুনুর ভাই।',
      service: 'ভিডিও এডিটিং',
      date: 'এপ্রিল ২৮, ২০২৫',
      image: null,
    },
    {
      id: 3,
      name: 'তানভীর আহমেদ',
      position: 'স্টার্টআপ ফাউন্ডার',
      rating: 4,
      content:
        'আমার স্টার্টআপের জন্য ডেটাবেইস ডিজাইন করে দিয়েছেন। কাজের মান ভালো এবং সময়মত ডেলিভারি পেয়েছি। কিছু মাইনর ইস্যু ছিল কিন্তু দ্রুত সমাধান করে দিয়েছেন।',
      service: 'ফর্ম/ডেটাবেইস ডিজাইন',
      date: 'এপ্রিল ১০, ২০২৫',
      image: null,
    },
    {
      id: 4,
      name: 'নাজমুল হক',
      position: 'শিক্ষক',
      rating: 5,
      content:
        'আমার অনলাইন কোর্সের জন্য প্রেজেন্টেশন ডিজাইন করে দিয়েছেন। কাজের মান অসাধারণ এবং সময়মত ডেলিভারি পেয়েছি। আমার ছাত্ররা খুব পছন্দ করেছে। ধন্যবাদ মামুনুর ভাই।',
      service: 'ডকুমেন্ট ডিজাইন',
      date: 'মার্চ ২২, ২০২৫',
      image: null,
    },
    {
      id: 5,
      name: 'ফারহানা খান',
      position: 'ফ্রিল্যান্সার',
      rating: 5,
      content:
        'আমার ব্যবসার জন্য একটি ডেটাবেইস তৈরি করে দিয়েছেন। খুব সহজে ব্যবহার করা যায় এবং আমার কাজের গতি অনেক বেড়েছে। সার্ভিস নিয়ে খুব সন্তুষ্ট।',
      service: 'ফর্ম/ডেটাবেইস ডিজাইন',
      date: 'মার্চ ১৫, ২০২৫',
      image: null,
    },
    {
      id: 6,
      name: 'মাহমুদুল হাসান',
      position: 'ইউটিউবার',
      rating: 5,
      content:
        'আমার ইউটিউব চ্যানেলের জন্য ইন্ট্রো ভিডিও তৈরি করে দিয়েছেন। কাজের মান অসাধারণ। আমার চ্যানেলের দর্শক সংখ্যা বৃদ্ধি পেয়েছে। ধন্যবাদ মামুনুর ভাই।',
      service: 'ভিডিও এডিটিং',
      date: 'ফেব্রুয়ারি ২৮, ২০২৫',
      image: null,
    },
    {
      id: 7,
      name: 'সাদিয়া আহমেদ',
      position: 'গ্রাফিক ডিজাইনার',
      rating: 4,
      content:
        'আমার ব্যবসার জন্য একটি প্রপোজাল ডকুমেন্ট তৈরি করে দিয়েছেন। কাজের মান ভালো এবং সময়মত ডেলিভারি পেয়েছি। কিছু মাইনর ইস্যু ছিল কিন্তু দ্রুত সমাধান করে দিয়েছেন।',
      service: 'ডকুমেন্ট ডিজাইন',
      date: 'ফেব্রুয়ারি ১৫, ২০২৫',
      image: null,
    },
    {
      id: 8,
      name: 'রাফি খান',
      position: 'সফটওয়্যার ডেভেলপার',
      rating: 5,
      content:
        'আমার অ্যাপ আইডিয়া নিয়ে কনসালটেন্সি সার্ভিস নিয়েছিলাম। খুব ভালো পরামর্শ পেয়েছি এবং আমার অ্যাপ আইডিয়া আরও উন্নত হয়েছে। ধন্যবাদ মামুনুর ভাই।',
      service: 'আইডিয়া কনসালটেন্সি',
      date: 'জানুয়ারি ২৮, ২০২৫',
      image: null,
    },
  ];

  const [filter, setFilter] = useState('all');
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonials);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredTestimonials(testimonials);
    } else {
      setFilteredTestimonials(
        testimonials.filter((testimonial) => testimonial.service === filter)
      );
    }
  }, [filter]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
      />
    ));
  };

  return (
    <>
      {/* হেডার সেকশন */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ক্লায়েন্ট রিভিউ</h1>
            <p className="text-lg text-foreground/80 mb-8">
              আমার সার্ভিস নিয়ে ক্লায়েন্টদের মতামত দেখুন। আমি সর্বদা ক্লায়েন্টদের সন্তুষ্টি নিশ্চিত করার চেষ্টা করি।
            </p>
          </div>
        </div>
      </section>

      {/* টেস্টিমোনিয়াল সেকশন */}
      <section className="section bg-background">
        <div className="container">
          {/* ফিল্টার বাটন */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              সকল রিভিউ
            </button>
            <button
              onClick={() => setFilter('ডকুমেন্ট ডিজাইন')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'ডকুমেন্ট ডিজাইন'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              ডকুমেন্ট ডিজাইন
            </button>
            <button
              onClick={() => setFilter('ভিডিও এডিটিং')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'ভিডিও এডিটিং'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              ভিডিও এডিটিং
            </button>
            <button
              onClick={() => setFilter('ফর্ম/ডেটাবেইস ডিজাইন')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'ফর্ম/ডেটাবেইস ডিজাইন'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              ফর্ম/ডেটাবেইস ডিজাইন
            </button>
            <button
              onClick={() => setFilter('আইডিয়া কনসালটেন্সি')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'আইডিয়া কনসালটেন্সি'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              আইডিয়া কনসালটেন্সি
            </button>
          </div>

          {/* টেস্টিমোনিয়াল গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/70">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
                <p className="text-foreground/80 mb-4">{testimonial.content}</p>
                <div className="flex justify-between text-sm text-foreground/60">
                  <span>{testimonial.service}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Google Review লিঙ্ক */}
          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">
              আপনিও আমার সার্ভিস নিয়ে আপনার অভিজ্ঞতা শেয়ার করুন
            </p>
            <a
              href="https://g.page/review/mamunur-company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <Star size={18} className="mr-2 fill-primary-foreground" />
              <span>Google-এ রিভিউ দিন</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;

