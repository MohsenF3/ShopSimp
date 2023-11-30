import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <>
      <div className="col-span-2 max-md:order-2">
        <div className="mb-5 flex items-center justify-between">
          <Skeleton width={250} />
          <div className="flex gap-2">
            <Skeleton width={30} />
            <Skeleton width={30} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {[...Array(12)].map((_, index) => (
            <Skeleton key={index} height={150} />
          ))}
        </div>
      </div>
      <div className="md:p-2 max-md:order-1">
        <Skeleton height={40} className="mb-5" />
        <Skeleton height={200} className="mb-10" />
        <Skeleton height={300} />
      </div>
    </>
  );
};

export default Loading;
