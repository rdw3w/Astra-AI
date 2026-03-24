import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ChatScreen = () => {
    const [messages, setMessages] = useState([
        {
            id: '1',
            text: 'Hi! I am Astra AI - Your Offline Survival Assistant. How can I help you today?',
            sender: 'ai',
            timestamp: new Date(),
        },
    ]);
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const scrollViewRef = useRef();

    const knowledgeBase = {
        'first aid': 'First Aid Guide:\n1. Assess the situation\n2. Call emergency services\n3. Perform CPR if needed\n4. Apply bandages for wounds\n5. Keep patient calm',
        'bleeding': 'Bleeding Management:\n1. Apply direct pressure with cloth\n2. Elevate the wound\n3. Apply tourniquet if severe\n4. Monitor for infection',
        'fracture': 'Fracture Care:\n1. Immobilize the area\n2. Apply ice\n3. Elevate if possible\n4. Seek medical help',
        'drowning': 'Drowning Recovery:\n1. Remove from water\n2. Check breathing\n3. Perform CPR if needed\n4. Recovery position\n5. Call emergency',
        'emergency numbers': 'Emergency Numbers:\n📞 Police: 911\n🚑 Ambulance: 911\n🔥 Fire: 911\n☠️ Poison Control: 1-800-222-1222',
        'water': 'Water Survival:\n• Drink only clean water\n• Ration water supply\n• Purify water by boiling\n• Collect rainwater\n• Avoid salt water',
        'food': 'Survival Food:\n• Identify edible plants\n• Hunt small animals\n• Fish in clean water\n• Gather nuts and berries\n• Store food safely',
        'shelter': 'Shelter Building:\n• Find natural caves\n• Build with branches\n• Insulate with leaves\n• Weatherproof roof\n• Choose safe location',
        'fire': 'Fire Starting:\n• Gather dry wood\n• Build fire pit\n• Use friction method\n• Keep fire controlled\n• Never leave unattended',
        'default': 'I can help with: First Aid, Emergency Numbers, Water Survival, Food, Shelter, Fire, Fractures, Drowning, and Bleeding. What do you need help with?'
    };

    const generateAIResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase();
        for (const [key, value] of Object.entries(knowledgeBase)) {
            if (lowerMessage.includes(key)) {
                return value;
            }
        }
        return knowledgeBase.default;
    };

    const handleSendMessage = () => {
        if (inputText.trim() === '') return;

        const userMessage = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setLoading(true);

        setTimeout(() => {
            const aiResponse = {
                id: (Date.now() + 1).toString(),
                text: generateAIResponse(inputText),
                sender: 'ai',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, aiResponse]);
            setLoading(false);
        }, 800);
    };

    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const renderMessage = ({ item }) => (
        <View style={[styles.messageBubble, item.sender === 'user' ? styles.userMessage : styles.aiMessage]}> 
            <Text style={[styles.messageText, item.sender === 'user' ? styles.userText : styles.aiText]}> 
                {item.text} 
            </Text>
            <Text style={styles.timestamp}> 
                {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} 
            </Text>
        </View>
    );

    return (
        <View style={styles.container}> 
            <View style={styles.header}> 
                <MaterialIcons name="chat" size={24} color="#FF6B6B" />
                <Text style={styles.headerTitle}>ASTRA AI</Text>
                <Text style={styles.headerSubtitle}>OFFLINE SYNC</Text>
            </View>
            <FlatList 
                ref={scrollViewRef} 
                data={messages} 
                renderItem={renderMessage} 
                keyExtractor={item => item.id} 
                contentContainerStyle={styles.messageList} 
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })} 
            />
            {loading && ( 
                <View style={styles.loadingContainer}> 
                    <ActivityIndicator size="large" color="#FF6B6B" /> 
                    <Text style={styles.loadingText}>Astra is thinking...</Text>
                </View>
            )} 
            <View style={styles.inputContainer}> 
                <TextInput 
                    style={styles.input} 
                    placeholder="Ask Astra AI..." 
                    placeholderTextColor="#888" 
                    value={inputText} 
                    onChangeText={setInputText} 
                    onSubmitEditing={handleSendMessage} 
                /> 
                <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}> 
                    <MaterialIcons name="send" size={20} color="#FFF" /> 
                </TouchableOpacity> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#1a1a1a', },
    header: { backgroundColor: '#2a2a2a', paddingVertical: 15, paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: '#FF6B6B', flexDirection: 'row', alignItems: 'center', },
    headerTitle: { color: '#FF6B6B', fontSize: 18, fontWeight: 'bold', marginLeft: 10, },
    headerSubtitle: { color: '#888', fontSize: 12, marginLeft: 5, },
    messageList: { paddingHorizontal: 10, paddingVertical: 10, },
    messageBubble: { marginVertical: 8, paddingHorizontal: 12, paddingVertical: 10, borderRadius: 12, maxWidth: '85%', },
    userMessage: { alignSelf: 'flex-end', backgroundColor: '#FF6B6B', },
    aiMessage: { alignSelf: 'flex-start', backgroundColor: '#2a2a2a', borderLeftWidth: 3, borderLeftColor: '#FF6B6B', },
    messageText: { fontSize: 14, lineHeight: 20, },
    userText: { color: '#FFF', },
    aiText: { color: '#E0E0E0', },
    timestamp: { fontSize: 10, color: '#AAA', marginTop: 4, },
    inputContainer: { flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#2a2a2a', borderTopWidth: 1, borderTopColor: '#444', },
    input: { flex: 1, backgroundColor: '#1a1a1a', color: '#FFF', paddingHorizontal: 12, paddingVertical: 10, borderRadius: 20, marginRight: 10, borderWidth: 1, borderColor: '#444', },
    sendButton: { backgroundColor: '#FF6B6B', padding: 10, borderRadius: 50, justifyContent: 'center', alignItems: 'center', },
    loadingContainer: { paddingVertical: 20, alignItems: 'center', },
    loadingText: { color: '#FF6B6B', marginTop: 10, },
});

export default ChatScreen;