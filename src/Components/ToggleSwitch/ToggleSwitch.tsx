import "./ToggleSwitch.scss";
export const ToggleSwitch = ({ isVegitable, handleVegitables }: any) => {
  return (
    <div className="service">
      <div className="switch-button">
        <input
          className="switch-button-checkbox"
          checked={isVegitable}
          onChange={() => handleVegitables(!isVegitable)}
          type="checkbox"
        ></input>
        <label className="switch-button-label">
          <span className="switch-button-label-span">Fruits</span>
        </label>
      </div>
    </div>
  );
};
