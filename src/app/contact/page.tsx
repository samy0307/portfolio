import UserForm from "./ContactForm";
import MyContactData from "./MyContactData";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="col-span-1">
          <MyContactData />
        </div>
        <div className="col-span-1 md:col-span-2">
          <UserForm />
        </div>
      </div>
    </div>
  );
}
