import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Quizzes } from "@/components/sections/quizzes";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Newsletter } from "@/components/sections/newsletter";
import { Blogs } from "@/components/sections/blogs";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Quizzes />
      <Testimonials />
      <About />
      <Newsletter />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
}
