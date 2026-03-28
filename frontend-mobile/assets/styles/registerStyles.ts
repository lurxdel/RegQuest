import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  background: {
    flex: 1,
  },

  backgroundImage: {
    width: width * 1.2,
    left: -width * 0.28,
  },

  overlay: {
    flex: 1,
  },

  successOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
    minHeight: height,
  },

  logo: {
    width:"80%",
    height: 200,
    alignSelf: "center",
    marginBottom: -30,
  },

  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.75)",
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    padding: 28,
    paddingTop: 60,
    paddingBottom: 48,
  },

  title: {
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    color: "#00007f",
    marginBottom: 6,
    top: -30,
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    top: -20,
  },

  loginText: {
    fontSize: 13,
    color: "#555",
  },

  loginLink: {
    fontSize: 13,
    color: "#3355CC",
    fontWeight: "600",
  },

  stepLabel: {
    fontSize: 12,
    color: "#555",
    marginBottom: 16,
  },

  stepSub: {
    color: "#888",
  },

  inputLabel: {
    fontSize: 13,
    color: "#4B4A4A",
    marginBottom: 6,
    marginTop: 14,
    fontWeight: "700",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dde1f0",
    paddingHorizontal: 12,
  },

  uploadWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dde1f0",
    paddingHorizontal: 12,
    paddingVertical: 13,
  },

  uploadText: {
    color: "#aaa",
    fontSize: 14,
  },

  inputIcon: {
    marginRight: 8,
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
  },

  registerButton: {
    backgroundColor: "#FEC956",
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#f4b844",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.5,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 28,
  },

  backText: {
    fontSize: 15,
    color: "#3355CC",
    fontWeight: "600",
  },

  // Success screen
  successCard: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 25,
    padding: 28,
    alignItems: "center",
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(244,184,68,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  successTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0B0B36",
    marginBottom: 10,
    textAlign: "center",
  },

  successSubText: {
    fontSize: 13,
    color: "#444",
    textAlign: "left",
    width: "100%",
    marginBottom: 4,
  },

  successName: {
    fontWeight: "600",
    color: "#0B0B36",
  },

  pendingText: {
    color: "#f4b844",
    fontWeight: "600",
  },

  successInfo: {
    fontSize: 12,
    color: "#555",
    marginTop: 8,
    marginBottom: 16,
    lineHeight: 18,
  },

  expectBox: {
    width: "100%",
    backgroundColor: "rgba(240,242,255,0.9)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },

  expectTitle: {
    fontWeight: "700",
    color: "#0B0B36",
    marginBottom: 10,
    fontSize: 14,
  },

  expectItem: {
    fontSize: 12,
    color: "#444",
    marginBottom: 8,
    lineHeight: 18,
  },

  expectBold: {
    fontWeight: "700",
    color: "#0B0B36",
  },

  returnButton: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dde1f0",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  returnButtonText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
});