// File: src/components/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-6 py-4">
        <p className="text-center text-sm">
          &copy; {currentYear} Calistus Musyimi Mwonga. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}