import { useState, useEffect } from "react";
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import { db } from "./firebase";

export function Ranking() {
    const [topUsers, setTopUsers] = useState([]);

    useEffect(() => {
        Top5Users();
    }, []);

    function Top5Users() {
        try {
            const rankingRef = collection(db, "Ranking");
            const q = query(rankingRef, orderBy("puntuacion", "desc"), limit(5));

            getDocs(q)
            .then((queryResult)=> {
                const users = [];
                queryResult.forEach((doc) => {
                    console.log(doc);
                    users.push({ id: doc.id, ...doc.data() });
                });
            setTopUsers(users);

            }).catch((error)=>{console.log("error",error)});

        } catch (error) {
            console.error("Error al obtener el ranking:", error);
        }
    }

    return (
        <div className="ranking">
            <h2>Top 5 Usuarios</h2>
            <ul>
                {topUsers.map((user, index) => (
                    <li key={user.id}>
                        <span>{index + 1}. {user.usuario}</span>
                        <span> puntuacion: {user.puntuacion}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}