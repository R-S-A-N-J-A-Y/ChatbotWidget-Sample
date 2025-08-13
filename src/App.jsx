import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { TbMessageChatbot } from "react-icons/tb";

const Chat = ({ chat }) => {
  return (
    <div
      key={chat.id}
      className={`flex ${
        chat.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex flex-col ${
          chat.sender === "user" ? "items-end" : "items-start"
        } gap-1`}
      >
        <div className=" bg-gray-200 p-3 rounded-lg min-w-[120px] max-w-[285px]">
          <h3>{chat.msg}</h3>
        </div>
        <p className="p-0 m-0 ms-2 text-xs text-gray-500">
          {new Date(chat.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

const SampleChatData = [
  {
    id: 1,
    time: "2025-08-12T10:15:00Z",
    sender: "user",
    msg: "Hi there!",
  },
  {
    id: 2,
    time: "2025-08-12T10:15:05Z",
    sender: "bot",
    msg: "Hello! I’m your assistant. How can I help you today?",
  },
  {
    id: 3,
    time: "2025-08-12T10:15:20Z",
    sender: "user",
    msg: "Can you tell me a joke?",
  },
  {
    id: 4,
    time: "2025-08-12T10:15:25Z",
    sender: "bot",
    msg: "Sure! Why did the programmer quit his job? Because he didn’t get arrays.",
  },
  {
    id: 5,
    time: "2025-08-12T10:15:40Z",
    sender: "user",
    msg: "Haha, nice one!",
  },
  {
    id: 6,
    time: "2025-08-12T10:15:45Z",
    sender: "bot",
    msg: "Glad you liked it! 😊",
  },
];

const ChatContainer = () => {
  const isDark = window.ChatbotConfig?.isDark ?? false;

  const [chatData, setChatData] = useState(SampleChatData);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);
  let currChat = "";

  const handleInput = (e) => {
    const el = textareaRef.current;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
    currChat = e.target.value;
  };

  const OnClick = () => {
    setChatData([
      ...chatData,
      {
        msg: currChat,
        id: chatData.length + 1,
        sender: "user",
        time: new Date(),
      },
    ]);
    currChat = "";
    textareaRef.current.value = "";
    textareaRef.current.style.height = "40px";
  };

  const HandleKeyDown = (e) => {
    if (e.code === "Enter" && !e.shiftKey) {
      e.preventDefault();
      OnClick();
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);

  return (
    <div
      className={`${
        isDark ? "bg-gray-500" : "bg-gray-50"
      } w-100 h-120 rounded-2xl overflow-y-scroll`}
    >
      <div className="sticky top-0 bg-blue-500 w-full px-2 py-3">
        <p className="text-center font-semibold text-white text-2xl">
          Myanatomy Chatbot
        </p>
      </div>
      <div className="px-7 py-5 flex flex-col gap-3 w-full">
        {chatData.map((chat) => (
          <Chat key={chat.id} chat={chat} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="sticky bottom-0 flex gap-3 bg-gray-100 px-5 py-3 border-t">
        <textarea
          ref={textareaRef}
          onInput={handleInput}
          onKeyDown={HandleKeyDown}
          className="resize-none rounded-md min-h-[40px] max-h-[80px] w-full outline-none"
          placeholder="We are here to help you..."
        />
        <button
          className="bg-blue-700 rounded-full w-12 h-10 flex items-center justify-center cursor-pointer"
          onClick={OnClick}
        >
          <FaArrowUp color="white" size={19} />
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      setIsDark(e.detail.isDark);
    };
    window.addEventListener("chatbot-theme-change", handler);
    return () => window.removeEventListener("chatbot-theme-change", handler);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end gap-2">
      {open && <ChatContainer />}
      <button
        className={`p-2 h-15 w-15 flex items-center justify-center cursor-pointer ${
          isDark ? "bg-amber-300" : "bg-blue-700"
        } rounded-xl outline-none`}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <RxCross1 color="white" size={25} />
        ) : (
          <TbMessageChatbot color="white" size={35} />
        )}
      </button>
    </div>
  );
};

export default App;
