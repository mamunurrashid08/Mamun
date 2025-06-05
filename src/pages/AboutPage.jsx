import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, BookOpen, Users } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    // পেজ লোড হওয়ার সময় স্ক্রল পজিশন রিসেট করা
    window.scrollTo(0, 0);
    
    // পেজ টাইটেল আপডেট করা
    document.title = 'আমার সম্পর্কে - মামুনুর রহমান';
  }, []);

  const skills = [
    'ডকুমেন্ট ডিজাইন এবং ফরম্যাটিং',
    'ভিডিও এডিটিং এবং পোস্ট-প্রোডাকশন',
    'ডেটাবেইস ডিজাইন এবং ম্যানেজমেন্ট',
    'মোবাইল এবং ওয়েব অ্যাপ্লিকেশন কনসালটেন্সি',
    'গ্রাফিক ডিজাইন এবং ভিজ্যুয়াল কমিউনিকেশন',
    'প্রজেক্ট ম্যানেজমেন্ট এবং কোয়ালিটি অ্যাসুরেন্স',
    'কনটেন্ট ক্রিয়েশন এবং মার্কেটিং',
    'ডিজিটাল মার্কেটিং এবং SEO',
  ];

  const experiences = [
    {
      year: '২০২০ - বর্তমান',
      title: 'ফ্রিল্যান্স ডিজিটাল সার্ভিস প্রদানকারী',
      company: 'স্বাধীন',
      description: 'বিভিন্ন ক্লায়েন্টদের জন্য ডিজিটাল সার্ভিস প্রদান করছি। ডকুমেন্ট ডিজাইন, ভিডিও এডিটিং, ডেটাবেইস ডিজাইন এবং আইডিয়া কনসালটেন্সি সার্ভিস প্রদান করে আসছি।',
    },
    {
      year: '২০১৮ - ২০২০',
      title: 'সিনিয়র কনটেন্ট স্পেশালিস্ট',
      company: 'ডিজিটাল মিডিয়া লিমিটেড',
      description: 'একটি প্রতিষ্ঠিত কোম্পানিতে কনটেন্ট ডিজাইন এবং ডেভেলপমেন্ট করেছি। বিভিন্ন ক্লায়েন্টদের জন্য কনটেন্ট স্ট্র্যাটেজি তৈরি এবং বাস্তবায়ন করেছি।',
    },
    {
      year: '২০১৬ - ২০১৮',
      title: 'জুনিয়র ডিজাইনার',
      company: 'ক্রিয়েটিভ সলিউশন',
      description: 'ডিজিটাল মার্কেটিং এজেন্সিতে ডিজাইন এবং ডেভেলপমেন্ট শিখেছি। বিভিন্ন প্রজেক্টে কাজ করে অভিজ্ঞতা অর্জন করেছি।',
    },
  ];

  const education = [
    {
      year: '২০১৪ - ২০১৮',
      degree: 'বিএসসি ইন কম্পিউটার সাইন্স এন্ড ইঞ্জিনিয়ারিং',
      institution: 'ঢাকা বিশ্ববিদ্যালয়',
    },
    {
      year: '২০১২ - ২০১৪',
      degree: 'এইচএসসি',
      institution: 'ঢাকা কলেজ',
    },
  ];

  const certifications = [
    {
      name: 'গ্রাফিক ডিজাইন প্রফেশনাল',
      issuer: 'Adobe',
      year: '২০১৯',
    },
    {
      name: 'ভিডিও এডিটিং মাস্টারক্লাস',
      issuer: 'Udemy',
      year: '২০২০',
    },
    {
      name: 'ডেটাবেইস ডিজাইন এন্ড ডেভেলপমেন্ট',
      issuer: 'Coursera',
      year: '২০২১',
    },
  ];

  return (
    <>
      {/* হেডার সেকশন */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">আমার সম্পর্কে</h1>
            <p className="text-lg text-foreground/80 mb-8">
              আমি একজন অভিজ্ঞ ফ্রিল্যান্সার এবং ডিজিটাল সার্ভিস প্রদানকারী। গত ৫+ বছর ধরে আমি বিভিন্ন ক্লায়েন্টদের জন্য ডিজিটাল সার্ভিস প্রদান করে আসছি।
            </p>
          </div>
        </div>
      </section>

      {/* প্রোফাইল সেকশন */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* প্রোফাইল ইমেজ */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                {/* এখানে প্রোফাইল ইমেজ যোগ করা হবে */}
                <svg
                  className="w-1/2 h-1/2 text-primary/30"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              
              {/* ডেকোরেটিভ এলিমেন্ট */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
            </div>
            
            {/* বিবরণ */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">মামুনুর রহমান</h2>
              <p className="text-xl text-primary font-medium">ফ্রিল্যান্সার এবং ডিজিটাল সার্ভিস প্রদানকারী</p>
              
              <p className="text-foreground/80">
                আমি একজন অভিজ্ঞ ফ্রিল্যান্সার এবং ডিজিটাল সার্ভিস প্রদানকারী। গত ৫+ বছর ধরে আমি বিভিন্ন ক্লায়েন্টদের জন্য ডকুমেন্ট ডিজাইন, ভিডিও এডিটিং, ডেটাবেইস ডিজাইন এবং আইডিয়া কনসালটেন্সি সার্ভিস প্রদান করে আসছি।
              </p>
              
              <p className="text-foreground/80">
                আমার লক্ষ্য হল ক্লায়েন্টদের সর্বোচ্চ মানের সার্ভিস প্রদান করা এবং তাদের প্রয়োজন অনুযায়ী সমাধান দেওয়া। আমি সর্বদা নতুন প্রযুক্তি এবং টুলস শিখতে আগ্রহী এবং আমার দক্ষতা উন্নত করতে সচেষ্ট।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  যোগাযোগ করুন
                </Link>
                <Link to="/services" className="btn-secondary">
                  সার্ভিস দেখুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* দক্ষতা সেকশন */}
      <section className="section bg-primary/5">
        <div className="container">
          <h2 className="section-title">আমার দক্ষতা</h2>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
            আমি বিভিন্ন ধরনের ডিজিটাল সার্ভিস প্রদান করতে পারি। নিচে আমার প্রধান দক্ষতাগুলি দেওয়া হল।
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ul className="space-y-3 col-span-2">
              {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-2" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3 col-span-2">
              {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle size={18} className="text-primary mr-2" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* অভিজ্ঞতা সেকশন */}
      <section className="section bg-background">
        <div className="container">
          <h2 className="section-title">কর্ম অভিজ্ঞতা</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-12 last:mb-0 relative">
                  <div className="absolute -left-[41px] bg-background p-1">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-background"></div>
                    </div>
                  </div>
                  <span className="text-sm text-primary font-medium">{exp.year}</span>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-foreground/70 mb-2">{exp.company}</p>
                  <p className="text-foreground/80">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* শিক্ষা এবং সার্টিফিকেশন */}
      <section className="section bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* শিক্ষা */}
            <div>
              <div className="flex items-center mb-8">
                <BookOpen size={24} className="text-primary mr-3" />
                <h2 className="text-2xl font-bold">শিক্ষা</h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="card">
                    <span className="text-sm text-primary font-medium">{edu.year}</span>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-foreground/70">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* সার্টিফিকেশন */}
            <div>
              <div className="flex items-center mb-8">
                <Award size={24} className="text-primary mr-3" />
                <h2 className="text-2xl font-bold">সার্টিফিকেশন</h2>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="card">
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <p className="text-foreground/70">{cert.issuer}</p>
                    <span className="text-sm text-primary font-medium">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default AboutPage;

