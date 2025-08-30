/*
crie uma lista com 15 estantes com as seguintes propriedades:
idBookshelf: identificador unico da estante,
read: lista com o id de livros lidos na estante,
reading: lista com o id de livros sendo lidos na estante,
toRead: lista com o id de livros a serem lidos na estante,
rereading: lista com o id de livros sendo relidos na estante,
abandoned: lista com o id de livros abandonados na estante.
books: lista com os todos livros da estante.
Observação: o id dos livros deve ser único, não pode se repetir na mesma estante e vão de 1 a 64.
*/

const estantes = [
  {
    idBookshelf: 101,
    read: [1, 2, 3, 4],
    reading: [5, 6],
    toRead: [7, 8, 9],
    rereading: [10],
    abandoned: [11],
    books: [1,2,3,4,5,6,7,8,9,10,11]
  },
  {
    idBookshelf: 102,
    read: [12, 13, 14],
    reading: [15, 16],
    toRead: [17, 18, 19],
    rereading: [20],
    abandoned: [21],
    books: [12,13,14,15,16,17,18,19,20,21]
  },
  {
    idBookshelf: 103,
    read: [22, 23, 24],
    reading: [25, 26],
    toRead: [27, 28, 29],
    rereading: [30],
    abandoned: [31],
    books: [22,23,24,25,26,27,28,29,30,31]
  },
  {
    idBookshelf: 104,
    read: [32, 33, 34],
    reading: [35, 36],
    toRead: [37, 38, 39],
    rereading: [40],
    abandoned: [41],
    books: [32,33,34,35,36,37,38,39,40,41]
  },
  {
    idBookshelf: 105,
    read: [42, 43, 44],
    reading: [45, 46],
    toRead: [47, 48, 49],
    rereading: [50],
    abandoned: [51],
    books: [42,43,44,45,46,47,48,49,50,51]
  },
  {
    idBookshelf: 106,
    read: [52, 53, 54],
    reading: [55, 56],
    toRead: [57, 58, 59],
    rereading: [60],
    abandoned: [61],
    books: [52,53,54,55,56,57,58,59,60,61]
  },
  {
    idBookshelf: 107,
    read: [62, 63, 64],
    reading: [1, 12],
    toRead: [23, 34, 45],
    rereading: [56],
    abandoned: [2],
    books: [62,63,64,1,12,23,34,45,56,2]
  },
  {
    idBookshelf: 108,
    read: [3, 14, 25],
    reading: [36, 47],
    toRead: [58, 9, 20],
    rereading: [31],
    abandoned: [42],
    books: [3,14,25,36,47,58,9,20,31,42]
  },
  {
    idBookshelf: 109,
    read: [53, 5, 16],
    reading: [27, 38],
    toRead: [49, 60, 11],
    rereading: [22],
    abandoned: [33],
    books: [53,5,16,27,38,49,60,11,22,33]
  },
  {
    idBookshelf: 110,
    read: [44, 55, 7],
    reading: [18, 29],
    toRead: [40, 51, 13],
    rereading: [24],
    abandoned: [35],
    books: [44,55,7,18,29,40,51,13,24,35]
  },
  {
    idBookshelf: 111,
    read: [46, 57, 8],
    reading: [19, 30],
    toRead: [41, 52, 14],
    rereading: [25],
    abandoned: [36],
    books: [46,57,8,19,30,41,52,14,25,36]
  },
  {
    idBookshelf: 112,
    read: [48, 59, 10],
    reading: [21, 32],
    toRead: [43, 54, 15],
    rereading: [26],
    abandoned: [37],
    books: [48,59,10,21,32,43,54,15,26,37]
  },
  {
    idBookshelf: 113,
    read: [50, 61, 12],
    reading: [23, 34],
    toRead: [45, 56, 17],
    rereading: [28],
    abandoned: [39],
    books: [50,61,12,23,34,45,56,17,28,39]
  },
  {
    idBookshelf: 114,
    read: [52, 63, 14],
    reading: [25, 36],
    toRead: [47, 58, 19],
    rereading: [30],
    abandoned: [41],
    books: [52,63,14,25,36,47,58,19,30,41]
  },
  {
    idBookshelf: 115,
    read: [54, 1, 16],
    reading: [27, 38],
    toRead: [49, 60, 21],
    rereading: [32],
    abandoned: [43],
    books: [54,1,16,27,38,49,60,21,32,43]
  }
];
