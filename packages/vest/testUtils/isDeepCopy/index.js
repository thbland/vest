const isDeepCopy = (source, clone) => {
  const queue = [[source, clone]];

  outer: while (queue.length) {
    const [source, clone] = queue.shift();

    if (!source || typeof source !== 'object') {
      if (typeof clone !== 'function') {
        expect(clone).toBe(source);
      }
      continue;
    }

    expect(clone).not.toBe(source);

    if (Array.isArray(source)) {
      source.forEach((v, i) => {
        queue.push([source[i], clone[i]]);
      });
    } else if (typeof source === 'object') {
      Object.keys(source).forEach(key => queue.push([source[key], clone[key]]));
    }

    continue outer;
  }
};

export const SAMPLE_DEEP_OBJECT = [
  {
    _id: '5eb4784ee29b8b3003688425',
    index: 0,
    name: {
      first: 'Velasquez',
      last: 'Lara',
    },
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    tags: ['Lorem', 'ullamco', 'minim', 'ut', 'ad'],
  },
  {
    _id: '5eb4784e64618155ef167791',
    index: 1,
    name: {
      first: 'Mcconnell',
      last: 'Dennis',
    },
    range: [
      {
        a: 1,
        b: [
          {
            a: 2,
            c: ['one', 'two', 'three', 'four'],
          },
        ],
      },
    ],
    tags: ['nulla', 'ex', 'et', 'sint', 'aliqua'],
  },
];

export default isDeepCopy;
