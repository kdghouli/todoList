import {   useEffect, useRef, useState  } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux"
import {incrim,decrim} from "./../redux/features/counterSlice"


  


    
    
    
    
  



function Todos() {

  const counter = useSelector(state => state.counter.value);
 const dispatch = useDispatch();
  const vidTodo = useRef();
  const [todo, setTodo] = useState("");
  //const [terminer, setTerminer] = useState(false);
  const [taches, setTaches] = useState([]);
  const [id] = useState();

  const url = "http://localhost:5000/todos";
  

  // fonctions creation tache 

  const pushedItem = () => {
    if (vidTodo.current.value) {
      let date_creation = new Date();
      let date_modification = new Date();

      let tache = {id, todo, terminer:false, date_creation, date_modification };

      axios.post(url, tache);

      setTaches([tache, ...taches]);

      setTodo("");
    } else return;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      pushedItem();
    }
  };



  // Upload automatic

  useEffect(() => {
    axios.get(url).then((resp) => setTaches(resp.data));
  },[]);




  // pour terminer la tache
  const handlerTerminer = async (id,terminer) => {     
    
    await axios
      .patch(url + "/" + id,{terminer:!terminer})
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    
  };

  const activeItem = () => {
    console.log("activeItem");
    let activeTaches = taches.filter((x) => x.terminer !== true);
    return setTaches(activeTaches);
  };
  const completeItem = () => {
    console.log("completeItem");
    let completeTaches = taches.filter((x) => x.terminer);
    return setTaches(completeTaches);
  };
  const allItem = () => {
    console.log("allItem");
    return;
  };

  return (
    <section className="text-center mx-auto bg-light p-4 mt-5">
      <div className="main d-flex justify-content-center align-items-center">ContentMain khalido</div>
    <h1>{counter}</h1>
    <button className="btn btn-primary" onClick={()=>dispatch(incrim(1))}>inc</button>
    <button className="btn btn-danger" onClick={()=>dispatch(decrim(1))}>Dec</button>

      <h1>TODO List</h1>

      <div className="row justify-content-evenly ">
        <input
          className="col form-control-lg"
          placeholder="Tache ..."
          type="text"
          id="ajouter"
          ref={vidTodo}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="col-1 ms-1 btn btn-success" onClick={pushedItem}>
          <MdOutlinePlaylistAdd className="icons" />
          Add
        </button>
      </div>

      <div
        className="btn-group mt-3"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          onChange={activeItem}
        />
        <label className="btn btn-outline-warning" htmlFor="btnradio1">
          Active
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          onChange={completeItem}
        />
        <label className="btn btn-outline-success" htmlFor="btnradio2">
          Complete
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          onChange={allItem}
        />
        <label className="btn btn-outline-secondary" htmlFor="btnradio3">
          Tous
        </label>
      </div>

      <div className="grido">
        {taches.map((tache) => (
          <TodoItem 
            key={tache.id}
            tache={tache}
            handlerTerminer={handlerTerminer}
          />
        ))}
      </div>
    </section>
  );
}

export default Todos;
