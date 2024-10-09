import UserForm from "./ContactForm";
import MyContactData from "./MyContactData";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-1 p-4">
          <MyContactData />
        </div>
        <div className="col-span-2 p-4">
          <UserForm />
        </div>
      </div>
    </div>
  );
}
