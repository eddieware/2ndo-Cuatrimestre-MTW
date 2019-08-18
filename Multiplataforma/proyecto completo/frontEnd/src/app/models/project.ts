/* Definimos nuestra clase modelo */

export class Project{
	
	//usamos el constructor y dentro
	//definimos cada propiedad de nuestro modelo
	//como parámetro

	constructor(
		public _id: string,
		public name: string,
		public description: string,
		public category: string,
		public year: number,
		public langs: string,
		public image: string
		){}
}