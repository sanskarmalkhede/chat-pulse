import React, { useEffect, useCallback, useState } from "react";
import { useSocket } from "../context/SocketProvider";

function Room() {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  useEffect(() => {
    socket.on(`user-joined`, handleUserJoined);
    return () => {
      socket.off(`user-joined`, handleUserJoined);
    };
  }, [socket, handleUserJoined]);

  return (
    <div>
      <h2>Room Page</h2>
      <h4>{remoteSocketId ? "Connected :)" : "No one is connected :("}</h4>
      {
        remoteSocketId && <button>Start Call</button>
      }
    </div>
  );
}

export default Room;
