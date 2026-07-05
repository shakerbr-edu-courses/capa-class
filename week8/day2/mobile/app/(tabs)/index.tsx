import {
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchBooks } from "@/services/bookService";
import BookCard from "../../components/BookCard";
import { useState, useEffect, useCallback } from "react";

interface Author {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

interface Book {
  id: number;
  title: string;
  authors: string;
  formats: string;
}

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadBooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
    } catch (error) {
      setError("Failed to fetch books. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator
          size="large"
          color="#007fff"
        />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-red-500 text-lg mb-4">{error}</Text>
        <Button
          title="Retry"
          color="#007fff"
          onPress={loadBooks}
        />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={books}
        keyExtractor={(book) => book.id.toString()}
        contentContainerClassName="p-5 pb-10"
        renderItem={({ item }) => (
          <BookCard
            name={item.title}
            author={item.authors}
            bookCover={item.formats}
          />
        )}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center p-4">
            <Text className="text-gray-500">No books found.</Text>
          </View>
        }
      ></FlatList>
    </SafeAreaView>
  );
}
