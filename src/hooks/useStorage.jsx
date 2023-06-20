import { useState, useEffect } from "react";
// import  storage
import { db, storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(0);
  const [url, setUrl] = useState(0);

  useEffect(() => {
    //references
    const storageRef = ref(storage, file.name);
    const collectionRef = collection(db, "images");

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is" + percentage + "% done");
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        const downloadURL = await getDownloadURL(storageRef);
        const createdAt = serverTimestamp();
        await addDoc(collectionRef, { url: downloadURL, createdAt });
        setUrl(downloadURL);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
