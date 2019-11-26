export function f() {
	console.log('yeah boysss');
}

export function funcIE() {
	const a = { prop1: 'okay1', prop2: 'okay2'};
	const b = { prop3: 'okay1', prop4: 'okay2'};
	console.log({...a, ...b});
}