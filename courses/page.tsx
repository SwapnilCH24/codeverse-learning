export default function Courses() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-12">
        Web Development Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">HTML</h2>
          <p>Learn the structure of websites from beginner to advanced.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">CSS</h2>
          <p>Create beautiful and responsive websites.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">JavaScript</h2>
          <p>Add powerful functionality and interactivity.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">React</h2>
          <p>Build modern web applications professionally.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">
            Backend Development
          </h2>
          <p>Learn APIs, servers and authentication.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Databases</h2>
          <p>
            Store and manage data using SQL and NoSQL databases.
          </p>
        </div>
      </div>

      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose CodeMaster Academy?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              Structured Learning
            </h3>
            <p>
              Learn web development step by step from beginner
              to advanced with a clear roadmap.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              Practice Problems
            </h3>
            <p>
              Solve real-world coding challenges and improve
              your programming skills.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              Track Progress
            </h3>
            <p>
              Monitor completed lessons, quizzes and projects
              through your personal dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Platform Statistics
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-5xl font-bold text-blue-500">
              100+
            </h3>
            <p className="mt-3">Lessons</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-5xl font-bold text-blue-500">
              50+
            </h3>
            <p className="mt-3">Projects</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-5xl font-bold text-blue-500">
              500+
            </h3>
            <p className="mt-3">Practice Problems</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-5xl font-bold text-blue-500">
              24/7
            </h3>
            <p className="mt-3">Learning Access</p>
          </div>
        </div>
      </section>
    </main>
  );
}