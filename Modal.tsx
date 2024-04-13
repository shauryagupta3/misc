"use client";
import { faStar, faThumbsDown, faThumbsUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
faStar;

export default function Modal() {
  function closeModal() {
    let modal = document.getElementById("modal");
    modal?.classList.add("invisible");
  }
  const [safetyR, setSafeR] = useState(0);
  const [commR, setCommR] = useState(0);
  const [reccomend, setRecco] = useState(true);
  return (
    <div
      id="modal"
      className="flex flex-col justify-between bg-white absolute text-black w-4/5 max-w-lg z-50 p-4 max-h-[600px] h-4/5 rounded-2xl"
    >
      <div>
        <button className="text-black text-start" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </button>
        <p className="font-bold text-3xl">Leave a review</p>
      </div>
      <div>
        <p className="font-semibold text-2xl">Safety</p>
        <p className=" text-md">aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <div className="flex justify-start">
          {[...Array(5)].map((star, i) => {
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={i + 1}
                  onClick={() => setSafeR(i + 1)}
                  className="hidden"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2x"
                  className={`cursor-pointer ${
                    safetyR >= i + 1 ? "text-yellow-500" : "text-gray-400"
                  } px-2`}
                />
              </label>
            );
          })}
        </div>
      </div>
      <div>
        <p className="font-semibold text-2xl">Communication</p>
        <p className=" text-md">aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <div className="flex justify-start">
          {[...Array(5)].map((star, i) => {
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={i + 1}
                  onClick={() => setCommR(i + 1)}
                  className="hidden"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2x"
                  className={`cursor-pointer ${
                    commR >= i + 1 ? "text-yellow-500" : "text-gray-400"
                  } px-2`}
                />
              </label>
            );
          })}
        </div>
      </div>
      <div>
        <p className="font-semibold text-2xl">Would you reccomend traust ?</p>
        <p className="text-md">aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <label>
          <input
            type="radio"
            name="thumbs"
            id=""
            onClick={() => setRecco(true)}
            className="hidden"
          />
          <FontAwesomeIcon size="3x" icon={faThumbsUp} className={` px-4 cursor-pointer ${reccomend==true ? "text-teal-500" : "text-gray-500"}`} />
        </label>
        <label>
          <input
            type="radio"
            name="thumbs"
            id=""
            onClick={() => setRecco(false)}
            className="hidden"
          />
          <FontAwesomeIcon size="3x" icon={faThumbsDown} className={`cursor-pointer ${reccomend==false ? "text-red-800" : "text-gray-500"}`} />
        </label>
      </div>
    </div>
  );
}
