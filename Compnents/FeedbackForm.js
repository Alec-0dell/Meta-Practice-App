import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Platform, Pressable } from "react-native";

export default function FeedbackForm(){
    const [completeForm, setCompleteForm] = useState(false)
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    const [number, onChangeNumber] = React.useState('')
    const [notes, onChangeNotes] = React.useState('')

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS ==="ios" ? "padding" : "height"}
        style={styles.container}
        >
            <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
                {!completeForm && (
                    <>
                        <Text style={styles.headingSection}> Regester for ya boys app</Text>
                        <TextInput 
                            value={email}
                            onChangeText={onChangeEmail}
                            placeholder={'email'} 
                            keyboardType='email-address'
                            style={styles.input}
                        />
                        <TextInput 
                            value={password}
                            onChangeText={onChangePassword}
                            placeholder={'Password'}
                            maxLength={12}
                            secureTextEntry={true} 
                            style={styles.input}
                        />
                        <TextInput 
                            value={number}
                            onChangeText={onChangeNumber}
                            placeholder={'Phone Number'}
                            keyboardType='phone-pad'//number-pad decimal-pad numeric phone-pad 
                            style={styles.input}
                        />
                        <TextInput
                            value={notes}
                            onChangeText={onChangeNotes}
                            placeholder={'Notes'}
                            multiline={true}
                            maxLength={250} 
                            style={styles.input}
                        />
                    </>
                )}
                {completeForm && (
                    <Text style={styles.infoSection}>
                        Thank you for completing the form!
                    </Text>
                )}
                <Pressable style={styles.button} onPressOut={() => {setCompleteForm(!completeForm)}}>
                    <Text>
                       {completeForm ? 'Go Back' : 'Submit'}
                    </Text>
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>   
    )
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