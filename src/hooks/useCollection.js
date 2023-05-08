import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { useAuthContext } from "../context/AuthContext";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = collectionData => {
  const [documents, setDocuments] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    let ref = collection(db, collectionData);

    const unsub = onSnapshot(ref, snapshot => {
      const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      const filteredResults = results.filter(doc => doc.userID === user.uid);

      setDocuments(filteredResults);
    });

    return () => unsub();
  }, [collectionData, user]);

  return { documents };
};

// 5 ka na
