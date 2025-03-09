import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  CTULogo: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  aseanLogo: {
    width: 50,
    height: 50,
  },
  headerTextContainer: {
    flex: 1,
  },
  rop: {
    fontSize: 14,
    color: "#333",
  },
  uniName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 24,
  },
  campus: {
    fontSize: 12,
    color: "#333",
    marginTop: 2,
  },
  centerCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  idFaceCon: {
    marginBottom: 10,
  },
  idFace: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "#000",
  },
  signatureContainer: {
    alignItems: "center",
    marginVertical: 8,
  },
  signature: {
    fontSize: 14,
    color: "#333",
  },
  courseContainer: {
    alignItems: "center",
    marginTop: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  courseCode: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  line: {
    width: 200,
    height: 2,
    backgroundColor: "#000",
    marginVertical: 5,
  },
  courseLabel: {
    fontSize: 14,
    color: "#000",
  },
  idLabel: {
    fontSize: 16,
    color: "#000",
    marginTop: 10,
  },
  idNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footerContainer: {
    alignItems: "flex-end",
    width:"100%",
  
  },
  
  tuvImage: {
    marginRight: -40,
    width: 200,
    height: 70,
    resizeMode: "contain",
  },
  tuvText: {
    fontSize: 8,
    color: "white",
    alignItems: "flex-end",

    textAlign: "justify",

  },
});
export default styles;

