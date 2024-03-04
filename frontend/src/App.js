import logo from './logo.svg';
import './App.css';

function MenuItem({name,tasks}){
    return (
        <div className="MenuItem">
            <div className="MenuItem-row">
                <div className="MenuItem-tasks-count">
                    {tasks.length}
                </div>
            </div>
            <div className="MenuItem-row">
                <div className="MenuItem-name">
                    {name}
                </div>
            </div>
        </div>
    )
}

function SearchBar(){
    return (
        <div className="SearchBar">
            <div className="SearchBar-search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="rgb(225,225,225)" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </div>
            <div className="SearchBar-search-text">
                Search
            </div>
        </div>
    );
}

function Menu({categories, tasks}){
    const menuItems = [];
    categories.forEach((category)=>{
        menuItems.push({name: category,tasks: tasks});
    });
    for(let i = 0; i < menuItems.length; i++){
        let item = menuItems[i];
        menuItems[i] = <MenuItem name={item.name} tasks={item.tasks}/>;
    }
    return (
        <div className="Menu">
            {menuItems}
        </div>
    );
}

function ListItem({name,tasks}){
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
                {tasks.length}
            </div>
        </div>
    )
}

function MyList({list}){
    let listJsx = []
    list.forEach((item)=>{
        listJsx.push(<ListItem name={"Reminder"} tasks={[]}/>)
    })
    return (
        <div className="MyList">
            <div className="MyList-name">
                My list
            </div>
            {listJsx}
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

function SideBar({categories,tasks}){
    return (
        <div className="SideBar">
            <SearchBar/>
            <Menu categories={categories} tasks={tasks}/>
            <MyList list={["Reminder","Sport"]}/>
            <AddList/>
        </div>
    )
}

function Heading({name}){
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
                    There are 269 tasks done &#8729;&nbsp;
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

function TaskListName({listName, tasks}){
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
        <Task task={NaN} last={true}/>
        </>
    )
}

function TaskTableAll({tasks}){
    let tasksOfLists = {}
    tasks.forEach((task)=>{
        if(!tasksOfLists.hasOwnProperty(task.taskList)){
            tasksOfLists[task.taskList] = [task];
        }
        else{
            tasksOfLists[task.taskList].push(task);
        }
    })
    let taskListJsx = [];
    for(var list in tasksOfLists){
        taskListJsx.push(<TaskListName listName={list} tasks={tasksOfLists[list]}/>)
    }
    return (
        <div className="TaskTable">
            {taskListJsx}
        </div>
    )
}

function MainTable({name,tasks}){
    return (
        <div className="MainTable">
            <Heading name={name}/>
            <TaskTableAll tasks={tasks}/>
        </div>
    )
}

function Reminder({categories,tasks}) {
    let name = "All";
    return (
        <div className="Reminder">
            <SideBar categories={categories} tasks={tasks}/>
            <MainTable name={name} tasks={tasks}/>
        </div>
    );
}

const TASKS = [
    {taskList: "Reminder", status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"},
    {taskList: "Reminder", status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"},
    {taskList: "Reminder", status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"},
    {taskList: "Reminder", status:"done",note:"This is some note",tags:["tag 1","tag 2"],day:"some day",location:"some location",priority:"some priority",image:"some image link"}
];

const CATEGORIES = [
    "Today", "All", "Flag", "Done", "Deadline"
];

export default function App(){
    return (
        <div className="App">
            <Reminder categories={CATEGORIES} tasks={TASKS}/>
        </div>
    );
};
