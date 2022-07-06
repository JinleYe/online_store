import './Info.css';
import { useEffect, createRef, useState } from "react";
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";
import AddressComponent from "./AddressComponent";
import { useNavigate } from "react-router-dom";

const Info = ({ shoppingCart, setShoppingCart, currUser, setCurrUser}) => {

    const navigate = useNavigate();

    const [address, setAddress] = useState({
        line_1: "",
        line_2: "",
        line_3: "",
        post_town: "",
        postcode: ""
      });

    const [useSavedAdress, setUseSavedAdress] = useState(true);

    const handleUseSaved = (event) => {
        event.preventDefault();
        setUseSavedAdress(!useSavedAdress);
    }

    const handleChangeSavedAddress = (event) => {
        event.preventDefault();

    }

    const handleShopping = () =>{
        navigate('../products');
    }


    return (
        <div className="checkout-info">
            <button onClick={handleShopping} className="continue-btn">Continue Shopping</button>
            <h2 className="shipping-title">Shipping</h2>
            <div className="contact-box">
                <div className="address-container">
                    <h3 className="contact-title">Contact Information</h3>
                    <p className="contact-email">{currUser.email}</p>

                </div>

                <div className="address-info">
                    <h3 className="address-title">Shipping Address</h3>
                    {!useSavedAdress && <div className="search-address"> 
                        <AddressComponent onAddressSelected={(address) => setAddress(address)} />
                        <label>Address Line One</label>
                        <input
                            type="text"
                            value={address.line_1}
                            onChange={(e) => setAddress({ ...address, line_1: e.target.value })}
                            className="address-input"
                        />
                        <label>Address Line Two</label>
                        <input
                            type="text"
                            value={address.line_2}
                            onChange={(e) => setAddress({ ...address, line_2: e.target.value })}
                            className="address-input"
                        />
                        <label>Address Line Three</label>
                        <input
                            type="text"
                            value={address.line_3}
                            onChange={(e) => setAddress({ ...address, line_3: e.target.value })}
                            className="address-input"
                        />
                        <label>Post Town</label>
                        <input
                            type="text"
                            value={address.post_town}
                            onChange={(e) => setAddress({ ...address, post_town: e.target.value })}
                            className="address-input"
                        />
                        <label>Postcode</label>
                        <input
                            type="text"
                            value={address.postcode}
                            onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
                            className="address-input"
                        />
                    </div>}

                    <div className="saved-add-div">
                        <button onClick={handleUseSaved} className="switch-add-btn">{useSavedAdress? "Search address?" : "Use saved address instead?" }</button>
                        {useSavedAdress && <input type="text" value={currUser.address} onChange={handleChangeSavedAddress} className="save-add-input"/>}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Info;