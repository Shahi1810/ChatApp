import { Box } from "@chakra-ui/layout"; // Importing Box from Chakra UI
import { useState } from "react"; // Importing useState hook from React
import Chatbox from "../components/Chatbox"; // Importing Chatbox component
import MyChats from "../components/MyChats"; // Importing MyChats component
import SideDrawer from "../components/miscellaneous/SideDrawer"; // Importing SideDrawer component
import { ChatState } from "../Context/ChatProvider"; // Importing ChatState context from ChatProvider
import { Button } from "@chakra-ui/react"; // Importing Button from Chakra UI

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && (
        <>
          <SideDrawer />
          {/* TaskZen Button */}
          <Button
            as="a"
            href="https://taskzen-tm.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            size="md"
            m={2}
          >
            Go to TaskZen
          </Button>
        </>
      )}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
