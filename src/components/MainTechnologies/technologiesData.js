import { v4 as uuidv4 } from "uuid";
import Javascript from "../../images/technologies/javascript.svg";
import React from "../../images/technologies/react.svg";
import Vue from "../../images/technologies/vue.png";
import Angular from "../../images/technologies/angular.svg";
import Node from "../../images/technologies/nodejs.svg";
import MongoDB from "../../images/technologies/mongodb.svg";
import Typescript from "../../images/technologies/typescript.svg";
import ReactNative from "../../images/technologies/reactNative.svg";
import Redux from "../../images/technologies/redux.png";

export const data = [
	{
		id: uuidv4(),
		image: `${Javascript}`,
		name: "javascript",
	},
	{
		id: uuidv4(),
		image: `${React}`,
		name: "react.js",
	},

	{
		id: uuidv4(),
		image: `${Vue}`,
		name: "vue.js",
	},
	{
		id: uuidv4(),
		image: `${Angular}`,
		name: "angular.js",
	},
	{
		id: uuidv4(),
		image: `${Node}`,
		name: "node.js",
	},
	{
		id: uuidv4(),
		image: `${MongoDB}`,
		name: "mongo-db",
	},
	{
		id: uuidv4(),
		image: `${Typescript}`,
		name: "typescript",
	},
	{
		id: uuidv4(),
		image: `${ReactNative}`,
		name: "react-native",
	},
	{
		id: uuidv4(),
		image: `${Redux}`,
		name: "redux",
	},
];
