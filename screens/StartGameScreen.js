import {View , TextInput, StyleSheet} from 'react-native';
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen(){
return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"/>
    <PrimaryButton>Reset </PrimaryButton>
        <PrimaryButton>Confirm </PrimaryButton>
    </View>
);
}
export default StartGameScreen;
const styles=StyleSheet.create({
    inputContainer:{
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: "#6F1E51",
        borderRadius:8,
        elevation : 4,
        shadowColor : 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#f6e58d",
        borderBottomWidth: 2,
        color: "#f6e58d",
        marginVertical: 8,
        fontWeight:"bold",
        textAlign: 'center',
    }
})