import check_box from "./select_box.png";
import selected_check_box from "./select_box_checked.png";

const Checkbox = (props) => {
  /**
   * Function for changing the checked value for the box
   * @param {boolean} isSelected The boolean that should be switched
   */
  function createSelection(selection) {
    if (selection) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <button onClick={() => props.onClick(createSelection(props.isSelected))}>
      {props.isSelected && <img alt="unchecked-box" src={selected_check_box} />}
      {!props.isSelected && <img alt="checked-box" src={check_box} />}
    </button>
  );
};
export default Checkbox;
