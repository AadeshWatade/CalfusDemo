import React, { useState } from "react";
import Footer from "./Footer";
import downloadFile from "../assets/Generated_Dummy_Data.csv";
import loader from "../assets/Snake.gif"; // Assuming you have a loader gif

const Navbar = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [fileReady, setFileReady] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleGenerate = () => {
    if (!uploadedFile) {
      alert("Please upload a file before generating.");
      return;
    }

    setIsGenerating(true);
    setFileReady(false);

    // Simulated file generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setFileReady(true);
    }, 3000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      console.log("Uploaded file:", file.name);
    }
  };

  let uploadTitle = "Click to upload or drag and drop";
  return (
    <div>
      <h1 className="text-4xl text-center font-bold bg-white">TransforMate</h1>
      <div className="w-full px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 h-96">
          {/* Upload Box */}
          <div className="flex flex-col items-center justify-center">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5
                    5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5
                    5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">{uploadTitle}</span>
                </p>
                {uploadedFile && (
                  <p className="text-sm text-center text-green-600 mt-2">
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
          <div className="flex flex-row items-center justify-center col-span-3 px-24">
            <img className="h-20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8BAQE9PT1AQECYmJjV1dX8/PwEBARdXV1YWFj5+flbW1tUVFRISEj09PSamprm5uYNDQ3c3NwvLy+mpqZNTU3Dw8OSkpIxMTHs7OwnJycWFhYcHBzOzs6/v7+3t7eHh4d5eXlvb2+hjBobAAADRUlEQVR4nO3c3XLaMBBAYS0QhAMpCSShSfr//g9ZyVCCg+3MVGu87Jzvthf1GW0AGeEQAAAAAAAAAAAAAAAAAAAAAAAAAOD/PX+Zj30JA9vdjX0FQ5vJyvkizkRWt64bU6HceS+MMrkd+zIGlNdQZJpfUZ2u5L4wJY59IYPZF0bZuh3UwxqKbL2u4rFQvr6MfS3DOBZGeX1x+WLzvoYiby4TTwvl7d5h4mlhlG8OExtrmCLv3b3zfygU2TgvjPJQJzqqPFvDehXnvgvlZuyLUtVWKN/TlLpZxdbClBjcDGp7YZ049qUp6SiUZzeL2FUoP0LwsWXsLEyJPlaxuzAPqoe/xp5C+ekhsK8w5sTrt04hfauoP6ib7eSSpq+9hUMM6k3f/zeE2FMYH+TRQeEn/5gTVd82Ll74qUflQbVWmAZ17bswm6kmWiyUneZHVIOF6dV2p7iKBguzX3r3bowW1omeC2NOVGKzMPutdO/GbGGsEz0XJn8U+mwX6iSaLlRJNF0YZeG8MFkUv/UbL4z5nJ/rwn2i68LkaT4vibyCQrkrGtQrKIwyeXFdmLaLVckZuCsolKroG2L7hbIs+w7cemH6WFO4wTBeGGXp/DONVKF0l2i6MNaBhSwXxvwiU7zNt1yYX2TK72PYLVQZUcuFOdD3vbbi90HjhVHvR3w2C1NgmCt9/2SzUOMOlOXC9D7o+/tDSSOq+BWpxcJlvjC1r0jNFabtku7vhM0V6o6ovcL8NhF0D9TYKsw7+qs/9dWvmqufhd5sJ9NL6jmbGA8jeuXW3euXv0sb5IxwPgp4Mb0naFU2vKObdRRGrQ3v6LrOedcb3rEvTkXnSfali4P6oaMwlt/ZtqO9UKpbJyvYNaWVlxENbYWuRjS0Fqbtkp8VbJ3SytEPSMP5r9VVjj2ZcvZ7fF8jGs6ntFL+hcz4Gk/+cPNZ9FTz2SY+dhNNjSlduhvRcPoUJZcjGhrPiXKzm2h6n9KFxxENxyfS1Ue5fPr3zL2VzxENxyn1OqJh/3TP+qOaW7PDMRKnCxj2U7rwtV36IBV6HtGQ7+qXnfi1b/fkekRDfib72FcwPNcLWPNfCAAAAAAAAAAAAAAAAAAAAAAAgKH9BUG5Mlo+6vAJAAAAAElFTkSuQmCC" alt="" />
            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`text-black w-40 h-20 rounded-md font-medium my-auto mx-auto px-6 py-3 transition-all bg-[#40c1ac] hover:bg-black hover:text-[#40c1ac] shadow-md focus:outline-none focus:ring-2 focus:ring-[#40c1ac]
              ${
                isGenerating ? "bg-gray-400 cursor-not-allowed" : "bg-[#40c1ac]"
              }`}
            >
              {isGenerating ? "Generating File..." : "Generate"}
              {/* {isGenerating ? <img src={loader} alt="Loading..." /> : "Generate"} */}
            </button>
            <img className="h-20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8BAQE9PT1AQECYmJjV1dX8/PwEBARdXV1YWFj5+flbW1tUVFRISEj09PSamprm5uYNDQ3c3NwvLy+mpqZNTU3Dw8OSkpIxMTHs7OwnJycWFhYcHBzOzs6/v7+3t7eHh4d5eXlvb2+hjBobAAADRUlEQVR4nO3c3XLaMBBAYS0QhAMpCSShSfr//g9ZyVCCg+3MVGu87Jzvthf1GW0AGeEQAAAAAAAAAAAAAAAAAAAAAAAAAOD/PX+Zj30JA9vdjX0FQ5vJyvkizkRWt64bU6HceS+MMrkd+zIGlNdQZJpfUZ2u5L4wJY59IYPZF0bZuh3UwxqKbL2u4rFQvr6MfS3DOBZGeX1x+WLzvoYiby4TTwvl7d5h4mlhlG8OExtrmCLv3b3zfygU2TgvjPJQJzqqPFvDehXnvgvlZuyLUtVWKN/TlLpZxdbClBjcDGp7YZ049qUp6SiUZzeL2FUoP0LwsWXsLEyJPlaxuzAPqoe/xp5C+ekhsK8w5sTrt04hfauoP6ib7eSSpq+9hUMM6k3f/zeE2FMYH+TRQeEn/5gTVd82Ll74qUflQbVWmAZ17bswm6kmWiyUneZHVIOF6dV2p7iKBguzX3r3bowW1omeC2NOVGKzMPutdO/GbGGsEz0XJn8U+mwX6iSaLlRJNF0YZeG8MFkUv/UbL4z5nJ/rwn2i68LkaT4vibyCQrkrGtQrKIwyeXFdmLaLVckZuCsolKroG2L7hbIs+w7cemH6WFO4wTBeGGXp/DONVKF0l2i6MNaBhSwXxvwiU7zNt1yYX2TK72PYLVQZUcuFOdD3vbbi90HjhVHvR3w2C1NgmCt9/2SzUOMOlOXC9D7o+/tDSSOq+BWpxcJlvjC1r0jNFabtku7vhM0V6o6ovcL8NhF0D9TYKsw7+qs/9dWvmqufhd5sJ9NL6jmbGA8jeuXW3euXv0sb5IxwPgp4Mb0naFU2vKObdRRGrQ3v6LrOedcb3rEvTkXnSfali4P6oaMwlt/ZtqO9UKpbJyvYNaWVlxENbYWuRjS0Fqbtkp8VbJ3SytEPSMP5r9VVjj2ZcvZ7fF8jGs6ntFL+hcz4Gk/+cPNZ9FTz2SY+dhNNjSlduhvRcPoUJZcjGhrPiXKzm2h6n9KFxxENxyfS1Ue5fPr3zL2VzxENxyn1OqJh/3TP+qOaW7PDMRKnCxj2U7rwtV36IBV6HtGQ7+qXnfi1b/fkekRDfib72FcwPNcLWPNfCAAAAAAAAAAAAAAAAAAAAAAAgKH9BUG5Mlo+6vAJAAAAAElFTkSuQmCC" alt="" />
          </div>
          {/* Download Button */}
          <a
            href={fileReady ? downloadFile : "#"}
            download="Generated_Dummy_Data.csv"
            className={`text-black w-40 h-20 rounded-md font-medium my-auto mx-auto px-6 py-3 text-center pt-7
              ${
                fileReady
                  ? "bg-[#40c1ac]"
                  : "bg-gray-300 cursor-not-allowed pointer-events-none"
              }`}
          >
            Download
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Navbar;
