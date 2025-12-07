import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  personaInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

interface FormAction {
  type: "UPDATE_PERSONAL_INFO";
  payload: Partial<FormData["personaInfo"]>;
}

const initialPersonalInfoState: FormData["personaInfo"] = {
  firstName: "",
  lastName: "",
  email: "",
};

export default function PersonalInfoPage() {
  const [state, dispatch] = useReducer(
    personalInfoReducer,
    initialPersonalInfoState
  );

  const navigate = useNavigate();

  function personalInfoReducer(
    state = initialPersonalInfoState,
    action: FormAction
  ) {
    return {
      ...state,
      ...action.payload,
    };
  }

  function nextPage(e: React.FormEvent) {
    e.preventDefault();
    navigate("/address");
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={nextPage}>
      <h1 className="text-4xl font-bol">Personal Information</h1>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="firstname">First Name</label>
        <input
          className="border border-[#FFF] focus:bg-[#FFEB00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          id="firstname"
          type="text"
          required
          value={state.firstName}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PERSONAL_INFO",
              payload: { firstName: e.target.value },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="lastname">Last Name</label>
        <input
          className="border border-[#FFF] focus:bg-[#FFEB00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          id="lastname"
          type="text"
          required
          value={state.lastName}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PERSONAL_INFO",
              payload: { lastName: e.target.value },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email">Email</label>
        <input
          className="border border-[#FFF] focus:bg-[#FFEB00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          id="email"
          type="email"
          required
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PERSONAL_INFO",
              payload: { email: e.target.value },
            })
          }
        />
      </div>
      <button
        className="p-2 border border-white rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
        type="submit"
      >
        Next
      </button>
    </form>
  );
}
