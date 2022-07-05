import { useEffect, createRef} from "react";
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";

const AddressComponent = ({onAddressSelected}) => {
    const context = createRef();


    useEffect(() => {
        PostcodeLookup.setup({
          apiKey: "iddqd",
          context: context.current,
          buttonStyle: {
            backgroundColor: "green",
            color: "white"
          },
          // ...props
          onAddressSelected
        });
        console.log("useeffect in addresscomponent")
      }, []);

    return (
        <div ref={context}></div>
    );
}

export default AddressComponent;