interface Book {
  title: string;
  pages: number;
  author: string;
}

interface BookPreview {
  title: string;
}

const book1: BookPreview = { title: "TS" }; // Sem Pick

const book2: Pick<Book, "title" | "pages"> = { title: "JS", pages: 150 }; // Com Pick
