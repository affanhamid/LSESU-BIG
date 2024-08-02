import { fetchTestimonials } from "../../Database/database";
import TestimonialShowcase from "@/Components/TestimonialShowcase";
import MentorShowcase from "@/Components/MentorShowcase";
import Navbar from "@/Components/Navbar";

const Mentorship = async () => {
  const testimonials = await fetchTestimonials();
  const mentors = [{}, {}, {}];
  return (
    <main>
      <Navbar />
      <header className="px-40 pt-40 flex flex-col items-center pb-20 bg-white">
        <h1 className="text-6xl font-bold mb-10 text-center">
          MENTORSHIP SCEHME
        </h1>
        <h2 className="text-3xl font-bold mb-4 text-center">
          BRIDGING THE GAP BETWEEN ACADEMIA AND CAREER
        </h2>
        <p className="mx-auto w-[50%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
          id quasi dolorem eum temporibus sequi! Quisquam, inventore! Iure,
          cupiditate magnam vel fugit mollitia repellat qui dolor libero
          veritatis sint fuga? Vero atque deleniti nobis voluptatem, tenetur
          amet eius aut omnis deserunt obcaecati. Itaque voluptas, quas at
          distinctio magni perferendis nisi aut laudantium tempore soluta hic
          quo deserunt voluptate officia numquam. Alias minima laboriosam
          doloribus magnam fugit distinctio laudantium tempore sequi soluta,
          voluptatum numquam voluptatem cupiditate mollitia natus laborum
          perspiciatis dicta, aspernatur dignissimos non assumenda atque saepe
          unde asperiores quis. Consequuntur?
        </p>
        <button className="mt-4 px-4 py-2 w-max rounded border-2 border-black mx-auto">
          Apply Now
        </button>
      </header>
      <section className="bg-background text-white pt-20 pb-10">
        <h1 className="text-6xl text-bold text-center">Testimonials</h1>
        <TestimonialShowcase testimonials={testimonials} />
      </section>
      <section className="bg-white pt-20 pb-10">
        <h1 className="text-6xl text-bold text-center mb-4">Mentors</h1>
        <p className="text-center">
          Our 40+ mentors/buddies are from diverse backgrounds and
          nationalities. They managed to break into the competitive field both
          from economics/ finance degrees and non-finance degrees - with
          experience and offers from 50+ distinguished firms.
        </p>
        <MentorShowcase mentors={mentors} />
      </section>
    </main>
  );
};

export default Mentorship;
