import Person from "../../Components/Person";

const AboutUs = () => {
    const teamMembers = [
        { name: "John Doe", role: "President", email: "john.doe@lse.ac.uk", linkedin: "https://www.linkedin.com/in/johndoe" },
        { name: "Jane Smith", role: "Vice President", email: "jane.smith@lse.ac.uk", linkedin: "https://www.linkedin.com/in/janesmith" },
        { name: "Alex Johnson", role: "Treasurer", email: "alex.johnson@lse.ac.uk", linkedin: "https://www.linkedin.com/in/alexjohnson" },
        { name: "Emily Brown", role: "Secretary", email: "emily.brown@lse.ac.uk", linkedin: "https://www.linkedin.com/in/emilybrown" },
        { name: "Michael Davis", role: "Marketing Director", email: "michael.davis@lse.ac.uk", linkedin: "https://www.linkedin.com/in/michaeldavis" },
        { name: "Sarah Taylor", role: "Events Director", email: "sarah.taylor@lse.ac.uk", linkedin: "https://www.linkedin.com/in/sarahtaylor" },
        { name: "Kevin White", role: "Finance Director", email: "kevin.white@lse.ac.uk", linkedin: "https://www.linkedin.com/in/kevinwhite" },
        { name: "Jessica Lee", role: "HR Director", email: "jessica.lee@lse.ac.uk", linkedin: "https://www.linkedin.com/in/jessicalee" },
        { name: "David Hall", role: "Operations Director", email: "david.hall@lse.ac.uk", linkedin: "https://www.linkedin.com/in/davidhall" },
        { name: "Lisa Martin", role: "Communications Director", email: "lisa.martin@lse.ac.uk", linkedin: "https://www.linkedin.com/in/lisamartin" }
    ];

    const heads = [
        { name: "Rachel Patel", role: "Head of Marketing", email: "rachel.patel@lse.ac.uk", linkedin: "https://www.linkedin.com/in/rachelpatel" },
        { name: "Brian Thompson", role: "Head of Finance", email: "brian.thompson@lse.ac.uk", linkedin: "https://www.linkedin.com/in/brianthompson" },
        { name: "Samantha Johnson", role: "Head of Events", email: "samantha.johnson@lse.ac.uk", linkedin: "https://www.linkedin.com/in/samanthajohnson" },
        { name: "Matthew Lee", role: "Head of Operations", email: "matthew.lee@lse.ac.uk", linkedin: "https://www.linkedin.com/in/matthewlee" },
        { name: "Amanda Brown", role: "Head of HR", email: "amanda.brown@lse.ac.uk", linkedin: "https://www.linkedin.com/in/amandabrown" }
    ];
    return (
        <main className="text-center">
            <header className="py-10 px-96">
                <h2 className="text-5xl font-bold mb-4">Our Comittee</h2>
                <div>
                    <p className="mb-4">The LSESU Business & Investment Group is Europe's premier finance and business society, committed to professionalism, innovation, and creativity. Our mission is to maximize the potential of our members and develop leaders for the 21st century.</p>
                </div>
            </header>
            <section>
                <div className="bg-black text-white flex h-[80vh] py-20 px-5">
                    <div className="flex-[0_0_45%] flex items-center pl-40">
                        <h2 className="text-3xl font-bold">The Executive Team</h2>
                    </div>
                    <div className="flex-[0_0_55%] h-full overflow-y-scroll">
                        {teamMembers.map((member, idx) => <Person name={member.name} role={member.role} image='' key={idx} email={member.email} linkedin={member.linkedin} reverse={false} />)}
                    </div>
                </div>
            </section>
            <section>
                <div className="flex h-[80vh] py-20 px-5">
                    <div className="flex-[0_0_55%] h-full overflow-y-scroll">
                        {heads.map((member, idx) => <Person name={member.name} role={member.role} image='' key={idx} email={member.email} linkedin={member.linkedin} reverse={true} />)}
                    </div>
                    <div className="flex-[0_0_45%] flex items-center pl-40">
                        <h2 className="text-3xl font-bold">The Head of Divisions</h2>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;