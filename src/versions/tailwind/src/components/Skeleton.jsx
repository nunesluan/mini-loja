import React from "react";

export default function Skeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-300 dark:bg-gray-700 h-48 w-full rounded-md"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  );
}
