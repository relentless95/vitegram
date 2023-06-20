import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let documents = [];
      QuerySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    // clean up function
    return () => unsubscribe();
  }, [collectionName]);
  return { docs };
};

export default useFirestore;
