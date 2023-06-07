import React, { useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import AuthContext from "../../contexts/auth";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });

const Dashboard: React.FC = () => {
   
    const { signOut } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut();
    }
   
    return (
        <View style={styles.container}> 
            <Button title="Sign Out" onPress={handleSignOut}/>
        </View>
    );
};

export default Dashboard;