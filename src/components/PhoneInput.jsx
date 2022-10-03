import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInput = ({ phoneNumber, setPhoneNumber }) => {
  return (
    <ReactPhoneInput
      inputStyle={{
        width: "100%",
        padding: "0.5rem 0.5rem 0.5rem 3rem",
        marginRight: "0.5rem",
        fontSize: "1rem",
      }}
      country={"in"}
      preferredCountries={["in", "qa", "sa", "us"]}
      enableSearchField
      value={phoneNumber}
      onChange={setPhoneNumber}
      dropdownStyle={{ width: "300px" }}
      className="mx-auto  sm:mx-4 my-2 rounded-md text-gray-600"
    />
  );
};

export default PhoneInput;
