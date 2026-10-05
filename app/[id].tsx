import { getMovieDetailsById } from "@/api/movies";
import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator, Image } from "react-native";
import imageSet from "../node_modules/inline-style-prefixer/es/plugins/imageSet";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", id],
    queryFn: () => getMovieDetailsById(id),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View>
      <Stack.Screen options={{ title: movie.title }} />
      <Image
        source={{
          uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        }}
        style={{ width: "100%", height: 600, resizeMode: "stretch" }}
      />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 30, fontWeight: "500", marginVertical: 24 }}>
          {movie.title}
        </Text>
        <Text style={{ fontSize: 24 }}>{movie.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
