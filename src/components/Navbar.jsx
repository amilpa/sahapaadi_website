import { SignOut } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <div className="border-b border-b-black flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          src="https://media.istockphoto.com/id/1032803298/vector/concept-of-sharing-ideas-between-a-social-network.jpg?s=612x612&w=0&k=20&c=oBL1v-YS_gEtDGC2PPB1bd9ppJRtSlS88JRUBOIY9aE="
          className="w-[50px] h-[50px]"
        />
        <h1 className="font-mono text-4xl font-semibold">Sahapaadi</h1>
      </div>
      <button>
        <SignOut size={36} color="red" />
      </button>
    </div>
  );
}
