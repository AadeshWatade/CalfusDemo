import React, { useState } from "react";
import Footer from "./Footer";
import downloadFile from "../assets/Oracle_Procurement_UAT_Test_Cases.xlsx";
import loader from "../assets/Snake.gif";
import loaderImage from "../assets/a0h5sxufx6.gif";
import bgImage from "../assets/v915-wit-007-k.jpg"; // Assuming you have a background image
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [fileReady, setFileReady] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [fileVerified, setFileVerified] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [showBg, setShowBg] = useState(true); // For smooth background image fade-in/out

  const handleGenerate = () => {
    if (!uploadedFile) {
      alert("Please upload a file before generating.");
      return;
    }
    setLoaderMessage("Just a moment while our smart agent works its magic… Your results will be ready shortly!");
    setShowLoader(true);
    setIsGenerating(true);
    setFileReady(false);
    setTimeout(() => {
      setIsGenerating(false);
      setFileReady(true);
      setShowLoader(false);
      setLoaderMessage("");
      toast.success("All set! Your file is ready for download. Go ahead and grab it!");
    }, 3000);
  };

  const handleVerify = () => {
    if (!uploadedFile) {
      alert("Please upload a file before verifying.");
      return;
    }
    setLoaderMessage("Reviewing your file to ensure everything’s in place. This will only take a moment!");
    setShowLoader(true);
    setIsVerifying(true);
    setFileVerified(false);
    setTimeout(() => {
      setIsVerifying(false);
      setFileVerified(true);
      setShowLoader(false);
      setLoaderMessage("");
      toast.success("Document Verified Successfully");
    }, 3000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      setFileVerified(false);
      setFileReady(false);
      console.log("Uploaded file:", file.name);
    }
  };

  let uploadTitle = "Click to upload or drag and drop";

  // Smoothly show/hide content on dropdown change
  React.useEffect(() => {
    if (selectedOption) {
      setTimeout(() => setShowContent(true), 10); // allow for transition
    } else {
      setShowContent(false);
    }
  }, [selectedOption]);

  // For smooth background image fade-in/out
  React.useEffect(() => {
    setShowBg(false);
    const timeout = setTimeout(() => setShowBg(true), 20); // triggers fade effect
    return () => clearTimeout(timeout);
  }, [bgImage]);

  return (
    <div className="min-h-full bg-gradient-to-br bg-transparent text-white bg-fixed overflow-clip relative">
      {/* Background image with fadeout at the bottom and smooth dissolve */}
      <div className="w-screen h-full absolute -z-10 top-0 left-0 pointer-events-none">
        <img
          className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${showBg ? 'opacity-30' : 'opacity-0'}`}
          src={bgImage}
          alt=""
          style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
        />
      </div>
      <h1 className="text-5xl text-center font-extrabold py-10 tracking-tight bg-gradient-to-r from-[#40c1ac] to-[#232946] bg-clip-text text-transparent drop-shadow-lg">Explora</h1>
      <div className="flex justify-center mb-8">
        <select
          className="text-black text-lg rounded-lg px-4 py-2 border-2 border-[#40c1ac] focus:outline-none focus:ring-2 focus:ring-[#40c1ac] shadow-md"
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}
        >
          <option className="rounded-md" value="" disabled>Choose your Agent</option>
          <option className="rounded-md" value="brd">BRD Creation</option>
          <option className="rounded-md" value="training">Training Content Creation</option>
        </select>
      </div>
      {/* Smooth transition for content */}
      <div
        className={`transition-all duration-500 ease-in-out ${showContent ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'} w-full px-4`}
        style={{ minHeight: showContent ? undefined : 0 }}
      >
        {selectedOption && (
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-8 gap-8 h-96 rounded-3xl shadow-2xl backdrop-blur-md border bg-white border-[#232946]">
            {/* Upload Box */}
            <div className="flex flex-col items-center justify-center">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-64 h-64 border-2 border-dashed hover:bg-gray-100 rounded-2xl cursor-pointer bg-white hover:from-[#40c1ac] hover:to-[#232946] border-[#40c1ac] transition-all duration-300 shadow-lg group"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-12 h-12 mb-4 text-[#40c1ac]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-base text-[#40c1ac]">
                    {uploadTitle}
                  </p>
                  {uploadedFile && (
                    <p className="text-sm text-center text-green-400 mt-2 font-medium">
                      Uploaded: {uploadedFile.name}
                    </p>
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="flex flex-row items-center justify-center col-span-6 px-24 gap-12">
              <img className="h-20 rounded-full border-[#40c1ac] bg-white/10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8BAQE9PT1AQECYmJjV1dX8/PwEBARdXV1YWFj5+flbW1tUVFRISEj09PSamprm5uYNDQ3c3NwvLy+mpqZNTU3Dw8OSkpIxMTHs7OwnJycWFhYcHBzOzs6/v7+3t7eHh4d5eXlvb2+hjBobAAADRUlEQVR4nO3c3XLaMBBAYS0QhAMpCSShSfr//g9ZyVCCg+3MVGu87Jzvthf1GW0AGeEQAAAAAAAAAAAAAAAAAAAAAAAAAOD/PX+Zj30JA9vdjX0FQ5vJyvkizkRWt64bU6HceS+MMrkd+zIGlNdQZJpfUZ2u5L4wJY59IYPZF0bZuh3UwxqKbL2u4rFQvr6MfS3DOBZGeX1x+WLzvoYiby4TTwvl7d5h4mlhlG8OExtrmCLv3b3zfygU2TgvjPJQJzqqPFvDehXnvgvlZuyLUtVWKN/TlLpZxdbClBjcDGp7YZ049qUp6SiUZzeL2FUoP0LwsWXsLEyJPlaxuzAPqoe/xp5C+ekhsK8w5sTrt04hfauoP6ib7eSSpq+9hUMM6k3f/zeE2FMYH+TRQeEn/5gTVd82Ll74qUflQbVWmAZ17bswm6kmWiyUneZHVIOF6dV2p7iKBguzX3r3bowW1omeC2NOVGKzMPutdO/GbGGsEz0XJn8U+mwX6iSaLlRJNF0YZeG8MFkUv/UbL4z5nJ/rwn2i68LkaT4vibyCQrkrGtQrKIwyeXFdmLaLVckZuCsolKroG2L7hbIs+w7cemH6WFO4wTBeGGXp/DONVKF0l2i6MNaBhSwXxvwiU7zNt1yYX2TK72PYLVQZUcuFOdD3vbbi90HjhVHvR3w2C1NgmCt9/2SzUOMOlOXC9D7o+/tDSSOq+BWpxcJlvjC1r0jNFabtku7vhM0V6o6ovcL8NhF0D9TYKsw7+qs/9dWvmqufhd5sJ9NL6jmbGA8jeuXW3euXv0sb5IxwPgp4Mb0naFU2vKObdRRGrQ3v6LrOedcb3rEvTkXnSfali4P6oaMwlt/ZtqO9UKpbJyvYNaWVlxENbYWuRjS0Fqbtkp8VbJ3SytEPSMP5r9VVjj2ZcvZ7fF8jGs6ntFL+hcz4Gk/+cPNZ9FTz2SY+dhNNjSlduhvRcPoUJZcjGhrPiXKzm2h6n9KFxxENxyfS1Ue5fPr3zL2VzxENxyn1OqJh/3TP+qOaW7PDMRKnCxj2U7rwtV36IBV6HtGQ7+qXnfi1b/fkekRDfib72FcwPNcLWPNfCAAAAAAAAAAAAAAAAAAAAAAAgKH9BUG5Mlo+6vAJAAAAAElFTkSuQmCC" alt="" />
              {/* Verify Button */}
              <button
                onClick={handleVerify}
                disabled={isVerifying || !uploadedFile}
                className={`text-black w-40 h-20 rounded-md font-medium my-auto mx-auto px-6 py-3 transition-all bg-[#40c1ac] hover:bg-black hover:text-[#40c1ac] shadow-md focus:outline-none focus:ring-2 focus:ring-[#40c1ac]
                ${isVerifying || !uploadedFile ? "bg-gray-300 cursor-not-allowed" : ""}`}
              >
                {isVerifying
                  ? "Verifying..."
                  : fileVerified
                  ? "Verified"
                  : "Verify"}
              </button>
              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !uploadedFile || !fileVerified}
                className={`text-black w-40 h-20 rounded-md font-medium my-auto mx-auto px-6 py-3 transition-all bg-[#40c1ac] hover:bg-black hover:text-[#40c1ac] shadow-md focus:outline-none focus:ring-2 focus:ring-[#40c1ac]
                ${(isGenerating || !uploadedFile || !fileVerified) ? "bg-gray-300 cursor-not-allowed" : ""}`}
              >
                {isGenerating ? "Generating File..." : "Generate"}
              </button>
              <img className="h-20 rounded-full border-[#40c1ac] bg-white/10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8BAQE9PT1AQECYmJjV1dX8/PwEBARdXV1YWFj5+flbW1tUVFRISEj09PSamprm5uYNDQ3c3NwvLy+mpqZNTU3Dw8OSkpIxMTHs7OwnJycWFhYcHBzOzs6/v7+3t7eHh4d5eXlvb2+hjBobAAADRUlEQVR4nO3c3XLaMBBAYS0QhAMpCSShSfr//g9ZyVCCg+3MVGu87Jzvthf1GW0AGeEQAAAAAAAAAAAAAAAAAAAAAAAAAOD/PX+Zj30JA9vdjX0FQ5vJyvkizkRWt64bU6HceS+MMrkd+zIGlNdQZJpfUZ2u5L4wJY59IYPZF0bZuh3UwxqKbL2u4rFQvr6MfS3DOBZGeX1x+WLzvoYiby4TTwvl7d5h4mlhlG8OExtrmCLv3b3zfygU2TgvjPJQJzqqPFvDehXnvgvlZuyLUtVWKN/TlLpZxdbClBjcDGp7YZ049qUp6SiUZzeL2FUoP0LwsWXsLEyJPlaxuzAPqoe/xp5C+ekhsK8w5sTrt04hfauoP6ib7eSSpq+9hUMM6k3f/zeE2FMYH+TRQeEn/5gTVd82Ll74qUflQbVWmAZ17bswm6kmWiyUneZHVIOF6dV2p7iKBguzX3r3bowW1omeC2NOVGKzMPutdO/GbGGsEz0XJn8U+mwX6iSaLlRJNF0YZeG8MFkUv/UbL4z5nJ/rwn2i68LkaT4vibyCQrkrGtQrKIwyeXFdmLaLVckZuCsolKroG2L7hbIs+w7cemH6WFO4wTBeGGXp/DONVKF0l2i6MNaBhSwXxvwiU7zNt1yYX2TK72PYLVQZUcuFOdD3vbbi90HjhVHvR3w2C1NgmCt9/2SzUOMOlOXC9D7o+/tDSSOq+BWpxcJlvjC1r0jNFabtku7vhM0V6o6ovcL8NhF0D9TYKsw7+qs/9dWvmqufhd5sJ9NL6jmbGA8jeuXW3euXv0sb5IxwPgp4Mb0naFU2vKObdRRGrQ3v6LrOedcb3rEvTkXnSfali4P6oaMwlt/ZtqO9UKpbJyvYNaWVlxENbYWuRjS0Fqbtkp8VbJ3SytEPSMP5r9VVjj2ZcvZ7fF8jGs6ntFL+hcz4Gk/+cPNZ9FTz2SY+dhNNjSlduhvRcPoUJZcjGhrPiXKzm2h6n9KFxxENxyfS1Ue5fPr3zL2VzxENxyn1OqJh/3TP+qOaW7PDMRKnCxj2U7rwtV36IBV6HtGQ7+qXnfi1b/fkekRDfib72FcwPNcLWPNfCAAAAAAAAAAAAAAAAAAAAAAAgKH9BUG5Mlo+6vAJAAAAAElFTkSuQmCC" alt="" />
            </div>
            {/* Download Button */}
            <div className="flex flex-col items-center justify-center">
              <a
                href={fileReady ? downloadFile : "#"}
                download="Oracle_Procurement_UAT_Test_Cases.csv"
                className={`text-black text-center pt-7 w-40 h-20 rounded-md font-medium my-auto mx-auto px-6 py-3 transition-all bg-[#40c1ac] hover:bg-black hover:text-[#40c1ac] shadow-md focus:outline-none focus:ring-2 focus:ring-[#40c1ac]
                  ${fileReady ? "" : "bg-gray-300 cursor-not-allowed pointer-events-none"}`}
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
      {showLoader && loaderMessage && (
        <div className="flex flex-row items-center justify-center w-full col-span-7 absolute -mt-16">
          <img src={loaderImage} alt="Loading..." className="h-10 w-10 mr-4" />
          <span className="text-black text-lg font-medium bg-white/80 rounded-lg px-4 py-2 ">{loaderMessage}</span>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Navbar;
