import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
import Updatecard from "./Updatecard";

function Userprofileupdatecard() {
  const [avatarUrl, setAvatarUrl] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };
  return (
    <div className="sm:w-1/2 h-full bg-white text-center p-5 rounded-4xl">
      <ButtonBase
        component="label"
        role={undefined}
        tabIndex={-1} // prevent label from tab focus
        aria-label="Avatar image"
        sx={{
          borderRadius: "40px",
          "&:has(:focus-visible)": {
            outline: "2px solid",
            outlineOffset: "2px",
          },
        }}
      >
        {/* Avatar preview */}
        <Avatar
          alt="Upload new avatar"
          src={avatarUrl}
          sx={{ width: 80, height: 80 }}
        />

        {/* Hidden input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{
            border: 0,
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            whiteSpace: "nowrap",
            width: "1px",
          }}
        />
      </ButtonBase>
      <Updatecard />
    </div>
  );
}

export default Userprofileupdatecard;
