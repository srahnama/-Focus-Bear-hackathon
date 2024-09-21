import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

// Example functional component
const Users = () => {
  // State to store users data and loading state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://192.168.1.2:3000/users'); // Replace with your API URL
      const data = await response.json();
      setUsers(data); // Assuming the response is a list of users
      console.log('Users:', data);
      setLoading(false); // Disable loading state once data is fetched
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false); // Stop loading if there is an error
    }
  };

  // Use useEffect to call fetchUsers when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Render a single user item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.username}</Text> 
      <Text>{item.email}</Text>  
    </View>
  );

  // Show a loading indicator while fetching data
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users} // Users data from state
        renderItem={renderItem} // Function to render each user
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Users;