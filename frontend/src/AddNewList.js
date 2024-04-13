import './AddNewList.css'

export default function AddNewList({onAddNewListChange}){
    return <div className='AddNewList'>
        <h3>New list</h3>
        <div className="input">
            <input/>
        </div>
        <div className="color-selection">
        
        </div>
        <div className="icon-selection">

        </div>
        <button onClick={()=>{onAddNewListChange(false)}}>Close</button>
    </div>
}