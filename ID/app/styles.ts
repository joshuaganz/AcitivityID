import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: -550,
    marginLeft: 10,
  },
  logoContainer: {
    alignItems: "center",
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
    marginLeft: 10,
  },
  rop: {
    fontSize: 12,
    textAlign: "left",
  },
  uniName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "TimesNewRoman",
  },
  campus: {
    fontSize: 12,
    textAlign: "left",
  },
  boldText: {
    fontWeight: "bold",
  },
  idFace: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "black",
  },
  idFaceCon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  courseContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  courseCode: {
    fontSize: 24,
    fontWeight: "semibold",
    color: "#000",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  line: {
    width: "60%",
    height: 2,
    backgroundColor: "#000",
    marginVertical: 5,
  },
  courseLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  idLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
  idNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  tuvContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    alignItems: "center",
  },
  tuvImage: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },
  tuvText: {
    fontSize: 10,
    textAlign: "center",
    color: "white",
    marginTop: 2,
  },
  centerCon:{
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    height: "100%", // Full height relative to parent

  },
});

export default styles;
