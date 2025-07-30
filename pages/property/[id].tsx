// pages/property/[id].tsx

import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces/index";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find property by name (id in the URL)
  const property: PropertyProps | undefined = PROPERTYLISTINGSAMPLE.find(
    (item) => item.name === id
  );

  // Loading state while router is initializing
  if (router.isFallback || !router.isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading property details...</div>
      </div>
    );
  }

  // Property not found
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Property Not Found</h1>
        <p className="text-gray-600 mb-8">
          The property you&#39;re looking for doesn&#39;t exist or may have been removed.
        </p>
        <button
          onClick={() => router.push('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PropertyDetail property={property} />
    </div>
  );
}