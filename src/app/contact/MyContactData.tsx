export default function MyContactData() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg border">
      <h2 className="text-2xl font-semibold mb-4 underline">Contact</h2>
      <div className="border p-4 rounded-md shadow-sm mb-6">
        <h3 className="text-lg font-semibold mb-2">Phone:</h3>
        <p>+43 699 110 36322</p>
      </div>

      <div className="border p-4 rounded-md shadow-sm mb-6">
        <h3 className="text-lg font-semibold mb-2">Email:</h3>
        <p>samet.sevimli07@gmail.com</p>
      </div>

      <div className="border p-4 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Address:</h3>
        <p>Hauptstraße 27</p>
        <p>6973 Höchst</p>
        <p>Vorarlberg, Austria</p>
      </div>
    </div>
  );
}
