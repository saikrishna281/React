import React, { useEffect, useState } from "react"
import axios from "axios"
const Product = () => {
    const [data, setData] = useState([])
    const [newbook, setNewbook] = useState({
        title: '',
        author: ''
    })
    const [editflag, setEditFlag] = useState(false);
    const [selectedbook, setSelectedbook] = useState(null)
    useEffect(() => {
        getdata()
    }, [])
    function getdata() {
        axios.get("http://localhost:4000/Books")
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function addbook() {
        axios.post("http://localhost:4000/Books", newbook)
            .then(() => {
                getdata();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    function updatebook() {
        axios.put("http://localhost:4000/Books/" + selectedbook.id, selectedbook)
            .then(() => {
                getdata();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    function deletebtn(id) {
        axios.delete("http://localhost:4000/Books/" + id)
        .then(() => {
            getdata();
        })
        .catch((error) => {
            console.error(error);
        });
    }

    function editbtn(book) {
        setSelectedbook({ ...book });
        setEditFlag(true)
    }
   

    return (
        <div className="container">
            <h1>Books</h1>
            {
                !editflag && (
                    <div>
                        <input type="text" placeholder="title" onChange={(e) => { setNewbook({ ...newbook, title: e.target.value }) }} />
                        <br />
                        <input type="text" placeholder="author" onChange={(e) => { setNewbook({ ...newbook, author: e.target.value }) }} /><br />
                        <button onClick={() => { addbook() }}>Add Book</button>
                    </div>
                )
            }
            {
                editflag && (
                    <div>
                        <input type="text" placeholder="title" value={selectedbook.title} onChange={(e) => { setSelectedbook({ ...selectedbook, title: e.target.value }) }} />
                        <br />
                        <input type="text" placeholder="author" value={selectedbook.author} onChange={(e) => { setSelectedbook({ ...selectedbook, author: e.target.value }) }} /><br />
                        <button onClick={() => { updatebook() }}>Update Book</button>
                    </div>
                )
            }

            <ul className="books">
                {
                    data.length > 0 && data.map((book) => {
                        return (
                            <li>
                                <h4>{book.id}.{book.title}</h4>
                                <h5>{book.author.toUpperCase()}</h5>
                                <button onClick={() => { editbtn(book) }}>Edit</button>
                                <button onClick={() => { deletebtn(book.id) }}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Product