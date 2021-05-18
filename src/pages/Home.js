import React, { useState } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    TextInput, 
    Platform,
    ScrollView
} from 'react-native';
import { Button } from '../components/Button';
import { Skill } from '../components/Skill';


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
            <Button 
                activeOpacity={0.7}
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {skills.map((skill, index) => (
                    <Skill key={String(index)}>
                        {skill}
                    </Skill>
                ))}
            </ScrollView>
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
    }
})