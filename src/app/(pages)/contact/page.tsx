// File: src/app/(pages)/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-128px)] px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let's Build Something Together
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          I'm currently seeking new opportunities and am always open to discussing new projects, creative ideas, or interesting collaborations. If you have a role you think I'd be a good fit for, or just want to connect, please don't hesitate to reach out.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Email Button */}
          <a 
            href="mailto:calistusmwonga@gmail.com" // TODO: Replace with your actual email
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors duration-300"
          >
            Email Me
          </a>

          {/* LinkedIn Button */}
          <Link 
            href="https://www.linkedin.com/in/calistus-mwonga" // TODO: Replace with your LinkedIn URL
            target="_blank" 
            className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors duration-300"
          >
            Connect on LinkedIn
          </Link>

           {/* Download CV Button */}
           <a 
            href="/Calistus Mwonga-CV.pdf" // TODO: Place your CV in the /public folder and update this path
            download="Calistus Mwonga-CV.pdf"
            className="w-full sm:w-auto border border-blue-500 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors duration-300"
          >
            Download My CV
          </a>
        </div>
      </div>
    </main>
  );
}