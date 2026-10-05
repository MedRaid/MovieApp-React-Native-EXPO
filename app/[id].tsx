import { getMovieDetailsById } from "@/api/movies";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { data, isLoading, error } = useQuery({
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
      <Text style={{ fontSize: 24, fontWeight: "500" }}> {data.title}</Text>
    </View>
  );
};

export default MovieDetails;
