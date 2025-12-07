export default function PersonalInfoPage() {
  return (
    <form className="flex flex-col gap-8">
      <h1 className="text-4xl font-bol">Personal Information</h1>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="firstname">First Name</label>
        <input
          className="border-1 border-[#FFF] focus:bg-[#FFEB00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          id="firstname"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="lastname">Last Name</label>
        <input
          className="border-1 border-[#FFF] focus:bg-[#FFEB00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          id="lastname"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email">Email</label>
        <input
          className="border-1 border-[#FFF] focus:bg-[#FFEB00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#FFEB00] font-bold"
          id="email"
          type="email"
          required
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
