import { StyleSheet, View,Text, Pressable} from 'react-native';

function GoalItem(props) {


    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem} >
                <Text style={styles.text}> {props.text}</Text>
            </View>
        </Pressable>
        
    )

};



export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
        padding: 8,
        
    },
    text: {
        color: 'white'
    }

}  
)