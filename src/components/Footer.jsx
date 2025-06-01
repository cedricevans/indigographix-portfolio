import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1A2930] text-[#E5E5DC] text-center p-4 mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} IndigoGraphix. All rights reserved.
      </p>
      <p className="text-xs">Email: hello@indigographix.com</p>
    </footer>
  );
}
