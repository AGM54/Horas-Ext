import ProtectedRoute from "../../components/ProtectedRoute";

function BrowseContent() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Browse Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Note cards will go here */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Sample Note</h2>
          <p className="text-gray-600">This is a sample note description.</p>
        </div>
      </div>
    </div>
  );
}

export default function BrowsePage() {
  return (
    <ProtectedRoute>
      <BrowseContent />
    </ProtectedRoute>
  );
} 