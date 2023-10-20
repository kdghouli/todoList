import { LuClipboardList } from "react-icons/lu";
import PropTypes from 'prop-types';


const TodoItem = ({ tache, handlerTerminer }) => {
  
  return (
    <>
      <div className="d-flex justify-content-between bg-secondary bg-gradient shadow-md border border-1 rounded-3 p-2">
        <div key={tache.id} className="h4 text-white text-truncate"><LuClipboardList className='text-warning' />
        - {tache.todo}-{tache.id}
        </div>

        <input 
        className="form-check-input h4"
          type="checkbox"
          value={tache.terminer}
          defaultChecked={tache.terminer}
          onClick={() => handlerTerminer(tache.id)}
        />
      </div>
    </>
  );
};

TodoItem.propTypes = {
  tache: PropTypes.object,
  handlerTerminer:PropTypes.func,
  terminer:PropTypes.bool
}

export default TodoItem
