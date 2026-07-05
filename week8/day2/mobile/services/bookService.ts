const API_URL = "https://gutendex.com/books";

interface Author {
    name: string;
    birth_year: number | null;
    death_year: number | null;
}

interface Book {
    id: number;
    title: string;
    authors: Author[];
    formats: Record<string, string>;
}

interface dataResponse {
    results: Book[];
}

export async function fetchBooks() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch books: " + response.status);
    }
    
    const data: dataResponse = await response.json();

    return data.results.map((book) => ({
        id: book.id,
        title: book.title,
        authors: book.authors[0]?.name || "Unknown Author",
        formats: book.formats["image/jpeg"] || "",
    }));
}