"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { auth, db } from "./lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export default function Home() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [menuOpen, setMenuOpen] = useState(false);
const [review, setReview] = useState("");
const [reviews, setReviews] = useState<any[]>([]);
const [showAllReviews, setShowAllReviews] = useState(false);
const [rating, setRating] = useState(5);
const [user, setUser] = useState<any>(null);
useEffect(() => {
  loadReviews();

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return () => unsubscribe();
}, []);
  const handleSignUp = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created successfully!");
  } catch (error: any) {
    alert(error.message);
  }
};
const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
  } catch (error: any) {
    alert(error.message);
  }
};
const handleSubmitReview = async () => {
  try {
    await addDoc(collection(db, "reviews"), {
      review,
      email: auth.currentUser?.email,
      rating,
      createdAt: new Date(),
    });

    alert("Review submitted!");
    setReview("");
  } catch (error: any) {
    alert(error.message);
  }
};
const loadReviews = async () => {
  const snapshot = await getDocs(collection(db, "reviews"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  setReviews(data);
};
const handleLogout = async () => {
  await signOut(auth);
};
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-blue-950 text-white overflow-x-hidden">
      {/* Navbar */}
       <nav className="sticky top-0 z-50 flex flex-col items-center md:flex-row justify-between items-center px-4 md:px-10 py-4 md:py-6 backdrop-blur-md bg-black/30 border-b border-gray-800">
        <h1 className="text-xl md:text-3xl font-bold text-blue-500 ...">
          CodeVerse Learning
        </h1>

        <div className="flex flex-wrap gap-3 md:gap-8 text-gray-300 text-sm md:text-base">
          <a href="#home" className="hover:text-blue-400 transition">
  Home
</a>
          <a href="#courses" className="hover:text-blue-400 transition">
  Courses
</a>
          <a href="#about" className="hover:text-blue-400 transition">
  About
</a>
          <a href="#team" className="hover:text-blue-400 transition">
  Team
</a>
          <a href="#reviews" className="hover:text-blue-400 transition">
  Reviews
</a>
         <a href="#contact" className="hover:text-blue-400 transition">
  Contact
</a>
         {user ? (
  <div className="bg-blue-700 px-2 py-1 rounded-lg text-xs mx-auto">
  👤 {user.email.split("@")[0].slice(0, 6)}
</div>
) : (
  <a
    href="#login"
    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
  >
    Login
  </a>
)}
        </div>
      </nav>

      {/* Hero Section */}
     <section id="home" className="text-center py-28 px-6 relative">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

<div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Learn Web Development Like a Pro
        </h1>

        <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto">
          Master HTML, CSS, JavaScript, React, Backend Development,
          Databases and modern web technologies through structured
          learning, projects and quizzes.
        </p>

        <a
  href="#courses"
  className="inline-block mt-10 bg-blue-600 hover:bg-blue-500 px-10 py-5 rounded-xl"
>
  Start Learning
</a>
      </section>

      {/* Courses */}
      <section id="courses" className="px-4 md:px-10 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Web Development Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

           <a
  href="/html"
  className="block bg-gray-900 p-6 rounded-xl hover:scale-105 transition hover:shadow-[0_0_25px_#3b82f6]"
>
            <h3 className="text-2xl font-bold mb-2">HTML</h3>
            <p>Learn the structure of websites from beginner to advanced.</p>
            <div className="mt-4">
  <div className="w-full bg-gray-800 rounded-full h-2">
    <div className="bg-blue-500 h-2 rounded-full w-full"></div>
  </div>

  <p className="text-sm text-gray-400 mt-2">
    100% Complete
  </p>
</div>
          </a>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition hover:shadow-[0_0_25px_#3b82f6]">
            <h3 className="text-2xl font-bold mb-2">CSS</h3>
            <p>Create beautiful and responsive websites.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition hover:shadow-[0_0_25px_#3b82f6]">
            <h3 className="text-2xl font-bold mb-2">JavaScript</h3>
            <p>Add powerful functionality and interactivity.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition hover:shadow-[0_0_25px_#3b82f6]">
            <h3 className="text-2xl font-bold mb-2">React</h3>
            <p>Build modern web applications professionally.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition hover:shadow-[0_0_25px_#3b82f6]">
            <h3 className="text-2xl font-bold mb-2">Backend Development</h3>
            <p>Learn APIs, servers and authentication.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition hover:shadow-[0_0_25px_#3b82f6]">
            <h3 className="text-2xl font-bold mb-2">Databases</h3>
            <p>Store and manage data using SQL and NoSQL.</p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="px-4 md:px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose CodeVerse Learning?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">
              Structured Learning
            </h3>
            <p>
              Learn web development step by step with a clear roadmap.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">
              Practice Problems
            </h3>
            <p>
              Solve coding challenges and improve your skills.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">
              Track Progress
            </h3>
            <p>
              Monitor completed lessons and projects.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="px-4 md:px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Platform Statistics
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-blue-950 p-8 rounded-xl">
            <h3 className="text-5xl font-bold">100+</h3>
            <p>Lessons</p>
          </div>

          <div className="bg-blue-950 p-8 rounded-xl">
            <h3 className="text-5xl font-bold">50+</h3>
            <p>Projects</p>
          </div>

          <div className="bg-blue-950 p-8 rounded-xl">
            <h3 className="text-5xl font-bold">500+</h3>
            <p>Practice Problems</p>
          </div>

          <div className="bg-blue-950 p-8 rounded-xl">
            <h3 className="text-5xl font-bold">24/7</h3>
            <p>Learning Access</p>
          </div>

        </div>
      </section>

      {/* Team */}
      <section id="team" className="px-4 md:px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

         <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 border border-gray-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 transition duration-300">
            <Image
  src="/swapnil.png"
  alt="Swapnil Chakraborty"
  width={96}
  height={96}
  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
/>
            <h3 className="font-bold">Swapnil Chakraborty</h3>
            <p className="text-gray-400">Team Leader</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 border border-gray-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 transition duration-300">
            <Image
  src="/salkwchang.png"
  alt="Salkwchang Debbarma"
  width={96}
  height={96}
  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
/>
            <h3 className="font-bold">Salkwchang Debbarma</h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 border border-gray-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 transition duration-300">
            <Image
  src="/nayan.png"
  alt="Nayan Das"
  width={96}
  height={96}
  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
/>
            <h3 className="font-bold">Nayan Das</h3>
            <p className="text-gray-400">Backend Developer</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 border border-gray-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 transition duration-300">
            <Image
  src="/antar.png"
  alt="Antar"
  width={96}
  height={96}
  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
/>
            <h3 className="font-bold">Antar Bhowmik</h3>
            <p className="text-gray-400">UI/UX Designer</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 border border-gray-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 transition duration-300">
            <Image
  src="/dipu.png"
  alt="Dipu Debbarma"
  width={96}
  height={96}
  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
/>
            <h3 className="font-bold">Dipu Debbarma</h3>
            <p className="text-gray-400">Project Coordinator</p>
          </div>

        </div>
      </section>
      <section id="reviews" className="px-4 md:px-10 py-20">
  <h2 className="text-4xl font-bold text-center mb-12">
    Reviews & Comments
  </h2>
  <div className="max-w-xl mx-auto">
  <textarea
  placeholder="Write your review..."
  value={review}
  onChange={(e) => setReview(e.target.value)}
  className="w-full p-4 rounded bg-gray-800 mb-4"
  rows={4}
/>
<div className="mb-4 text-3xl">
  {[1, 2, 3, 4, 5].map((star) => (
    <span
      key={star}
      onClick={() => setRating(star)}
      className="cursor-pointer"
    >
      {star <= rating ? "⭐" : "☆"}
    </span>
  ))}
</div>

  <button
  onClick={handleSubmitReview}
  className="bg-blue-600 px-6 py-3 rounded"
>
  Submit Review
</button>
{(showAllReviews ? reviews : reviews.slice(0, 1)).map((r, index) => (
  <div key={index} className="bg-gray-900 p-4 rounded mt-4">
    <p className="text-sm text-gray-400">{r.email}</p>
    <p>{"⭐".repeat(r.rating || 0)}</p>
<p>{r.review}</p>
<p className="text-xs text-gray-500">
  {new Date(r.createdAt?.seconds * 1000).toLocaleDateString()}
</p>
    
  </div>
))}
{reviews.length > 1 && (
  <button
    onClick={() => setShowAllReviews(!showAllReviews)}
    className="mt-4 text-blue-400"
  >
    {showAllReviews ? "Hide reviews" : `Show all ${reviews.length} reviews`}
  </button>
)}
</div>
</section>

{/* Login Section */}
<section id="login" className="px-4 md:px-10 py-20">
  <h2 className="text-4xl font-bold text-center mb-10">
    Login / Sign Up
  </h2>

  {user ? (
  <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-xl text-center">
    <h3 className="text-2xl font-bold mb-4">
      Welcome, {user.email.split("@")[0]}
    </h3>

    <button
      onClick={handleLogout}
      className="bg-red-600 px-6 py-3 rounded"
    >
      Logout
    </button>
  </div>
) : (
  <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-xl">
    <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 mb-4 rounded bg-gray-800"
/>

    <input
      type="password"
      placeholder="Password"
      value={password}
onChange={(e) => setPassword(e.target.value)}
      className="w-full p-3 mb-4 rounded bg-gray-800"
    />

    <div className="flex gap-4">
  <button
  onClick={handleLogin}
  className="flex-1 bg-blue-600 p-3 rounded"
>
  Login
</button>

  <button
  onClick={handleSignUp}
  className="flex-1 bg-green-600 p-3 rounded"
>
  Sign Up
</button>
</div>
</div>
)}
</section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-800 py-10 text-center text-gray-400">
        <h2 className="text-2xl font-bold text-white mb-2">
          CodeVerse Learning
        </h2>

        <p>
          Empowering future developers through structured learning
          and real-world projects.
        </p>

        <p className="mt-4">
          © 2025 CodeVerse Learning
        </p>
      </footer>

    </main>
  );
}