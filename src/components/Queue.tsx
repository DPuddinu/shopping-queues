import { QueueState } from "../features/queueSlice";

interface props {
  data: QueueState
}
const Queue = ({ data }: props) => {
  return (
    <div className="">
      {data ? (
        <div className="">
          {data.customers.map((customer) => (
            <>{customer.id}</>
          ))}
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default Queue;
