---
id: 835a3b7d
layout: ../../layouts/MarkdownContainer.astro
title: Firebase
description: Firebase is a comprehensive app development platform provided by Google. It's a suite of cloud-based tools that aims to help developers build, improve, and grow their applications. Firebase offers a wide range of services like real-time databases, user authentication, cloud storage, hosting, machine learning, analytics, and much more. It's designed to be easy to use, scalable, and integrates well with other Google cloud services and APIs. Firebase supports various platforms including iOS, Android, Web, and even Unity for game development.
imageUrl: ../../assets/firebase.png
date: Sep 8, 2023
datetime: "2023-09-08"
category: Documentation
disable: false
---

### Initialization

- You can get your Firebase configuration object from the Firebase console

```typescript
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
```

---

### Getting a Collection

- To get a reference to a Firestore collection

```typescript
import { collection } from "firebase/firestore";

const usersCollection = collection(firestore, "users");
```

---

### Creating a Query

- To create a new query with additional restrictions

```typescript
const q = query(
  collection(firestore, "users"),
  where("active", "==", true),
  orderBy("age"),
  startAt(18),
  limit(100),
);
```

---

### Fetching a Document

- To fetch a specific document from a collection

```typescript
import { doc, getDoc } from "firebase/firestore";

async function getDocument(collection: string, uid: string) {
  try {
    const docRef = doc(firestore, collection, uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
  } catch (error) {
    console.error("Error fetching document: ", error);
  }
  return null;
}
```

---

### Uploading an Image

- To upload an image to Firebase Storage and get its download URL

```typescript
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

async function uploadImage(path: string, file: File): Promise<string> {
  try {
    const imageRef = ref(storage, path);
    await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image: ", error);
  }
  return null;
}
```

---

### Fetching and Validating Data from Firestore

- To fetch multiple documents from a Firestore collection and validate the data against a Zod schema

```typescript
export const ArticleSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.string().datetime(),
});

export type ArticleSchemaType = z.infer<typeof ArticleSchema>;

export async function getArticles() {
  const articlesCollection = collection(firestore, "articles");
  const q = query(
    articlesCollection,
    orderBy("publishedAt", "desc"),
    limit(10),
  );

  try {
    const querySnapshot = await getDocs(q);

    const articles = querySnapshot.docs.map((doc) => {
      const parse = ArticleSchema.safeParse(doc.data());
      if (parse.success) {
        return parse.data;
      }
    });

    return articles.flatMap((f) => (f ? [f] : []));
  } catch (error) {
    console.error("Error fetching articles: ", error);
  }
  return [];
}
```

---

### Create a Document with a Custom ID

- You can specify your own ID when creating a document

```typescript
async function createDocument<T>(customId: string, data: T) {
  const docRef = doc(firestore, "collectionName", customId);

  try {
    await setDoc(docRef, data);
    console.log("Document created with custom ID:", customId);
  } catch (error) {
    console.error("Error creating document:", error);
  }
}
```

---

### Batch Write

- Batch writes allow you to make multiple write operations as a single atomic unit

```typescript
const docRef = doc(firestore, collection, uid);
const batch = writeBatch(firestore);
batch.set(docRef, {
  name: "Tom Fan",
});
batch.update(docRef, {
  name: "Tom Fan",
});
await batch.commit();
```

---

### Transactions

- Transactions are a way to read and write data within the context of a single operation

```typescript
async function incrementCounter(docId: string) {
  try {
    await runTransaction(firestore, async (transaction) => {
      const counterRef = doc(firestore, "counters", docId);
      const counterSnap = await transaction.get(counterRef);

      if (!counterSnap.exists()) {
        throw "Document does not exist!";
      }

      const newCount = counterSnap.data().count + 1;
      transaction.update(counterRef, { count: newCount });
    });

    console.log("Transaction successfully committed!");
  } catch (error) {
    console.error("Transaction failed: ", error);
  }
}
```

---

### Firestore Real-Time Data Listening

- Listen to a Document
- Get real-time updates when a document changes

```typescript
import { doc, onSnapshot } from "firebase/firestore";

const docRef = doc(firestore, "collection", "docId");
const unsubscribe = onSnapshot(docRef, (doc) => {
  if (doc.exists()) {
    console.log("Current data: ", doc.data());
  } else {
    console.log("Document does not exist");
  }
});
// Call unsubscribe() to stop listening
```

---

- Listen to a Collection
- Receive updates when any document in a collection changes

```typescript
import { collection, onSnapshot } from "firebase/firestore";

const collRef = collection(firestore, "collection");
const unsubscribe = onSnapshot(collRef, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      console.log("New doc: ", change.doc.data());
    }
    if (change.type === "modified") {
      console.log("Modified doc: ", change.doc.data());
    }
    if (change.type === "removed") {
      console.log("Removed doc: ", change.doc.data());
    }
  });
});
// Call unsubscribe() to stop listening
```

---

### Firebase Rules

- Public Access

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}

```

---

- Authenticated Access

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}

```

---

- User-Specific Data

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}

```

---

- Role-Based Access

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}

```
