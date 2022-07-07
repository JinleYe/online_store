import React from "react";
import "../styles/CheckBox.css";

export default function CheckBox({filteredByCategory, clearProductChecks, checkedLaptop, checkedKeyboard,checkedGamingChair, checkedGamingMouse, checkedGamingConsole, checkedGamingHeadset, checkedGamingController}) {
   

    return (
      <div className="checkbox">
        <h4 className="checkbox-title">Categories</h4>
        <div className="category-selection">
          <p><input
          type="checkbox"
          id="1"
          name="category"
          value="Laptop"
          checked={checkedLaptop}
          onChange={() => filteredByCategory("laptop")}
          /> Laptop </p>
          
          
          <p>
          <input
          type="checkbox"
          id="2"
          name="category"
          value="Keyboard"
          checked={checkedKeyboard}
          onChange={() => filteredByCategory("gamingkeyboard")}
          /> Keyboard </p>
          
<p>
          <input
          type="checkbox"
          id="3"
          name="category"
          value="Gaming Chair"
          checked={checkedGamingChair}
          onChange={() => filteredByCategory("gamingchair")}
          /> Gaming Chair </p>
          
<p>
          <input
          type="checkbox"
          id="4"
          name="category"
          value="Gaming Mouse"
          checked={checkedGamingMouse}
          onChange={() => filteredByCategory("gamingmouse")}
          /> Gaming Mouse </p>
          
<p>
          <input
          type="checkbox"
          id="5"
          name="category"
          value="Games Console"
          checked={checkedGamingConsole}
          onChange={() => filteredByCategory("gamingconsole")}
          /> Games Console </p>
          
<p>
          <input
          type="checkbox"
          id="6"
          name="category"
          value="Gaming Headset"
          checked={checkedGamingHeadset}
          onChange={() => filteredByCategory("gamingheadset")}
          /> Gaming Headset </p>
           
<p>
          <input
          type="checkbox"
          id="7"
          name="category"
          value="Gaming Controller"
          checked={checkedGamingController}
          onChange={() => filteredByCategory("gamingcontroller")}
          /> Gaming Controller </p>
          </div>

          <div className="btn">
          <button className="reset-button" onClick={clearProductChecks}> Reset All Filters </button>
          </div>
        
      </div>
    );
}