import React, { useState } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    TextInput, 
    Platform,
    TouchableOpacity
} from 'react-native';


export const Home = () => {
    const [newSkill, setNewSkill] = useState('');
    const [skills, setSkills] = useState([]);


    const handleAddNewSkill = () => {
        setSkills(prevState => [...prevState, newSkill]);
        setNewSkill('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome, Daniel
            </Text>
            <TextInput 
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
                value={newSkill}
            />
            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>
                    Add
                </Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

                {skills.map((skill, index) => (
                    <TouchableOpacity style={styles.buttonSkill} key={String(index)}>
                        <Text style={styles.textSkill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30,

    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonSkill: {
        backgroundColor: '#1f1e15',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    }
})