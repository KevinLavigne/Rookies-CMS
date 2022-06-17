import React from "react";
import ExportContext from "../contexts/Context";

function GetStarted({ label }) {
  const { handleForm } = React.useContext(ExportContext.Context);
  return (
    <button
      className="p-2 bg-button-green-E10 w-1/3 rounded-full font-semibold mt-4 hover:bg-green-300"
      type="submit"
      onClick={() => handleForm()}
    >
      {label}
    </button>
  );
}

export default GetStarted;
