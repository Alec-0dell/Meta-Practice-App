import { Pressable, Text, View, StyleSheet } from "react-native";

export default function Welcome({navigation}){
    return(
        <View style={{flex: 1}}>
            <Text style={styles.headingSection}>
                Welcome to Little Lemon
            </Text>
            <Text style={styles.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.buttonText}>
                    View Menu
                </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('FeedbackForm')}>
                <Text style={styles.buttonText}>
                    Provide Feedback
                </Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({ 
    container: { 
    flex: 1, 
}, 
input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: '#EDEFEE', 
    backgroundColor: '#F4CE14', 
 }, 
messageInput: { 
    height: 100, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    backgroundColor: '#F4CE14', 
 }, 
infoSection: { 
    fontSize: 24, 
    padding: 20, 
    marginVertical: 8, 
    color: '#EDEFEE', 
    textAlign: 'center', 
    backgroundColor: '#495E57', 
 }, 
headingSection: { 
    fontSize: 28, 
    padding: 20, 
    marginVertical: 8, 
    color: '#EDEFEE', 
    textAlign: 'center', 
    backgroundColor: '#495E57', 
 },
 button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#edefee',
    borderColor: 'Black',
    borderWidth: 2,
    borderRadius: 12
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32
  } 
}); 