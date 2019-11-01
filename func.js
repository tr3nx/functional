let not = (b) => !b;
// not(false) // true

let empty = () => [];
// empty() // []

let len = (xs) => xs.length;
// len([1,2,3]) // 3

let cons = (x) => (xs) => [x, ...xs];
// cons(2)(cons(1)(empty())) // [2,1]

let head = (xs) => xs[0];
// head([1,2,3]) // 1

let last = (xs) => xs.slice(len(xs) - 1);
// last([1,2,3]) // 3

let init = (xs) => xs.slice(0, len(xs) - 1);
// init([1,2,3,4,5]) // [1,2,3,4]

let tail = (xs) => xs.slice(1, len(xs));
// tail([1,2,3,4]) // [2,3,4]

let reverse = (xs) => [...xs].reverse();
// reverse([1,2,3]) // [3,2,1]

let insert = (x) => (i) => (xs) => [...xs.slice(0, i), x, ...xs.slice(i, len(xs))];
// insert(42)(1)([1,2,3,4]) // [1,42,2,3,4]

let split = (i) => (xs) => [xs.slice(0, i), xs.slice(i, len(xs))];
// split(3)([1,2,3,4,5,6]) // [[1,2,3],[4,5,6]]

let limit = (l) => (h) => (x) => (x > l) ? (x < h) ? x : h : l;
// limit(2)(5)(7) // 5

let sort = (xs) => [...xs].sort((a, b) => a - b);
// sort([2,3,4,9,10,2]) // [2,2,3,4,9,10]

let map = (fn) => (xs) => [...xs].map(fn);
// map(x => x * 10)([1,2,3,4]) // [10,20,30,40]

let range = (c) => map((_, i) => i)([...Array(c)]);
// range(5) // [0,1,2,3,4]

let foldl = (fn) => (z) => (xs) => { var zz = z; map(x => { zz = fn(zz)(x); })([...xs]); return zz; };
// foldl(x => z => x * z)(1)([1,2,3,4,5]) // 120

let set = (xs) => [...new Set(xs)];
// set([1,2,3,3,3]) // [1,2,3]

let filter = (fn) => (xs) => [...xs].filter(fn);
// filter(x => x > 3)([1,2,3,4,5]) // [4,5]

let includes = (x) => (xs) => len(filter(y => y == x)(xs));
// includes(5)([1,2,3,4,5,5]) // 2

let intersection = (xxs) => set(filter(x => includes(x)(head(tail([...xxs]))))(head(init([...xxs]))));
// intersection([[1,2,2,4,5,3,4],[3,3,4,4,5]]) // [4,5,3]

let union = (xxs) => set([...set(head([...xxs])), ...set(head(tail([...xxs])))]);
// union([[1,2,2,3],[3,3,4,4,5]]) // [1,2,3,4,5]

let merge = (xxs) => [...head([...xxs]), ...head(tail([...xxs]))];
// merge([[1,2,3,4], [4,5,6,6,7]]) // [1,2,3,4,4,5,6,6,7]

let complement = (xxs) => filter(x => not(includes(x)(head(tail([...xxs])))))(head([...xxs]));
// complement([[1,2,3],[2,3,4]]) // [1]

let foldr = (fn) => (z) => (xs) => undefined;
// foldr(x => z => x * z)(1)([1,2,3,4,5]) // 120

cons(head(tail(reverse(cons(foldl(z => x => z + x)(0)(cons(head(init(sort(set(reverse(cons(32)(reverse(cons(69)(last(split(2)(cons(412)(cons(90)(cons(42)(cons(last(cons(51)(map(x => x * 2)(filter(x => x === limit(50)(100)(x))(reverse(insert(91)(3)(cons(10)(cons(5)(init(reverse(cons(2)(cons(1)(empty())))))))))))))(empty())))))))))))))))(range(5))))(cons(4)(empty()))))))(empty())
