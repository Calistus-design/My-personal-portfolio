// File: src/lib/data.ts

// This interface defines the shape of our project data
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string; // Short description for cards
  tags: string[];
  imageUrl: string;
  mainImageUrl?: string;
  liveDemoUrl?: string; // Optional: The "?" makes it optional
  codeUrl: string;
  videoUrl?: string; // Optional
  // Detailed Case Study Content
  problemStatement: string[]; // Array of paragraphs
  methodology: string[];
  resultsAndInsights: string[];
  impact: string[];
}

// This is our "database" of projects
export const PROJECTS: Project[] = [
  {
    slug: "ai-first-aid-assistant",
    title: "AI First-Aid Assistant",
    subtitle: "A Full-Stack RAG Application with a Multi-Stage Safety Pipeline",
    description: "An end-to-end web application that provides immediate, reliable, and safe first-aid guidance using a sophisticated AI backend, integrated hospital finder, and conversational memory.",
    tags: ["Next.js", "Python", "FastAPI", "RAG", "PostgreSQL","Supabase", "Hugging Face", "TailwindCSS", "PostGIS", "TypeScript"],
    imageUrl: "/project-ai-chatbot.jpg", // TODO: Replace with your actual project thumbnail image path
    mainImageUrl: "/project-ai-chatbot.jpg", // TODO: Replace with your actual main project image path
    liveDemoUrl: "https://ai-medical-chatbot-one.vercel.app/chat", // TODO: Replace with your Vercel link
    codeUrl: "https://github.com/Calistus-design/AI-medical-chatbot", // TODO: Replace with your GitHub repo link
    videoUrl: "https://youtube.com/your-video-link", // TODO: Replace with your YouTube demo link
    problemStatement: [
      "In high-stress emergency situations, individuals require immediate, clear, and reliable first-aid guidance without friction. A critical challenge was to build an AI system capable of providing accurate, step-by-step instructions while also recognizing and appropriately escalating life-threatening scenarios.",
      "Traditional Large Language Models (LLMs) can suffer from hallucinations or provide overly generic advice, which is highly problematic in a medical context. The objective was to engineer a robust system that prioritizes accuracy and user safety, ensuring professional standards for first-aid recommendations.",
      "Furthermore, integrating a fast and reliable way to locate nearby medical facilities was essential, coupled with a seamless user experience that includes persistent chat history and secure user authentication."
    ],
    methodology: [
      "**Backend Architecture (Python/FastAPI on Kaggle GPU):** I designed and implemented a sophisticated, multi-stage AI pipeline using Python with FastAPI, hosted on Kaggle to leverage GPU acceleration via an ngrok tunnel for public access. This advanced agent processes user queries through three distinct stages:",
      "**1. The Gatekeeper (Intent Classification):** Utilizing a zero-shot classification model (**facebook/bart-large-mnli**), this stage rigorously assesses every incoming message to determine if it's a medical query, a simple greeting, or off-topic. This prevents irrelevant responses and conserves resources by only engaging the main AI for relevant medical discussions.",
      "**2. The Brain (RAG and Response Generation):** For medical queries, a Retrieval-Augmented Generation (RAG) system is activated. The user's input is converted into a vector embedding using the **Qwen/Qwen3-Embedding-0.6B** model. This embedding is then used to perform a rapid similarity search against a **FAISS vector index** (built from a comprehensive first-aid knowledge base) to retrieve highly relevant contextual information. This context, along with recent chat history, forms a detailed prompt for the **microsoft/MediPhi-Clinical LLM** (loaded in 4-bit for efficiency) to generate accurate, step-by-step guidance.",
      "**3. The Safety Analyst (Seriousness Classification):** Crucially, after the primary AI generates its response, a secondary check is performed using the same **facebook/bart-large-mnli** classifier. This stage analyzes the AI's own output to detect indicators of an 'urgent medical emergency.' If detected, a `show_hospital_modal` flag is set to `True` in the JSON response, triggering an immediate and prominent call-to-action on the frontend.",
      "**Integrated Hospital Finder (PostGIS & Supabase):** A dedicated 'Hospital Finder' feature provides rapid access to medical facilities. It leverages **Supabase PostgreSQL** with the **PostGIS extension** to perform highly accurate geospatial queries. A custom SQL function utilizes `ST_Distance` to calculate real-world distances between the user's geolocation and nearby hospitals, which are displayed and sortable by distance. The hospital data was seeded via a custom Node.js script and `papaparse` from a CSV file.",
      "**Frontend & User Experience (Next.js/TypeScript):** The application's responsive UI is built with **Next.js 15 (App Router)** and **TypeScript**, styled with **Material-UI (MUI)** for core components and **Tailwind CSS** for fine-grained control. Markdown rendering for AI responses is handled by `@tailwindcss/typography`, ensuring clear formatting. Chat state is managed persistently via URL parameters, allowing conversations to resume seamlessly across page refreshes.",
      "**Authentication & Security:** User accounts are managed by **Supabase Auth**, supporting both email/password and Google social logins. **Row Level Security (RLS)** is rigorously enforced on the database, ensuring users can only access their own conversations and data, highlighting a strong focus on data privacy and security."
    ],
    resultsAndInsights: [
      "The deployed application successfully delivers immediate, context-aware, and accurately formatted first-aid guidance. The multi-stage AI pipeline proved effective in filtering non-medical queries, grounding responses in factual knowledge via RAG, and critically, acting as a robust **Responsible AI safety layer** by proactively identifying and escalating emergency scenarios.",
      "A key outcome is the system's ability to intuitively guide users towards emergency medical services when facing critical conditions (e.g., 'chest pain and difficulty breathing'), while providing detailed, step-by-step advice for minor ailments (e.g., 'how to treat a small cut'). The `show_hospital_modal` flag demonstrates effective AI-driven UI adaptation.",
      "Significant real-world development challenges were overcome, including fixing React race conditions for persistent chat state, debugging `useEffect` infinite loops, refining complex AI classification logic, and resolving intricate Vercel deployment issues stemming from Supabase URL misconfigurations. These efforts ensured a stable, responsive, and reliable user experience across the entire application."
    ],
    impact: [
      "This project serves as a comprehensive proof-of-concept for how modern, production-ready AI systems can be architected with safety, accuracy, and user experience at their core. It demonstrates a complete end-to-end data science and full-stack engineering workflow, transforming a complex medical assistance problem into a genuinely useful and responsible AI application.",
      "The integrated blend of LLMs, RAG, classification models, geospatial databases, and modern web frameworks showcases advanced capabilities in developing resilient and impactful AI solutions, directly applicable to real-world challenges in health tech or related fields."
    ]
  },
  {
    slug: "all-weather-landslide-detection",
    title: "An All-Weather AI for Landslide Detection",
    subtitle: "Fusing Optical and Radar Satellite Data for Reliable Disaster Monitoring",
    description: "An end-to-end machine learning system that accurately detects landslides from satellite imagery. I designed it to work even when clouds obscure the ground, and deployed it as an interactive web application with a FastAPI backend that provides real-time, explainable predictions.",
    tags: ["Python", "LightGBM", "TensorFlow", "Pandas", "Scikit-learn", "SHAP", "Streamlit", "FastAPI"],
    imageUrl: "/landslide_banner.jpg", // TODO: Replace with your actual image path
    mainImageUrl: "/landslide_banner.jpg",
    liveDemoUrl: "https://landslide-classification-syuwfwylbvweumz8trmkkh.streamlit.app/", // TODO: Replace with your Vercel link
    codeUrl: "https://github.com/Calistus-design/Landslide-Classification", // TODO: Replace with your GitHub repo link
    videoUrl: "https://youtube.com/your-video-link", 
    
    
    problemStatement: [
      "The challenge I tackled is a critical paradox in disaster management: the heavy rain that often triggers landslides also creates thick cloud cover. This blinds traditional optical satellites, making it impossible for agencies like the National Disaster Operations Center to assess damage or direct resources effectively. They are left blind at the exact moment they need to see the most. My goal was to build an AI system that could overcome this by functioning in any weather condition."
    ],
    
    methodology: [
      "My strategy centered on **data fusion**. I combined two powerful data sources from Europe's Sentinel satellites: standard optical imagery (Sentinel-2) for visual analysis, and cloud-penetrating Synthetic Aperture Radar (SAR) data (Sentinel-1) to measure ground texture and disturbance. This radar data was the key to creating a true 'all-weather' capability.",
      
      "I developed and rigorously tested two distinct machine learning approaches:",
      
      "**1. The Statistical Approach (Champion Model):** Instead of feeding raw pixels to a traditional model, I engineered a rich set of statistical features. For each of the 12 data channels, I calculated the mean, standard deviation, skew, and kurtosis to capture the area's texture and consistency. I also engineered scientific indices like NDVI (for vegetation health) to detect landslide scars. After comparing several models, a tuned **LightGBM classifier** proved to be the most effective, delivering the best balance of performance and speed.",


  // spacing is not being applied what do i do? ok how do i add spacing between items

      "**2. The Deep Learning Approach:** To explore a different angle, I built a Convolutional Neural Network (CNN) using a pre-trained **EfficientNetV2B0** model. A major challenge was the severe class imbalance in the data (only 18% of examples were landslides). I solved this by implementing a custom **Focal Loss function**, which forces the model to focus on these rare, hard-to-find cases, and by building a balanced `tf.data` pipeline that used oversampling and data augmentation.",

      "**Explainability (XAI):** A core goal was to build a trustworthy system. To prevent a 'black box' model, I implemented two different explainability techniques. For the LightGBM model, I used **SHAP (SHapley Additive exPlanations)** to precisely measure the contribution of each statistical feature to every prediction. For the CNN, I used **LIME (Local Interpretable Model-agnostic Explanations)** to generate heatmaps showing which parts of an image the model was 'looking' at.",
      
      "**Deployment:** Finally, I completed the project's lifecycle by deploying the champion LightGBM model as a full application. I built a robust **FastAPI backend** to handle the data processing and serve the model's predictions. The user interface is a clean **Streamlit web app** that not only shows the prediction but also displays the real-time SHAP analysis, making the model's reasoning transparent to the user."
    ],
    
    resultsAndInsights: [
      "The final LightGBM model achieved a strong **F1-Score of 0.86** on the validation data. In practical terms, it successfully identified 82% of actual landslides while keeping the rate of false alarms very low.",
      
      "The most important insight came from the SHAP analysis. It proved that the model had learned to be a true 'all-weather' system. Its predictions were not just based on visual features like vegetation loss (44% importance); they relied almost equally on the cloud-penetrating **radar data (45% combined importance)** that measured changes in ground texture and debris fields. This confirmed the model could make accurate decisions even without a clear visual.",

      "Furthermore, the LIME analysis on the CNN provided a stunning confirmation: when shown an image completely covered by clouds, the model learned to entirely ignore the visual (cloud) layer and based its correct prediction solely on the underlying radar signals it could see through the clouds."
    ],

    impact: ["This project is a successful proof-of-concept for a real-world tool that can provide reliable and trustworthy information to disaster response teams. By automating the initial screening of satellite imagery and providing clear, explainable insights, this system can help free up human experts to focus on the most critical, high-risk cases. This project is a complete, end-to-end data science workflow from a raw business problem to a deployed, value-driven AI application."]
  },
  {
    slug: "africa-credit-challenge",
    title: "Africa Credit Challenge: Predicting Loan Default",
    subtitle: "From Raw Data to an Actionable, Business-Ready Credit Scoring System",
    description: "An end-to-end data science project that predicts loan default from transactional data. I performed deep EDA and advanced feature engineering, compared multiple models to select a champion, and built a practical 5-tier credit scoring system for business use.",
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Feature Engineering", "Classification"],
    imageUrl: "/credit-scoring.jpg", // TODO: Replace with a compelling image for this project
    mainImageUrl: "/credit-scoring.jpg", // TODO: Replace with your actual main project image path
    codeUrl: "https://github.com/Calistus-design/Africa-Credit-Scoring", // TODO: Replace with your GitHub repo link
    
    problemStatement: [
      "The core challenge of this project was to tackle a real-world loan default problem defined by severe class imbalance. With only a tiny fraction of loans (1.8%) resulting in a default, a standard model could achieve over 98% accuracy by simply guessing 'No Default' every time. The true business problem, therefore, was not just to be accurate, but to build a model that could reliably find this 'needle in the haystack'—the small group of high-risk applicants—without incorrectly flagging a large number of good customers."
    ],
    
    methodology: [
      "**1. Deep Exploratory Data Analysis (EDA):** I started by diving deep into the data to uncover the key drivers of default. The analysis revealed several powerful signals: 'New Loan' customers were over 10 times more likely to default than 'Repeat Loan' customers; specific loan types carried significantly higher risk (some with >70% default rates); and defaulters generally took out larger loans for longer durations.",

      "**2. Advanced Feature Engineering:** To give the model a richer understanding of customer behavior, I engineered two crucial sets of features. First, I extracted time-based features like the month and day of the week from the loan disbursement date. More importantly, I created a historical profile for each borrower by performing **customer-level aggregation**. This generated powerful new features like a customer's average loan amount, their total number of loans, and the standard deviation of their borrowing, transforming the dataset from individual transactions into a story of customer behavior.",

      "**3. Iterative Model Development & Selection:** I built and rigorously evaluated a series of models to find the best solution. I started with a simple Logistic Regression to establish a baseline F1-Score of 0.22. I then demonstrated a massive performance leap by using a Random Forest (F1-Score: 0.57). Finally, I trained and compared three industry-standard gradient boosting models: **XGBoost, LightGBM, and CatBoost**. Throughout this process, I used stratified k-fold cross-validation to ensure the results were stable and reliable.",

      "**4. Creation of a Business-Ready Credit Scoring System:** The final, and most critical, step was to translate the model's technical output (a raw probability) into a practical tool for business users like loan officers. I analyzed the distribution of the champion model's predictions and designed a data-driven, **5-tier credit scoring function**. This system automatically segments applicants into clear, actionable categories (from 'Very Low Risk' to 'Very High Risk') and provides a recommended business action for each, such as 'Auto-Approve' or 'Requires Manual Review'."
    ],
    
    resultsAndInsights: [
      "The **XGBoost model emerged as the clear champion**, achieving a phenomenal F1-Score of **0.75**, a massive improvement over the baseline and a significant lift over the Random Forest model. This demonstrates the power of gradient boosting for this type of complex, tabular dataset.",

      "The performance was also highly stable, with a very low standard deviation across all cross-validation folds. This gives high confidence that the model's performance is real and would generalize well to new, unseen data.",
      
      "A key insight from analyzing the model's predictions was that the distribution of default probabilities was strongly bimodal. The model was highly confident in its decisions, with a large peak of predictions near 0 (very safe) and a smaller, distinct peak near 1 (very risky), with very few 'unsure' predictions in the middle. This clear separation is the hallmark of a well-calibrated model and is what enabled the design of the effective 5-tier scoring system."
    ],
    
    impact: [
      "This project goes beyond a simple prediction model; it provides a complete blueprint for an automated, data-driven risk assessment tool. The credit scoring system allows a business to instantly segment applicants, automate decisions for the most clear-cut cases ('Very Low Risk' and 'Very High Risk'), and strategically focus the valuable time of human underwriters on the more ambiguous 'Medium Risk' cases.",
      
      "It showcases a full, end-to-end data science workflow—from understanding a raw business problem and performing deep analysis to building, evaluating, and ultimately translating a high-performance model into a practical, value-driven business solution."
    ]
  }
];