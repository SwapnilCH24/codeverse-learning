export default function HTMLCourse() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-blue-500 mb-6">
        HTML Course
      </h1>

      <p className="text-xl text-gray-300 mb-8">
        Welcome to the HTML course.
      </p>

      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          Lesson 1: What is HTML?
        </h2>

        <p className="text-gray-400">
  HTML stands for HyperText Markup Language. It is used to create
  the structure of web pages.
</p>

<hr className="my-6 border-gray-700" />

<h3 className="text-xl font-bold mb-3">Course Chapters</h3>

<ul className="space-y-2 text-gray-300">
  <li>📚 Chapter 1 - Introduction to HTML</li>
  <li>📚 Chapter 2 - HTML Document Structure</li>
  <li>📚 Chapter 3 - HTML Elements</li>
  <li>📚 Chapter 4 - Lists & Tables</li>
  <li>📚 Chapter 5 - Forms</li>
  <li>📚 Chapter 6 - Semantic HTML</li>
</ul>
<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold mb-4">
  Chapter 2: HTML Document Structure
</h2>

<p className="text-gray-400 mb-4">
  Every HTML page follows a standard structure:
</p>

<pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`}
</pre>
<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold mb-4">
  Chapter 3: HTML Elements
</h2>

<p className="text-gray-400 mb-4">
  HTML elements are the building blocks of a webpage.
</p>

<ul className="list-disc pl-6 text-gray-300 space-y-2">
  <li>{`<h1> to <h6>`} - Headings</li>
  <li>{`<p>`} - Paragraph</li>
  <li>{`<a>`} - Link</li>
  <li>{`<img>`} - Image</li>
  <li>{`<div>`} - Container</li>
</ul>
<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold mb-4">
  Chapter 4: Lists & Tables
</h2>

<p className="text-gray-400 mb-4">
  HTML provides lists and tables to organize information.
</p>

<h3 className="text-xl font-semibold mb-2">Example List</h3>

<ul className="list-disc pl-6 text-gray-300 mb-6">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3 className="text-xl font-semibold mb-2">Example Table</h3>

<table className="w-full border border-gray-700">
  <thead>
    <tr>
      <th className="border border-gray-700 p-2">Name</th>
      <th className="border border-gray-700 p-2">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-700 p-2">Swapnil</td>
      <td className="border border-gray-700 p-2">Developer</td>
    </tr>
  </tbody>
</table>
<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold mb-4">
  Chapter 5: Forms
</h2>

<p className="text-gray-400 mb-4">
  Forms are used to collect user input.
</p>

<form className="space-y-4">
  <input
    type="text"
    placeholder="Enter your name"
    className="w-full p-3 bg-black border border-gray-700 rounded-lg"
  />

  <input
    type="email"
    placeholder="Enter your email"
    className="w-full p-3 bg-black border border-gray-700 rounded-lg"
  />

  <button
    type="submit"
    className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
  >
    Submit
  </button>
</form>
<hr className="my-8 border-gray-700" />

<h2 className="text-2xl font-bold mb-4">
  Chapter 6: Semantic HTML
</h2>

<p className="text-gray-400 mb-4">
  Semantic tags help browsers and developers understand the meaning of content.
</p>

<div className="bg-black p-4 rounded-lg border border-gray-700">
  <pre>
{`<header>Website Header</header>

<nav>Navigation Menu</nav>

<main>Main Content</main>

<footer>Website Footer</footer>`}
  </pre>
</div>
      </div>
    </main>
  );
}