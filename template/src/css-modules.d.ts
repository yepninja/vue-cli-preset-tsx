declare module '*.css?module' {
	// eslint-disable-next-line @typescript-eslint/interface-name-prefix
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames

	export = classNames;
}
