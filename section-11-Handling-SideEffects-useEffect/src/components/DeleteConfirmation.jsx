import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("Timer set");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    //clean-up function that will be executed right before useEffect runs again or right before the component dismounts
    // this will clear the timer.
    return () => {
      console.log("Cleaning timer");
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar />
    </div>
  );
}

DeleteConfirmation.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
