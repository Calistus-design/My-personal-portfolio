// File: src/app/(pages)/about/page.tsx

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Your Headshot */}
          <div className="w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0">
            <Image
              // TODO: Replace with your professional headshot in /public/images/
              src="/Me-photo-suit-half.png" 
              alt="Calistus Mwonga"
              width={256}
              height={256}
              className="rounded-full object-cover w-full h-full border-4 border-blue-500"
            />
          </div>

          {/* Your Story */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              From Code to Insight: My Journey in AI
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              With a foundation in Computer Science, I specialize in building and deploying end-to-end machine learning systems. I believe the true power of an algorithm is only realized when it's integrated into a tangible product that people can use.
            </p>
            <p className="text-lg text-gray-300">
              My passion lies in the entire AI product lifecycle—from architecting robust data pipelines and training sophisticated models to engineering the backend APIs and intuitive frontends that deliver insights. I build systems, not just notebooks.
            </p>
          </div>
        </div>

        {/* --- Key Skills Matrix --- */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">My Technical Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Languages & Databases */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Languages & Databases</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python</li>
                <li>TypeScript & JavaScript</li>
                <li>SQL (PostgreSQL, MySQL)</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>

            {/* Column 2: AI/ML & Data Science */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">AI/ML & Data Science</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Hugging Face Transformers</li>
                <li>Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, Tensorflow, Keras, Pytorch</li>
                <li>RAG (Retrieval-Augmented Gen)</li>
                <li>Vector Databases (FAISS)</li>
              </ul>
            </div>

            {/* Column 3: Backend & DevOps */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend & DevOps</h3>
              <ul className="space-y-2 text-gray-300">
                <li>FastAPI, Streamlit, RestAPI</li>
                <li>Supabase</li>
                <li>Vercel & Cloud Platforms</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            {/* Column 4: Frontend */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Next.js & React</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Material-UI (MUI)</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}