"use client";
import { useState, useEffect } from "react";
import ResourcesDashboard from "@/Components/ResourcesDashboard";
import Navbar from "@/Components/Navbar";
import { fetchCollectionData, fetchCollections } from "@/Database/database";
import { db } from "@/Database/firebaseConfig"; // Ensure you import your db from firebaseConfig
import { doc, writeBatch } from "firebase/firestore";
import { useUser, UserProfile } from "@auth0/nextjs-auth0/client";
interface CollectionData {
  id: string;
  [key: string]: any;
}

const Admin = () => {
  const { user, error, isLoading } = useUser();
  const [collections, setCollections] = useState<string[]>([]);
  const [collectionData, setCollectionData] = useState<CollectionData[]>([]);
  const [selectedCol, setSelectedCol] = useState("");
  const [headers, setHeaders] = useState<string[]>([]);
  const [rowsToDelete, setRowsToDelete] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const getCollections = async () => {
    const response = await fetchCollections();
    setCollections(response);
    setSelectedCol(response[0]);
  };

  const getCollectionData = async () => {
    const response = await fetchCollectionData(selectedCol);

    setCollectionData(response);
    setHeaders(Object.keys(response[0]).filter((key) => key !== "id"));
    setLoading(false);
  };

  const addNewRow = () => {
    const temp = [...collectionData];
    type DataRow = {
      [key: string]: any;
    };

    const newRow: CollectionData = Object.keys(temp[0]).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {} as CollectionData);
    newRow.id = `new_${Date.now()}`; // Generate a temporary ID for new rows
    temp.push(newRow);
    setCollectionData(temp);
  };

  const removeRow = (idx: number) => {
    const temp = [...collectionData];
    setRowsToDelete([...rowsToDelete, temp[idx].id]);

    temp.splice(idx, 1); // Remove the row from the local state
    setCollectionData(temp);
  };

  const handleInputChange = (idx: number, key: string, value: string) => {
    const temp = [...collectionData];
    temp[idx][key] = value;
    setCollectionData(temp);
  };

  const saveChanges = async () => {
    setLoading(true);
    const batch = writeBatch(db);

    // Handle deletions
    rowsToDelete.forEach((id) => {
      const docRef = doc(db, selectedCol, id);
      batch.delete(docRef);
    });

    // Handle additions and updates
    collectionData.forEach((item) => {
      const docRef = doc(db, selectedCol, item.id);
      if (item.id.startsWith("new_")) {
        batch.set(docRef, item); // Add new document
      } else {
        batch.update(docRef, item); // Update existing document
      }
    });

    await batch.commit();
    setRowsToDelete([]); // Clear the list of rows to delete
    setLoading(false);
    alert("Changes saved successfully!");
  };

  useEffect(() => {
    getCollections();
    selectedCol !== "" && getCollectionData();
  }, []);

  useEffect(() => {
    selectedCol !== "" && getCollectionData();
  }, [selectedCol]);

  return (
    <main>
      <Navbar />
      <ResourcesDashboard />
      {user &&
      user.email &&
      !["snahom24@gmail.com", "affanhamid007@gmail.com"].includes(
        user.email
      ) ? (
        <div className="pt-80 bg-white w-full text-center pb-20">
          You are not authorized to this page
        </div>
      ) : (
        <section className="pt-80 bg-white">
          <h1 className="text-6xl text-center">Database</h1>
          {loading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-blur-xl flex items-center justify-center text-2xl">
              <span>Loading...</span>
            </div>
          )}
          <ul className="flex w-full justify-evenly text-xl my-5 select-none">
            {collections.map((collection, id) => (
              <li
                key={id}
                className={`rounded-lg border border-background px-2 py-2 cursor-pointer hover:bg-background hover:text-white ${
                  selectedCol === collection
                    ? "bg-background text-white"
                    : "bg-white text-backgroundk"
                }`}
                onClick={() => {
                  setSelectedCol(collection);
                  setCollectionData([]);
                }}
              >
                {collection}
              </li>
            ))}
          </ul>
          <div className="px-80">
            <table className="w-full">
              <thead className="w-full">
                <tr className="text-xl text-center">
                  {headers &&
                    headers.length > 0 &&
                    headers.map((key) => <th key={key}>{key}</th>)}
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="w-full text-center">
                {collectionData.map((item, idx) => (
                  <tr key={idx}>
                    {headers.map((key, index) => (
                      <td key={index} className="px-2">
                        <input
                          type="text"
                          value={String(item[key])}
                          onChange={(e) =>
                            handleInputChange(idx, key, e.target.value)
                          }
                          className="text-center"
                        />
                      </td>
                    ))}
                    <td
                      className="text-red-700 cursor-pointer select-none"
                      onClick={() => removeRow(idx)}
                    >
                      X
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-center text-5xl text-white flex justify-center mt-5">
              <div
                className="bg-green-700 px-3 pb-1 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => {
                  addNewRow();
                }}
              >
                +
              </div>
            </div>
          </div>
          <div className="flex w-full py-10 justify-center items-center gap-40">
            <button
              className="bg-gray-200 py-2 px-10 rounded-md border-2 border-background hover:bg-gray-500"
              onClick={() => {
                getCollectionData();
              }}
            >
              Revert
            </button>
            <button
              className="bg-gray-200 py-2 px-10 rounded-md border-2 border-background hover:bg-gray-500"
              onClick={() => saveChanges()}
            >
              Save
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Admin;
