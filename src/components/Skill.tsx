import React from "react";
import { 
    TouchableOpacity,
    TouchableOpacityProps,
    Text, 
    StyleSheet 
} from "react-native";

export const Skill: React.FC<TouchableOpacityProps> = ({children, ...rest}) => {
    return (
        <TouchableOpacity style={styles.buttonSkill} {...rest}>
            <Text style={styles.textSkill}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
});
