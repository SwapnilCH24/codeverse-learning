import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function addReview(
  name: string,
  rating: number,
  comment: string
) {
  await addDoc(collection(db, "reviews"), {
    name,
    rating,
    comment,
    createdAt: Date.now(),
  });
}