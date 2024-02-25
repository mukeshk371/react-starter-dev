import React from "react";
import CommonButton from "../CommonComponents/Button/CommonButton";
import VideoPlayer from "../CommonComponents/VideoPlayer/VideoPlayer";

const CommonPage = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h1>Common Page</h1>
      <CommonButton
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={false}
        loading={false}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Click Me
      </CommonButton>
      <CommonButton
        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
        disabled={true}
        loading={false}
      >
        Disabled
      </CommonButton>

      <div>
        <VideoPlayer videoUrl="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
      </div>
    </div>
  );
};

export default CommonPage;
