const CopyButton = ({ articleList }) => {
    /**
     * Funtion for copying the selected articles
     */
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
    alert("Copied");
  }
  return <button className="copyButton" onClick={CopyArticleString}>Kopiera artikelsträng</button>;
};
export default CopyButton;
