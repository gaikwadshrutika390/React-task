import React from 'react';
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./components/users";
import {PostCreate, PostEdit, PostList} from "./components/posts";
import authProvider from "./providers/authProvider";
import GroupIcon from '@material-ui/icons/Group';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import {TodoCreate, TodoEdit, TodoList} from "./components/todos";
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';


const config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxx"
};

const options = {

}

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="users" list={UserList} icon={GroupIcon}/>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostAddIcon}/>
           
        </Admin>
    );
}

export default App;
