import { QueueState } from "../features/queueSlice";
import Queue from "./Queue";

const CHECKOUT_MACHINES = 5;
const columns = new Array(CHECKOUT_MACHINES).fill(0);

interface props {
  data: QueueState[];
}
const QueueList = ({data}: props) => {
  return <div className="flex gap-sm">{columns.map((_, i) => <Queue key={i} number={i+1} data={data[i]}></Queue>)}</div>;
}

export default QueueList