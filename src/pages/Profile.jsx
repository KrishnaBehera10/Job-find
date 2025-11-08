import AddInfo from "./AddInfo";
import Userprofileupdatecard from "./Userprofileupdatecard";

function UploadAvatar() {
  return (
    <div className="w-full h-full flex gap-1 justify-between flex-col-reverse sm:flex-row-reverse overflow-auto">
      <AddInfo />
      <Userprofileupdatecard />
    </div>
  );
}

export default UploadAvatar;
