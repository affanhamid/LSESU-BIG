import { fetchGallery, fetchUpcomingEvents } from "../../Database/database";
import Navbar from "@/Components/Navbar";
import Gallery from "@/Components/Gallery";
import Link from "next/link";

const Event = ({ event }: { event: any }) => {
  return (
    <div className="flex items-center border border-background rounded-lg overflow-hidden">
      <div>
        {/* <img src={event.imageLink} alt="" /> */}
        <div className="w-[250px] aspect-square bg-gray-600"></div>
      </div>
      <div className="pb-5 pl-10 pr-5">
        <div className="text-2xl">{event.title}</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          quia odit vitae quas dolorem nesciunt nobis, vero fugit quod maxime
          facilis qui molestiae, voluptatem enim ex perferendis in. Ad non eos
          error ea minima sapiente vitae reiciendis ratione explicabo ullam?
        </div>
        <button className="bg-background px-3 py-2 text-white rounded-lg mt-5">
          Learn more
        </button>
      </div>
    </div>
  );
};

const Events = async () => {
  const upcomingEvents = await fetchUpcomingEvents();
  const events = await fetchGallery();
  return (
    <main className="bg-gray-50 pt-32">
      <Navbar />
      <section className="bg-gray-50 pt-20 pb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
          Upcoming Events
        </h1>
        <div className="flex flex-col items-center px-4">
          {upcomingEvents.map((upcomingEvent, idx) => (
            <div
              key={idx}
              className="border-2 bg-white border-gray-200 rounded-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto md:h-32 text-black flex flex-col md:flex-row items-center mb-4 shadow-md"
            >
              <div className="h-16 md:h-full md:border-r-2 flex items-center justify-center px-4 border-b-2 md:border-b-0 border-gray-200">
                {upcomingEvent.date}
              </div>
              <div className="flex-1 pl-5 py-2 md:py-0">
                <div className="flex flex-col gap-0">
                  <span className="text-xl md:text-2xl font-bold mb-0 text-gray-900">
                    {upcomingEvent.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {upcomingEvent.venue}
                  </span>
                </div>
                <div className="text-gray-700 mt-2">
                  {upcomingEvent.description}
                </div>
              </div>
              <div className="py-2 md:py-0 pr-5">
                <button className="bg-background hover:bg-background/90 px-3 py-2 text-white rounded">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 pt-20 pb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
          Past Events
        </h1>
        <div className="flex justify-center text-xl mb-10 px-96">
          <span className="bg-background text-white w-full text-center py-2">
            2023-2024
          </span>
          <span className="w-full text-center py-2">2022-2023</span>
        </div>
        <div className="flex flex-col items-center px-96">
          <Event
            event={{
              title: "This is a test event",
              description: "",
              postLink: "dasfas",
            }}
          />
        </div>
      </section>
      <Gallery events={events} />
    </main>
  );
};

export default Events;
