import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  background: {
    flex: 1,
  },

 backgroundImage: {
    width: width * 1.2,
    left: -width * 0.10,      
  },

  overlay: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
    minHeight: height,
  },

  logo: {
  width: "80%",
  height: 200,
  alignSelf: "center",
  marginBottom: -20,
},

  card: {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.75)",
  borderTopLeftRadius: 55,
  borderTopRightRadius: 55,
  overflow: "hidden",
  padding: 28,
  paddingTop: 100,
  paddingBottom: 48,
},

  title: {
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    color: "#00007f",
    marginBottom: 6,
    lineHeight: 34,
    top: -65,
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    top: -50,
  },

  signupText: {
    fontSize: 13,
    color: "#555",
  },

  signupLink: {
    fontSize: 13,
    color: "#3355CC",
    fontWeight: "600",
  },

  inputLabel: {
    fontSize: 13,
    color: "#4B4A4A",
    marginBottom: 6,
    marginTop: 14,
    fontWeight: "700",
    top: -50,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dde1f0",
    paddingHorizontal: 12,
    top: -50,
  },

  inputIcon: {
    marginRight: 8,
    color: "#888",
  },

  input: {
    flex: 1,
    paddingVertical: 13,
    fontSize: 14,
    color: "#222",
  },

  button: {
    backgroundColor: "#FEC956",
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 28,
    alignItems: "center",
    shadowColor: "#f4b844",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
    top: -30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});