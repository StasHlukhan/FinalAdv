/// <reference types="react-scripts" />

interface IJSWindow {
	google: any;
}

interface ISidebarButton {
	buttonText: string;
	getPath: (...args) => string;
}
interface IBonusesButton {
	buttonText: string;
	getPath:()=> string;
}

interface IUserInfo {
	name:string;
	surname:string;
	job:string;
	age:number;
	email:string;
	skype:string;
	tags:ITag[];
}

interface ITag{
	tagName:string;
}


interface Iphrase {
	quote: string;
	author: string;
}
declare module '*.webm' {
	const src: string;
	export default src;
  }
  declare module '*.mp4' {
	const src: string;
	export default src;
  }
  
interface IId{
	id:number;
}
interface IVideo extends IId {
	url:string;
}
interface ISubSection extends IId{
	description:string;
	title:string;
	video:IVideo;
}
interface ISection  extends IId{
	title: string;
	sections: ISubSection[];
}
enum Side {
	T,
	CT
}

interface IMap extends IId {
	side:Side;
	mainVideo: IVideo;
	name: string;
	sections: ISection[];
}