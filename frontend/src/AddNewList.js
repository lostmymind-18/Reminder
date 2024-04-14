import './AddNewList.css'
import EmojiPicker from 'emoji-picker-react';
import { Emoji } from 'emoji-picker-react';
import {useState} from 'react'

const ListColors = ['rgb(236,85,70)','rgb(242,163,60)','rgb(249,215,74)',
                    'rgb(104,206,106)','rgb(138,193,250)','rgb(59,130,247)',
                    'rgb(94,92,222)','rgb(236,93,123)','rgb(201,131,238)',
                    'rgb(196,167,124)','rgb(117,125,134)','rgb(227,183,176)'];


function IconPicker({type}){
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
    const [pickedEmoji, setPickedEmoji] = useState({unified:"1f423"});

    function emojiPickCallback(emojiData, _){
        setPickedEmoji(emojiData);
        setOpenEmojiPicker(false);
    }

    return <>
        <div className='icon-picker' onClick={()=>{setOpenEmojiPicker(true)}}>
        {(type==='type1' && Object.keys(pickedEmoji).length > 0)&&  
            <Emoji 
                unified={pickedEmoji.unified}
                size={25}
            />
        }
        </div>
        {openEmojiPicker === true && 
            <div className='table-icon'>
                <EmojiPicker 
                    open={openEmojiPicker}
                    onEmojiClick={emojiPickCallback}
                    theme='dark' 
                    emojiStyle='apple'
                    width={300}
                    height={400}
                />
            </div>
        }    
        </>
}

export default function AddNewList({onAddNewListChange}){
    const [name, setName] = useState("");
    const [pickedColor, setPickedColor] = useState(ListColors[0]);
    const [pickedIconType, setPickedIconType] = useState("type1");
    
    const listColorItems = ListColors.map(color=>
        <div 
            key={color} 
            className="color-item" 
            onClick={()=>{setPickedColor(color)}}
            >
            {pickedColor===color?
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={color} class="bi bi-record-circle-fill" viewBox="0 0 20 20">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={color} class="bi bi-circle-fill" viewBox="0 0 20 20">
                    <circle cx="8" cy="8" r="8"/>
                </svg>
            }
        </div>
    );
    return <div className='AddNewList'>
        <h4 style={{color:'white'}}>New list</h4>
        <div className="input">
           <span>Name:</span> 
           <input
                type="text"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
           />
        </div>
        <div className="row">
            <div className="color-selection">
                <span>Color:</span>
                <div className="color-table">
                    {listColorItems}
                </div>
            </div>
            <div className="icon-selection">
                <span>Icon: </span>
                <div className="icon-show">
                    <div className="show" onClick={()=>{setPickedIconType("type1")}}>
                        {pickedIconType==="type1" ?
                            <>
                                <div className="show-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(52,120,245)" class="bi bi-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    </svg>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={pickedColor} class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                </svg>
                                <IconPicker type={"type1"}/>
                            </>:
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={pickedColor} class="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8"/>
                            </svg>
                        }
                    </div>
                    {/* <div className="show" onClick={()=>{setPickedIconType("type2")}}>
                        {pickedIconType==="type2" ?
                            <>
                                <div className="show-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(52,120,245)" class="bi bi-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    </svg>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={pickedColor} class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                </svg>
                                <IconPicker type={"type2"}/>
                            </>:
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={pickedColor} class="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8"/>
                            </svg>
                        }
                    </div> */}
                </div>
            </div>
        </div>
        <div className="buttons">
            <button className="button button-activated" onClick={()=>{onAddNewListChange(false)}}>Cancel</button>
            {name===''?
                <button className="button button-inactivated">OK</button>
            :
                <button className="button button-activated" onClick={()=>{onAddNewListChange(false)}}>OK</button>
            }
        </div>
    </div>
}