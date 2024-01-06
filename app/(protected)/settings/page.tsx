import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="bg-sky-500 text-white p-2 rounded-lg" type="submit">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
