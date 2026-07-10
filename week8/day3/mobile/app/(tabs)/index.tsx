import {
  Text,
  Button,
  View,
  Alert,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchBooks } from "@/services/bookService";
import { loginUser } from "@/services/authService";
import BookCard from "../../components/BookCard";
import Login from "../../components/Login";
import { useState, useEffect, useCallback } from "react";

interface Book {
  id: number;
  title: string;
  authors: string;
  formats: string;
}

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      Alert.alert("Login Failed", "Please enter both email and password");
      return;
    }
    try {
      const token = await loginUser(email, password);
      setIsAuthenticated(true);
      Alert.alert("Login Successful", `Token: ${token}`);
    } catch (error) {
      Alert.alert("Login Failed", "Invalid email or password");
    }
  }, [email, password]);


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

  if (!isAuthenticated) {
    return (
      <SafeAreaView>
        <Login
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onPress={handleLogin}
        />
      </SafeAreaView>
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
