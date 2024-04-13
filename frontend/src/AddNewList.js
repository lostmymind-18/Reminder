import './AddNewList.css'

export default function AddNewList({onAddNewListChange}){
    return <div className='AddNewList'>
        <h3 style={{color:'white'}}>New list</h3>
        <div className="input">
           <input/> <span>Name:</span> 
        </div>
        <div className="row">
            <div className="color-selection">
                Color: 
            </div>
            <div className="icon-selection">
                Icon: 
            </div>
        </div>
        <button onClick={()=>{onAddNewListChange(false)}}>Close</button>
    </div>
}