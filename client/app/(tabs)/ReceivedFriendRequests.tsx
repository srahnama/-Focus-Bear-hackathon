import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios'; // You can use fetch instead if you prefer

const ReceivedFriendRequests = () => {
  const [ReceivedFriendRequests, setReceivedFriendRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = 1; // Assuming the logged-in user's ID is 1 (you can dynamically set this)

  // Fetch friend requests on component mount
  useEffect(() => {
    fetchReceivedFriendRequests();
  }, []);

  // Function to fetch received friend requests
  const fetchReceivedFriendRequests = async () => {
    try {
      const response = await axios.get(`http://192.168.1.2:3000/friend-requests/received/${userId}`);
      setReceivedFriendRequests(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching friend requests:', error);
      setLoading(false);
    }
  };

  // Accept a friend request
  const acceptFriendRequest = async (requestId) => {
    try {
      await axios.post(`http://192.168.1.2:3000/friend-requests/accept/${requestId}`);
      Alert.alert('Friend request accepted!');
      setReceivedFriendRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== requestId),
      ); // Remove the accepted request from the list
    } catch (error) {
      console.error('Error accepting friend request:', error);
      Alert.alert('Failed to accept friend request.');
    }
  };

  // Reject a friend request
  const rejectFriendRequest = async (requestId) => {
    try {
      await axios.delete(`http://192.168.1.2:3000/friend-requests/reject/${requestId}`);
      Alert.alert('Friend request rejected!');
      setReceivedFriendRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== requestId),
      ); // Remove the rejected request from the list
    } catch (error) {
      console.error('Error rejecting friend request:', error);
      Alert.alert('Failed to reject friend request.');
    }
  };

  // Loading state
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading friend requests...</Text>
      </View>
    );
  }

  // Render each friend request with accept and reject buttons
  const renderRequest = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.username}>{item.sender.username} has sent you a friend request.</Text>
      <View style={styles.buttons}>
        <Button
          title="Accept"
          onPress={() => acceptFriendRequest(item.id)}
          color="#4CAF50"
        />
        <Button
          title="Reject"
          onPress={() => rejectFriendRequest(item.id)}
          color="#F44336"
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ReceivedFriendRequests}
        renderItem={renderRequest}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReceivedFriendRequests;