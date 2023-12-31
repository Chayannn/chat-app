import Sidebar from "../components/sidebar/Sidebar";
import getUsers from "@/app/actions/getUsers";
import UserList from "./components/UserList";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
      ;
    </Sidebar>
  );
};

export default UsersLayout;
