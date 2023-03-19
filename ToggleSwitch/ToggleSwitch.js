import { useEffect } from "react";
import "./ToggleSwitch.scss"
export const ToggleSwitch = ({ isEducation, handleEducation }) => {
    
    return <div className="service"><div className="switch-button">
        <input className="switch-button-checkbox" checked={!isEducation} onChange={() => handleEducation(!isEducation)} type="checkbox"></input>
        <label className="switch-button-label"><span className="switch-button-label-span">Education</span></label>
    </div></div>

}