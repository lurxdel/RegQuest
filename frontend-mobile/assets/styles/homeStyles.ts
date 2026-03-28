import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  /* homepage-container */
  container: {
    minHeight: "100%",
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#F8F8FF",
    fontFamily: "System",
  },

  /* hero-section */
  hero: {
    position: "relative",
    height: 270,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },

  heroBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  heroContent: {
    position: "relative",
    zIndex: 10,
    paddingHorizontal: 24,
    maxWidth: 600,
  },

  navbar: {
    backgroundColor: "#ffffff",  
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginBottom: -19,
    marginTop: 5,
    borderBottomColor: "#f0f0f0",
  },

  navLogo: {
    width: 100,
    height: 55,
  },

  heroTitle: {
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 34,
    marginBottom: 12,
    color: "#ffffff",
  },

  heroHighlight: {
    color: "#FEC956",
  },

  heroSubtitle: {
    fontSize: 10,
    marginBottom: 24,
    lineHeight: 20,
    opacity: 0.9,
    color: "#ffffff",
  },

  heroButtons: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },

  heroBtnPrimary: {
    backgroundColor: "#FEC956",
    paddingVertical: 13,
    paddingHorizontal: 22,
    borderRadius: 20,
  },

  heroBtnOutline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FEC956",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 20,
  },

  /* credentials-section */
  credentialsSection: {
    paddingHorizontal: 16,
    paddingTop: 28,
    paddingBottom: 24,
    backgroundColor: "#F8F8FF",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#0B0B36",
    marginBottom: 20,
  },

  credentialsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 14,
  },

  credentialCard: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    overflow: "hidden",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  cardHeaderBg: {
    height: 90,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  /* manually assign colors in component using index */
  headerColor1: { backgroundColor: "#BFDBFE" },
  headerColor2: { backgroundColor: "#FED7AA" },
  headerColor3: { backgroundColor: "#9CA3AF" },
  headerColor4: { backgroundColor: "#FBBF24" },
  headerColor5: { backgroundColor: "#FCA5A5" },
  headerColor6: { backgroundColor: "#C4B5FD" },

  cardIconWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    width: 64,
    height: 64,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  cardIcon: {
    color: "#374151",
    opacity: 0.6,
  },

  cardContent: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
  },

  cardTitle: {
    fontSize: 12,
    fontWeight: "900",
    color: "#374151",
    marginBottom: 4,
  },

  cardDesc: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 10,
    lineHeight: 16,
    flex: 1,
  },

  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },

  priceTag: {
    fontWeight: "800",
    color: "#00007F",
    fontSize: 14,
  },

  requestBtnSmall: {
    backgroundColor: "#FEC956",
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },

  /* See More Button */
  seeMoreBtn: {
    alignSelf: "center",
    marginTop: 50,
    borderWidth: 1.5,
    borderColor: "#00007F",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 28,
    backgroundColor: "#fff",

  },

  seeMoreBtnText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#00007F",
  },

  /* status-section */
    statusSection: {
    paddingVertical: 30,
    marginTop: -20,
  },
    statusCard: {
    marginHorizontal: 16, 
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  statusTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 8,
    color: "#000000",
  },

  statusSubtitle:{
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 8,
    color: "#000000",
  },

  statusCheckContainer: {
    width: "100%",
    maxWidth: 600,
    marginTop: 8,
    backgroundColor: "#ffffff",
    padding: 6,
    borderRadius: 10,
    flexDirection: "row",
    gap: 8,
  },

  statusInput: {
    flex: 1,
    padding: 12,
    fontSize: 13,
    color: "#374151",
    borderWidth: 1,          
    borderColor: "#999999",  
    borderRadius: 8,
  },

  statusBtn: {
    backgroundColor: "#00007F",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 7,
  },

});