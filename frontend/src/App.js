import './App.css';
import {useState} from 'react'

function MenuItem({name,taskCount,activity,onActivityChange}){
    let bgcolor = "rgb(82,83,84)";
    let color = "rgb(206,207,209)";
    if(name==="scheduled" && activity==="scheduled")
        bgcolor = "rgb(255,69,58)";
    if(name==="today" && activity==="today")
        bgcolor = "rgb(10,132,255)";
    if(name==="done" && activity==="done")
        bgcolor = "rgb(114,126,135)";
    if(name==="all" && activity==="all")
        bgcolor = "rgb(99,99,102)";
    if(name === activity)
        color = "white";

    return (
        <div 
            className="MenuItem" 
            style={{backgroundColor:bgcolor,color:color}}
            onClick={()=>{onActivityChange(name)}}
        >
            <div className="MenuItem-row">
                <div className="MenuItem-tasks-count">
                    {taskCount}
                </div>
            </div>
            <div className="MenuItem-row">
                <div className="MenuItem-name">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </div>
            </div>
        </div>
    )
}

function Menu({categoryCount,activity,onActivityChange}){
    const listMenuItems = [];
    for(const [key,value] of Object.entries(categoryCount)){
        listMenuItems.push(
            <MenuItem 
                name={key} 
                taskCount={value} 
                activity={activity}
                onActivityChange={onActivityChange}
            />
        );
    }
    return (
        <div className="Menu">
            {listMenuItems}
        </div>
    );
}

function SearchBar({filterText, onFilterTextChange}){
    return (
        <div className="SearchBar">
            <div className="SearchBar-search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="13" height="13" fill="rgb(225,225,225)" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </div>
            <input 
                type="text" 
                value={filterText} 
                placeholder='Search...' 
                className="SearchBar-input"
                onChange={(e)=>{onFilterTextChange(e.target.value)}}
                />
            {(filterText !== "") && (<div className="SearchBar-clear"
                onClick={()=>{onFilterTextChange('')}}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="rgb(225,225,225)" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
            </svg>
        </div>)}
        </div>
    );
}

function ListItem({name, taskCount}){
    return (
        <div className="ListItem">
            <div className="ListItem-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filter-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            <div className="ListItem-name">
                {name}
            </div>
            <div className="ListItem-count">
                {taskCount}
            </div>
        </div>
    )
}

function MyList({listCount}){
    const listListItems = [];
    for(const [key,value] of Object.entries(listCount)){
        listListItems.push(
            <ListItem name={key} taskCount={value}></ListItem>
        );
    }
    return (
        <div className="MyList">
            <div className="MyList-name">
                My list
            </div>
            {listListItems}
        </div>
    )
}

function AddList(){
    return (
        <div className="AddList">
            <div className="AddList-add-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="rgb(206,207,209)" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
            </div>
            <div className="AddList-text">
                Add new list
            </div>
        </div>
    )
}

function SideBar({categoryCount,listCount, filterText, onFilterTextChange,activity,onActivityChange}){
    return (
        <div className="SideBar">
            <SearchBar 
                filterText={filterText} 
                onFilterTextChange={onFilterTextChange}
            />
            <Menu 
                categoryCount={categoryCount} 
                activity={activity}
                onActivityChange={onActivityChange}
            />
            <MyList listCount={listCount}/>
            <AddList/>
        </div>
    )
}

function Heading({name,taskDoneCount}){
    return (
        <>
            <div className="Heading">
                <div className="Heading-add-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="rgb(153,153,154)" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </div>
                <div className="Heading-name">
                    {name}
                </div>
            </div>
            <div className="Inform-completed-task">
                <div className="inform-text">
                    There are {taskDoneCount} tasks done &#8729;&nbsp;
                </div>
                <div className="delete-completed-tasks">
                    Delete
                </div>
                <div className="show-completed-tasks">
                    Show
                </div>
            </div>
        </>
    )
}

function Task({task, last}){
    let taskContent = "";
    let circle = NaN;
    if(last){
        circle = <svg fill="rgb(91,92,93)" width="18" height="18" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                    d="m13.5 26.5c1.412 0 2.794-.225 4.107-.662l-.316-.949c-1.212.403-2.487.611-3.792.611v1m6.06-1.495c1.234-.651 2.355-1.498 3.321-2.504l-.721-.692c-.892.929-1.928 1.711-3.067 2.312l.467.884m4.66-4.147c.79-1.149 1.391-2.418 1.777-3.762l-.961-.276c-.356 1.24-.911 2.411-1.64 3.471l.824.567m2.184-5.761c.063-.518.096-1.041.097-1.568 0-.896-.085-1.758-.255-2.603l-.98.197c.157.78.236 1.576.236 2.405-.001.486-.031.97-.09 1.448l.993.122m-.738-6.189c-.493-1.307-1.195-2.523-2.075-3.605l-.776.631c.812.999 1.46 2.122 1.916 3.327l.935-.353m-3.539-5.133c-1.043-.926-2.229-1.68-3.512-2.229l-.394.919c1.184.507 2.279 1.203 3.242 2.058l.664-.748m-5.463-2.886c-1.012-.253-2.058-.384-3.119-.388-.378 0-.717.013-1.059.039l.077.997c.316-.024.629-.036.98-.036.979.003 1.944.124 2.879.358l.243-.97m-6.238-.022c-1.361.33-2.653.878-3.832 1.619l.532.847c1.089-.684 2.281-1.189 3.536-1.494l-.236-.972m-5.517 2.878c-1.047.922-1.94 2.01-2.643 3.212l.864.504c.649-1.112 1.474-2.114 2.441-2.966l-.661-.75m-3.54 5.076c-.499 1.293-.789 2.664-.854 4.072l.999.046c.06-1.3.328-2.564.788-3.758l-.933-.36m-.78 6.202c.163 1.396.549 2.744 1.14 4l.905-.425c-.545-1.16-.902-2.404-1.052-3.692l-.993.116m2.177 5.814c.788 1.151 1.756 2.169 2.866 3.01l.606-.796c-1.025-.78-1.919-1.721-2.646-2.783l-.825.565m4.665 4.164c1.23.65 2.559 1.1 3.943 1.328l.162-.987c-1.278-.21-2.503-.625-3.638-1.225l-.468.884m6.02 1.501c.024 0 .024 0 .048 0v-1c-.022 0-.022 0-.044 0l-.004 1"/>
                </svg>
    }
    else{
        circle = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgb(91,92,93)" class="bi bi-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                </svg>
        taskContent = <div className="Task-Content">
                        {task.content}
                      </div>;
    }
    return (
        <div className="Task">
            <div className="Task-CheckBox">
                {circle}
            </div>
            {taskContent}
        </div>
    )
}

function TaskList({listName, tasks}){
    let taskList = [];
    tasks.forEach((task)=>{
        taskList.push(<Task task={task}/>)
    })
    return (
        <>
        <div className="TaskListName-Name">
            {listName}
        </div>
        {taskList}
        </>
    )
}

function TaskTable({listLists}){
    const listListsJsx = [];
    for(const [key,value] of Object.entries(listLists)){
        listListsJsx.push(
            <TaskList listName={key} tasks={value}></TaskList>
        );
    }
    return (
        <div className="TaskTable">
            {listListsJsx}
            <Task task={NaN} last={true}/>
        </div>
    )
}

function MainTable({name,taskDoneCount,listLists,activity}){
    return (
        <div className="MainTable">
            <Heading name={name} taskDoneCount={taskDoneCount}/>
            <TaskTable listLists={listLists}/>
        </div>
    )
}

function Reminder({tasks}) {
    const [filterText, setFilterText] = useState('');
    const [activity, setActivity] = useState("all");
    //1. Xác định các list và số lượng task trong từng list
    let lists = {};
    tasks.forEach(task => {
        if(!Object.hasOwn(lists,task.listName))
            lists[task.listName] = {done:[],not_done:[]};

        if(task.status === "done")
            lists[task.listName].done.push(task);

        else
            lists[task.listName].not_done.push(task);
        }
    );
    let listCount = {};
    for (const [key,value] of Object.entries(lists)){
        listCount[key] = value.not_done.length;
    }

    //2. Xác định các danh mục và số lượng task trong từng danh mục
    let listCategories = {all:[],today:[],done:[],scheduled:[]};
    tasks.forEach(task=>{
        if(task.status === "done")
            listCategories.done.push(task);
        else{
            listCategories.all.push(task);
            if(task.time!==""){
            listCategories.scheduled.push(task);
            const taskDate = new Date(task.time);
            const today = new Date();
            if(taskDate < today)
                listCategories.today.push(task);
            }
        }
    });
    let categoryCount = {};
    for(const [key,value] of Object.entries(listCategories)){
        categoryCount[key] = value.length;
    }
    //4. Với từng nội dung thì sẽ xác định header name, số task đã hoàn thành và danh sách các list tương ứng
    let header = null;
    let doneCount = null;
    let renderList = {};
    switch(activity){
        case "all":
            header = "All";
            doneCount = categoryCount.done;
            for(const [key,val] of Object.entries(lists)){
                renderList[key] = val.not_done;
            }
            break;
        case "today":
            header = "Today";
            doneCount = categoryCount.done;
            break;
        case "scheduled":
            header = "Scheduled";
            doneCount = 0;
            break;
        case "done":
            header = "Done";
            doneCount = 0;
            break;
        default:
            break;
    }
    return (
        <div className="Reminder">
            <SideBar 
                categoryCount={categoryCount} 
                listCount={listCount} 
                filterText={filterText} 
                onFilterTextChange={setFilterText} 
                activity={activity}
                onActivityChange={setActivity}    
            />
            <MainTable 
                name={header} 
                taskDoneCount={doneCount} 
                listLists={renderList}
                activity={activity}
            />
        </div>
    );
}

const TASKS = [
    {listName: "Reminder", content: "This is a task", status:"done",note:"This is some note",tags:["tag 1","tag 2"],time:"2024-04-10T14:22:00Z",location:"some location",priority:"some priority",image:"some image link"},
    {listName: "Reminder", content: "This is a task", status:"done",note:"This is some note",tags:["tag 1","tag 2"],time:"2024-04-11T14:22Z",location:"some location",priority:"some priority",image:"some image link"},
    {listName: "Reminder", content: "This is a task", status:"not done",note:"This is some note",tags:["tag 1","tag 2"],time:"2024-04-12T14:22Z",location:"some location",priority:"some priority",image:"some image link"},
    {listName: "Reminder", content: "This is a task", status:"not done",note:"This is some note",tags:["tag 1","tag 2"],time:"2024-04-11T14:22Z",location:"some location",priority:"some priority",image:"some image link"},
    {listName: "My Goals", content: "This is a task", status:"not done",note:"This is some note",tags:["tag 1","tag 2"],time:"2024-04-10T14:22Z",location:"some location",priority:"some priority",image:"some image link"},
    {listName: "My Goals", content: "This is a task", status:"done",note:"This is some note",tags:["tag 1","tag 2"],time:"2024-04-11T14:22Z",location:"some location",priority:"some priority",image:"some image link"},
    {listName: "My Goals", content: "This is a task", status:"done",note:"This is some note",tags:["tag 1","tag 2"],time:"2024-04-12T14:22Z",location:"some location",priority:"some priority",image:"some image link"},
    {listName: "My Goals", content: "This is a task", status:"done",note:"This is some note",tags:["tag 1","tag 2"],time:"2024-04-11T14:22Z",location:"some location",priority:"some priority",image:"some image link"}
];

// const CATEGORIES = [
//     "Today", "All","Done", "Scheduled"
// ];

export default function App(){
    return (
        <div className="App">
            <Reminder tasks={TASKS}/>
        </div>
    );
};
