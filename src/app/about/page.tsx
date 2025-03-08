import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock, Globe } from "lucide-react";

export default function AboutPage() {
  // Default language setting - can be connected to user preferences or browser settings
  const isArabic = true;

  // Team members data
  const teamMembers = [
    {
      name: isArabic ? "أحمد محمد" : "Ahmed Mohammed",
      position: isArabic ? "المؤسس والرئيس التنفيذي" : "Founder & CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed",
    },
    {
      name: isArabic ? "سارة عبدالله" : "Sarah Abdullah",
      position: isArabic ? "مديرة العمليات" : "Operations Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      name: isArabic ? "محمد علي" : "Mohammed Ali",
      position: isArabic ? "مدير التسويق" : "Marketing Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohammed",
    },
    {
      name: isArabic ? "نورة خالد" : "Noura Khalid",
      position: isArabic ? "مديرة خدمة العملاء" : "Customer Service Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=noura",
    },
  ];

  return (
    <main className="min-h-screen bg-background" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header Component */}
      <Header isArabic={isArabic} />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? "حول سوق الخدمات" : "About ServiceMarket"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {isArabic
              ? "منصة رائدة تربط بين مقدمي الخدمات المحترفين والعملاء في مختلف المجالات"
              : "A leading platform connecting professional service providers with customers across various domains"}
          </p>
          <Button size="lg">
            {isArabic ? "تعرف على فريقنا" : "Meet Our Team"}
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {isArabic ? "قصتنا" : "Our Story"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {isArabic
                ? "تأسست منصة سوق الخدمات في عام 2020 بهدف سد الفجوة بين مقدمي الخدمات المحترفين والعملاء الباحثين عن خدمات عالية الجودة. بدأنا بفكرة بسيطة: إنشاء منصة سهلة الاستخدام تمكن العملاء من العثور على مقدمي خدمات موثوقين وتمكن المحترفين من توسيع نطاق أعمالهم."
                : "ServiceMarket was founded in 2020 with the goal of bridging the gap between professional service providers and customers seeking high-quality services. We started with a simple idea: create an easy-to-use platform that enables customers to find reliable service providers and empowers professionals to expand their business reach."}
            </p>
            <p className="text-muted-foreground mb-4">
              {isArabic
                ? "منذ ذلك الحين، نمت منصتنا لتضم آلاف مقدمي الخدمات في مختلف المجالات، من الخدمات المنزلية إلى الخدمات الرقمية والمهنية. نحن فخورون بأننا ساعدنا في إنشاء فرص عمل جديدة وتسهيل الوصول إلى خدمات عالية الجودة للعملاء في جميع أنحاء المنطقة."
                : "Since then, our platform has grown to include thousands of service providers across various fields, from home services to digital and professional services. We are proud to have helped create new job opportunities and facilitate access to high-quality services for customers throughout the region."}
            </p>
            <p className="text-muted-foreground">
              {isArabic
                ? "اليوم، نواصل الابتكار وتحسين منصتنا لتوفير تجربة سلسة وموثوقة لجميع مستخدمينا. مهمتنا هي أن نصبح المنصة الرائدة للخدمات في المنطقة، مع التركيز على الجودة والموثوقية والراحة."
                : "Today, we continue to innovate and improve our platform to provide a seamless and reliable experience for all our users. Our mission is to become the leading service platform in the region, with a focus on quality, reliability, and convenience."}
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Our team working together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isArabic ? "قيمنا" : "Our Values"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {isArabic ? "الجودة" : "Quality"}
              </h3>
              <p className="text-muted-foreground">
                {isArabic
                  ? "نلتزم بتقديم خدمات عالية الجودة من خلال اختيار مقدمي خدمات محترفين ومراقبة الجودة باستمرار"
                  : "We are committed to delivering high-quality services by selecting professional providers and continuously monitoring quality"}
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {isArabic ? "الثقة" : "Trust"}
              </h3>
              <p className="text-muted-foreground">
                {isArabic
                  ? "نبني الثقة من خلال الشفافية والتقييمات الصادقة والتواصل المفتوح بين العملاء ومقدمي الخدمات"
                  : "We build trust through transparency, honest reviews, and open communication between customers and service providers"}
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {isArabic ? "التميز" : "Excellence"}
              </h3>
              <p className="text-muted-foreground">
                {isArabic
                  ? "نسعى دائمًا للتميز في كل جانب من جوانب منصتنا، من تجربة المستخدم إلى دعم العملاء"
                  : "We constantly strive for excellence in every aspect of our platform, from user experience to customer support"}
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {isArabic ? "الابتكار" : "Innovation"}
              </h3>
              <p className="text-muted-foreground">
                {isArabic
                  ? "نؤمن بالتحسين المستمر ونستثمر في التكنولوجيا والأفكار الجديدة لتحسين تجربة مستخدمينا"
                  : "We believe in continuous improvement and invest in technology and new ideas to enhance our users' experience"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {isArabic ? "فريقنا" : "Our Team"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border text-center"
            >
              <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.position}</p>
              <div className="flex justify-center space-x-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isArabic ? "إحصائياتنا" : "Our Stats"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">10,000+</p>
              <p className="text-muted-foreground">
                {isArabic ? "مقدمي خدمات" : "Service Providers"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">50,000+</p>
              <p className="text-muted-foreground">
                {isArabic ? "عملاء راضين" : "Satisfied Customers"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">100,000+</p>
              <p className="text-muted-foreground">
                {isArabic ? "خدمات مكتملة" : "Completed Services"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">20+</p>
              <p className="text-muted-foreground">
                {isArabic ? "فئات الخدمات" : "Service Categories"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {isArabic
            ? "انضم إلى مجتمعنا المتنامي"
            : "Join Our Growing Community"}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {isArabic
            ? "سواء كنت تبحث عن خدمات عالية الجودة أو كنت مقدم خدمة يتطلع إلى توسيع نطاق عملك، فإن منصتنا هي المكان المثالي لك"
            : "Whether you're looking for high-quality services or you're a service provider looking to expand your business, our platform is the perfect place for you"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            {isArabic ? "استكشف الخدمات" : "Explore Services"}
          </Button>
          <Button size="lg" variant="outline">
            {isArabic ? "سجل كمقدم خدمة" : "Register as a Provider"}
          </Button>
        </div>
      </section>

      {/* Footer Component */}
      <Footer isArabic={isArabic} />
    </main>
  );
}
