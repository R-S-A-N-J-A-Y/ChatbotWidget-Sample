import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { TbMessageChatbot } from "react-icons/tb";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end gap-2">
      {open && (
        <div className="bg-gray-200 p-5 w-100 h-100 rounded-2xl">
          <h3>Hello! I’m your assistant</h3>
          <p>Ask me anything.</p>
        </div>
      )}
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
