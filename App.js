import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'http://newsapi.org/v2/top-headlines?country=lv&category=business&apiKey=bfb361de38ac411bb2c17daee018d878'
    )
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{marginTop: 20, borderBottomColor: '#ccc', borderBottomWidth: "200", backgroundColor: '#ff0'}}>
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
