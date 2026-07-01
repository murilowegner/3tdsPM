import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.corpoLayout}>
      <view style={styles.margemlateral}>
        <ImageBackground
        source={{uri: ''}}
        resizeMode="cover"
         />
      </view>

      <view style={styles.centerflex}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/Detalhes")}>
        <Text style={styles.buttonText}>Ir para a próxima tela</Text>
      </TouchableOpacity>
      </view>

      <view style={styles.margemlateral}>
        <text>teste2</text>
      </view>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f5f7fb",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#4b5563",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  tip: {
    marginTop: 16,
    textAlign: "center",
    color: "#6b7280",
    fontSize: 14,
  },
  margemlateral: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerflex: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f5f7fb",
  },
  corpoLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
  }
});
