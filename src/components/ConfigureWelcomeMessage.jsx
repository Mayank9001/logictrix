import { useState } from "react";
import whatsapp from "../assets/whatsapp.png";
export default function ConfigureWelcomeMessage() {
  const [message, setMessage] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-4xl rounded-2xl p-6 md:p-10">
        <h2 className="text-[#1C73E8] text-2xl font-semibold mb-6">
          CONFIGURE WELCOME MESSAGE
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="mb-4">
              <div className="flex gap-4 flex-col">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="template" />
                  Pre-approved template message
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="template" defaultChecked />
                  Regular message
                </label>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 font-medium mb-2">Type</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="type" defaultChecked /> Text
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="type" /> Image
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="type" /> Video
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="type" /> Document
                </label>
              </div>
            </div>

            <div>
              <p className="text-gray-700 font-medium mb-2">
                Message Body <span className="text-red-500">*</span>
              </p>

              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 font-inter rounded-lg p-4 min-h-[150px] pr-4 pb-10 resize-none"
                  placeholder="Enter your message here"
                  maxLength={4096}
                ></textarea>

                {/* Icons */}
                <div className="absolute bottom-2 left-4 flex gap-3 text-gray-500">
                  <button
                    type="button"
                    className="hover:text-black font-bold cursor-pointer"
                  >
                    B
                  </button>
                  <button
                    type="button"
                    className="italic font-comic hover:text-black cursor-pointer"
                  >
                    I
                  </button>
                  <button
                    type="button"
                    className="underline hover:text-black cursor-pointer"
                  >
                    U
                  </button>
                  <button
                    type="button"
                    className="text-lg hover:text-black cursor-pointer"
                  >
                    😊
                  </button>
                </div>
              </div>

              <div className="text-right text-sm text-gray-400 mt-1">
                {message.length}/4096
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-xs">
              <img
                className="absolute -top-4 -left-4 rounded-full z-10"
                src={whatsapp} 
              ></img>
              <div className="bg-white shadow-md rounded-lg p-4 min-h-[120px] break-words overflow-hidden">
                <div className="text-sm text-gray-800 whitespace-pre-line break-words">
                  {message
                    ? message
                    : "Hi {{1}}, please find details in attached pdf as discussed over call and click on demo link to explore demo.\nId : demo password : 1289\n\nThank You {{2}}"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 font-medium hover:bg-gray-100 cursor-pointer">
            Cancel
          </button>
          <button className="px-6 py-2 rounded-lg bg-[#1C73E8] text-white font-medium hover:bg-blue-700 cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
