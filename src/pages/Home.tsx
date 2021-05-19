import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList
} from 'react-native';
import { format } from 'date-fns';
import { Button } from '../components/Button';
import { Skill } from '../components/Skill';


type SkillData = {
    id: string
    name: string
    date?: Date
}

export const Home: React.FC = () => {
    const [newSkill, setNewSkill] = useState('');
    const [skills, setSkills] = useState<SkillData[]>([]);
    const [greeting, setGreeting] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    const handleAddNewSkill = () => {
        const data: SkillData = {
            id: String(new Date().getTime()),
            name: newSkill,
        }
        setSkills(prevState => [...prevState, data]);
        setNewSkill('');
    }

    const getGreeting = () => {
        const timeNow = new Date();
        const time = format(timeNow, "ccc d  LLL p");
        const amPm = format(timeNow, "a");
        const isPm = amPm === 'PM';
        const hour = timeNow.getHours();
        setCurrentTime(time);

        if(!isPm && hour < 12) setGreeting('Good Morning!')
        else if(isPm && hour < 6) setGreeting('Good Afternoon!')
        else if(isPm && hour > 6 && hour < 8) setGreeting('Good Evening!')
        else setGreeting('Good Night...')
    }

    const handleRemoveSkill = (id: string) => {
        setSkills(prevState => prevState.filter(skill => skill.id !== id))
    }

    useEffect(() => {
        getGreeting();
    }, [skills]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome, Daniel
            </Text>
            <Text style={styles.timeInfo}>
                {currentTime}
            </Text>
            <Text style={styles.greetings}>
                {greeting}
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
            <FlatList
                data={skills}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item: skill}) => (
                    <Skill
                        onPress={() => handleRemoveSkill(skill.id)}
                    >
                        {skill.name}
                    </Skill>
                )}
            />          
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
    greetings: {
        paddingVertical: 5,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    timeInfo: {
        paddingVertical: 5,
        color: '#fff'
    }
});
