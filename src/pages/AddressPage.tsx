import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";

export default function AddressPage() {
  const { state, dispatch } = useFormContext();

  const navigate = useNavigate();

  function nextPage(e: React.FormEvent) {
    e.preventDefault();
    navigate("/preferences");
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={nextPage}>
      <h1 className="text-4xl font-bold">Address Details</h1>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="street">Street Address</label>
        <input
          className="border border-[#FFF] focus:bg-[#FFEB00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          id="street"
          type="text"
          required
          value={state.addressInfo.street}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ADDRESS_INFO",
              payload: { street: e.target.value },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="city">City</label>
        <input
          className="border border-[#FFF] focus:bg-[#FFEB00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          id="city"
          type="text"
          required
          value={state.addressInfo.city}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ADDRESS_INFO",
              payload: { city: e.target.value },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="zip">Zip</label>
        <input
          className="border border-[#FFF] focus:bg-[#FFEB00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          id="zip"
          type="text"
          required
          value={state.addressInfo.zip}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ADDRESS_INFO",
              payload: { zip: e.target.value },
            })
          }
        />
      </div>
      <div className="flex *:basis-1/2 gap-4">
        <button
          className="p-2 border border-white rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          onClick={() => navigate("/")}
          type="button"
        >
          Back
        </button>
        <button
          className="p-2 border border-white rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
}
