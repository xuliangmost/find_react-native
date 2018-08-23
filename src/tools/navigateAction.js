/**@flow*/
import * as React from 'react'
import {NavigationActions, StackActions} from "react-navigation";

const Home = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({routeName: 'MainScreen'})],
});