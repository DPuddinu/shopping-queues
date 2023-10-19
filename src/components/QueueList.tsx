import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Queue from "./Queue";
import { useEffect } from "react";

const CHECKOUT_MACHINES = 5;
const columns = new Array(CHECKOUT_MACHINES).fill(0);

const QueueList = () => {
  
  const queues = useSelector((state: RootState) => state.queues);
  useEffect(() => {
    console.log(queues)
  }, [queues]);
  
  return <div className="flex">{columns.map((_, i) => <Queue key={i} data={queues[i]}></Queue>)}</div>;
}

export default QueueList