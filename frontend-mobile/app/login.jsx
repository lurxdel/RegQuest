import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../assets/styles/loginStyles";
import { useRouter } from "expo-router";


export default function Login() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../assets/images/USTP-CDO.jpg")}
      style={styles.background}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}  
    >
      <LinearGradient
        colors={["rgba(255,255,255,0.75)", "rgba(0,0,127,0.75)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.overlay}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          extraScrollHeight={40}       
          enableAutomaticScroll={true}
          resetScrollToCoords={{ x: 0, y: 0 }}
        >
          {/* Logo */}
          <Image
            source={require("../assets/images/RegQuestLogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Card */}
          <View style={styles.card}>
            <Text style={styles.title}>Sign in to your{"\n"}Account</Text>

            <View style={styles.signupRow}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/Register")}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Student ID / Email Address</Text>
            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons
                name="email-outline"
                size={20}
                color="#888"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your student ID or email address..."
                placeholderTextColor="#aaa"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={20}
                color="#888"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your password..."
                placeholderTextColor="#aaa"
                secureTextEntry
              />
            </View>

            <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.replace("/(tabs)/home")}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </ImageBackground>
  );
}