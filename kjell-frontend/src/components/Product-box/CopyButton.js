import { useContext } from "react/cjs/react.development";
import { NotificationContext } from "../NotificationProvider";
import { v4 } from "uuid";

const CopyButton = ({ articleList }) => {
  const dispacth = useContext(NotificationContext);

  function CopyArticleString() {
    // String for to copy
    var test = "";
    // Sort the list and create the string
    articleList.sort();
    articleList.forEach((element) => {
      test = test + element + "|";
    });
    // Remove the extra character in the end
    test = test.slice(0, -1);
    // Copy and alert
    navigator.clipboard.writeText(test);
    // Send notification
    dispacth({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        type: "SUCCESS",
        message: "Artikelsträng kopierad!",
      },
    });
  }
  return (
    <button className="copyButton" onClick={CopyArticleString}>
      Kopiera artikelsträng
    </button>
  );
};
export default CopyButton;
