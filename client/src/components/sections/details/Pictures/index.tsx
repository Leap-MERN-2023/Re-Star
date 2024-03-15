import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Pictures = () => {
  const pictureUrls = [
    {
      url: "https://images.unsplash.com/photo-1587758398792-15cf9a7d0b98?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aVhSZDhjbXBVREl8fGVufDB8fHx8fA%3D%3D",
      alt: "Picture 1",
    },
    {
      url: "https://images.unsplash.com/pfD",
    },
    {
      url: "https://images.unsplash.com/phoR8ZW58MHx8MHx8fDA%3D",
      alt: "Picture 3",
    },
    {
      url: "https://plus.unsplash.com/pcmFudHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Picture 4",
    },
    {
      url: "https://example.com/picture5.jpg",
      alt: "Picture 5",
    },
  ];
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-screen-2xl rounded-lg border  "
    >
      <ResizablePanel defaultSize={60}>
        <div className="flex h-[400px] items-center justify-center p-2 ">
          <img src={pictureUrls[0].url} alt="pic" />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={30}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-2">
              <img src={pictureUrls[0].url} alt="pic" />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-2">
              <img src={pictureUrls[0].url} alt="pic" />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={10}>
        <div className="flex h-[200px] items-center justify-center p-2">
          <img src={pictureUrls[0].url} alt="pic" />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Pictures;
