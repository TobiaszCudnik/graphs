interface Graph<T> extends Set<T> {
	link(from: T, to: T);
	unlink(from: T, to: T);
	unlinkAll(node: T);
	from(from: T): Set<T>;
	to(to: T): Set<T>;
	visit(root: T, fn: (T) => void, visited: Map<T, T>);
	visitFrom(root, fn, visited, previous);
	visitAll(fn: (T) => void, visited: Map<T, T>);
	traverse(from: T, fn: (a1: T, a2: T) => void);
	traverse(from: (a1: T, a2: T) => void);
	traverseFrom(from: T, fn: (T) => void, visited: Map<T, T>);
	traverseAll(fn: (a1: T, a2: T) => void);
	set: Set<T>;
}


declare var Graph: {
	new<T>(): Graph<T>;
}

export default Graph;
