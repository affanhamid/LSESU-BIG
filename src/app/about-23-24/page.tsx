import Navbar from "@/Components/Navbar";
import { Member } from "@/app/about/Member";
import { Sector } from "@/app/about/Sector";
import YearDropdown from "@/Components/YearDropdown";

const Committee22_23 = () => {
  // Hard-coded Executive Committee members for 2022/23
  const execMembers = [
    {
      name: "Asif Islam",
      role: "President",
      linkedin: "https://www.linkedin.com/in/asifislam1/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQHiMvbwIbi12Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721480478613?e=1731542400&v=beta&t=iN3kKjisMhHgvr5jAXXb91qJoqkG-AsGbcELQpvM3ks",
    },
    {
      name: "Amaan Khan",
      role: "Vice President",
      linkedin: "https://www.linkedin.com/in/amaanlkhan/?originalSubdomain=uk",
      imageLink: "https://media.licdn.com/dms/image/v2/D5603AQHy5B9_VyrgXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719256507174?e=1730937600&v=beta&t=7gviqpFcQf-0KDPPFyUNn6syIBbeC_F5uiQQLSB3cWs",
    },
    {
      name: "Matthieu Farrel-Braga",
      role: "Secretary",
      linkedin: "https://www.linkedin.com/in/matthieu-f-195714190/",
      imageLink: "/images/committee-22-23/alex_johnson.jpg",
    },
    {
      name: "Husnaa Dada",
      role: "Treasurer",
      linkedin: "https://www.linkedin.com/in/husnaa-dada-49936a235/",
      imageLink: "https://media.licdn.com/dms/image/v2/C4E03AQF4cRnCOTSyDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661880586468?e=1730937600&v=beta&t=4Y1JwF9ImkXwWKjfeLeGavd0EdiGdLPtiSF0tZX4aw8",
    },
    {
      name: "Amandeep Nagra",
      role: "Chair",
      linkedin: "https://www.linkedin.com/in/amandeepnagra/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQEa5QRWHv9AOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712436545847?e=1731542400&v=beta&t=Qxyn6FQJdMRMlEJjgpfZCkdX4vRH35Z1B6BN4FSjyg0",
    },
    {
      name: "Daniyal Mirza",
      role: "Chair",
      linkedin: "https://www.linkedin.com/in/daniyal-mirza1/",
      imageLink: "/images/committee-22-23/daniyal_murza.jpg",
    },
    {
      name: "Sarah Baek",
      role: "Head of Mentorship",
      linkedin: "https://www.linkedin.com/in/sarah-sy-baek/",
      imageLink: "/images/committee-22-23/sarah_williams.jpg",
    },
    {
      name: "Ismail Abdi",
      role: "Head of Investments",
      linkedin: "https://www.linkedin.com/in/ismail1261/",
      imageLink: "/images/committee-22-23/david_clark.jpg",
    },
    {
      name: "Simona Vrantsalieva",
      role: "Head of External Relations",
      linkedin: "https://www.linkedin.com/in/simona-vrantsalieva-649506201/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQFJwsdUi7r5TA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722411937936?e=1731542400&v=beta&t=3Gxt-iAy55dVsmgwWxyDMUDAaLHMbeB9x_y7UlxhKqY",
    },
    {
      name: "Dean Ma",
      role: "Head of Corporate Relations",
      linkedin: "https://www.linkedin.com/in/dma6/?originalSubdomain=ca",
      imageLink: "/images/committee-22-23/david_clark.jpg",
    },
    {
      name: "Sabrina Daniel",
      role: "Head of Welfare",
      linkedin: "https://www.linkedin.com/in/sabrina-daniel-97243719a/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQHX2koG-nL8aw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721908410794?e=1731542400&v=beta&t=z80dJiA1X7qdVnM7l5vBWeTPjtKrarS4Hbt5ofZOfo0",
    },
  ];

  const heads = [
    {
      name: "Stephanie Zhou",
      role: "Banking",
      linkedin: "https://www.linkedin.com/in/stephaniezhou-/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQEQZMyVFyRIFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681047369829?e=1731542400&v=beta&t=5iUIOJdsMkTbOHivlP5dRTSJK7esd-gKWv8LWlBhm84",
    },
    {
      name: "Anna McFadzean",
      role: "Alternatives",
      linkedin: "https://www.linkedin.com/in/anna-mcfadzean-492aa11a3/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQEZRrDJ_IQeMg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725437021123?e=1731542400&v=beta&t=JbK8nJBBKIXpnhgpGIiJKKeqpkRSLrRKnYJTOsOMdBw",
    },
    {
      name: "Kofi Coleman",
      role: "Alternatives",
      linkedin: "https://www.linkedin.com/in/kofi-coleman/",
      imageLink: "",
    },
    {
      name: "Hunter Pang",
      role: "Markets",
      linkedin: "https://www.linkedin.com/in/hunter-pang-681621206/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQHT9LDpXGtAOg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678965818718?e=1731542400&v=beta&t=OwVGVTWtR80cEfgWpGKGgevAa24UJbp3AM1tObcesD8",
    },
    {
      name: "Bhavik Mohanlal",
      role: "Markets",
      linkedin: "https://www.linkedin.com/in/bhavik-mohanlal/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQE4ekTzGTSmxQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707743085407?e=1731542400&v=beta&t=BeQuXd0SK79oMhvpR_ZlaFaMIKGKSAd5ULQfGOUJ6v8",
    },
    {
      name: "Manav Sood",
      role: "Mentorship",
      linkedin: "https://www.linkedin.com/in/soodmanav890/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQGqfBPpCXe6Wg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693078116625?e=1731542400&v=beta&t=xGWS8Z48EZWCnUsfV6ccc02TECdoPPXIqedF9-XFcb4",
    },
    {
      name: "Maraleis Sinton",
      role: "Mentorship",
      linkedin: "https://www.linkedin.com/in/maraleis-sinton/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQH95c-8nmT04g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699293275506?e=1731542400&v=beta&t=whr299LIX48VIncp-zWi3fC71zz7CuaddQzEjfUQ_hA",
    },
    {
      name: "Anees Mumtaz",
      role: "Law",
      linkedin: "https://www.linkedin.com/in/anees-mumtaz-804310217/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQGE7iDrSArbCA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721435663704?e=1731542400&v=beta&t=sjatWDrAs7552wAV48kk3q9_9AxJxulaUY66hlmm3zY",
    },
    {
      name: "Yusuf Mahmood",
      role: "Law",
      linkedin: "https://www.linkedin.com/in/yusuf-mahmood-a3628b1a0/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQEYg19DlSqpGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721755945216?e=1731542400&v=beta&t=En3VscvimJvR7kQrKxHGGkBa-dh1T56tZS4xIYZHLXY",
    },
    {
      name: "Neha Talla",
      role: "Consulting",
      linkedin: "https://www.linkedin.com/in/neha-talla-7034495a/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQHYvDcIiG7z9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710773476635?e=1731542400&v=beta&t=7ob1FDSVT903sgmQ39iKlID5qQ6-G3FBZJQGDixvsyY",
    },
    {
      name: "Nandini Agarwal",
      role: "Consulting",
      linkedin: "https://www.linkedin.com/in/nandini-agarwal-121263209/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQHhu7Lmb72kBQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721603348790?e=1731542400&v=beta&t=fPpTGlP6k5nrWI_xblgWZNanSi7zW_G4TPVhtI-Wfl4",
    },
    {
      name: "Hashim Arshad",
      role: "Entrepreneurship",
      linkedin: "https://www.linkedin.com/in/hashim-arshad-249410236/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQFTj1E1bXxE8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1664631450215?e=1731542400&v=beta&t=tGMiTDvDOc0GtJhI5qS8jlr1bUIfnDVUHP-WPZ5QR0Y",
    },
    {
      name: "Colin Qu",
      role: "Entrepreneurship",
      linkedin: "https://www.linkedin.com/in/colinqu04/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQHojEuVxPCoYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701129285083?e=1731542400&v=beta&t=nxxT4RGB0zVlvR8CxaM2zw1Kkf7UCCPkCSCAUJuJ5cw",
    },
    {
      name: "Anna Jin",
      role: "Socials",
      linkedin: "https://www.linkedin.com/in/annajin1/",
      imageLink: "",
    },
    {
      name: "Lili Jing",
      role: "Socials",
      linkedin: "https://www.linkedin.com/in/lili-jing/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQHQyBAF7-Dq_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693857338833?e=1731542400&v=beta&t=xBXQypgs10J_ywFFdD57MeVzw8FvZqLr5g2lTl8D-PY",
    },
    {
      name: "Felicia Qian",
      role: "Marketing",
      linkedin: "https://www.linkedin.com/in/felicialenaqian/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQHdSXYNG-Q75Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718330728245?e=1731542400&v=beta&t=lpIk_73XMG8m3WqS7O5OPVUXBHPsxdkaF4xPNcPBeR8",
    },
    {
      name: "Sudha J",
      role: "Marketing",
      linkedin: "https://www.linkedin.com/in/sudhajjayanand/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4D03AQFshEX-vNjbhg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709979508687?e=1731542400&v=beta&t=wRsG-R6-NJTkialRXxN5Yybrhc1NH_djVp0o-rAtUWs",
    },
    {
      name: "Riccardo V. Perego",
      role: "Strategy",
      linkedin: "https://www.linkedin.com/in/riccardovittorioperego/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQEodoT08mQOvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703013997448?e=1731542400&v=beta&t=DywLKvmQElDVpxvgy1Apb3p6hiF9Am7lRazCmNdmKnI",
    },
    {
      name: "Michele Silvestri",
      role: "Strategy",
      linkedin: "https://www.linkedin.com/in/michelesilvestri-lse/",
      imageLink: "https://media.licdn.com/dms/image/v2/D4E03AQGMoaoDoidVLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692188896209?e=1731542400&v=beta&t=8lMuTgWke2hahbVgK6V1z5djdJaYZeZX5eUMSxkZA24",
    }
  ];

  const roles = [
    "Banking",
    "Alternatives",
    "Markets",
    "Mentorship",
    "Strategy",
    "Entrepreneurship",
    "Socials",
    "Marketing",
    "Consulting",
    "Law",
  ];

  return (
    <main className="bg-white">
      <Navbar />
      <header className="relative pb-5">
        <img
          src="../2.jpg"
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt="Committee 2022/23 Background"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          2023/2024 Committee
        </h1>
      </header>

      {/* Executive Committee Section */}
      <section className="pt-10">
      <div className="max-w-7xl mx-auto relative flex justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-center my-10">
          Executive Committee 23/24
        </h2>
        <div className="absolute right-0">
            <YearDropdown />
        </div>
      </div>
      
        <hr className="border-gray-300 my-4" />
        <div className="flex-col justify-center flex-wrap gap-10">
          {execMembers.length > 0 && (
            <>
              {/* First row: 3 members */}
              <div className="flex flex-col break:flex-row md:gap-20 lg:gap-28 xl:gap-32 justify-center">
                {execMembers.slice(0, 3).map((member, idx) => (
                  <Member
                    key={idx}
                    imageLink={member.imageLink}
                    name={member.name}
                    role={member.role}
                    linkedin={member.linkedin}
                  />
                ))}
              </div>

              {/* Second row: 3 members */}
              <div className="flex flex-col break:flex-row md:gap-20 lg:gap-28 xl:gap-32 justify-center">
                {execMembers.slice(3, 6).map((member, idx) => (
                  <Member
                    key={idx}
                    imageLink={member.imageLink}
                    name={member.name}
                    role={member.role}
                    linkedin={member.linkedin}
                  />
                ))}
              </div>

              {/* Third row: 3 members */}
              <div className="flex flex-col break:flex-row md:gap-20 lg:gap-28 xl:gap-32 justify-center">
                {execMembers.slice(6, 9).map((member, idx) => (
                  <Member
                    key={idx}
                    imageLink={member.imageLink}
                    name={member.name}
                    role={member.role}
                    linkedin={member.linkedin}
                  />
                ))}
              </div>

              {/* Fourth row: 2 members */}
              <div className="flex flex-col break:flex-row md:gap-20 lg:gap-28 xl:gap-32 justify-center">
                {execMembers.slice(9, 11).map((member, idx) => (
                  <Member
                    key={idx}
                    imageLink={member.imageLink}
                    name={member.name}
                    role={member.role}
                    linkedin={member.linkedin}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Division Heads Section */}
{/* Division Heads Section */}
<section>
  <h2 className="text-3xl lg:text-4xl font-bold text-center mt-20 mb-10">
    Division Heads
  </h2>
  <hr className="border-gray-300 my-4" />
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-5 pb-20 justify-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 w-screen gap-2 px-10 xl:px-20">
      {roles.map((role, idx) => (
        <Sector
          key={idx}
          sectorMembers={heads.filter((head) => head.role === role)}  // Filters members based on their role
          title={role}  // Passes the role as the title
        />
      ))}
    </div>
  </div>
</section>



    </main>
  );
};

export default Committee22_23;

