import React from "react";

export default function CheckBox({products, category, filteredByLaptop, filteredByGamingMouse, test, filteredByCategory}) {

    return (
        <div className="checkbox">
        <h4>Categories</h4>
        <div className="category-selection">
          <input
          type="checkbox"
          id="1"
          name="category"
          value="Laptop"
          onChange={() => filteredByCategory("laptop")}
          /> Laptop
          <br/>
          <input
          type="checkbox"
          id="2"
          name="category"
          value="Keyboard"
          onChange={() => filteredByCategory("gamingkeyboard")}
          /> Keyboard
          <br/>
          <input
          type="checkbox"
          id="3"
          name="category"
          value="Gaming Chair"
          onChange={() => filteredByCategory("gamingchair")}
          /> Gaming Chair
          <br/>
          <input
          type="checkbox"
          id="4"
          name="category"
          value="Gaming Mouse"
          onChange={() => filteredByCategory("gamingmouse")}
          /> Gaming Mouse
          <br/>
          <input
          type="checkbox"
          id="5"
          name="category"
          value="Games Console"
          onChange={() => filteredByCategory("gamesconsole")}
          /> Games Console
          <br/>
          <input
          type="checkbox"
          id="6"
          name="category"
          value="Gaming Headset"
          onChange={() => filteredByCategory("gamingheadset")}
          /> Gaming Headset
           <br/>
          <input
          type="checkbox"
          id="7"
          name="category"
          value="Gaming Controller"
          onChange={() => filteredByCategory("gamingcontroller")}
          /> Gaming Controller
        </div>
      </div>
    );
}