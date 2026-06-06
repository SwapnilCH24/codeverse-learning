export default function CSSCourse() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-blue-500 mb-6">
        CSS Course
      </h1>

      <p className="text-xl text-gray-300 mb-8">
        Welcome to the CSS course. Learn how to style beautiful websites.
      </p>

      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          Lesson 1: What is CSS?
        </h2>

        <p className="text-gray-400">
          CSS stands for Cascading Style Sheets. It is used to style HTML
          elements and make websites visually attractive.
        </p>

        <hr className="my-6 border-gray-700" />

        <h3 className="text-xl font-bold mb-3">Course Chapters</h3>

        <ul className="space-y-2 text-gray-300">
          <li>📚 Chapter 1 - Introduction to CSS</li>
          <li>📚 Chapter 2 - Ways to Add CSS</li>
          <li>📚 Chapter 3 - CSS Selectors</li>
          <li>📚 Chapter 4 - Colors & Backgrounds</li>
          <li>📚 Chapter 5 - Typography</li>
          <li>📚 Chapter 6 - Box Model</li>
          <li>📚 Chapter 7 - Flexbox</li>
          <li>📚 Chapter 8 - CSS Grid</li>
          <li>📚 Chapter 9 - Responsive Design</li>
          <li>📚 Chapter 10 - CSS Final Project</li>
        </ul>

        <hr className="my-8 border-gray-700" />

        <h2 className="text-2xl font-bold mb-4">
          Chapter 2: Ways to Add CSS
        </h2>

        <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
{`<style>
h1 {
  color: blue;
}
</style>`}
        </pre>

        <hr className="my-8 border-gray-700" />

        <h2 className="text-2xl font-bold mb-4">
          Chapter 3: CSS Selectors
        </h2>

        <p className="text-gray-400 mb-4">
          Selectors target HTML elements.
        </p>

        <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
{`h1 {
  color: red;
}

.myClass {
  color: blue;
}

#myId {
  color: green;
}`}
        </pre>

        <hr className="my-8 border-gray-700" />

        <h2 className="text-2xl font-bold mb-4">
          Chapter 4: Colors & Backgrounds
        </h2>

        <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
{`body {
  background: black;
  color: white;
}`}
        </pre>

        <hr className="my-8 border-gray-700" />

        <h2 className="text-2xl font-bold mb-4">
          Chapter 5: Typography
        </h2>

        <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
{`p {
  font-size: 18px;
  font-family: Arial;
}`}
        </pre>

        <hr className="my-8 border-gray-700" />

        <h2 className="text-2xl font-bold mb-4">
          Chapter 6: Box Model
        </h2>

        <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
{`.box {
  margin: 20px;
  padding: 20px;
  border: 2px solid white;
}`}
        </pre>

        <hr className="my-8 border-gray-700" />

        <h2 className="text-2xl font-bold mb-4">
          Chapter 7: Flexbox
        </h2>

        <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
        </pre>

        <hr className="my-8 border-gray-700" />

        <h2 className="text-2xl font-bold mb-4">
          Chapter 8: CSS Grid
        </h2>

        <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
{`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}`}
        </pre>

        <hr className="my-8 border-gray-700" />

        <h2 className="text-2xl font-bold mb-4">
          Chapter 9: Responsive Design
        </h2>

        <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
{`@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}`}
        </pre>

        <hr className="my-8 border-gray-700" />

        <h2 className="text-2xl font-bold mb-4">
          Chapter 10: CSS Final Project
        </h2>

        <p className="text-gray-400 mb-4">
          Build a fully styled responsive portfolio website.
        </p>

        <div className="bg-black p-4 rounded-lg border border-gray-700">
          <pre className="text-sm whitespace-pre">
{`Portfolio Project

✔ Responsive Navbar
✔ Hero Section
✔ About Section
✔ Projects Section
✔ Contact Form
✔ Footer`}
          </pre>
        </div>
      </div>
    </main>
  );
}