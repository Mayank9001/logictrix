import React, { useState } from "react";

const OptInManagement = () => {
  const [message, setMessage] = useState("");
  const [optInEnabled, setOptInEnabled] = useState(false);

  const toggleOptIn = () => {
    setOptInEnabled(!optInEnabled);
  };

  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
        {/* Left Card - Opt-In Response Preview */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Opt-in Response Preview</h2>
            <div
              onClick={toggleOptIn}
              className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                optInEnabled ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                  optInEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white shadow-md rounded-lg p-4 relative min-h-[150px]">
                <div className="absolute -top-4 -left-4 bg-green-500 rounded-full p-2">
                  <img
                    src="/whatsapp-icon.png"
                    alt="WhatsApp"
                    className="w-6 h-6"
                  />
                </div>
                <div className="text-sm text-gray-800 break-words whitespace-pre-line">
                  {message ||
                    "Hi {{1}}, please find details in attached pdf as discussed over call and click on demo link to explore demo.\nId : demo password : 1289\n\nThank You {{2}}"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Message Body Editor */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col">
          <p className="text-gray-700 font-medium mb-2">
            Message Body <span className="text-red-500">*</span>
          </p>

          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 min-h-[150px] pr-16"
              placeholder="Enter your message here"
              maxLength={4096}
            ></textarea>

            {/* Editor Icons */}
            <div className="absolute bottom-2 left-3 flex gap-2">
              <button className="text-gray-500 hover:text-black">
                <b>B</b>
              </button>
              <button className="italic text-gray-500 hover:text-black">
                I
              </button>
              <button className="underline text-gray-500 hover:text-black">
                U
              </button>
              <button className="text-gray-500 hover:text-black">😊</button>
            </div>
          </div>

          <div className="text-right text-sm text-gray-400 mt-1">
            {message.length}/4096
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptInManagement;
