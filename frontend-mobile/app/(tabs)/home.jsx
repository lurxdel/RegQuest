import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import styles from "../../assets/styles/homeStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Home = ({ currentUser }) => {
  const router = useRouter();
  const credentials = [
    { id: 1, title: "Transcript of Records", description: "Complete academic record of all courses taken and grades earned.", price: 150, icon: "file-text" },
    { id: 2, title: "Honorable Dismissal", description: "Transfer clearance document for moving to another institution.", price: 100, icon: "shield" },
    { id: 3, title: "Authentication", description: "Official verification and authentication of academic documents.", price: 75, icon: "check-square" },
    { id: 4, title: "Evaluation", description: "Detailed academic assessment and progress evaluation report.", price: 75, icon: "file-text" },
    { id: 5, title: "Certification", description: "Official certificates for various academic achievements.", price: 150, icon: "award" },
    { id: 6, title: "CAR", description: "Cumulative Academic Record summarizing your entire academic history.", price: 80, icon: "file-text" }
  ];

  const visibleCredentials = credentials;

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      extraScrollHeight={80} // ✅ prevents keyboard overlap
    >

      {/* NAVBAR */}
      <View style={styles.navbar}>
        <Image
          source={require("../../assets/images/RegQuestLogo.png")}
          style={styles.navLogo}
        />
      </View>

      {/* HERO */}
      <View style={styles.hero}>
        <ImageBackground
          source={require("../../assets/images/USTP-CDO.jpg")}
          style={styles.heroBg}
        />

        <LinearGradient
          colors={["#0B0B36", "#0B0B36", "rgba(31, 31, 156, 0.5)"]}
          locations={[0, 0.50, 1]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.heroOverlay}
        />

        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>
            Your Credentials{"\n"}
            <Text style={styles.heroHighlight}>Fast & Secure</Text>
          </Text>

          <Text style={styles.heroSubtitle}>
            Request your Transcript of Records, Diploma, and other documents online.
            Skip the lines and track your request in real-time.
          </Text>

          <View style={styles.heroButtons}>
            <TouchableOpacity
              style={styles.heroBtnPrimary}
              onPress={() => router.push("/(tabs)/request")}
            >
              <Text style={{ fontWeight: "900", color: "#1F1F9C", fontSize: 10 }}>Start Request</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.heroBtnOutline}
              onPress={() => router.push("/(tabs)/track")}
            >
              <Text style={{ color: "#FEC956", fontWeight: "700", fontSize: 10 }}>Track Status</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* CREDENTIALS */}
      <View style={styles.credentialsSection}>
        <Text style={styles.sectionTitle}>Available Credentials</Text>

        <View style={styles.credentialsGrid}>
          {visibleCredentials.map((cred, index) => (
            <View key={cred.id} style={styles.credentialCard}>

              {/* HEADER BG */}
              <View style={[
                styles.cardHeaderBg,
                styles[`headerColor${index + 1}`]
              ]}>
                <View style={styles.cardIconWrapper}>
                  <Icon name={cred.icon} size={32} style={styles.cardIcon} />
                </View>
              </View>

              {/* CONTENT */}
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{cred.title}</Text>
                <Text style={styles.cardDesc}>{cred.description}</Text>

                <View style={styles.cardFooter}>
                  <Text style={styles.priceTag}>₱ {cred.price}</Text>

                  <TouchableOpacity
                    style={styles.requestBtnSmall}
                    onPress={() => router.push("/(tabs)/request")}
                  >
                    <Text style={{ color: "#fff", fontSize: 11, fontWeight: "600" }}>Request →</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* SEE MORE BUTTON */}
        <TouchableOpacity
          style={styles.seeMoreBtn}
          onPress={() => router.push("/(tabs)/request")}
        >
          <Text style={styles.seeMoreBtnText}>See More Credentials →</Text>
        </TouchableOpacity>
      </View>

      {/* STATUS */}
      
      <View style={styles.statusSection}>
        <View style={styles.statusCard}>

          <Text style={styles.statusTitle}>
            Check Your Request Status
          </Text>

          <Text style={styles.statusSubtitle}>
            Enter your reference number to see the current stage of your request.
          </Text>

          <View style={styles.statusCheckContainer}>
            <TextInput
              style={styles.statusInput}
              placeholder="Enter Reference ID (e.g., RQ-000123)"
              placeholderTextColor="#9ca3af"
            />

            <TouchableOpacity
              style={styles.statusBtn}
              onPress={() => router.push("/(tabs)/track")}
            >
              <Text style={{ color: "#fff", fontWeight: "700", fontSize: 13 }}>
                Track Now
              </Text>
            </TouchableOpacity>
          </View>

    </View>
  </View>

    </KeyboardAwareScrollView>
  );
};

export default Home;