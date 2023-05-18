import { useDispatch, useSelector } from "react-redux";
import { handleMessage } from "../store/message/messageReducer";

const Message = () => {
  const message = useSelector((state) => state.message);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(message);
  console.log(todos);
    return ( message ? 
    <div className="message">
      <div className="message_text">
        Чтобы удалить задачи, нажмите на любую задачу и удерживайте.
      </div>
      <div onClick={() => dispatch(handleMessage())} className="message_close">
        &times;
      </div>
    </div>
  : null);
};

export default Message;
