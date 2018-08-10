import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './component/Auth';
import Dashboard from './component/Dashboard';
import Post from './component/Post';
import Form from './component/Form';

export default (

<Switch>
<Route path='/' component={Auth} exact />
<Route path='/dshboard' component={Dashboard} />
<Route path='/post/postid' component={Post} />
<Route path='/new' component={Form} />
</Switch>
)