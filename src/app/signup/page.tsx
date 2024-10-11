"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { Navbar } from "@/Components";
import OTP from "./OTP";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <p className="text-lg">Redirecting to Microsoft login...</p>
        <ul className="list-disc ml-4 mt-4">
          <li>Select your LSE account.</li>
          <li>
            The prompt will say that the{" "}
            <i>
              <b>user does not exist</b>
            </i>{" "}
            in the organization.
          </li>
          <li>
            Click 'Create user' and follow the steps to register your LSE
            account with LSESU BIG.
          </li>
        </ul>

        <button
          onClick={onClose}
          className="mt-4 bg-background text-white px-4 py-2 rounded hover:bg-background/70"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const SignUp = () => {
  const { data: session } = useSession();
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [testOtp, setTestOtp] = useState<string[]>(Array(8).fill(""));
  const [otp, setOtp] = useState<string>("");

  const generateOtp = () => {
    const generatedOtp = Math.floor(Math.random() * 100000000).toString();
    setOtp(generatedOtp);
    return generatedOtp;
  };

  const handleSendOtp = async () => {
    const generatedOtp = generateOtp();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, otp: generatedOtp }),
      });

      const data = await response.json();
      if (response.ok) {
      } else {
        console.error("Error sending OTP:", data.error);
        alert("Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    signIn("azure-ad", { prompt: "login", callbackUrl: "/" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const lseEmailRegex = /^[a-zA-Z0-9._%+-]+@lse.ac.uk$/;

    if (lseEmailRegex.test(userEmail)) {
      setError("");
      setOtpSent(true);
      handleSendOtp();
    } else {
      setError("Email is not a LSE email");
    }
  };

  const checkOTP = (
    oldOTP: string,
    newOTP: string[],
    setError: React.Dispatch<React.SetStateAction<string>>,
    setSuccess: React.Dispatch<React.SetStateAction<string>>,
    openModal: () => void
  ) => {
    if (oldOTP === newOTP.join("")) {
      setSuccess("OTP is correct");
      setError("");
      openModal();
    } else {
      setError("OTP is incorrect");
      setSuccess("");
    }
  };

  return (
    <main className="w-screen h-screen flex flex-col md:flex-row justify-between overflow-hidden bg-background md:bg-[url('/login.svg')] bg-no-repeat bg-center bg-cover">
      <section className="hidden md:flex pb-20 md:h-full w-full md:w-[40vw] justify-center items-center bg-background">
        <div className="w-[200px] mm:w-[300px] h-max">
          <Image src={logo} alt="LSE BIG" />
        </div>
      </section>
      <div className="block md:hidden">
        <Navbar />
      </div>
      <section className="h-full w-full md:w-[50vw] py-40 flex items-center justify-center bg-white md:bg-transparent">
        <div className="md:px-52">
          <h1 className="text-3xl">Welcome to LSE BIG</h1>
          <h2 className="whitespace-nowrap text-lg md:text-3xl text-center mb-4">
            {session
              ? `Signed in as ${session?.user?.email}`
              : "Sign up to access to BIG resources"}
          </h2>
          <div className="flex flex-col text-center mb-5">
            {!otpSent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="py-2 px-4 border border-black rounded-lg"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <button
                  type="submit"
                  className="bg-background text-white px-4 py-2 rounded hover:bg-background/90O"
                >
                  Send OTP
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center gap-5 mb-5">
                <p className="text-xl flex flex-col">
                  <span>OTP Sent to {userEmail}</span>
                  <small>(Please check your junk mails too)</small>
                </p>
                <OTP testOtp={testOtp} setTestOtp={setTestOtp} />
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      checkOTP(otp, testOtp, setError, setSuccess, openModal)
                    }
                    className="px-2 py-1 bg-background text-white rounded hover:bg-background/90"
                  >
                    Submit OTP
                  </button>
                  <button
                    onClick={() => setOtpSent(false)}
                    className="px-2 py-1 bg-background text-white rounded hover:bg-background/90"
                  >
                    Edit Email
                  </button>
                </div>
              </div>
            )}
            <Link href="/login" className="text-background underline">
              Already have an account with BIG?
            </Link>
            <Link href="/" className="text-background underline">
              Return to home page
            </Link>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default SignUp;
