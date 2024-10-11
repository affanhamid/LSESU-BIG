import { useRef, ChangeEvent, KeyboardEvent } from "react";
interface OTPInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBackspace: (e: KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

interface OTPProps {
  testOtp: string[];
  setTestOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

const OTPInput: React.FC<OTPInputProps> = ({
  value,
  onChange,
  onBackspace,
  inputRef,
}) => {
  return (
    <input
      ref={inputRef}
      className="w-10 h-10 border border-black outline-none text-center"
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onBackspace}
      maxLength={1}
      onPaste={(e) => e.preventDefault()}
    />
  );
};

const OTP: React.FC<OTPProps> = ({ testOtp, setTestOtp }) => {
  const inputRefs = useRef<Array<React.RefObject<HTMLInputElement>>>(
    Array(8)
      .fill(null)
      .map(() => useRef(null))
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...testOtp];
      newOtp[index] = value;
      setTestOtp(newOtp);

      if (value && index < testOtp.length - 1) {
        inputRefs.current[index + 1].current?.focus();
      }
    }
  };

  const handleBackspace = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !testOtp[index] && index > 0) {
      inputRefs.current[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const pasteData = e.clipboardData.getData("text").split("");
    if (pasteData.length === testOtp.length) {
      const newOtp = [...testOtp];
      pasteData.forEach((char, index) => {
        if (/^[0-9]$/.test(char)) {
          newOtp[index] = char;
        }
      });
      setTestOtp(newOtp);
    }
  };

  return (
    <div className="flex gap-1 items-center" onPaste={handlePaste}>
      {testOtp.slice(0, 4).map((value, index) => (
        <OTPInput
          key={index}
          value={value}
          inputRef={inputRefs.current[index]}
          onChange={(e) => handleChange(e, index)}
          onBackspace={(e) => handleBackspace(e, index)}
        />
      ))}
      <span>-</span>
      {testOtp.slice(4, 8).map((value, index) => (
        <OTPInput
          key={index + 4}
          value={value}
          inputRef={inputRefs.current[index + 4]}
          onChange={(e) => handleChange(e, index + 4)}
          onBackspace={(e) => handleBackspace(e, index + 4)}
        />
      ))}
    </div>
  );
};

export default OTP;
