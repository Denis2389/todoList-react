import { BsCheck } from "react-icons/bs"

const Check = ({isCompleted}) => {
  return (
    <div>
      {isCompleted && (
        <div>
          <BsCheck size={24} className="text-gray-900" />
        </div>
      )}
    </div>
  );
}

export default Check