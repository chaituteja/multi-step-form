import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";

export default function PreferencesPage() {
  const { state, dispatch } = useFormContext();

  const navigate = useNavigate();

  function nextPage(e: React.FormEvent) {
    e.preventDefault();
    navigate("/summary");
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={nextPage}>
      <h1 className="text-4xl font-bold">Preferences</h1>
      <div className="flex gap-2 items-center">
        <label
          className="order-1 font-bold cursor-pointer"
          htmlFor="newsletter"
        >
          Newsletter
        </label>
        <input
          className="size-5 bg-[#9ACBD0] hover:bg-[#F39E60] checked:bg-[#FFEB00] cursor-pointer"
          id="newsletter"
          type="checkbox"
          checked={state.preferences.newsletter}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PREFERENCES",
              payload: { newsletter: e.target.checked },
            })
          }
        />
      </div>
      <div className="flex gap-2 items-center">
        <label
          className="order-1 font-bold cursor-pointer"
          htmlFor="notifications"
        >
          Notifications
        </label>
        <input
          className="size-5 bg-[#9ACBD0] hover:bg-[#F39E60] checked:bg-[#FFEB00] cursor-pointer"
          id="notifications"
          type="checkbox"
          checked={state.preferences.notifications}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PREFERENCES",
              payload: { notifications: e.target.checked },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="theme">
          Theme Preference
        </label>
        <div className="flex gap-2 items-center">
          <input
            className="size-5 bg-[#9ACBD0] hover:bg-[#F39E60] checked:bg-[#FFEB00] cursor-pointer"
            id="theme"
            type="radio"
            value="light"
            required
            checked={state.preferences.theme === "light"}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PREFERENCES",
                payload: { theme: e.target.value as "light" | "dark" },
              })
            }
          />
          <span>Light</span>
        </div>
        <div className="flex gap-2 items-center">
          <input
            className="size-5 bg-[#9ACBD0] hover:bg-[#F39E60] checked:bg-[#FFEB00] cursor-pointer"
            id="theme"
            type="radio"
            value="dark"
            required
            checked={state.preferences.theme === "dark"}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_PREFERENCES",
                payload: { theme: e.target.value as "light" | "dark" },
              })
            }
          />
          <span>Dark</span>
        </div>
      </div>

      <div className="flex *:basis-1/2 gap-4">
        <button
          className="p-2 border border-white rounded-sm transition-colors hover:bg-[#FFEB00] hover:text-[#2A004E]"
          onClick={() => navigate("/address")}
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
