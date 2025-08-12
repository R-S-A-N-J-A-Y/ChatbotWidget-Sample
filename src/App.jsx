import { useState } from "react";
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

const chatData = [
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
  {
    id: 7,
    time: "2025-08-12T10:15:25Z",
    sender: "user",
    msg: "Sure! Why did the programmer quit his job? Because he didn’t get arrays. Sure! Why did the programmer quit his job? Because he didn’t get arrays.Sure! Why did the programmer quit his job? Because he didn’t get arrays.",
  },
];

const ChatContainer = () => {
  return (
    <div className="bg-gray-100 px-7 py-10 w-100 h-100 rounded-2xl overflow-y-scroll">
      <div className="flex flex-col justify-bottom gap-3 w-full">
        {chatData.map((chat) => (
          <Chat chat={chat} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end gap-2">
      {open && <ChatContainer />}
      <button
        className="p-2 h-15 w-15 flex items-center justify-center cursor-pointer bg-blue-700 rounded-xl outline-none"
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
